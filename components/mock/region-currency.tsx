"use client"

import { useEffect, useState } from "react"
import {
  detectBrowserMarket,
  formatCurrency,
  localePrimaryMarket,
  type SupportedMarket,
} from "@/lib/region"

interface RegionCurrencyProps {
  amount: number
  locale: string
  className?: string
  /** Optional transform after currency formatting (e.g. prefix `~`). */
  format?: (formatted: string, market: SupportedMarket) => string
}

/**
 * Server-safe initial paint uses the locale primary market; client updates
 * after mount so SSG HTML stays region-identical (LP5 / LP5b).
 */
export function RegionCurrency({ amount, locale, className, format }: RegionCurrencyProps) {
  const [market, setMarket] = useState<SupportedMarket>(() => localePrimaryMarket(locale))

  useEffect(() => {
    setMarket(detectBrowserMarket(locale))
  }, [locale])

  const formatted = formatCurrency(amount, market)

  return <span className={className}>{format ? format(formatted, market) : formatted}</span>
}
