import { renderToStaticMarkup } from "react-dom/server"
import { createElement } from "react"
import { describe, expect, it } from "vitest"
import { MockCalendarMonth } from "@/components/mock/MockCalendarMonth"
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
        renderToStaticMarkup(createElement(MockFinanceKpis, { dataset }))
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
    const dataset = buildMockDataset("independent_colorist", "en", "US", REFERENCE)
    const html = renderToStaticMarkup(createElement(MockFinanceKpis, { dataset }))
    expect(html).toMatch(/<figcaption[^>]*>Example data<\/figcaption>/)
    expect(html).toContain(dataset.labels["chart_labels.revenue"])
  })
})
