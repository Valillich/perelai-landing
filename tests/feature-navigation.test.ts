import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { FEATURE_TOPICS, currentFeatureIndex, featureHref } from "@/lib/feature-navigation"
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
    for (const key of ["label", "contents", "previous", "next"]) expect(copy[key]).toBeTruthy()
    for (const topic of FEATURE_TOPICS) expect(copy.topics[topic.key]).toBeTruthy()
  })

  it("maps every topic to a real, unique anchor in page order", () => {
    const files = ["operations", "google-data-access", "connected-records", "cash-reconciliation", "collaboration", "finance-overview", "drivers", "devices"]
    expect(new Set(FEATURE_TOPICS.map(topic => topic.id)).size).toBe(FEATURE_TOPICS.length)
    FEATURE_TOPICS.forEach((topic, index) => {
      expect(readFileSync(`components/homepage/${files[index]}.tsx`, "utf8")).toContain(`id="${topic.id}"`)
    })
  })
})
