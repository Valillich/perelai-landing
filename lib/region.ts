"use client"

import { useEffect, useState } from "react"
import {
  formatCurrency,
  localePrimaryMarket,
  SUPPORTED_MARKETS,
  type MarketInfo,
  type SupportedMarket,
} from "@/lib/market"

export { formatCurrency, localePrimaryMarket, SUPPORTED_MARKETS }
export type { MarketInfo, SupportedMarket }

const TIMEZONE_MARKET_MAP: Record<string, SupportedMarket> = {
  // US & Possessions
  "America/New_York": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Los_Angeles": "US",
  "America/Phoenix": "US",
  "America/Anchorage": "US",
  "Pacific/Honolulu": "US",
  "America/Detroit": "US",
  "America/Indiana/Indianapolis": "US",

  // Ukraine
  "Europe/Kyiv": "UA",
  "Europe/Kiev": "UA",
  "Europe/Uzhgorod": "UA",
  "Europe/Zaporozhye": "UA",

  // Poland
  "Europe/Warsaw": "PL",

  // United Kingdom
  "Europe/London": "GB",
  "Europe/Belfast": "GB",

  // Canada
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "America/Edmonton": "CA",
  "America/Winnipeg": "CA",
  "America/Halifax": "CA",
  "America/St_Johns": "CA",

  // Australia
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Australia/Brisbane": "AU",
  "Australia/Perth": "AU",
  "Australia/Adelaide": "AU",
  "Australia/Hobart": "AU",

  // Germany
  "Europe/Berlin": "DE",
  "Europe/Busingen": "DE",

  // France
  "Europe/Paris": "FR",

  // Spain
  "Europe/Madrid": "ES",
  "Atlantic/Canary": "ES",
  "Africa/Ceuta": "ES",

  // Other European Union / Eurozone
  "Europe/Dublin": "EU",
  "Europe/Rome": "EU",
  "Europe/Amsterdam": "EU",
  "Europe/Brussels": "EU",
  "Europe/Vienna": "EU",
  "Europe/Helsinki": "EU",
  "Europe/Lisbon": "EU",
  "Europe/Athens": "EU",
  "Europe/Tallinn": "EU",
  "Europe/Riga": "EU",
  "Europe/Vilnius": "EU",
  "Europe/Bratislava": "EU",
  "Europe/Ljubljana": "EU",
  "Europe/Zagreb": "EU",
  "Europe/Nicosia": "EU",
  "Europe/Malta": "EU",
  "Europe/Luxembourg": "EU",
}

export interface DetectionOptions {
  timezone?: string
  language?: string
}

function isValidMarket(code: unknown): code is SupportedMarket {
  return typeof code === "string" && code in SUPPORTED_MARKETS
}

/**
 * Client-side market detection following the precedence rules:
 * 1. Timezone -> Country mapping
 * 2. navigator.language region subtag (e.g. 'en-GB' -> 'GB')
 * 3. Locale primary market (uk->UA, pl->PL, de->DE, fr->FR, es->ES, ru->US, en->US)
 * 4. Default fallback 'US'
 *
 * Unused localStorage['perelai-market'] override removed until explicit selector exists.
 */
export function detectMarket(locale?: string, options: DetectionOptions = {}): SupportedMarket {
  // 1. Timezone -> Country
  const tz =
    options.timezone ??
    (typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : undefined)
  if (tz && tz in TIMEZONE_MARKET_MAP) {
    return TIMEZONE_MARKET_MAP[tz]
  }

  // 2. navigator.language region subtag ('en-GB' -> 'GB')
  const lang =
    options.language ??
    (typeof navigator !== "undefined" ? navigator.language : undefined)
  if (lang) {
    const parts = lang.split(/[-_]/)
    if (parts.length > 1) {
      const regionSubtag = parts[parts.length - 1].toUpperCase()
      if (isValidMarket(regionSubtag)) {
        return regionSubtag
      }
    }
  }

  // 3. Locale primary market fallback
  // 4. Default 'US'
  return localePrimaryMarket(locale)
}

export interface UseMarketResult {
  market: SupportedMarket
  info: MarketInfo
  isHydrated: boolean
  formatAmount: (amount: number) => string
}

/**
 * Hydration-safe React hook.
 * Server renders the locale's primary market to guarantee byte-identical SSG output.
 * Client updates to the detected market in useEffect after mount.
 */
export function useMarket(locale?: string): UseMarketResult {
  const primary = localePrimaryMarket(locale)
  const [market, setMarket] = useState<SupportedMarket>(primary)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
    const detected = detectMarket(locale)
    setMarket(detected)
  }, [locale])

  const info = SUPPORTED_MARKETS[market]

  return {
    market,
    info,
    isHydrated,
    formatAmount: (amount: number) => formatCurrency(amount, market),
  }
}
