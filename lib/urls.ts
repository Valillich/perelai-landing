import catalog from "@/data/niche-catalog.generated.json"
import { env } from "@/lib/env"

export interface SignupUrlParams {
  niche?: string
  source?: string
  campaign?: string
  landingPath?: string
  /** A validated app locale, forwarded only as the app's language UX hint. */
  locale?: string
}

interface NicheCatalog {
  supportedLocales?: string[]
  templates?: Array<{ nicheSlugs?: string[] }>
}

const signupUrl = new URL("/register", env.NEXT_PUBLIC_APP_URL).toString()
const loginUrl = new URL("/login", env.NEXT_PUBLIC_APP_URL).toString()

const catalogData = catalog as NicheCatalog
const validNicheSlugs = new Set(
  (catalogData.templates ?? []).flatMap((template) => template.nicheSlugs ?? []),
)
const supportedLocales = new Set(catalogData.supportedLocales ?? [])
const localePrefix = new RegExp(
  `^/(${[...supportedLocales].map((locale) => locale.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")).join("|")})(?=/|$)`,
  "i",
)

function normalizedString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined

  const trimmed = value.trim()
  return trimmed || undefined
}

function clampedString(value: unknown, maximumLength: number): string | undefined {
  return normalizedString(value)?.slice(0, maximumLength)
}

function validNiche(value: unknown): string | undefined {
  const normalized = normalizedString(value)?.toLowerCase()

  if (!normalized || normalized.length > 80 || !validNicheSlugs.has(normalized)) {
    return undefined
  }

  return normalized
}

function canonicalLandingPath(value: unknown): string | undefined {
  const clamped = clampedString(value, 240)
  if (!clamped || !clamped.startsWith("/")) return undefined

  const pathname = clamped.split(/[?#]/, 1)[0]
  const withoutLocale = pathname.replace(localePrefix, "")

  return withoutLocale || "/"
}

function validLocale(value: unknown): string | undefined {
  const locale = normalizedString(value)?.toLowerCase()
  return locale && supportedLocales.has(locale) ? locale : undefined
}

/**
 * Builds the narrow cross-origin handoff used by app registration. Runtime
 * input is deliberately fail-open: a malformed value yields generic signup.
 */
export function buildAppSignupUrl(params: SignupUrlParams): string {
  try {
    const url = new URL(signupUrl)
    const niche = validNiche(params?.niche)
    const source = clampedString(params?.source, 80)
    const campaign = clampedString(params?.campaign, 120)
    const landingPath = canonicalLandingPath(params?.landingPath)
    const locale = validLocale(params?.locale)

    if (niche) url.searchParams.set("niche", niche)
    if (source) url.searchParams.set("utm_source", source)
    if (campaign) url.searchParams.set("utm_campaign", campaign)
    if (landingPath) url.searchParams.set("landing_path", landingPath)
    if (locale) url.searchParams.set("lng", locale)

    return url.toString()
  } catch {
    return signupUrl
  }
}

export function buildAppLoginUrl(): string {
  return loginUrl
}
