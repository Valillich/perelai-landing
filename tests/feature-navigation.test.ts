import { readFileSync } from "node:fs"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { NextIntlClientProvider } from "next-intl"
import { describe, expect, it } from "vitest"
import { FEATURE_TOPICS, currentFeatureIndex, featureHref, featureSegmentProgress } from "@/lib/feature-navigation"
import { FeatureNavigator } from "@/components/homepage/feature-navigator"
import { messagesByLocale } from "@/i18n/messages"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"

describe("feature navigation", () => {
  it.each(PUBLISHED_LOCALES)("keeps homepage anchors local and resolves other pages to the %s homepage", locale => {
    for (const topic of FEATURE_TOPICS) {
      expect(featureHref(locale, "/", topic.id)).toBe(`#${topic.id}`)
      // Niche pages have their own #features but not the detailed feature sections.
      for (const path of ["/pricing", "/install", "/for-barbers"]) {
        expect(featureHref(locale, path, topic.id)).toBe(`${localizePath(locale, "/")}#${topic.id}`)
      }
    }
  })

  it("retains the current topic in a gap and when scrolling back up", () => {
    expect(currentFeatureIndex([500, 1000, 1800], 270)).toBe(0)
    expect(currentFeatureIndex([-1000, -400, 300], 270)).toBe(1)
    expect(currentFeatureIndex([-1000, -400, 270], 270)).toBe(2)
    expect(currentFeatureIndex([-1000, -400, 271], 270)).toBe(1)
    expect(currentFeatureIndex([-1800, -1000, -100], 270)).toBe(2)
  })

  it.each(PUBLISHED_LOCALES)("has native labels for every topic and control in %s", locale => {
    const copy = JSON.parse(readFileSync(`messages/${locale}/home.json`, "utf8")).featureNav
    expect(copy.label).toBeTruthy()
    for (const topic of FEATURE_TOPICS) {
      expect(copy.topics[topic.key]).toBeTruthy()
      expect(copy.shortTopics[topic.key]).toBeTruthy()
    }
  })

  it("maps every topic to a real, unique anchor in page order", () => {
    const files = ["operations", "google-data-access", "connected-records", "cash-reconciliation", "collaboration", "finance-overview", "drivers", "devices"]
    expect(new Set(FEATURE_TOPICS.map(topic => topic.id)).size).toBe(FEATURE_TOPICS.length)
    FEATURE_TOPICS.forEach((topic, index) => {
      expect(readFileSync(`components/homepage/${files[index]}.tsx`, "utf8")).toContain(`id="${topic.id}"`)
    })
  })

  it.each(PUBLISHED_LOCALES)("labels all eight dot links with full feature names in %s", locale => {
    const html = renderToStaticMarkup(createElement(NextIntlClientProvider, {
      locale, messages: messagesByLocale[locale], timeZone: "UTC",
      children: createElement(FeatureNavigator),
    }))
    for (const topic of FEATURE_TOPICS) {
      const fullLabel = messagesByLocale[locale].home.featureNav.topics[topic.key]
      const escapedLabel = renderToStaticMarkup(createElement("span", null, fullLabel)).slice(6, -7)
      // Both responsive presentations retain the full accessible feature name.
      expect(html.split(`href="#${topic.id}" aria-label="${escapedLabel}"`)).toHaveLength(3)
    }
    // Before hydration the passive rail cannot introduce invisible tab stops.
    expect(html).toContain('aria-hidden="true" inert=""')
  })

  it("fills continuously between anchors, including Calendar nested inside Operations", () => {
    const bookingTop = 1000
    const calendarTop = 1600
    const paymentsTop = 2000
    expect(featureSegmentProgress(bookingTop, calendarTop, 900)).toBe(0)
    expect(featureSegmentProgress(bookingTop, calendarTop, 1000)).toBe(0)
    expect(featureSegmentProgress(bookingTop, calendarTop, 1150)).toBe(0.25)
    expect(featureSegmentProgress(bookingTop, calendarTop, 1300)).toBe(0.5)
    expect(featureSegmentProgress(bookingTop, calendarTop, 1600)).toBe(1)
    expect(featureSegmentProgress(bookingTop, calendarTop, 1700)).toBe(1)
    expect(featureSegmentProgress(calendarTop, paymentsTop, 1700)).toBe(0.25)
    expect(featureSegmentProgress(calendarTop, paymentsTop, 1900)).toBe(0.75)
  })

  it("rewinds progress and safely handles collapsed sections", () => {
    expect(featureSegmentProgress(-100, 300, 200)).toBe(0.75)
    expect(featureSegmentProgress(100, 500, 200)).toBe(0.25)
    expect(featureSegmentProgress(100, 100, 99)).toBe(0)
    expect(featureSegmentProgress(100, 100, 100)).toBe(1)
  })
})
