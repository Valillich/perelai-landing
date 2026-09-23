import { readFile } from "node:fs/promises"
import { afterEach, expect, test, vi } from "vitest"

const posthogMock = vi.hoisted(() => ({
  init: vi.fn(),
  capture: vi.fn(),
  register: vi.fn(),
}))

vi.mock("posthog-js", () => ({ default: posthogMock }))

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
  vi.clearAllMocks()
})

test("Launch v1 cannot initialise or send PostHog events even with a project key", async () => {
  vi.resetModules()
  vi.stubEnv("NEXT_PUBLIC_POSTHOG_KEY", "test-public-project-key")
  vi.stubGlobal("window", {})

  const { PostHogBootstrap } = await import("@/components/analytics/posthog-provider")
  const { analytics } = await import("@/lib/analytics")

  expect(PostHogBootstrap({ locale: "en" })).toBeNull()
  analytics.track({ name: "landing_viewed", properties: { landing_path: "/", locale: "en", page_type: "home" } })

  expect(posthogMock.init).not.toHaveBeenCalled()
  expect(posthogMock.capture).not.toHaveBeenCalled()
  expect(posthogMock.register).not.toHaveBeenCalled()
})

test("the landing entry point clears legacy attribution and does not mount analytics", async () => {
  const layout = await readFile(new URL("../app/[locale]/layout.tsx", import.meta.url), "utf8")

  expect(layout).toContain("<LegacyAttributionCleanup />")
  expect(layout).not.toContain("PostHogBootstrap")
})
