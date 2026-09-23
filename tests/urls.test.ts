import { afterEach, describe, expect, test, vi } from "vitest"

const validEnvironment = {
  NEXT_PUBLIC_APP_URL: "https://app.example.test",
  NEXT_PUBLIC_BOOKING_URL: "https://book.example.test",
  NEXT_PUBLIC_LANDING_URL: "https://landing.example.test",
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
  test("forwards only the validated product niche and language", async () => {
    const { buildAppSignupUrl } = await loadUrls()

    expect(
      buildAppSignupUrl({
        niche: "premium-colorist",
        locale: "uk",
      }),
    ).toBe(
      "https://app.example.test/register?niche=premium-colorist&lng=uk",
    )
  })

  test("omits an unknown niche instead of forwarding an unresolvable recommendation", async () => {
    const { buildAppSignupUrl } = await loadUrls()

    const url = new URL(
      buildAppSignupUrl({
        niche: "not-a-real-template",
      }),
    )

    expect(url.searchParams.get("niche")).toBeNull()
    expect([...url.searchParams]).toEqual([])
  })

  test("drops legacy marketing fields even if a caller passes them", async () => {
    const { buildAppSignupUrl } = await loadUrls()
    const url = new URL(
      buildAppSignupUrl({
        niche: "premium-colorist",
        source: "instagram",
        campaign: "launch",
        landingPath: "/for-independent-colorists",
        gclid: "click-id",
      } as Parameters<typeof buildAppSignupUrl>[0] & Record<string, string>),
    )

    expect(url.searchParams.get("niche")).toBe("premium-colorist")
    expect([...url.searchParams.entries()]).toEqual([["niche", "premium-colorist"]])
  })

  test("drops an over-length niche rather than sending a context the app will reject", async () => {
    const { buildAppSignupUrl } = await loadUrls()
    const url = new URL(
      buildAppSignupUrl({
        niche: `premium-${"colorist".repeat(20)}`,
      }),
    )

    expect(url.searchParams.get("niche")).toBeNull()
    expect([...url.searchParams]).toEqual([])
  })

  test("uses the supported locale as a language hint and rejects unsupported locales", async () => {
    const { buildAppSignupUrl } = await loadUrls()

    expect(new URL(buildAppSignupUrl({ locale: "uk" })).searchParams.get("lng")).toBe("uk")
    expect(new URL(buildAppSignupUrl({ locale: "zz" })).searchParams.get("lng")).toBeNull()
  })

  test("does not forward arbitrary query or click-id fields", async () => {
    const { buildAppSignupUrl } = await loadUrls()
    const url = new URL(
      buildAppSignupUrl({
        niche: "premium-colorist",
        locale: "pl",
        gclid: "click-id",
      } as Parameters<typeof buildAppSignupUrl>[0] & { gclid: string }),
    )

    expect([...url.searchParams.keys()]).toEqual([
      "niche",
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
