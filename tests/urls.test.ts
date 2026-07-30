import { afterEach, describe, expect, test, vi } from "vitest"

const validEnvironment = {
  NEXT_PUBLIC_APP_URL: "https://app.example.test",
  NEXT_PUBLIC_BOOKING_URL: "https://book.example.test",
  NEXT_PUBLIC_LANDING_URL: "https://landing.example.test",
  NEXT_PUBLIC_DEFAULT_CAMPAIGN: "founding-beta",
}

async function loadUrls() {
  vi.resetModules()
  for (const [key, value] of Object.entries(validEnvironment)) {
    vi.stubEnv(key, value)
  }

  return import("../lib/urls")
}

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe("buildAppSignupUrl", () => {
  test("creates the allowlisted acquisition handoff for a valid slug", async () => {
    const { buildAppSignupUrl } = await loadUrls()

    expect(
      buildAppSignupUrl({
        niche: "premium-colorist",
        source: "instagram",
        campaign: "founding-beta",
        landingPath: "/for-independent-colorists",
      }),
    ).toBe(
      "https://app.example.test/register?niche=premium-colorist&utm_source=instagram&utm_campaign=founding-beta&landing_path=%2Ffor-independent-colorists",
    )
  })

  test("omits an unknown niche instead of forwarding an unresolvable recommendation", async () => {
    const { buildAppSignupUrl } = await loadUrls()

    const url = new URL(
      buildAppSignupUrl({
        niche: "not-a-real-template",
        source: "newsletter",
        campaign: "launch",
      }),
    )

    expect(url.searchParams.get("niche")).toBeNull()
    expect(url.searchParams.get("utm_source")).toBe("newsletter")
    expect(url.searchParams.get("utm_campaign")).toBe("launch")
  })

  test("clamps an over-length landing path without losing a valid niche", async () => {
    const { buildAppSignupUrl } = await loadUrls()
    const url = new URL(
      buildAppSignupUrl({
        niche: "premium-colorist",
        landingPath: `/${"a".repeat(300)}`,
      }),
    )

    expect(url.searchParams.get("niche")).toBe("premium-colorist")
    expect(url.searchParams.get("landing_path")).toHaveLength(240)
  })

  test("drops an over-length niche rather than sending a context the app will reject", async () => {
    const { buildAppSignupUrl } = await loadUrls()
    const url = new URL(
      buildAppSignupUrl({
        niche: `premium-${"colorist".repeat(20)}`,
        landingPath: "/for-independent-colorists",
      }),
    )

    expect(url.searchParams.get("niche")).toBeNull()
    expect(url.searchParams.get("landing_path")).toBe("/for-independent-colorists")
  })

  test("uses the supported locale as a language hint and rejects unsupported locales", async () => {
    const { buildAppSignupUrl } = await loadUrls()

    expect(new URL(buildAppSignupUrl({ locale: "uk" })).searchParams.get("lng")).toBe("uk")
    expect(new URL(buildAppSignupUrl({ locale: "zz" })).searchParams.get("lng")).toBeNull()
  })

  test("normalizes a localized path to its English canonical handoff path", async () => {
    const { buildAppSignupUrl } = await loadUrls()
    const url = new URL(
      buildAppSignupUrl({ landingPath: "/uk/for-independent-colorists?preview=true" }),
    )

    expect(url.searchParams.get("landing_path")).toBe("/for-independent-colorists")
  })

  test("does not forward arbitrary query or click-id fields", async () => {
    const { buildAppSignupUrl } = await loadUrls()
    const url = new URL(
      buildAppSignupUrl({
        niche: "premium-colorist",
        source: "instagram",
        campaign: "launch",
        landingPath: "/for-independent-colorists",
        locale: "pl",
        gclid: "click-id",
      } as Parameters<typeof buildAppSignupUrl>[0] & { gclid: string }),
    )

    expect([...url.searchParams.keys()]).toEqual([
      "niche",
      "utm_source",
      "utm_campaign",
      "landing_path",
      "lng",
    ])
  })

  test("returns generic signup when URL construction fails after config is valid", async () => {
    const { buildAppSignupUrl } = await loadUrls()
    const NativeUrl = globalThis.URL
    vi.stubGlobal("URL", function UnavailableUrl() {
      throw new Error("URL unavailable")
    })

    expect(buildAppSignupUrl({ niche: "premium-colorist" })).toBe(
      "https://app.example.test/register",
    )

    vi.stubGlobal("URL", NativeUrl)
  })
})

test("missing public configuration is a clear module-load failure", async () => {
  vi.resetModules()
  for (const [key, value] of Object.entries(validEnvironment)) {
    vi.stubEnv(key, value)
  }
  vi.stubEnv("NEXT_PUBLIC_APP_URL", "")

  await expect(import("../lib/urls")).rejects.toThrow(
    "Missing required environment variable: NEXT_PUBLIC_APP_URL",
  )
})
