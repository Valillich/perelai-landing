import { describe, expect, test } from "vitest"
import sitemap from "@/app/sitemap"
import robots from "@/app/robots"
import { LEGAL_DRAFTS } from "@/content/legal"
import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import { buildPricingMarkdown, buildLlmsTxt } from "@/lib/machine-readable"
import { SEO_DESCRIPTION_MAX, SEO_TITLE_MAX, toAbsoluteLandingUrl } from "@/lib/seo"
import { getSoftwareApplicationJsonLd } from "@/lib/structured-data"

import homeDe from "@/messages/de/home.json"
import homeEn from "@/messages/en/home.json"
import homeEs from "@/messages/es/home.json"
import homeFr from "@/messages/fr/home.json"
import homePl from "@/messages/pl/home.json"
import homePt from "@/messages/pt/home.json"
import homeRu from "@/messages/ru/home.json"
import homeTr from "@/messages/tr/home.json"
import homeUk from "@/messages/uk/home.json"

import pricingDe from "@/messages/de/pricing.json"
import pricingEn from "@/messages/en/pricing.json"
import pricingEs from "@/messages/es/pricing.json"
import pricingFr from "@/messages/fr/pricing.json"
import pricingPl from "@/messages/pl/pricing.json"
import pricingPt from "@/messages/pt/pricing.json"
import pricingRu from "@/messages/ru/pricing.json"
import pricingTr from "@/messages/tr/pricing.json"
import pricingUk from "@/messages/uk/pricing.json"

import devicesDe from "@/messages/de/devices.json"
import devicesEn from "@/messages/en/devices.json"
import devicesEs from "@/messages/es/devices.json"
import devicesFr from "@/messages/fr/devices.json"
import devicesPl from "@/messages/pl/devices.json"
import devicesPt from "@/messages/pt/devices.json"
import devicesRu from "@/messages/ru/devices.json"
import devicesTr from "@/messages/tr/devices.json"
import devicesUk from "@/messages/uk/devices.json"

import { content as nicheEn } from "@/content/niches/premium-colorist/en"
import { content as nichePl } from "@/content/niches/premium-colorist/pl"
import { content as nicheUk } from "@/content/niches/premium-colorist/uk"
import { content as lashEn } from "@/content/niches/lash-artist/en"
import { content as lashPl } from "@/content/niches/lash-artist/pl"
import { content as lashUk } from "@/content/niches/lash-artist/uk"

const HOME_META: Record<PublishedLocale, { title: string; description: string }> = {
  de: homeDe.meta,
  en: homeEn.meta,
  es: homeEs.meta,
  fr: homeFr.meta,
  pl: homePl.meta,
  pt: homePt.meta,
  ru: homeRu.meta,
  tr: homeTr.meta,
  uk: homeUk.meta,
}

const PRICING_META: Record<PublishedLocale, { title: string; description: string }> = {
  de: pricingDe.meta,
  en: pricingEn.meta,
  es: pricingEs.meta,
  fr: pricingFr.meta,
  pl: pricingPl.meta,
  pt: pricingPt.meta,
  ru: pricingRu.meta,
  tr: pricingTr.meta,
  uk: pricingUk.meta,
}

const DEVICES_META: Record<PublishedLocale, { title: string; description: string }> = {
  de: devicesDe.meta,
  en: devicesEn.meta,
  es: devicesEs.meta,
  fr: devicesFr.meta,
  pl: devicesPl.meta,
  pt: devicesPt.meta,
  ru: devicesRu.meta,
  tr: devicesTr.meta,
  uk: devicesUk.meta,
}

const NICHE_META = [
  nicheEn.meta,
  nichePl.meta,
  nicheUk.meta,
  lashEn.meta,
  lashPl.meta,
  lashUk.meta,
]

describe("sitemap", () => {
  test("contains every localized live page including /install with reciprocal alternates across all published locales", () => {
    const entries = sitemap()

    for (const locale of PUBLISHED_LOCALES) {
      const paths = ["/", "/install", "/pricing", "/for-independent-colorists", "/for-lash-artists", "/terms", "/privacy"]

      for (const path of paths) {
        const url = toAbsoluteLandingUrl(localizePath(locale, path))
        const entry = entries.find((item) => item.url === url)
        expect(entry, `Missing sitemap entry for ${url}`).toBeDefined()

        const languages = entry?.alternates?.languages ?? {}
        for (const loc of PUBLISHED_LOCALES) {
          expect(languages[loc], `Missing alternate for ${loc} on ${url}`).toBeDefined()
        }
        expect(languages["x-default"]).toBe("https://perelai.com" + (path === "/" ? "/" : path))
      }
    }
  })

  test("includes machine-readable endpoints", () => {
    const urls = sitemap().map((entry) => entry.url)
    expect(urls).toContain("https://perelai.com/llms.txt")
    expect(urls).toContain("https://perelai.com/pricing.md")
  })
})

describe("robots", () => {
  test("allows major AI crawlers and references the sitemap", () => {
    const result = robots()
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]

    for (const bot of [
      "GPTBot",
      "ClaudeBot",
      "PerplexityBot",
      "ChatGPT-User",
      "Google-Extended",
      "Bingbot",
    ]) {
      expect(rules).toContainEqual(expect.objectContaining({ userAgent: bot, allow: "/" }))
    }

    expect(result.sitemap).toBe("https://perelai.com/sitemap.xml")
  })
})

describe("metadata limits across all published locales", () => {
  test("keeps all page titles <= 60 and descriptions <= 155 across all published locales", () => {
    for (const locale of PUBLISHED_LOCALES) {
      const pageList = [
        HOME_META[locale],
        PRICING_META[locale],
        DEVICES_META[locale],
        LEGAL_DRAFTS.terms,
        LEGAL_DRAFTS.privacy,
      ]

      for (const page of pageList) {
        expect(page.title.length, `Title too long in ${locale}: ${page.title}`).toBeLessThanOrEqual(SEO_TITLE_MAX)
        expect(page.description.length, `Description too long in ${locale}: ${page.description}`).toBeLessThanOrEqual(SEO_DESCRIPTION_MAX)
      }
    }

    for (const niche of NICHE_META) {
      expect(niche.title.length).toBeLessThanOrEqual(SEO_TITLE_MAX)
      expect(niche.description.length).toBeLessThanOrEqual(SEO_DESCRIPTION_MAX)
    }
  })

  test("keeps page titles unique within each published locale", () => {
    for (const locale of PUBLISHED_LOCALES) {
      const titles = [
        HOME_META[locale].title,
        PRICING_META[locale].title,
        DEVICES_META[locale].title,
        LEGAL_DRAFTS.terms.title,
        LEGAL_DRAFTS.privacy.title,
      ]
      expect(new Set(titles).size, `Duplicate titles found in locale ${locale}`).toBe(titles.length)
    }
  })
})

describe("machine-readable files & answer-engine contract", () => {
  test("llms.txt carries the platform answer verbatim", () => {
    const llms = buildLlmsTxt()

    expect(llms).toContain(homeEn.meta.description)
    expect(llms).toContain(devicesEn.faq.a1)
    expect(llms).toContain("https://perelai.com/install")
    expect(llms).toContain("/for-independent-colorists (niche=premium-colorist)")
  })

  test("pricing.md is derived from live page copy", () => {
    const pricing = buildPricingMarkdown()

    expect(pricing).toContain(pricingEn.noCharge.commissionDetail)
    expect(pricing).toContain(pricingEn.noCharge.cardDetail)
    expect(pricing).toContain(pricingEn.capabilities.finance)
    expect(pricing).not.toMatch(/\$19|\$29|\$49/)
  })

  test("answer-engine contract: store-availability answer is self-contained and answers negative directly", () => {
    const answer = devicesEn.faq.a1
    const words = answer.split(/\s+/)

    // Self-contained 40-60 word paragraph
    expect(words.length).toBeGreaterThanOrEqual(40)
    expect(words.length).toBeLessThanOrEqual(60)

    // Starts by naming product, no orphan pronoun
    expect(answer.startsWith("Perelai is")).toBe(true)

    // Answers negative directly
    expect(answer).toContain("not listed on the App Store or on Google Play")

    // State web alternative
    expect(answer).toContain("runs in a web browser at perelai.app")

    // Heading uses visitor question phrasing, not marketing label
    expect(devicesEn.faq.q1).toBe("Does Perelai have an iPhone or Android app?")
  })

  test("entity consistency across page copy, llms.txt, JSON-LD, and OG description", () => {
    const pageCopy = devicesEn.faq.a1
    const llmsTxt = buildLlmsTxt()
    const jsonLdNode = getSoftwareApplicationJsonLd({
      locale: "en",
      url: "https://perelai.com/install",
      description: devicesEn.meta.description,
      featureList: [devicesEn.limitations.noStore, devicesEn.limitations.online],
    })
    const ogDescription = devicesEn.meta.description

    // 1. All surfaces state web browser operating model
    expect(pageCopy).toContain("runs in a web browser")
    expect(llmsTxt).toContain("runs in a web browser")
    expect(jsonLdNode.operatingSystem).toBe("Web")
    expect(ogDescription).toContain("runs in a web browser")

    // 2. All surfaces affirm no store listing or optional installation
    expect(pageCopy).toContain("not listed on the App Store or on Google Play")
    expect(llmsTxt).toContain("not listed on the App Store or on Google Play")
    expect(jsonLdNode.featureList).toContain(devicesEn.limitations.noStore)
    expect(ogDescription).toContain("no App Store or Google Play listing")

    // 3. No surface claims native app, offline support, or store download
    for (const surface of [pageCopy, llmsTxt, JSON.stringify(jsonLdNode), ogDescription]) {
      expect(surface).not.toMatch(/native app|offline mode|download on app store|download on google play/i)
    }
  })
})
