import { afterEach, expect, test, vi } from "vitest"

const validEnvironment = {
  NEXT_PUBLIC_APP_URL: "https://app.example.test",
  NEXT_PUBLIC_BOOKING_URL: "https://book.example.test",
  NEXT_PUBLIC_LANDING_URL: "https://landing.example.test",
  NEXT_PUBLIC_DEFAULT_CAMPAIGN: "founding-beta",
}

class MemoryStorage {
  private readonly values = new Map<string, string>()

  getItem(key: string): string | null {
    return this.values.get(key) ?? null
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value)
  }

  removeItem(key: string): void {
    this.values.delete(key)
  }
}

async function loadAttribution() {
  vi.resetModules()
  for (const [key, value] of Object.entries(validEnvironment)) {
    vi.stubEnv(key, value)
  }

  return import("../lib/attribution")
}

afterEach(() => {
  vi.unstubAllEnvs()
})

test("captures only allowlisted UTM fields and the referrer hostname", async () => {
  const { captureFirstTouchAttribution } = await loadAttribution()
  const storage = new MemoryStorage()

  expect(
    captureFirstTouchAttribution({
      search:
        "?utm_source=instagram&utm_campaign=founding-beta&utm_medium=social&gclid=discard-me",
      referrer: "https://www.google.com/search?q=perelai",
      storage,
    }),
  ).toEqual({
    source: "instagram",
    campaign: "founding-beta",
    referrerHost: "www.google.com",
  })
})

test("keeps the first touch for the session", async () => {
  const { captureFirstTouchAttribution } = await loadAttribution()
  const storage = new MemoryStorage()

  captureFirstTouchAttribution({
    search: "?utm_source=instagram&utm_campaign=first-touch",
    storage,
  })

  expect(
    captureFirstTouchAttribution({
      search: "?utm_source=newsletter&utm_campaign=second-touch",
      storage,
    }),
  ).toMatchObject({ source: "instagram", campaign: "first-touch" })
})

test("uses referrer hostname and default campaign when UTMs are absent", async () => {
  const { captureFirstTouchAttribution } = await loadAttribution()

  expect(
    captureFirstTouchAttribution({ referrer: "https://partner.example/path?with=query" }),
  ).toEqual({
    source: "partner.example",
    campaign: "founding-beta",
    referrerHost: "partner.example",
  })
})

test("does not capture or store a self-referral on a legal page reached from the app", async () => {
  const { captureFirstTouchAttribution } = await loadAttribution()
  const storage = new MemoryStorage()

  expect(
    captureFirstTouchAttribution({
      search: "?from=register&utm_source=perelai-app&utm_campaign=self-referral",
      referrer: "https://app.perelai.com/register",
      storage,
    }),
  ).toEqual({ source: "direct", campaign: "founding-beta" })
  expect(storage.getItem("perelai_attr")).toBeNull()
})
