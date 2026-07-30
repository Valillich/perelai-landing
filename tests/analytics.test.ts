import { readFile } from "node:fs/promises"
import { afterEach, describe, expect, test } from "vitest"
import {
  buildLandingCtaClickedEvent,
  buildSignupStartedEvent,
  configureAnalyticsAdapter,
  resetAnalyticsEventDeduplication,
  trackAnalyticsEventOnce,
  type AnalyticsEvent,
} from "@/lib/analytics"

const destinationUrl =
  "https://app.example.test/register?niche=premium-colorist&utm_source=instagram&utm_campaign=founding-beta&landing_path=%2Ffor-independent-colorists&lng=uk&gclid=never-forwarded"

afterEach(() => {
  configureAnalyticsAdapter()
  resetAnalyticsEventDeduplication()
})

describe("signup acquisition events", () => {
  test("uses only the allowlisted destination parameters and mirrors signup_started", () => {
    expect(
      buildLandingCtaClickedEvent({
        href: destinationUrl,
        ctaPosition: "niche_hero",
        ctaText: "create_workspace",
        destination: "signup",
      }),
    ).toEqual({
      name: "landing_cta_clicked",
      properties: {
        cta_position: "niche_hero",
        cta_text: "create_workspace",
        destination: "signup",
        niche: "premium-colorist",
        utm_source: "instagram",
        utm_campaign: "founding-beta",
        landing_path: "/for-independent-colorists",
      },
    })

    expect(buildSignupStartedEvent(destinationUrl)).toEqual({
      name: "signup_started",
      properties: {
        niche: "premium-colorist",
        utm_source: "instagram",
        utm_campaign: "founding-beta",
      },
    })
  })

  test("does not send values that look like PII or a non-register destination", () => {
    const piiUrl =
      "https://app.example.test/register?utm_source=jane%40example.com&utm_campaign=4815551234"

    expect(buildSignupStartedEvent(piiUrl)).toEqual({
      name: "signup_started",
      properties: {},
    })
    expect(buildSignupStartedEvent("https://app.example.test/login?utm_source=instagram")).toBeUndefined()
  })
})

test("deduplicates pricing views independently for page and section surfaces", () => {
  const events: AnalyticsEvent[] = []
  configureAnalyticsAdapter({ track: (event) => events.push(event) })

  const pageEvent: AnalyticsEvent = {
    name: "pricing_viewed",
    properties: { source_page: "/pricing", surface: "page" },
  }
  const sectionEvent: AnalyticsEvent = {
    name: "pricing_viewed",
    properties: { source_page: "/", surface: "section" },
  }

  expect(trackAnalyticsEventOnce("pricing:/pricing:page", pageEvent)).toBe(true)
  expect(trackAnalyticsEventOnce("pricing:/pricing:page", pageEvent)).toBe(false)
  expect(trackAnalyticsEventOnce("pricing:/:section", sectionEvent)).toBe(true)

  expect(events).toEqual([pageEvent, sectionEvent])
})

test("the tracking plan records the disabled-by-default privacy decision", async () => {
  const plan = await readFile(new URL("../docs/tracking-plan.md", import.meta.url), "utf8")

  expect(plan).toMatch(/Owner\/legal decision: pending/i)
  expect(plan).toMatch(/session replay.*off/i)
  expect(plan).toMatch(/click IDs.*off/i)
  expect(plan).toMatch(/full referrer.*off/i)
  expect(plan).toMatch(/acquisitionNiche[\s\S]*acquisitionCampaign[\s\S]*acquisitionLandingPath/)
})
