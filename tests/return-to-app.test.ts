import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, expect, test, vi } from "vitest"

const validEnvironment = {
  NEXT_PUBLIC_APP_URL: "https://app.example.test",
  NEXT_PUBLIC_BOOKING_URL: "https://book.example.test",
  NEXT_PUBLIC_LANDING_URL: "https://landing.example.test",
}

async function loadReturnToApp() {
  vi.resetModules()
  for (const [key, value] of Object.entries(validEnvironment)) {
    vi.stubEnv(key, value)
  }

  return import("@/components/legal/return-to-app")
}

afterEach(() => {
  vi.unstubAllEnvs()
})

const labels = {
  login: "Back to log in",
  register: "Back to sign up",
  forgot: "Back to password reset",
}

test("an external from value renders only the safe landing-home fallback", async () => {
  const { ReturnToApp, buildLegalReturnDestination } = await loadReturnToApp()
  const input = { from: "https://evil.example", page: "terms" as const, locale: "en" as const }
  const html = renderToStaticMarkup(createElement(ReturnToApp, { ...input, labels }))

  expect(buildLegalReturnDestination(input)).toBeUndefined()
  expect(html).toContain('href="/"')
  expect(html).toContain("Back to Perelai")
  expect(html).not.toContain("evil.example")
})

test("a register return drops an unresolvable niche before rendering its URL", async () => {
  const { ReturnToApp, buildLegalReturnDestination } = await loadReturnToApp()
  const input = {
    from: "register",
    niche: "colorist",
    page: "privacy" as const,
    locale: "uk" as const,
  }
  const html = renderToStaticMarkup(createElement(ReturnToApp, { ...input, labels }))
  const destination = buildLegalReturnDestination(input)
  const renderedHref = html.match(/href="([^"]+)"/)?.[1].replaceAll("&amp;", "&")

  expect(destination).toBeDefined()
  expect(renderedHref).toBeDefined()
  expect(html).toContain("Back to sign up")
  expect(new URL(destination!.href).pathname).toBe("/register")
  expect(new URL(destination!.href).searchParams.get("niche")).toBeNull()
  expect(new URL(renderedHref!).searchParams.get("niche")).toBeNull()
})

test("a register return keeps a released offer and niche but drops marketing context", async () => {
  const { buildLegalReturnDestination } = await loadReturnToApp()
  const destination = buildLegalReturnDestination({
    from: "register",
    niche: "premium-colorist",
    offer: "SOLO_MONTHLY",
    source: "google",
    campaign: "autumn_launch",
    landingPath: "/for-independent-colorists",
    page: "terms",
    locale: "en",
    offerRelease: {
      codes: ["SOLO_MONTHLY", "STUDIO_MONTHLY"],
      studioReleased: false,
    },
  })

  const search = new URL(destination!.href).searchParams
  expect(destination?.href).toMatch(/^https:\/\/app\.example\.test\/register\?/)
  expect([...search.entries()]).toEqual([
    ["niche", "premium-colorist"],
    ["offer", "SOLO_MONTHLY"],
  ])
})

test("a gated, retired, annual, or provider-shaped offer never reaches app registration", async () => {
  const { buildLegalReturnDestination } = await loadReturnToApp()
  const release = { codes: ["SOLO_MONTHLY", "STUDIO_MONTHLY"], studioReleased: false }

  for (const offer of [
    "STUDIO_MONTHLY",
    "FOUNDING_SOLO",
    "ADDITIONAL_MONTHLY",
    "SOLO_ANNUAL",
    "pri_01h_provider_price",
  ]) {
    const destination = buildLegalReturnDestination({
      from: "register",
      offer,
      page: "privacy",
      locale: "en",
      offerRelease: release,
    })

    expect(new URL(destination!.href).searchParams.get("offer"), offer).toBeNull()
  }
})
