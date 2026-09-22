import { env } from "@/lib/env"
import { buildAppLoginUrl, buildAppSignupUrl } from "@/lib/urls"
import type { PublishedLocale } from "@/i18n/locales"
import type { LegalDocumentSlug } from "./types"

export type LegalReturnFrom =
  | "login"
  | "register"
  | "forgot"
  | "onboarding"
  | "settings"
  | "billing"
  | "data-transfer"

export interface LegalReturnInput {
  page: LegalDocumentSlug
  version?: string
  locale: PublishedLocale
  from?: string | null
  niche?: string | null
  offer?: string | null
  source?: string | null
  campaign?: string | null
  landingPath?: string | null
  /**
   * Code-owned BILL7 release output. This must never be filled from a URL,
   * browser storage, provider response, or other visitor-controlled value.
   * Without a supplied release output, all offer intent fails closed.
   */
  offerRelease?: LegalOfferRelease
}

export interface LegalOfferRelease {
  /** Generated standard OfferCodes that may be used as public intent. */
  codes: readonly string[]
  /** TEAM-RELEASE evidence for exposing STUDIO public intent. */
  studioReleased: boolean
}

export type LegalReturnLabels = Record<LegalReturnFrom, string>

export interface LegalReturnDestination {
  from: LegalReturnFrom
  destination: LegalReturnFrom
  href: string
  showCloseInstruction?: boolean
}

export function validReturnFrom(value: unknown): LegalReturnFrom | undefined {
  if (
    value === "login" ||
    value === "register" ||
    value === "forgot" ||
    value === "onboarding" ||
    value === "settings" ||
    value === "billing" ||
    value === "data-transfer"
  ) {
    return value
  }
  return undefined
}

const STANDARD_OFFER_CODES = new Set(["SOLO_MONTHLY", "STUDIO_MONTHLY"])

/**
 * Narrows an untrusted query value against the generated public release
 * output. The standard-code check prevents a release artifact from becoming
 * an accidental compatibility channel for retired or provider identifiers.
 */
export function validReleasedOfferCode(
  value: unknown,
  release: LegalOfferRelease | undefined,
): "SOLO_MONTHLY" | "STUDIO_MONTHLY" | undefined {
  if (typeof value !== "string" || !release || !STANDARD_OFFER_CODES.has(value)) {
    return undefined
  }

  if (!release.codes.includes(value)) return undefined
  if (value === "STUDIO_MONTHLY" && !release.studioReleased) return undefined

  return value as "SOLO_MONTHLY" | "STUDIO_MONTHLY"
}

/**
 * Reconstructs the app destination from the allowlisted from parameter per
 * 00_README_execution_plan.md §6.1.
 * Query input can only supply narrow acquisition fields to register; it can never supply an arbitrary href.
 */
export function buildLegalReturnDestination(
  input: LegalReturnInput
): LegalReturnDestination | undefined {
  const from = validReturnFrom(input.from)
  if (!from) return undefined

  let href: string
  let showCloseInstruction = false

  switch (from) {
    case "register": {
      const signupUrl = buildAppSignupUrl({
        niche: input.niche ?? undefined,
        source: input.source ?? undefined,
        campaign: input.campaign ?? undefined,
        landingPath: input.landingPath ?? undefined,
      })
      const offer = validReleasedOfferCode(input.offer, input.offerRelease)
      if (offer) {
        const u = new URL(signupUrl)
        u.searchParams.set("offer", offer)
        href = u.toString()
      } else {
        href = signupUrl
      }
      break
    }
    case "login":
      href = buildAppLoginUrl()
      break
    case "forgot":
      href = new URL("/forgot-password", env.NEXT_PUBLIC_APP_URL).toString()
      break
    case "onboarding":
      href = new URL("/onboarding", env.NEXT_PUBLIC_APP_URL).toString()
      showCloseInstruction = true
      break
    case "settings":
      href = new URL("/settings", env.NEXT_PUBLIC_APP_URL).toString()
      showCloseInstruction = true
      break
    case "billing":
      href = new URL("/settings/billing", env.NEXT_PUBLIC_APP_URL).toString()
      showCloseInstruction = true
      break
    case "data-transfer":
      href = new URL("/settings/data-transfer", env.NEXT_PUBLIC_APP_URL).toString()
      showCloseInstruction = true
      break
  }

  return { from, destination: from, href, showCloseInstruction }
}
