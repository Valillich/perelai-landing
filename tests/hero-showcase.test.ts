import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { NextIntlClientProvider } from "next-intl"
import { HeroShowcase } from "@/components/homepage/hero-showcase"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"
import enHome from "@/messages/en/home.json"

const REFERENCE = "2026-07-15T12:00:00.000Z"

describe("HeroShowcase finance-first order (FM3 §5)", () => {
  it("renders Finance before Calendar in the sr-only summary and initial markup", () => {
    const dataset = buildAppScreenDataset("independent_colorist", "en", "US", REFERENCE)
    const labels = {
      ariaLabel: enHome.hero.showcase.ariaLabel,
      calendarTab: enHome.hero.showcase.calendarTab,
      financeTab: enHome.hero.showcase.financeTab,
      paid: enHome.hero.showcase.paid,
      pending: enHome.hero.showcase.pending,
      caption: enHome.hero.imageCaption,
      categoryColor: enHome.finance.fixture.category.color,
      categoryStyling: enHome.finance.fixture.category.styling,
      openOrders: enHome.finance.fixture.openOrders,
    }

    const html = renderToStaticMarkup(
      createElement(
        NextIntlClientProvider,
        {
          locale: "en",
          messages: { home: enHome },
          children: createElement(HeroShowcase, { dataset, labels }),
        },
      ),
    )

    const srOnlyMatch = html.match(/sr-only[^>]*>([^<]+)/)
    expect(srOnlyMatch?.[1]).toContain(`${labels.financeTab}, ${labels.calendarTab}`)

    const financeTabIndex = html.indexOf(labels.financeTab)
    const calendarTabIndex = html.indexOf(labels.calendarTab)
    expect(financeTabIndex).toBeGreaterThan(-1)
    expect(calendarTabIndex).toBeGreaterThan(financeTabIndex)

    // KPI tiles from the fixture are present on first paint (Finance is index 0).
    expect(html).toContain(dataset.base.labels["chart_labels.revenue"])
    expect(html).toContain(dataset.base.labels["chart_labels.profit"])
  })
})
