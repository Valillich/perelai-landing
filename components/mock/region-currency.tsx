"use client"

import { useEffect, useState } from "react"
import {
  detectMarket,
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
  const primary = localePrimaryMarket(locale)
  const render = (market: SupportedMarket) => {
    const formatted = formatCurrency(amount, market)
    return format ? format(formatted, market) : formatted
  }

  const [text, setText] = useState(() => render(primary))

  useEffect(() => {
    const detected = detectMarket(locale)
    setText(render(detected))
  }, [amount, locale])

  return <span className={className}>{text}</span>
}
