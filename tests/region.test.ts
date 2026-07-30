import { describe, expect, test } from "vitest"
import {
  detectMarket,
  formatCurrency,
  localePrimaryMarket,
  MARKET_STORAGE_KEY,
  resolveMarketOverride,
  SUPPORTED_MARKETS,
  type MarketStorage,
} from "../lib/region"

function memoryStorage(initial: Record<string, string> = {}): MarketStorage & {
  values: Record<string, string>
} {
  const values = { ...initial }

  return {
    values,
    getItem: (key) => values[key] ?? null,
    setItem: (key, value) => {
      values[key] = value
    },
    removeItem: (key) => {
      delete values[key]
    },
  }
}

describe("localePrimaryMarket", () => {
  test("maps locales to their primary markets", () => {
    expect(localePrimaryMarket("uk")).toBe("UA")
    expect(localePrimaryMarket("pl")).toBe("PL")
    expect(localePrimaryMarket("de")).toBe("DE")
    expect(localePrimaryMarket("fr")).toBe("FR")
    expect(localePrimaryMarket("es")).toBe("ES")
    expect(localePrimaryMarket("ru")).toBe("US")
    expect(localePrimaryMarket("en")).toBe("US")
  })

  test("falls back to US for unknown locale", () => {
    expect(localePrimaryMarket("unknown")).toBe("US")
    expect(localePrimaryMarket(undefined)).toBe("US")
  })
})

describe("detectMarket precedence", () => {
  test("uses timezone to country mapping", () => {
    expect(detectMarket("en", { timezone: "Europe/Warsaw" })).toBe("PL")
    expect(detectMarket("en", { timezone: "Europe/Kyiv" })).toBe("UA")
    expect(detectMarket("en", { timezone: "Europe/London" })).toBe("GB")
    expect(detectMarket("en", { timezone: "Europe/Berlin" })).toBe("DE")
    expect(detectMarket("en", { timezone: "America/Toronto" })).toBe("CA")
    expect(detectMarket("en", { timezone: "Australia/Sydney" })).toBe("AU")
  })

  test("uses language region subtag when timezone is unknown", () => {
    expect(detectMarket("en", { timezone: "Unknown/Timezone", language: "en-GB" })).toBe("GB")
    expect(detectMarket("en", { timezone: "Unknown/Timezone", language: "en-CA" })).toBe("CA")
    expect(detectMarket("en", { timezone: "Unknown/Timezone", language: "en-AU" })).toBe("AU")
  })

  test("falls back to locale primary market when timezone and language region are absent/unmatched", () => {
    expect(detectMarket("uk", { timezone: "Unknown/Timezone", language: "uk" })).toBe("UA")
    expect(detectMarket("pl", { timezone: "Unknown/Timezone", language: "pl" })).toBe("PL")
    expect(detectMarket("de", { timezone: "Unknown/Timezone", language: "de" })).toBe("DE")
  })
})

describe("explicit market override", () => {
  test("outranks every detection signal", () => {
    expect(detectMarket("en", { timezone: "Europe/Warsaw", override: "UA" })).toBe("UA")
    expect(detectMarket("pl", { timezone: "Europe/Warsaw", language: "pl-PL", override: "GB" })).toBe(
      "GB",
    )
  })

  test("ignores an unsupported or empty override and keeps detecting", () => {
    expect(detectMarket("en", { timezone: "Europe/Warsaw", override: "ZZ" })).toBe("PL")
    expect(detectMarket("en", { timezone: "Europe/Warsaw", override: null })).toBe("PL")
  })

  test("?market= pins a market and persists it for later pages", () => {
    const storage = memoryStorage()

    expect(resolveMarketOverride({ search: "?market=pl", storage })).toBe("PL")
    expect(storage.values[MARKET_STORAGE_KEY]).toBe("PL")
    expect(resolveMarketOverride({ search: "", storage })).toBe("PL")
  })

  test("?market=auto clears the stored pin", () => {
    const storage = memoryStorage({ [MARKET_STORAGE_KEY]: "PL" })

    expect(resolveMarketOverride({ search: "?market=auto", storage })).toBeUndefined()
    expect(storage.values[MARKET_STORAGE_KEY]).toBeUndefined()
  })

  test("an unsupported ?market= value neither pins nor clears an existing choice", () => {
    const storage = memoryStorage({ [MARKET_STORAGE_KEY]: "PL" })

    expect(resolveMarketOverride({ search: "?market=atlantis", storage })).toBe("PL")
    expect(storage.values[MARKET_STORAGE_KEY]).toBe("PL")
  })

  test("returns nothing when no override was requested or stored", () => {
    expect(resolveMarketOverride({ search: "?utm_source=x", storage: memoryStorage() })).toBeUndefined()
    expect(resolveMarketOverride()).toBeUndefined()
  })
})

describe("formatCurrency", () => {
  test("formats currency values per market definition", () => {
    const formattedUa = formatCurrency(1000, "UA")
    expect(formattedUa).toContain("1")
    expect(formattedUa).toContain("000")

    const formattedPl = formatCurrency(100, "PL")
    expect(formattedPl).toContain("100")

    const formattedUs = formatCurrency(50, "US")
    expect(formattedUs).toContain("50")
    expect(formattedUs).toContain("$")
  })
})

describe("Supported markets contract", () => {
  test("contains all 10 supported markets derived from generated catalog", () => {
    const markets = Object.keys(SUPPORTED_MARKETS)
    expect(markets).toEqual(["US", "UA", "PL", "GB", "CA", "AU", "DE", "FR", "ES", "EU"])
  })
})
