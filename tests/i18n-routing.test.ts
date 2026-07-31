import { NextRequest, NextResponse } from "next/server"
import { describe, expect, test, vi } from "vitest"

vi.mock("next-intl/middleware", () => ({
  default: () => () => NextResponse.next(),
}))
import catalog from "../data/niche-catalog.generated.json"
import { APP_LOCALES, PUBLISHED_LOCALES } from "../i18n/locales"
import { getLocalizedAlternates, localizePath } from "../i18n/paths"
import { negotiatePublishedLocale } from "../i18n/negotiation"
import { proxy } from "../proxy"

describe("the locale contract", () => {
  test("matches the generated app locale contract while publishing only complete locales", () => {
    expect(APP_LOCALES).toEqual(catalog.supportedLocales)
    expect(PUBLISHED_LOCALES).toEqual(["en", "uk", "pl", "ru", "es", "fr", "de", "pt", "tr"])
  })

  test("uses unprefixed English and prefixed published translations", () => {
    expect(localizePath("en", "/for-independent-colorists")).toBe(
      "/for-independent-colorists",
    )
    expect(localizePath("uk", "/for-independent-colorists")).toBe(
      "/uk/for-independent-colorists",
    )
  })
})

describe("locale negotiation", () => {
  test("uses a published cookie preference before the Accept-Language header", () => {
    expect(negotiatePublishedLocale({ cookieLocale: "uk", acceptLanguage: "pl-PL,pl;q=0.9" })).toBe(
      "uk",
    )
  })

  test("matches only the language subtag and never negotiates an unpublished locale", () => {
    expect(negotiatePublishedLocale({ acceptLanguage: "pl-PL,uk;q=0.8" })).toBe("pl")
    expect(negotiatePublishedLocale({ acceptLanguage: "zh-CN,zh;q=0.9" })).toBe("en")
  })
})

describe("proxy", () => {
  test("redirects an unprefixed root request to Polish once and persists it for a year", () => {
    const response = proxy(
      new NextRequest("https://perelai.com/", {
        headers: { "accept-language": "pl-PL,pl;q=0.9" },
      }),
    )

    expect(response.status).toBe(307)
    expect(response.headers.get("location")).toBe("https://perelai.com/pl")
    expect(response.cookies.get("NEXT_LOCALE")?.value).toBe("pl")
    expect(response.cookies.get("NEXT_LOCALE")?.maxAge).toBe(60 * 60 * 24 * 365)
  })

  test.each(["uk", "pl"])("does not redirect a path that already has the explicit %s locale prefix", (locale) => {
    const response = proxy(
      new NextRequest(`https://perelai.com/${locale}/for-independent-colorists`, {
        headers: { "accept-language": "pl-PL,pl;q=0.9" },
      }),
    )

    expect(response.status).toBe(200)
    expect(response.headers.get("location")).toBeNull()
    expect(response.headers.get("x-middleware-override-headers")).toContain("x-next-intl-locale")
  })

  test.each([
    ["/en", "https://perelai.com/"],
    ["/en/for-independent-colorists", "https://perelai.com/for-independent-colorists"],
    ["/en/pricing?utm_source=newsletter", "https://perelai.com/pricing?utm_source=newsletter"],
  ])("permanently redirects the duplicate English prefix %s", (pathname, expected) => {
    const response = proxy(new NextRequest(`https://perelai.com${pathname}`))

    expect(response.status).toBe(308)
    expect(response.headers.get("location")).toBe(expected)
  })

  test("passes an explicit unpublished locale through to the route, never to English", () => {
    const response = proxy(new NextRequest("https://perelai.com/de/for-independent-colorists"))

    expect(response.status).toBe(200)
    expect(response.headers.get("location")).toBeNull()
    expect(response.headers.get("x-middleware-rewrite")).toBeNull()
  })
})

test.each([
  ["/", { en: "https://perelai.com/", uk: "https://perelai.com/uk", pl: "https://perelai.com/pl", ru: "https://perelai.com/ru", es: "https://perelai.com/es", fr: "https://perelai.com/fr", de: "https://perelai.com/de", pt: "https://perelai.com/pt", tr: "https://perelai.com/tr", "x-default": "https://perelai.com/" }],
  ["/for-independent-colorists", { en: "https://perelai.com/for-independent-colorists", uk: "https://perelai.com/uk/for-independent-colorists", pl: "https://perelai.com/pl/for-independent-colorists", ru: "https://perelai.com/ru/for-independent-colorists", es: "https://perelai.com/es/for-independent-colorists", fr: "https://perelai.com/fr/for-independent-colorists", de: "https://perelai.com/de/for-independent-colorists", pt: "https://perelai.com/pt/for-independent-colorists", tr: "https://perelai.com/tr/for-independent-colorists", "x-default": "https://perelai.com/for-independent-colorists" }],
  ["/for-lash-artists", { en: "https://perelai.com/for-lash-artists", uk: "https://perelai.com/uk/for-lash-artists", pl: "https://perelai.com/pl/for-lash-artists", ru: "https://perelai.com/ru/for-lash-artists", es: "https://perelai.com/es/for-lash-artists", fr: "https://perelai.com/fr/for-lash-artists", de: "https://perelai.com/de/for-lash-artists", pt: "https://perelai.com/pt/for-lash-artists", tr: "https://perelai.com/tr/for-lash-artists", "x-default": "https://perelai.com/for-lash-artists" }],
])("every published variant of %s receives the same reciprocal hreflang set", (pathname, expected) => {
  for (const locale of PUBLISHED_LOCALES) {
    expect(getLocalizedAlternates(pathname, locale)).toEqual(expected)
  }
})
