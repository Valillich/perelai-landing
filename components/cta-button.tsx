"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { useTranslations } from "next-intl"
import { analytics } from "@/lib/analytics"
import { useAttribution } from "@/lib/attribution"
import { buildAppLoginUrl, buildAppSignupUrl } from "@/lib/urls"

type CtaDestination = "signup" | "login"

export interface CtaButtonProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  variant?: "primary" | "secondary"
  destination?: CtaDestination
  niche?: string
  landingPath?: string
  locale?: string
  location: string
  children?: ReactNode
}

/** The one UI module permitted to navigate from the landing to the app. */
export function CtaButton({
  variant: _variant,
  destination = "signup",
  niche,
  landingPath,
  locale,
  location,
  children,
  onClick,
  ...anchorProps
}: CtaButtonProps) {
  const t = useTranslations("common")
  const attribution = useAttribution(niche)
  const href =
    destination === "signup"
      ? buildAppSignupUrl({
          ...attribution,
          landingPath,
          locale,
        })
      : buildAppLoginUrl()

  return (
    <a
      {...anchorProps}
      href={href}
      onClick={(event) => {
        analytics.track({
          name: "landing_cta_clicked",
          properties: {
            location,
            destination,
            campaign: attribution.campaign,
            ...(niche ? { niche } : {}),
            ...(landingPath ? { landingPath } : {}),
          },
        })
        onClick?.(event)
      }}
    >
      {children ?? t(`cta.${destination}`)}
    </a>
  )
}
