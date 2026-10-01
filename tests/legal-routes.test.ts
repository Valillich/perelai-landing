import { readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it, vi } from "vitest"
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
import { PRODUCTION_LEGAL_IDENTITY_ENV } from "@/lib/legal/production-identity"
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

describe("Canonical Metadata", () => {
  it("builds canonical and alternate URLs for all 7 approved legal documents", () => {
    for (const slug of LEGAL_DOCUMENT_SLUGS) {
      const doc = loadLegalDocument(slug, { isProduction: false })
      expect(doc.frontMatter.status).toBe("approved")

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
    expect(footer).toContain('{t("refund")}')
    expect(footer).toContain('href="/legal/cookies"')
    expect(footer).toContain('{t("cookies")}')
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

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND")
  },
  permanentRedirect: (url: string) => {
    throw new Error(`NEXT_REDIRECT:${url}`)
  },
  redirect: (url: string) => {
    throw new Error(`NEXT_REDIRECT:${url}`)
  },
}))

// The page component tree pulls next-intl navigation, which is not
// resolvable under vitest — only generateMetadata is exercised here.
vi.mock("@/components/legal/legal-document-page", () => ({
  LegalDocumentPage: () => null,
}))

describe("Production publication gate on canonical routes (R1)", () => {
  const PREVIEW_ROUTE = "app/[locale]/legal-preview/[document]/page.tsx"

  const withEnv = async (
    overrides: Record<string, string | undefined>,
    run: () => Promise<unknown>
  ) => {
    const keys = new Set(["NODE_ENV", "LEGAL_DRAFT_PREVIEW", ...Object.keys(overrides)])
    const prev = Object.fromEntries([...keys].map((key) => [key, process.env[key]]))
    const apply = (values: Record<string, string | undefined>) => {
      for (const key of keys) {
        if (values[key] === undefined) delete process.env[key]
        else process.env[key] = values[key]
      }
    }
    apply({ NODE_ENV: prev.NODE_ENV, ...overrides })
    try {
      await run()
    } finally {
      apply(prev)
    }
  }

  it("route source wires the real production gate instead of a forced preview", () => {
    const route = source(LEGAL_ROUTE)
    expect(route).toContain("isLegalProductionGateEnabled()")
    expect(route).not.toContain("isProduction: false")
  })

  it("generateMetadata fails closed when the production identity env is missing", async () => {
    const { generateMetadata } = await import(
      "@/app/[locale]/legal/[document]/page"
    )
    await withEnv({ NODE_ENV: "production" }, async () => {
      await expect(
        generateMetadata({
          params: Promise.resolve({ locale: "en", document: "terms" }),
        })
      ).rejects.toThrow()
    })
  })

  it("generateMetadata fails closed when the production identity differs from the approved snapshot", async () => {
    const { generateMetadata } = await import(
      "@/app/[locale]/legal/[document]/page"
    )
    await withEnv(
      {
        ...PRODUCTION_LEGAL_IDENTITY_ENV,
        NODE_ENV: "production",
        NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS: "Kyiv, Ukraine",
      },
      async () => {
        await expect(
          generateMetadata({
            params: Promise.resolve({ locale: "en", document: "terms" }),
          })
        ).rejects.toThrow(/APPROVAL_HASH_MISMATCH/)
      }
    )
  })

  it("publishes every approved document as indexable with the approved production identity", async () => {
    const { generateMetadata } = await import(
      "@/app/[locale]/legal/[document]/page"
    )
    await withEnv({ ...PRODUCTION_LEGAL_IDENTITY_ENV, NODE_ENV: "production" }, async () => {
      for (const document of LEGAL_DOCUMENT_SLUGS) {
        const metadata = await generateMetadata({
          params: Promise.resolve({ locale: "en", document }),
        })
        expect(metadata.robots).toEqual({ index: true, follow: true })
      }
    })
  })

  it("canonical route stays fail-closed even when LEGAL_DRAFT_PREVIEW leaks to production", async () => {
    const { generateMetadata } = await import(
      "@/app/[locale]/legal/[document]/page"
    )
    await withEnv(
      { NODE_ENV: "production", LEGAL_DRAFT_PREVIEW: "true" },
      async () => {
        await expect(
          generateMetadata({
            params: Promise.resolve({ locale: "en", document: "terms" }),
          })
        ).rejects.toThrow()
      }
    )
  })

  it("draft preview is isolated to the dedicated legal-preview route", () => {
    const preview = source(PREVIEW_ROUTE)
    expect(preview).toContain("isLegalDraftPreviewEnabled()")
    expect(preview).toContain("isProduction: false")
    expect(preview).toContain("notFound()")
    expect(preview).toContain("index: false")
    // The isolated surface never claims the canonical URL.
    expect(preview).toContain("/legal-preview/")
    expect(preview).not.toContain("isLegalProductionGateEnabled")
  })

  it("preview route renders a draft only when LEGAL_DRAFT_PREVIEW=true", async () => {
    const { default: PreviewPage, generateMetadata } = await import(
      "@/app/[locale]/legal-preview/[document]/page"
    )

    await withEnv(
      { NODE_ENV: "production", LEGAL_DRAFT_PREVIEW: "true" },
      async () => {
        const metadata = await generateMetadata({
          params: Promise.resolve({ locale: "en", document: "terms" }),
        })
        expect(metadata.title).toBe("[Draft preview] terms — Perelai")
        await expect(
          PreviewPage({
            params: Promise.resolve({ locale: "en", document: "terms" }),
          })
        ).resolves.toBeTruthy()
      }
    )

    await withEnv({ NODE_ENV: "production" }, async () => {
      await expect(
        PreviewPage({
          params: Promise.resolve({ locale: "en", document: "terms" }),
        })
      ).rejects.toThrow("NEXT_NOT_FOUND")
    })
  })
})
