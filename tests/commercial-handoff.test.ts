import {afterEach, describe, expect, it, vi} from "vitest"
import {getOfferSignupRelease} from "@/lib/pricing-release"
import {buildAppSignupUrl} from "@/lib/urls"
import catalog from "@/data/commercial-offers.generated.json"
import {PRICING_PLANS} from "@/content/pricing"
import {spawnSync} from "node:child_process"
import {mkdtempSync, writeFileSync, rmSync} from "node:fs"
import {tmpdir} from "node:os"
import {join} from "node:path"

afterEach(() => vi.unstubAllEnvs())

describe("commercial handoff", () => {
  it("verifies the app projection and rejects a stale landing artifact", () => {
    const verified = spawnSync(process.execPath, ["--import", "tsx", "scripts/commercial-catalog.mjs"], {encoding: "utf8"})
    expect(verified.status, verified.stderr).toBe(0)
    const dir = mkdtempSync(join(tmpdir(), "perelai-commercial-"))
    try {
      const target = join(dir, "commercial.json")
      const stale = structuredClone(catalog)
      stale.offers[0].canonicalAmountMinor = 1800
      writeFileSync(target, `${JSON.stringify(stale, null, 2)}\n`)
      const rejected = spawnSync(process.execPath, ["--import", "tsx", "scripts/commercial-catalog.mjs"], {
        encoding: "utf8", env: {...process.env, VERIFY_COMMERCIAL_CATALOG_PATH: target},
      })
      expect(rejected.status).not.toBe(0)
      expect(rejected.stderr).toContain("Stale commercial catalog")
    } finally {
      rmSync(dir, {recursive: true, force: true})
    }
  })
  it("keeps display facts consistent with app-exported monthly offers", () => {
    expect(PRICING_PLANS.map(plan => [plan.offerCode, plan.monthlyUsd, plan.performerLimit]))
      .toEqual(catalog.offers.map(offer => [offer.offerCode, offer.canonicalAmountMinor / 100, offer.performerLimit]))
    expect(catalog.offers.map(offer => offer.offerCode)).toEqual(["SOLO_MONTHLY", "STUDIO_MONTHLY"])
    expect(JSON.stringify(catalog)).not.toMatch(/paddle|https?:|checkout|customer|(?:pri|pro|ctm)_/i)
  })

  it.each([
    ["false", "false", []], ["false", "true", []],
    ["true", "false", ["SOLO_MONTHLY"]],
    ["true", "true", ["SOLO_MONTHLY", "STUDIO_MONTHLY"]],
  ])("requires paid release %s and TEAM release %s", (billing, team, codes) => {
    vi.stubEnv("NEXT_PUBLIC_PAID_SUBSCRIPTIONS_LIVE", billing)
    vi.stubEnv("NEXT_PUBLIC_TEAM_RELEASED", team)
    const release = getOfferSignupRelease()
    expect(release.codes).toEqual(codes)
    for (const offer of ["SOLO_MONTHLY", "STUDIO_MONTHLY", "STUDIO_PLUS", "FOUNDING_MONTHLY", "SOLO_ANNUAL"]) {
      const url = new URL(buildAppSignupUrl({offer, offerRelease: release, locale: "pl"}))
      expect(url.searchParams.get("offer")).toBe(codes.includes(offer) ? offer : null)
      expect(url.searchParams.get("lng")).toBe("pl")
      expect([...url.searchParams.keys()]).not.toEqual(expect.arrayContaining(["country", "currency", "priceId"]))
    }
  })
})
