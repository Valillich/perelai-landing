import { readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, test } from "vitest"
import {
  NICHE_PAGES,
  RESERVED_SLUGS,
  getEnabledNichePageBySlug,
} from "@/config/niche-pages"
import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { messagesByLocale } from "@/i18n/messages"
import { localizePath } from "@/i18n/paths"
import { buildAppLoginUrl, buildAppSignupUrl } from "@/lib/urls"
import { SEO_DESCRIPTION_MAX, SEO_TITLE_MAX, buildLocalizedPageMetadata } from "@/lib/seo"

const ROOT = process.cwd()
const INSTALL_PATH = "/install"

/**
 * The route modules pull in `next/navigation` through next-intl, which does
 * not resolve under the repo's plain vitest environment — so route contracts
 * are asserted at the source level, as elsewhere in this suite. Behaviour that
 * can run (metadata, URL building, message data) is exercised for real.
 */
const source = (relativePath: string) =>
  readFileSync(join(ROOT, relativePath), "utf8")

const INSTALL_ROUTE = "app/[locale]/install/page.tsx"

const devicesFor = (locale: PublishedLocale) => messagesByLocale[locale].devices

describe("the /install route", () => {
  test("is statically generated for every published locale and nothing else", () => {
    const route = source(INSTALL_ROUTE)

    // One locale list, taken from code — never a second hand-maintained copy.
    expect(route).toContain("PUBLISHED_LOCALES.map((locale) => ({ locale }))")
    expect(route).toContain('from "@/i18n/locales"')
    // An unpublished locale must 404 rather than render half-translated copy.
    expect(route).toContain("export const dynamicParams = false")
    expect(route).toContain("if (!isPublishedLocale(locale)) notFound()")
  })

  test("builds metadata from the reviewed devices namespace through the shared helper", () => {
    const route = source(INSTALL_ROUTE)

    expect(route).toContain('namespace: "devices.meta"')
    expect(route).toContain("buildLocalizedPageMetadata")
    expect(route).toContain('pathname: INSTALL_PATH')
    // Metadata, canonical and hreflang all come from one seam.
    expect(route).not.toContain("alternates:")
  })

  test("renders the shared DevicePage inside the site shell with structured data", () => {
    const route = source(INSTALL_ROUTE)

    expect(route).toContain("<DevicePage locale={locale} />")
    expect(route).toContain("<LandingHeader")
    expect(route).toContain("<LandingFooter")
    expect(route).toContain("JsonLd")
    expect(route).toContain("getSoftwareApplicationJsonLd")
  })

  test("generates a social preview for the route", () => {
    const og = source("app/[locale]/install/opengraph-image.tsx")
    const twitter = source("app/[locale]/install/twitter-image.tsx")

    expect(og).toContain("renderOgCardImage")
    expect(og).toContain("generateOgImageMetadata")
    // The reviewed alt text, not an improvised one.
    expect(og).toContain("devices.meta.ogAlt")
    // Twitter reuses the same deterministic render rather than a second design.
    expect(twitter).toContain('from "./opengraph-image"')
  })

  test("canonicalises each locale and offers reciprocal alternates", () => {
    for (const locale of PUBLISHED_LOCALES) {
      const devices = devicesFor(locale)
      const metadata = buildLocalizedPageMetadata({
        locale,
        pathname: INSTALL_PATH,
        title: devices.meta.title,
        description: devices.meta.description,
      })

      expect(metadata.alternates?.canonical).toBe(
        `https://perelai.com${localizePath(locale, INSTALL_PATH)}`,
      )

      const languages = metadata.alternates?.languages ?? {}
      for (const alternate of PUBLISHED_LOCALES) {
        expect(languages[alternate], `${locale} → ${alternate}`).toBe(
          `https://perelai.com${localizePath(alternate, INSTALL_PATH)}`,
        )
      }
      expect(languages["x-default"]).toBe("https://perelai.com/install")
    }
  })

  test("keeps English on the unprefixed path so /en/install stays a redirect", () => {
    expect(localizePath("en", INSTALL_PATH)).toBe("/install")
    expect(localizePath("uk", INSTALL_PATH)).toBe("/uk/install")
    // The proxy 308s any /en/* URL; the route must never claim that address.
    expect(source("proxy.ts")).toContain("routing.defaultLocale")
  })

  test("has metadata inside the SEO budget and a distinct title per locale", () => {
    const titles = new Set<string>()

    for (const locale of PUBLISHED_LOCALES) {
      const { title, description } = devicesFor(locale).meta
      expect(title.length, `${locale} title`).toBeLessThanOrEqual(SEO_TITLE_MAX)
      expect(description.length, `${locale} description`).toBeLessThanOrEqual(
        SEO_DESCRIPTION_MAX,
      )
      titles.add(title)
    }

    expect(titles.size).toBe(PUBLISHED_LOCALES.length)
  })

  test("does not collide with the niche namespace", () => {
    expect(RESERVED_SLUGS).toContain("install")
    expect(getEnabledNichePageBySlug("install")).toBeUndefined()
    expect(NICHE_PAGES.some((page) => page.path === INSTALL_PATH)).toBe(false)
    expect(
      NICHE_PAGES.some((page) => page.aliases?.includes(INSTALL_PATH)),
    ).toBe(false)
  })
})

describe("the /install cross-origin handoff", () => {
  test("routes the primary action through the signup helper with the page's own path", () => {
    const url = new URL(buildAppSignupUrl({ landingPath: INSTALL_PATH, locale: "uk" }))

    expect(url.origin).toBe("https://app.perelai.com")
    expect(url.pathname).toBe("/register")
    expect(url.searchParams.get("landing_path")).toBe(INSTALL_PATH)
    // Language continuity across the domain hop — a UX hint, not authority.
    expect(url.searchParams.get("lng")).toBe("uk")
    // `/install` is not a niche page, so it must not fabricate attribution.
    expect(url.searchParams.get("niche")).toBeNull()
  })

  test("strips the locale prefix so every locale reports one canonical path", () => {
    for (const locale of PUBLISHED_LOCALES) {
      const url = new URL(
        buildAppSignupUrl({
          landingPath: localizePath(locale, INSTALL_PATH),
          locale,
        }),
      )
      expect(url.searchParams.get("landing_path"), locale).toBe(INSTALL_PATH)
    }
  })

  test("sends the secondary action to the fixed app login URL", () => {
    expect(buildAppLoginUrl()).toBe("https://app.perelai.com/login")
  })

  test("tells the visitor the handoff ends in a verification email", () => {
    for (const locale of PUBLISHED_LOCALES) {
      const devices = devicesFor(locale)
      // Both CTA clusters carry the expectation, so a visitor who scrolls
      // straight to the footer CTA is not surprised by the inbox step.
      expect(devices.hero.micro.trim().length, locale).toBeGreaterThan(0)
      expect(devices.cta.micro.trim().length, locale).toBeGreaterThan(0)
      expect(devices.cta.micro, locale).toBe(devices.hero.micro)
      // The destination domain is named beside the primary action.
      expect(devices.hero.body, locale).toContain("perelai.app")
    }
  })

  test("never offers a landing-origin install or download action", () => {
    const page = source("components/devices/device-page.tsx")

    // perelai.com cannot install the app on perelai.app, so both CTAs are
    // account actions and the only app URLs come from the allowlisted helper.
    expect(page).toContain('destination="signup"')
    expect(page).toContain('destination="login"')
    expect(page).not.toMatch(/https?:\/\/[a-z.]*perelai\.app/)
    expect(page).not.toContain("NEXT_PUBLIC_APP_URL")
    expect(page).not.toContain('href="#"')
    expect(page).not.toMatch(/buildAppSignupUrl|buildAppLoginUrl/)
  })
})

describe("navigation to /install", () => {
  test("is reachable from the header and the product footer", () => {
    const header = source("components/landing/landing-header.tsx")
    const footer = source("components/landing/landing-footer.tsx")

    expect(header).toContain('localizePath(locale, "/install")')
    expect(footer).toContain('href="/install"')
    // One reviewed label feeds both, so header and footer cannot drift.
    expect(header).toContain('useTranslations("devices.nav")')
    expect(footer).toContain('useTranslations("devices.nav")')
    expect(header).not.toContain('href="#"')
    expect(footer).not.toContain('href="#"')
  })

  test("marks the current page and shares one list with the mobile menu", () => {
    const header = source("components/landing/landing-header.tsx")

    expect(header).toContain('canonicalPath === "/install"')
    // `navItems` is passed to both the desktop nav and `MobileNav`.
    expect(header).toMatch(/items=\{navItems\}/)
  })

  test("keeps the primary nav inside the 4-7 item budget", () => {
    const header = source("components/landing/landing-header.tsx")
    const navBlock = header.slice(
      header.indexOf("const navItems"),
      header.indexOf("const nicheItems"),
    )
    // Four link items plus the niche menu trigger.
    const itemCount = (navBlock.match(/\{ href:/g) ?? []).length
    expect(itemCount).toBe(4)
    expect(itemCount + 1).toBeGreaterThanOrEqual(4)
    expect(itemCount + 1).toBeLessThanOrEqual(7)
  })

  test("labels the link Devices, never Download or Install", () => {
    const forbidden = /download|herunterladen|pobierz|descargar|télécharger|baixar|indir|завантаж|скачать/i

    for (const locale of PUBLISHED_LOCALES) {
      const label = devicesFor(locale).nav.label
      expect(label.trim().length, locale).toBeGreaterThan(0)
      expect(label, locale).not.toMatch(forbidden)
    }
  })
})
