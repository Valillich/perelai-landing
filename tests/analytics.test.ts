import { readFile } from "node:fs/promises"
import { afterEach, describe, expect, test } from "vitest"
import {
  buildLandingCtaClickedEvent,
  buildSignupStartedEvent,
  configureAnalyticsAdapter,
  resetAnalyticsEventDeduplication,
  trackAnalyticsEventOnce,
  type AnalyticsEvent,
  type CollaborationMessageViewedEvent,
  type DeviceMessageViewedEvent,
  type InstallGuideOpenedEvent,
  type InstallHelpClickedEvent,
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

  test("supports install-specific CtaPosition values", () => {
    const installPositions = ["install_hero_signup", "install_login", "install_final_signup"] as const

    for (const ctaPosition of installPositions) {
      const event = buildLandingCtaClickedEvent({
        href: destinationUrl,
        ctaPosition,
        ctaText: "create_workspace",
        destination: "signup",
      })
      expect(event.properties.cta_position).toBe(ctaPosition)
    }
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

describe("collaboration analytics events", () => {
  test("deduplicates collaboration_message_viewed once per page session with key collaboration_message_viewed:home", () => {
    const events: AnalyticsEvent[] = []
    configureAnalyticsAdapter({ track: (event) => events.push(event) })

    const homeEvent: CollaborationMessageViewedEvent = {
      name: "collaboration_message_viewed",
      properties: { surface: "home", locale: "en" },
    }

    expect(trackAnalyticsEventOnce("collaboration_message_viewed:home", homeEvent)).toBe(true)
    expect(trackAnalyticsEventOnce("collaboration_message_viewed:home", homeEvent)).toBe(false)

    expect(events).toEqual([homeEvent])
  })

  test("collaboration_message_viewed contains only surface and locale and excludes all forbidden properties", () => {
    const event: CollaborationMessageViewedEvent = {
      name: "collaboration_message_viewed",
      properties: { surface: "home", locale: "uk" },
    }

    expect(Object.keys(event.properties).sort()).toEqual(["locale", "surface"])
    expect(event.properties.surface).toBe("home")
    expect(event.properties.locale).toBe("uk")

    const forbiddenFields = [
      "teamSize",
      "roles",
      "noteContent",
      "companyData",
      "clientData",
      "viewport",
      "screenResolution",
      "userAgent",
      "browserVersion",
      "deviceModel",
      "displayMode",
      "installedState",
      "freeText",
      "urlParams",
      "visitorInput",
      "gclid",
      "fbclid",
      "ipAddress",
    ]

    const propsKeys = Object.keys(event.properties)
    for (const field of forbiddenFields) {
      expect(propsKeys, `collaboration_message_viewed should not contain ${field}`).not.toContain(field)
    }
  })
})

describe("device & install analytics events", () => {
  test("deduplicates device_message_viewed independently for home and niche surfaces", () => {
    const events: AnalyticsEvent[] = []
    configureAnalyticsAdapter({ track: (event) => events.push(event) })

    const homeEvent: DeviceMessageViewedEvent = {
      name: "device_message_viewed",
      properties: { surface: "home", locale: "en" },
    }
    const nicheEvent: DeviceMessageViewedEvent = {
      name: "device_message_viewed",
      properties: { surface: "niche", locale: "en" },
    }

    expect(trackAnalyticsEventOnce("device_message_viewed:home", homeEvent)).toBe(true)
    expect(trackAnalyticsEventOnce("device_message_viewed:home", homeEvent)).toBe(false)
    expect(trackAnalyticsEventOnce("device_message_viewed:niche", nicheEvent)).toBe(true)

    expect(events).toEqual([homeEvent, nicheEvent])
  })

  test("constructs typed install_guide_opened and install_help_clicked with fixed enums", () => {
    const guideEvent: InstallGuideOpenedEvent = {
      name: "install_guide_opened",
      properties: { platform: "iphone", source_page: "/install" },
    }

    const helpEvent: InstallHelpClickedEvent = {
      name: "install_help_clicked",
      properties: { source_surface: "header" },
    }

    expect(guideEvent.properties.platform).toBe("iphone")
    expect(helpEvent.properties.source_surface).toBe("header")
  })

  test("device events exclude PII and device fingerprint fields", () => {
    const events: AnalyticsEvent[] = [
      { name: "device_message_viewed", properties: { surface: "home", locale: "en" } },
      { name: "install_guide_opened", properties: { platform: "android", source_page: "/install" } },
      { name: "install_help_clicked", properties: { source_surface: "niche" } },
    ]

    const forbiddenFields = ["userAgent", "screenResolution", "deviceModel", "installedState", "displayMode", "notificationPermission", "ipAddress"]

    for (const event of events) {
      const propsKeys = Object.keys(event.properties)
      for (const field of forbiddenFields) {
        expect(propsKeys, `${event.name} should not contain ${field}`).not.toContain(field)
      }
    }
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

test("the tracking plan records the approved privacy decision while replay and click IDs remain off", async () => {
  const plan = await readFile(new URL("../docs/tracking-plan.md", import.meta.url), "utf8")

  expect(plan).toMatch(/Owner\/legal decision: approved/i)
  expect(plan).toMatch(/session replay.*off/i)
  expect(plan).toMatch(/click IDs.*off/i)
  expect(plan).toMatch(/full referrer.*off/i)
  expect(plan).toMatch(/device_message_viewed/)
  expect(plan).toMatch(/collaboration_message_viewed/)
  expect(plan).toMatch(/install_guide_opened/)
  expect(plan).toMatch(/install_help_clicked/)
})
