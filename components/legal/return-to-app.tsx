"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { analytics, trackAnalyticsEventOnce } from "@/lib/analytics"
import {
  buildLegalReturnDestination,
  validReturnFrom,
  type LegalReturnDestination,
  type LegalReturnFrom,
  type LegalReturnInput,
  type LegalReturnLabels,
} from "@/lib/legal/return"

export {
  buildLegalReturnDestination,
  type LegalReturnDestination,
  type LegalReturnFrom,
  type LegalReturnInput,
  type LegalReturnLabels,
}

const DEFAULT_LABELS: LegalReturnLabels = {
  login: "← Back to log in",
  register: "← Back to sign up",
  forgot: "← Back to password recovery",
  onboarding: "Return to onboarding →",
  settings: "Return to settings →",
  billing: "Return to billing →",
  "data-transfer": "Return to data transfer →",
}

/** Renders a safe return link from already-parsed legal query fields. */
export function ReturnToApp({
  labels = DEFAULT_LABELS,
  ...input
}: LegalReturnInput & { labels?: Partial<LegalReturnLabels> }) {
  const destination = buildLegalReturnDestination(input)
  const resolvedLabels = { ...DEFAULT_LABELS, ...labels }
  const fallbackHref = input.locale === "en" ? "/" : `/${input.locale}`

  useEffect(() => {
    trackAnalyticsEventOnce(`legal_viewed:${input.page}:${input.version ?? "unknown"}:${input.locale}:${destination?.from ?? ""}`, {
      name: "legal_viewed",
      properties: {
        document: input.page,
        version: input.version ?? "unknown",
        locale: input.locale,
        from: destination?.from ?? null,
      },
    })
  }, [destination?.from, input.locale, input.page, input.version])

  if (!destination) {
    return (
      <div className="flex flex-wrap items-center gap-3 print:hidden">
        <a
          href={fallbackHref}
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          Back to Perelai →
        </a>
        <span className="text-[13px] text-muted-foreground">Close this tab to return to Perelai.</span>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-3 print:hidden">
      <a
        href={destination.href}
        onClick={() => {
          analytics.track({
            name: "legal_return_clicked",
            properties: {
              document: input.page,
              from: destination.from,
              destination: destination.destination,
            },
          })
        }}
        className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-600 transition-colors hover:text-brand-700"
      >
        {resolvedLabels[destination.from]}
      </a>
      {destination.showCloseInstruction && (
        <span className="text-[13px] text-muted-foreground">
          (or close this tab to return to Perelai)
        </span>
      )}
    </div>
  )
}

/** Reads only the documented legal query allowlist before delegating to ReturnToApp. */
export function LegalReturnToApp({
  page,
  locale,
  version,
}: Pick<LegalReturnInput, "page" | "locale" | "version">) {
  const searchParams = useSearchParams()
  const from = validReturnFrom(searchParams.get("from"))

  if (!from) {
    return null
  }

  return (
    <ReturnToApp
      page={page}
      locale={locale}
      version={version}
      from={from}
      niche={searchParams.get("niche")}
      offer={searchParams.get("offer")}
      source={searchParams.get("utm_source")}
      campaign={searchParams.get("utm_campaign")}
      landingPath={searchParams.get("landing_path")}
    />
  )
}
