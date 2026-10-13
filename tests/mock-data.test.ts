import { renderToStaticMarkup } from "react-dom/server"
import { createElement } from "react"
import { describe, expect, it } from "vitest"
import { NicheMockSuite } from "@/components/niche/niche-mock-suite"
import uiStrings from "@/data/app-ui-strings.generated.json"
import { MockCalendarMonth } from "@/components/mock/MockCalendarMonth"
import { MockConnectedRecordsFeed } from "@/components/mock/MockConnectedRecordsFeed"
import { MockFinanceKpis } from "@/components/mock/MockFinanceKpis"
import { MockInboxTriage } from "@/components/mock/MockInboxTriage"
import { MockVisitCard } from "@/components/mock/MockVisitCard"
import { APP_LOCALES } from "@/i18n/locales"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"
import {
  buildMockDataset,
  buildTrustSentence,
  formatTrustAmount,
} from "@/lib/mock-data"
import { formatCurrency } from "@/lib/region"

const REFERENCE = "2026-07-15T12:00:00.000Z"

describe("buildMockDataset", () => {
  it("is deterministic for fixed inputs", () => {
    const a = buildMockDataset("independent_colorist", "en", "US", REFERENCE)
    const b = buildMockDataset("independent_colorist", "en", "US", REFERENCE)
    expect(a).toEqual(b)
    expect(a.visits[0].amount).toBe(b.visits[0].amount)
    expect(a.kpis).toEqual(b.kpis)
  })

  it("uses localized service and client names for de", () => {
    const de = buildMockDataset("independent_colorist", "de", "DE", REFERENCE)
    const en = buildMockDataset("independent_colorist", "en", "US", REFERENCE)

    expect(de.clients).not.toEqual(en.clients)
    expect(de.visits.every((visit) => !en.clients.includes(visit.clientName))).toBe(true)
    const differing = de.services.filter(
      (service) => !en.services.some((english) => english.name === service.name),
    )
    expect(differing.length).toBeGreaterThanOrEqual(4)
    expect(de.labels["inbox.title"]).not.toBe(en.labels["inbox.title"])
  })

  it("formats money with market currency and never a bare $ for PLN", () => {
    const pl = buildMockDataset("independent_colorist", "pl", "PL", REFERENCE)
    const formatted = formatCurrency(pl.trustTotal, "PL")
    const trust = formatTrustAmount(pl.trustTotal, "PL")

    expect(formatted).toMatch(/zł|PLN/i)
    expect(trust.startsWith("~$")).toBe(false)
    expect(trust).toContain("~")
    expect(buildTrustSentence(pl, "PL")).not.toMatch(/~\$\d/)
  })
})

describe("mock components", () => {
  it("renders all four mocks in every app locale without throwing", () => {
    for (const locale of APP_LOCALES) {
      const dataset = buildMockDataset("independent_colorist", locale, "US", REFERENCE)
      const screenDataset = buildAppScreenDataset(
        "independent_colorist",
        locale,
        "US",
        REFERENCE,
      )

      expect(() => {
        renderToStaticMarkup(createElement(MockInboxTriage, { dataset }))
        renderToStaticMarkup(createElement(MockCalendarMonth, { dataset: screenDataset }))
        renderToStaticMarkup(createElement(MockFinanceKpis, { dataset: screenDataset }))
        renderToStaticMarkup(
          createElement(MockVisitCard, { visit: dataset.visits[0], locale }),
        )
      }).not.toThrow()

      const inbox = renderToStaticMarkup(createElement(MockInboxTriage, { dataset }))
      expect(inbox).toContain(dataset.exampleCaption)
      expect(inbox).toContain(dataset.services[0].name.replace(/&/g, "&amp;"))
    }
  })

  it("keeps the localized example-data caption inside the mock frame", () => {
    const dataset = buildAppScreenDataset("independent_colorist", "en", "US", REFERENCE)
    const html = renderToStaticMarkup(createElement(MockFinanceKpis, { dataset }))
    expect(html).toMatch(/<figcaption[^>]*>Example data<\/figcaption>/)
    expect(html).toContain(dataset.base.labels["chart_labels.revenue"])
  })
})

describe("buildAppScreenDataset finance fixture wiring", () => {
  it("derives kpis, trend and feed from the finance fixture — not revenue*0.27", () => {
    const dataset = buildAppScreenDataset("independent_colorist", "en", "US", REFERENCE)
    expect(dataset.kpis).toEqual({ revenue: 535, cost: 240, profit: 295 })
    expect(dataset.openOrderBalance).toBe(300)
    expect(dataset.trend.at(-1)?.profit).toBe(295)
    expect(dataset.feed).toHaveLength(3)
    expect(dataset.feed.map((item) => item.amount)).toEqual([220, 180, 140])
    expect(dataset.categoryBreakdown.map((row) => row.settledRevenue)).toEqual([445, 90])
  })

  it("stays byte-identical across builds for a fixed reference instant", () => {
    const a = buildAppScreenDataset("independent_colorist", "en", "US", REFERENCE)
    const b = buildAppScreenDataset("independent_colorist", "en", "US", REFERENCE)
    expect(a.kpis).toEqual(b.kpis)
    expect(a.trend).toEqual(b.trend)
    expect(a.feed).toEqual(b.feed)
  })

  it("renders a package redemption as a neutral record without a money amount", () => {
    const html = renderToStaticMarkup(
      createElement(MockConnectedRecordsFeed, {
        locale: "en",
        items: [
          {
            id: "package-redemption",
            title: "Noah · Treatment",
            subtitle: "Jul 12",
            amount: 90,
            direction: "neutral",
            badge: "Package redemption — no new payment or revenue",
          },
        ],
      }),
    )

    expect(html).toContain("lucide-package-check")
    expect(html).not.toContain("$90")
    expect(html).not.toContain("+$90")
  })
})


describe("music teacher HTML mock", () => {
  it.each(APP_LOCALES)("uses edu labels and only music services for %s", locale => {
    const dataset = buildMockDataset("music_teacher", locale, "US", REFERENCE)
    const screenDataset = buildAppScreenDataset("music_teacher", locale, "US", REFERENCE)
    expect(dataset.labels["inbox.trust_visits_count"]).toBe(uiStrings.profiles.edu.locales[locale]["inbox.trust_visits_count"])
    expect(dataset.services.map(service => service.nameKey)).toEqual([
      "templates.music_teacher.services.mt1", "templates.music_teacher.services.mt2",
    ])
    expect(dataset.visits.every(visit => dataset.services.some(service => service.name === visit.serviceName))).toBe(true)
    expect(dataset.trustTotal).toBe(dataset.visits.reduce((total, visit) => total + visit.amount, 0))
    const html = renderToStaticMarkup(createElement(NicheMockSuite, { niche: "music-teacher", dataset, screenDataset }))
    for (const service of dataset.services) expect(html).toContain(service.name.replace(/&/g, "&amp;"))
    expect(html).not.toContain("<img")
    expect(html).not.toContain("music-calendar-")
    expect(html).toContain(dataset.exampleCaption)
  })
  it("keeps lesson count distinct from beauty visit count", () => {
    const music = buildMockDataset("music_teacher", "en", "US", REFERENCE)
    const beauty = buildMockDataset("independent_colorist", "en", "US", REFERENCE)
    expect(buildTrustSentence(music)).toContain("3 lessons")
    expect(buildTrustSentence(beauty)).toContain("3 visits")
  })
})


describe("photography and career HTML mocks", () => {
  const examples = [
    { templateId: "photographer", niche: "photography", profile: "pro", serviceKeys: ["templates.photographer.services.p1", "templates.photographer.services.p2"] },
    { templateId: "career_coach", niche: "career-coach", profile: "coaching", serviceKeys: ["templates.career_coach.services.cc1", "templates.career_coach.services.cc2"] },
  ] as const
  it.each(APP_LOCALES.flatMap(locale => examples.map(example => ({ locale, ...example }))))("renders $templateId in $locale with matching profile and services", ({ locale, templateId, niche, profile, serviceKeys }) => {
    const dataset = buildMockDataset(templateId, locale, "US", REFERENCE)
    const screenDataset = buildAppScreenDataset(templateId, locale, "US", REFERENCE)
    expect(dataset.services.map(service => service.nameKey)).toEqual(serviceKeys)
    expect(dataset.labels["inbox.ready_to_confirm"]).toBe(uiStrings.profiles[profile].locales[locale]["inbox.ready_to_confirm"])
    expect(dataset.trustTotal).toBe(dataset.visits.reduce((total, visit) => total + visit.amount, 0))
    const html = renderToStaticMarkup(createElement(NicheMockSuite, { niche, dataset, screenDataset }))
    for (const service of dataset.services) expect(html).toContain(service.name.replace(/&/g, "&amp;").replace(/'/g, "&#x27;"))
    expect(html).not.toContain("<img")
    expect(html).toContain(dataset.exampleCaption)
    expect(dataset.visits.every(visit => dataset.services.some(service => service.name === visit.serviceName))).toBe(true)
  })
})
