import { describe, expect, test } from "vitest"
import sitemap from "@/app/sitemap"
import robots from "@/app/robots"
import { LEGAL_DRAFTS } from "@/content/legal"
import { content as nicheEn } from "@/content/niches/premium-colorist/en"
import { content as nichePl } from "@/content/niches/premium-colorist/pl"
import { content as nicheUk } from "@/content/niches/premium-colorist/uk"
import homeEn from "@/messages/en/home.json"
import homePl from "@/messages/pl/home.json"
import homeUk from "@/messages/uk/home.json"
import pricingEn from "@/messages/en/pricing.json"
import pricingPl from "@/messages/pl/pricing.json"
import pricingUk from "@/messages/uk/pricing.json"
import { buildPricingMarkdown, buildLlmsTxt } from "@/lib/machine-readable"
import { SEO_DESCRIPTION_MAX, SEO_TITLE_MAX } from "@/lib/seo"

const PAGE_META_BY_LOCALE = {
  en: [homeEn.meta, pricingEn.meta, nicheEn.meta, LEGAL_DRAFTS.terms, LEGAL_DRAFTS.privacy],
  uk: [homeUk.meta, pricingUk.meta, nicheUk.meta, LEGAL_DRAFTS.terms, LEGAL_DRAFTS.privacy],
  pl: [homePl.meta, pricingPl.meta, nichePl.meta, LEGAL_DRAFTS.terms, LEGAL_DRAFTS.privacy],
}

const PAGE_TITLES_BY_LOCALE = {
  en: PAGE_META_BY_LOCALE.en.map((item) => item.title),
  uk: PAGE_META_BY_LOCALE.uk.map((item) => item.title),
  pl: PAGE_META_BY_LOCALE.pl.map((item) => item.title),
}

describe("sitemap", () => {
  test("contains every localized live page with reciprocal alternates", () => {
    const entries = sitemap()

    const expectedLocalizedUrls = [
      "https://perelai.com/",
      "https://perelai.com/uk",
      "https://perelai.com/pl",
      "https://perelai.com/pricing",
      "https://perelai.com/uk/pricing",
      "https://perelai.com/pl/pricing",
      "https://perelai.com/for-independent-colorists",
      "https://perelai.com/uk/for-independent-colorists",
      "https://perelai.com/pl/for-independent-colorists",
      "https://perelai.com/terms",
      "https://perelai.com/uk/terms",
      "https://perelai.com/pl/terms",
      "https://perelai.com/privacy",
      "https://perelai.com/uk/privacy",
      "https://perelai.com/pl/privacy",
    ]

    for (const url of expectedLocalizedUrls) {
      const entry = entries.find((item) => item.url === url)
      expect(entry).toBeDefined()
      expect(entry?.alternates?.languages).toEqual(
        expect.objectContaining({
          en: expect.stringMatching(/^https:\/\/perelai\.com/),
          uk: expect.stringMatching(/^https:\/\/perelai\.com\/uk/),
          pl: expect.stringMatching(/^https:\/\/perelai\.com\/pl/),
          "x-default": expect.stringMatching(/^https:\/\/perelai\.com/),
        }),
      )
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

describe("metadata limits", () => {
  test("keeps all page titles <= 60 and descriptions <= 155", () => {
    for (const pageList of Object.values(PAGE_META_BY_LOCALE)) {
      for (const page of pageList) {
        expect(page.title.length).toBeLessThanOrEqual(SEO_TITLE_MAX)
        expect(page.description.length).toBeLessThanOrEqual(SEO_DESCRIPTION_MAX)
      }
    }
  })

  test("keeps page titles unique within each published locale", () => {
    for (const titles of Object.values(PAGE_TITLES_BY_LOCALE)) {
      expect(new Set(titles).size).toBe(titles.length)
    }
  })
})

describe("machine-readable files", () => {
  test("llms.txt and pricing.md are derived from live page copy", () => {
    const llms = buildLlmsTxt()
    const pricing = buildPricingMarkdown()

    expect(llms).toContain(homeEn.meta.description)
    expect(llms).toContain(pricingEn.capabilities.inbox)
    expect(llms).toContain("/for-independent-colorists (niche=premium-colorist)")

    expect(pricing).toContain(pricingEn.noCharge.commissionDetail)
    expect(pricing).toContain(pricingEn.noCharge.cardDetail)
    expect(pricing).toContain(pricingEn.capabilities.finance)
    expect(pricing).not.toMatch(/\$19|\$29|\$49/)
  })
})
