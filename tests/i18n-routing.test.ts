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
    expect(PUBLISHED_LOCALES).toEqual(["en", "uk", "pl"])
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
    expect(negotiatePublishedLocale({ acceptLanguage: "de-DE,de;q=0.9" })).toBe("en")
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

  test.each(["en", "uk", "pl"])("does not redirect a path that already has the explicit %s locale prefix", (locale) => {
    const response = proxy(
      new NextRequest(`https://perelai.com/${locale}/for-independent-colorists`, {
        headers: { "accept-language": "pl-PL,pl;q=0.9" },
      }),
    )

    expect(response.status).toBe(200)
    expect(response.headers.get("location")).toBeNull()
    expect(response.headers.get("x-middleware-override-headers")).toContain("x-next-intl-locale")
  })

  test("passes an explicit unpublished locale through to the route, never to English", () => {
    const response = proxy(new NextRequest("https://perelai.com/de/for-independent-colorists"))

    expect(response.status).toBe(200)
    expect(response.headers.get("location")).toBeNull()
    expect(response.headers.get("x-middleware-rewrite")).toBeNull()
  })
})

test.each([
  ["/", { en: "https://perelai.com/", uk: "https://perelai.com/uk", pl: "https://perelai.com/pl", "x-default": "https://perelai.com/" }],
  ["/for-independent-colorists", { en: "https://perelai.com/for-independent-colorists", uk: "https://perelai.com/uk/for-independent-colorists", pl: "https://perelai.com/pl/for-independent-colorists", "x-default": "https://perelai.com/for-independent-colorists" }],
])("every published variant of %s receives the same reciprocal hreflang set", (pathname, expected) => {
  for (const locale of PUBLISHED_LOCALES) {
    expect(getLocalizedAlternates(pathname, locale)).toEqual(expected)
  }
})
