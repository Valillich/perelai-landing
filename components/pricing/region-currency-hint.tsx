"use client"

import { useTranslations } from "next-intl"
import { useMarket } from "@/lib/region"

/**
 * Shows "Shown in USD. Your market: PL (PLN)." when the detected market
 * uses a currency other than USD. Never invents a local price.
 */
export function RegionCurrencyHint({ locale }: { locale?: string }) {
  const t = useTranslations("pricing")
  const { info, isHydrated } = useMarket(locale)

  // USD is the only published price currency. Show a hint only
  // when the user's detected market uses something else.
  if (!isHydrated || info.currency === "USD") return null

  return (
    <p className="text-[13px] text-subtle-text">
      {t("regionHint", { country: info.code, currency: info.currency })}
    </p>
  )
}
