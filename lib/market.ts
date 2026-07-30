import catalog from "@/data/niche-catalog.generated.json"

export type SupportedMarket =
  | "US"
  | "UA"
  | "PL"
  | "GB"
  | "CA"
  | "AU"
  | "DE"
  | "FR"
  | "ES"
  | "EU"

export interface MarketInfo {
  code: SupportedMarket
  currency: string
  symbol: string
  name: string
  localeHint: string
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: "$",
  UAH: "₴",
  PLN: "zł",
  GBP: "£",
  CAD: "$",
  AUD: "$",
  EUR: "€",
}

/** Derived from the generated catalog markets source of truth. */
export const SUPPORTED_MARKETS: Record<SupportedMarket, MarketInfo> = Object.fromEntries(
  (catalog.markets ?? []).map((m) => [
    m.countryCode,
    {
      code: m.countryCode as SupportedMarket,
      currency: m.currency,
      symbol: CURRENCY_SYMBOLS[m.currency] ?? m.currency,
      name: m.name,
      localeHint: m.localeHint,
    },
  ]),
) as Record<SupportedMarket, MarketInfo>

const LOCALE_PRIMARY_MARKETS: Record<string, SupportedMarket> = {
  uk: "UA",
  pl: "PL",
  de: "DE",
  fr: "FR",
  es: "ES",
  en: "US",
  ru: "US",
}

/** Returns the deterministic market used for a locale's static render. */
export function localePrimaryMarket(locale?: string): SupportedMarket {
  if (!locale) return "US"
  return LOCALE_PRIMARY_MARKETS[locale.toLowerCase().split("-")[0]] ?? "US"
}

export function formatCurrency(amount: number, market: SupportedMarket): string {
  const info = SUPPORTED_MARKETS[market] ?? SUPPORTED_MARKETS.US

  try {
    return new Intl.NumberFormat(info.localeHint, {
      style: "currency",
      currency: info.currency,
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
    }).format(amount)
  } catch {
    return `${info.symbol}${amount}`
  }
}
