import { describe, expect, test } from "vitest"
import homeEn from "@/messages/en/home.json"
import homeDe from "@/messages/de/home.json"
import homeEs from "@/messages/es/home.json"
import homeFr from "@/messages/fr/home.json"
import homePl from "@/messages/pl/home.json"
import homePt from "@/messages/pt/home.json"
import homeRu from "@/messages/ru/home.json"
import homeTr from "@/messages/tr/home.json"
import homeUk from "@/messages/uk/home.json"
import { messagesByLocale } from "@/i18n/messages"
import { PUBLISHED_LOCALES } from "@/i18n/locales"

/**
 * FM5 locale validation harness. Runs against whatever is actually committed
 * to messages/{locale}/home.json today — nothing was applied by FM5 (see
 * docs/home-finance-locale-audit-2026-08-03.md §6, every locale HOLD), so
 * this is a baseline/regression guard, not a proof that translations are
 * approved. It becomes the applied-content gate the moment a locale is
 * approved and its strings are copied in.
 */

const NON_ENGLISH_HOMES: Record<string, unknown> = {
  de: homeDe,
  es: homeEs,
  fr: homeFr,
  pl: homePl,
  pt: homePt,
  ru: homeRu,
  tr: homeTr,
  uk: homeUk,
}

/** The five namespaces the finance-first component tree (FM3/FM4B) reads. */
const FINANCE_SECTION_KEYS = [
  "finance.title",
  "finance.body",
  "finance.caption",
  "finance.summary",
  "finance.fixture.category.color",
  "finance.fixture.category.styling",
  "finance.fixture.openOrders",
  "finance.fixture.orderInstalment",
  "finance.fixture.records.visitPayment",
  "finance.fixture.records.packageRedemption",
  "finance.fixture.records.orderInstalment",
  "finance.fixture.records.noShowFee",
  "states.title",
  "states.body",
  "drivers.title",
  "drivers.body",
  "records.title",
  "records.body",
  "operations.title",
  "operations.body",
] as const

function getPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

function collectLeafPaths(obj: unknown, prefix = ""): string[] {
  if (typeof obj !== "object" || obj === null) return [prefix]
  return Object.entries(obj as Record<string, unknown>).flatMap(([key, value]) =>
    collectLeafPaths(value, prefix ? `${prefix}.${key}` : key),
  )
}

function extractStrings(obj: unknown): string[] {
  if (typeof obj === "string") return [obj]
  if (typeof obj === "object" && obj !== null) {
    return Object.values(obj).flatMap(extractStrings)
  }
  return []
}

const CYRILLIC_LOCALES = new Set(["ru", "uk"])

describe("locale finance contract (FM5 baseline — every locale HOLD until named approval)", () => {
  test.each(Object.entries(NON_ENGLISH_HOMES))(
    "%s: every leaf key present has a matching English key at the same path",
    (_locale, home) => {
      const leafPaths = collectLeafPaths(home)
      for (const path of leafPaths) {
        expect(getPath(homeEn, path), `English is missing key "${path}"`).toBeDefined()
      }
    },
  )

  test.each(Object.entries(NON_ENGLISH_HOMES))(
    "%s: no interpolation placeholder drift against English",
    (_locale, home) => {
      const leafPaths = collectLeafPaths(home)
      for (const path of leafPaths) {
        const localeValue = getPath(home, path)
        const englishValue = getPath(homeEn, path)
        if (typeof localeValue !== "string" || typeof englishValue !== "string") continue
        const localeTokens = [...localeValue.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]).sort()
        const englishTokens = [...englishValue.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]).sort()
        expect(localeTokens, `placeholder mismatch at "${path}"`).toEqual(englishTokens)
      }
    },
  )

  test.each(Object.entries(NON_ENGLISH_HOMES))(
    "%s: no raw untranslated English-only banned phrase leaked in via copy-paste",
    (_locale, home) => {
      const strings = extractStrings(home)
      for (const str of strings) {
        expect(str).not.toMatch(/\bpersonal CFO\b/i)
        expect(str).not.toMatch(/\bPWA\b/)
        expect(str).not.toMatch(/\bFounding Beta\b/i)
        expect(str).not.toMatch(/finally.{0,20}in one place/i)
        expect(str).not.toMatch(/\bCRM\b/)
      }
    },
  )

  test.each(Object.entries(NON_ENGLISH_HOMES))(
    "%s: script sanity — Cyrillic-target locales use Cyrillic, Latin-script locales don't leak Cyrillic",
    (locale, home) => {
      const strings = extractStrings(home).filter((s) => /[a-zA-Zа-яА-ЯёЁ]/.test(s))
      const cyrillicChars = strings.join("").match(/[а-яА-ЯёЁіІїЇєЄґҐ]/g)?.length ?? 0
      if (CYRILLIC_LOCALES.has(locale)) {
        expect(cyrillicChars, `${locale} should contain Cyrillic text`).toBeGreaterThan(0)
      } else {
        expect(cyrillicChars, `${locale} should not contain Cyrillic text`).toBe(0)
      }
    },
  )

  const APPROVED_LOCALES = new Set(["de", "es", "fr", "pl", "pt", "ru", "tr", "uk"])

  test("finance-first namespaces exist in English plus all owner-approved non-English locales (de, es, fr, pl, pt, ru, tr, uk — 2026-08-03)", () => {
    for (const key of ["finance", "states", "drivers", "records", "operations"] as const) {
      expect(getPath(homeEn, key), `English is missing "${key}"`).toBeDefined()
    }
    for (const [locale, home] of Object.entries(NON_ENGLISH_HOMES)) {
      for (const key of ["finance", "states", "drivers", "records", "operations"] as const) {
        if (APPROVED_LOCALES.has(locale)) {
          expect(
            getPath(home, key),
            `${locale} is approved but is missing "${key}" — did an edit drop it?`,
          ).toBeDefined()
        } else {
          expect(
            getPath(home, key),
            `${locale} unexpectedly has "${key}" — still HOLD; update this test only after named approval is recorded`,
          ).toBeUndefined()
        }
      }
    }
  })

  test.each(PUBLISHED_LOCALES.filter((l) => l !== "en"))(
    "%s: the English-fallback merge (i18n/messages.ts) covers every finance section key the homepage reads",
    (locale) => {
      const merged = messagesByLocale[locale].home
      for (const path of FINANCE_SECTION_KEYS) {
        const value = getPath(merged, path)
        expect(typeof value, `merged "${locale}" home is missing "${path}"`).toBe("string")
        expect((value as string).length, `merged "${locale}" home has an empty "${path}"`).toBeGreaterThan(0)
      }
    },
  )
})
