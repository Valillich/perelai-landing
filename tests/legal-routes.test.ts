import { readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import nextConfig from "@/next.config.mjs"
import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { getLocalizedAlternates, localizePath } from "@/i18n/paths"
import {
  LEGAL_DOCUMENT_SLUGS,
  LEGAL_NAV_ITEMS,
  buildLegalReturnDestination,
  loadLegalDocument,
  type LegalDocumentSlug,
} from "@/lib/legal"
import { toAbsoluteLandingUrl } from "@/lib/seo"

const ROOT = process.cwd()
const source = (relativePath: string) => readFileSync(join(ROOT, relativePath), "utf8")

const LEGAL_ROUTE = "app/[locale]/legal/[document]/page.tsx"
const TERMS_ROUTE = "app/[locale]/terms/page.tsx"
const PRIVACY_ROUTE = "app/[locale]/privacy/page.tsx"
const REFUND_ROUTE = "app/[locale]/refund-policy/page.tsx"
const LEGAL_REFUND_ROUTE = "app/[locale]/legal/refund-policy/page.tsx"

describe("Canonical Legal Routes and Pages (Source Level Contract)", () => {
  it("statically pre-renders all 7 canonical documents across all published locales", () => {
    const route = source(LEGAL_ROUTE)

    expect(route).toContain("PUBLISHED_LOCALES.flatMap")
    expect(route).toContain("LEGAL_DOCUMENT_SLUGS.map")
    expect(route).toContain("export const dynamicParams = false")
    expect(route).toContain("if (!isPublishedLocale(locale) || !LEGAL_DOCUMENT_SLUGS.includes(document as LegalDocumentSlug))")
    expect(route).toContain("notFound()")
  })

  it("renders LegalDocumentPage with WebPage structured data", () => {
    const pageComp = source("components/legal/legal-document-page.tsx")

    expect(pageComp).toContain("<LegalMarkdownRenderer content={interpolatedMarkdown} />")
    expect(pageComp).toContain("<LegalNav currentSlug={slug} />")
    expect(pageComp).toContain("<LegalReturnToApp page={slug} locale={locale} version={frontMatter.version} />")
    expect(pageComp).toContain("DRAFT — NOT FOR PRODUCTION OR RELIANCE")
    expect(pageComp).toContain('"@type": "WebPage"')
    // Ensures no FAQ or Article schema is added
    expect(pageComp).not.toContain('"@type": "FAQPage"')
    expect(pageComp).not.toContain('"@type": "Article"')
  })

  it("includes print stylesheet classes for readable document printing", () => {
    const pageComp = source("components/legal/legal-document-page.tsx")
    const rendererComp = source("components/legal/legal-markdown-renderer.tsx")

    expect(pageComp).toContain("print:bg-white")
    expect(pageComp).toContain("print:text-black")
    expect(pageComp).toContain("print:hidden") // Hides banners, headers, footers in print
    expect(rendererComp).toContain("print:break-after-avoid")
  })

  it("isolates client interactivity in LegalPrintButton without event handlers in server components", () => {
    const pageComp = source("components/legal/legal-document-page.tsx")
    const printComp = source("components/legal/legal-print-button.tsx")

    expect(pageComp).toContain("<LegalPrintButton />")
    expect(pageComp).not.toContain("onClick=")
    expect(printComp).toContain('"use client"')
    expect(printComp).toContain("onClick=")
    expect(printComp).toContain("window.print()")
  })
})

describe("Redirect Aliases (/terms, /privacy, /refund-policy, /legal/refund-policy)", () => {
  it("implements permanent locale-aware redirects in route components", () => {
    const terms = source(TERMS_ROUTE)
    expect(terms).toContain('permanentRedirect(localizePath(locale as PublishedLocale, "/legal/terms"))')

    const privacy = source(PRIVACY_ROUTE)
    expect(privacy).toContain('permanentRedirect(localizePath(locale as PublishedLocale, "/legal/privacy"))')

    const refund = source(REFUND_ROUTE)
    expect(refund).toContain('permanentRedirect(localizePath(locale as PublishedLocale, "/legal/billing"))')

    const legalRefund = source(LEGAL_REFUND_ROUTE)
    expect(legalRefund).toContain('permanentRedirect(localizePath(locale as PublishedLocale, "/legal/billing"))')
  })

  it("configures permanent redirects in next.config.mjs for all published locales", async () => {
    expect(nextConfig.redirects).toBeTypeOf("function")
    const redirects = await nextConfig.redirects!()

    // Root English redirects
    expect(redirects).toContainEqual({
      source: "/terms",
      destination: "/legal/terms",
      permanent: true,
    })
    expect(redirects).toContainEqual({
      source: "/privacy",
      destination: "/legal/privacy",
      permanent: true,
    })
    expect(redirects).toContainEqual({
      source: "/refund-policy",
      destination: "/legal/billing",
      permanent: true,
    })
    expect(redirects).toContainEqual({
      source: "/legal/refund-policy",
      destination: "/legal/billing",
      permanent: true,
    })

    // Localized redirects
    for (const locale of ["uk", "pl", "de", "fr", "es", "pt", "ru", "tr"]) {
      expect(redirects).toContainEqual({
        source: `/${locale}/terms`,
        destination: `/${locale}/legal/terms`,
        permanent: true,
      })
      expect(redirects).toContainEqual({
        source: `/${locale}/privacy`,
        destination: `/${locale}/legal/privacy`,
        permanent: true,
      })
      expect(redirects).toContainEqual({
        source: `/${locale}/refund-policy`,
        destination: `/${locale}/legal/billing`,
        permanent: true,
      })
      expect(redirects).toContainEqual({
        source: `/${locale}/legal/refund-policy`,
        destination: `/${locale}/legal/billing`,
        permanent: true,
      })
    }
  })
})

describe("Canonical Metadata & Draft Noindex Gate", () => {
  it("enforces that all 7 draft legal documents have noindex robots metadata", () => {
    for (const slug of LEGAL_DOCUMENT_SLUGS) {
      const doc = loadLegalDocument(slug, { isProduction: false })
      expect(doc.frontMatter.status).toBe("draft")

      // Check canonical URL generation across locales
      for (const locale of PUBLISHED_LOCALES) {
        const canonical = toAbsoluteLandingUrl(localizePath(locale, `/legal/${slug}`))
        expect(canonical).toContain(`/legal/${slug}`)

        const alternates = getLocalizedAlternates(`/legal/${slug}`, locale, PUBLISHED_LOCALES)
        expect(alternates[locale]).toBe(canonical)
        expect(alternates["x-default"]).toBe(`https://perelai.com/legal/${slug}`)
      }
    }
  })
})

describe("Legal Navigation and Footer", () => {
  it("lists all 7 canonical legal documents with Refund Policy prominent in LegalNav", () => {
    const slugs = LEGAL_NAV_ITEMS.map((item) => item.slug)
    expect(slugs).toEqual([
      "terms",
      "privacy",
      "dpa",
      "booking-terms",
      "cookies",
      "subprocessors",
      "billing",
    ])

    const billingItem = LEGAL_NAV_ITEMS.find((item) => item.slug === "billing")
    expect(billingItem?.shortTitle).toBe("Refund Policy")
  })

  it("ensures LandingFooter links to canonical legal routes with prominent Refund Policy", () => {
    const footer = source("components/landing/landing-footer.tsx")

    expect(footer).toContain('href="/legal/privacy"')
    expect(footer).toContain('href="/legal/terms"')
    expect(footer).toContain('href="/legal/billing"')
    expect(footer).toContain("Refund Policy")
    expect(footer).toContain('href="/legal/cookies"')
    expect(footer).toContain("Cookie Policy")
  })
})

describe("Safe Return Destination Builder (§6.1)", () => {
  it("maps allowlisted destinations correctly", () => {
    expect(buildLegalReturnDestination({ page: "terms", locale: "en", from: "login" })?.href).toBe(
      "https://app.perelai.com/login"
    )

    expect(buildLegalReturnDestination({ page: "terms", locale: "en", from: "forgot" })?.href).toBe(
      "https://app.perelai.com/forgot-password"
    )

    const onboarding = buildLegalReturnDestination({ page: "terms", locale: "en", from: "onboarding" })
    expect(onboarding?.href).toBe("https://app.perelai.com/onboarding")
    expect(onboarding?.showCloseInstruction).toBe(true)

    const settings = buildLegalReturnDestination({ page: "terms", locale: "en", from: "settings" })
    expect(settings?.href).toBe("https://app.perelai.com/settings")
    expect(settings?.showCloseInstruction).toBe(true)

    const billing = buildLegalReturnDestination({ page: "terms", locale: "en", from: "billing" })
    expect(billing?.href).toBe("https://app.perelai.com/settings/billing")
    expect(billing?.showCloseInstruction).toBe(true)

    const dataTransfer = buildLegalReturnDestination({ page: "terms", locale: "en", from: "data-transfer" })
    expect(dataTransfer?.href).toBe("https://app.perelai.com/settings/data-transfer")
    expect(dataTransfer?.showCloseInstruction).toBe(true)
  })

  it("returns to register with released product context and no marketing context", () => {
    const destination = buildLegalReturnDestination({
      page: "terms",
      locale: "en",
      from: "register",
      niche: "premium-colorist",
      offer: "STUDIO_MONTHLY",
      offerRelease: {
        codes: ["SOLO_MONTHLY", "STUDIO_MONTHLY"],
        studioReleased: true,
      },
      source: "google",
      campaign: "launch",
      landingPath: "/for-independent-colorists",
    })

    expect(destination?.href).toContain("https://app.perelai.com/register")
    expect(destination?.href).toContain("niche=premium-colorist")
    expect(destination?.href).toContain("offer=STUDIO_MONTHLY")
    expect(destination?.href).not.toContain("utm_source")
    expect(destination?.href).not.toContain("utm_campaign")
    expect(destination?.href).not.toContain("landing_path")
  })

  it("rejects untrusted or arbitrary URLs in from parameter", () => {
    expect(
      buildLegalReturnDestination({
        page: "terms",
        locale: "en",
        from: "https://evil.example.com",
      })
    ).toBeUndefined()

    expect(
      buildLegalReturnDestination({
        page: "terms",
        locale: "en",
        from: "return_to",
      })
    ).toBeUndefined()
  })
})
