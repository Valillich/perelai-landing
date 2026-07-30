"use client"

import { useTranslations } from "next-intl"
import { useMarket } from "@/lib/region"

/**
 * Names the detected market and its currency. No price is published on this
 * page, so the hint must not imply one exists in any currency.
 */
export function RegionCurrencyHint({ locale }: { locale?: string }) {
  const t = useTranslations("pricing")
  const { info, isHydrated } = useMarket(locale)

  // USD is the reference currency the example figures fall back to, so the
  // hint only adds information for a visitor outside that market.
  if (!isHydrated || info.currency === "USD") return null

  return (
    <p className="text-[13px] text-subtle-text">
      {t("regionHint", { country: info.code, currency: info.currency })}
    </p>
  )
}
