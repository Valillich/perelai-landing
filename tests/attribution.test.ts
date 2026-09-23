import { expect, test } from "vitest"
import { clearLegacyAttribution } from "../lib/attribution"

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

test("removes a record left by the earlier attribution implementation", () => {
  const storage = new MemoryStorage()
  storage.setItem("perelai_attr", '{"source":"instagram"}')
  storage.setItem("unrelated", "keep")

  clearLegacyAttribution(storage)

  expect(storage.getItem("perelai_attr")).toBeNull()
  expect(storage.getItem("unrelated")).toBe("keep")
})

test("storage denial does not block rendering or create a new attribution record", () => {
  const storage = {
    removeItem: (_key: string) => {
      throw new Error("denied")
    },
  }

  expect(() => clearLegacyAttribution(storage)).not.toThrow()
})
