import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, expect, test, vi } from "vitest"

const validEnvironment = {
  NEXT_PUBLIC_APP_URL: "https://app.example.test",
  NEXT_PUBLIC_BOOKING_URL: "https://book.example.test",
  NEXT_PUBLIC_LANDING_URL: "https://landing.example.test",
  NEXT_PUBLIC_DEFAULT_CAMPAIGN: "founding-beta",
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

test("an external from value renders no return button and has no return destination", async () => {
  const { ReturnToApp, buildLegalReturnDestination } = await loadReturnToApp()
  const input = { from: "https://evil.example", page: "terms" as const, locale: "en" as const }
  const html = renderToStaticMarkup(createElement(ReturnToApp, input))

  expect(buildLegalReturnDestination(input)).toBeUndefined()
  expect(html).not.toContain("href=")
  expect(html).not.toContain("Back to")
})

test("a register return drops an unresolvable niche before rendering its URL", async () => {
  const { ReturnToApp, buildLegalReturnDestination } = await loadReturnToApp()
  const input = {
    from: "register",
    niche: "colorist",
    page: "privacy" as const,
    locale: "uk" as const,
  }
  const html = renderToStaticMarkup(createElement(ReturnToApp, input))
  const destination = buildLegalReturnDestination(input)
  const renderedHref = html.match(/href="([^"]+)"/)?.[1].replaceAll("&amp;", "&")

  expect(destination).toBeDefined()
  expect(renderedHref).toBeDefined()
  expect(html).toContain("Back to sign up")
  expect(new URL(destination!.href).pathname).toBe("/register")
  expect(new URL(destination!.href).searchParams.get("niche")).toBeNull()
  expect(new URL(renderedHref!).searchParams.get("niche")).toBeNull()
})
