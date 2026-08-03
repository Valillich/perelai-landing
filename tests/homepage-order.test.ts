import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const ROOT = process.cwd()
const HOMEPAGE_PATH = resolve(ROOT, "components/homepage/homepage.tsx")
const FINANCE_OVERVIEW_PATH = resolve(ROOT, "components/homepage/finance-overview.tsx")
const OPERATIONS_PATH = resolve(ROOT, "components/homepage/operations.tsx")

const EXPECTED_ORDER = [
  "<Hero",
  "<FinanceOverview",
  "<FinancialStates",
  "<Drivers",
  "<ConnectedRecords",
  "<Operations",
  "<Devices",
  "<Collaboration",
  "<Setup",
  "<Not",
  "<NicheRouter",
  "<Faq",
  "<FinalCta",
] as const

describe("Homepage section order (FM3 §3)", () => {
  it("renders sections in the binding finance-first order", () => {
    const source = readFileSync(HOMEPAGE_PATH, "utf8")
    let cursor = -1
    for (const token of EXPECTED_ORDER) {
      const index = source.indexOf(token)
      expect(index, token).toBeGreaterThan(cursor)
      cursor = index
    }
  })

  it("does not render retired standalone sections", () => {
    const source = readFileSync(HOMEPAGE_PATH, "utf8")
    expect(source).not.toContain("<Problem")
    expect(source).not.toContain("<Inbox")
    expect(source).not.toContain("<Booking")
    expect(source).not.toContain("<Money")
  })

  it("puts #features on Finance overview, not Operations", () => {
    const finance = readFileSync(FINANCE_OVERVIEW_PATH, "utf8")
    const operations = readFileSync(OPERATIONS_PATH, "utf8")
    expect(finance).toContain('id="features"')
    expect(operations).not.toContain('id="features"')
  })
})
