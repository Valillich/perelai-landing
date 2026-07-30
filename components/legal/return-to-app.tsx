"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { analytics } from "@/lib/analytics"
import type { LegalPageName } from "@/content/legal"
import { env } from "@/lib/env"
import type { PublishedLocale } from "@/i18n/locales"
import { buildAppLoginUrl, buildAppSignupUrl } from "@/lib/urls"

export type LegalReturnFrom = "login" | "register" | "forgot"

export interface LegalReturnInput {
  page: LegalPageName
  locale: PublishedLocale
  from?: string | null
  niche?: string | null
  source?: string | null
  campaign?: string | null
  landingPath?: string | null
}

interface LegalReturnDestination {
  from: LegalReturnFrom
  destination: LegalReturnFrom
  href: string
  label: string
}

const RETURN_LABELS: Record<LegalReturnFrom, string> = {
  login: "Back to log in",
  register: "Back to sign up",
  forgot: "Back to password reset",
}

function validFrom(value: unknown): LegalReturnFrom | undefined {
  return value === "login" || value === "register" || value === "forgot" ? value : undefined
}

/**
 * Reconstructs the app destination from a fixed enum. Query input can only
 * supply narrow acquisition fields to register; it can never supply an href.
 */
export function buildLegalReturnDestination(
  input: LegalReturnInput,
): LegalReturnDestination | undefined {
  const from = validFrom(input.from)
  if (!from) return undefined

  const href =
    from === "register"
      ? buildAppSignupUrl({
          niche: input.niche ?? undefined,
          source: input.source ?? undefined,
          campaign: input.campaign ?? undefined,
          landingPath: input.landingPath ?? undefined,
        })
      : from === "login"
        ? buildAppLoginUrl()
        : new URL("/forgot-password", env.NEXT_PUBLIC_APP_URL).toString()

  return { from, destination: from, href, label: RETURN_LABELS[from] }
}

/** Renders a safe return link from already-parsed legal query fields. */
export function ReturnToApp(input: LegalReturnInput) {
  const destination = buildLegalReturnDestination(input)

  useEffect(() => {
    analytics.track({
      name: "legal_viewed",
      properties: {
        page: input.page,
        locale: input.locale,
        ...(destination ? { from: destination.from } : {}),
      },
    })
  }, [destination?.from, input.locale, input.page])

  if (!destination) return null

  return (
    <a
      href={destination.href}
      onClick={() => {
        analytics.track({
          name: "legal_return_clicked",
          properties: { from: destination.from, destination: destination.destination },
        })
      }}
      className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-600 transition-colors hover:text-brand-700"
    >
      <span aria-hidden="true">←</span>
      {destination.label}
    </a>
  )
}

/** Reads only the documented legal query allowlist before delegating to ReturnToApp. */
export function LegalReturnToApp({
  page,
  locale,
}: Pick<LegalReturnInput, "page" | "locale">) {
  const searchParams = useSearchParams()

  return (
    <ReturnToApp
      page={page}
      locale={locale}
      from={searchParams.get("from")}
      niche={searchParams.get("niche")}
      source={searchParams.get("utm_source")}
      campaign={searchParams.get("utm_campaign")}
      landingPath={searchParams.get("landing_path")}
    />
  )
}
