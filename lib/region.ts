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

/** Written only by an explicit override; never by automatic detection. */
export const MARKET_STORAGE_KEY = "perelai-market"
export const MARKET_QUERY_PARAM = "market"

const MARKET_RESET_VALUES = new Set(["auto", "reset", "clear", ""])

export interface MarketStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

export interface DetectionOptions {
  timezone?: string
  language?: string
  /** An explicit market choice, which outranks every detection signal. */
  override?: string | null
}

function isValidMarket(code: unknown): code is SupportedMarket {
  return typeof code === "string" && code in SUPPORTED_MARKETS
}

function normalizedMarket(value: unknown): SupportedMarket | undefined {
  if (typeof value !== "string") return undefined

  const candidate = value.trim().toUpperCase()
  return isValidMarket(candidate) ? candidate : undefined
}

/**
 * Resolves the explicit market override, applying `?market=` first so a
 * tester can pin a market that IP geolocation could never change: detection
 * reads the browser's timezone and language, not the visitor's exit node.
 *
 * `?market=auto` clears the pin and returns to automatic detection.
 */
export function resolveMarketOverride({
  search,
  storage,
}: {
  search?: string | null
  storage?: MarketStorage
} = {}): SupportedMarket | undefined {
  const requested = search ? new URLSearchParams(search).get(MARKET_QUERY_PARAM) : null

  if (requested !== null) {
    if (MARKET_RESET_VALUES.has(requested.trim().toLowerCase())) {
      try {
        storage?.removeItem(MARKET_STORAGE_KEY)
      } catch {
        // Storage can be unavailable; the visitor simply keeps automatic detection.
      }
      return undefined
    }

    const market = normalizedMarket(requested)
    if (market) {
      try {
        storage?.setItem(MARKET_STORAGE_KEY, market)
      } catch {
        // A non-persisted override still applies to this render.
      }
      return market
    }
  }

  try {
    return normalizedMarket(storage?.getItem(MARKET_STORAGE_KEY))
  } catch {
    return undefined
  }
}

/**
 * Client-side market detection following the precedence rules:
 * 1. Explicit `perelai-market` override (query parameter or stored choice)
 * 2. Timezone -> Country mapping
 * 3. navigator.language region subtag (e.g. 'en-GB' -> 'GB')
 * 4. Locale primary market (uk->UA, pl->PL, de->DE, fr->FR, es->ES, ru->US, en->US)
 * 5. Default fallback 'US'
 */
export function detectMarket(locale?: string, options: DetectionOptions = {}): SupportedMarket {
  // 1. Explicit override
  const override = normalizedMarket(options.override)
  if (override) return override

  // 2. Timezone -> Country
  const tz =
    options.timezone ??
    (typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : undefined)
  if (tz && tz in TIMEZONE_MARKET_MAP) {
    return TIMEZONE_MARKET_MAP[tz]
  }

  // 3. navigator.language region subtag ('en-GB' -> 'GB')
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

  // 4. Locale primary market fallback
  // 5. Default 'US'
  return localePrimaryMarket(locale)
}

/** Browser entry point: reads the live override before detecting. */
export function detectBrowserMarket(locale?: string): SupportedMarket {
  if (typeof window === "undefined") return localePrimaryMarket(locale)

  let storage: MarketStorage | undefined
  try {
    storage = window.localStorage
  } catch {
    // Storage access can throw outright when cookies are blocked.
  }

  return detectMarket(locale, {
    override: resolveMarketOverride({ search: window.location.search, storage }),
  })
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
    setMarket(detectBrowserMarket(locale))
  }, [locale])

  const info = SUPPORTED_MARKETS[market]

  return {
    market,
    info,
    isHydrated,
    formatAmount: (amount: number) => formatCurrency(amount, market),
  }
}
