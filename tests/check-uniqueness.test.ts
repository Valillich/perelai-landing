import { spawnSync } from "node:child_process"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, test } from "vitest"
import { checkUniquenessForPages, sharedTokenRatio, tokenize } from "../scripts/check-uniqueness.mjs"

describe("niche copy uniqueness", () => {
  test("keeps every published niche page at least 60% distinct from its locale homepage", () => {
    const result = spawnSync("pnpm", ["check:uniqueness"], {
      cwd: process.cwd(),
      encoding: "utf8",
    })

    expect(result.status, result.stderr || result.stdout).toBe(0)
  })

  test("fails when a thin/duplicate page overlaps more than 40% with the homepage", () => {
    const root = process.cwd()
    const homepageEn = JSON.parse(readFileSync(resolve(root, "messages/en/home.json"), "utf8"))
    const homepageTokens = tokenize(homepageEn)

    // Negative fixture: a thin page cloning the homepage copy
    const thinPageContent = {
      meta: { title: "Thin", description: "Thin" },
      eyebrow: homepageEn.hero.title,
      title: homepageEn.hero.title,
      subhead: homepageEn.hero.body,
      problem: homepageEn.problem,
      inbox: homepageEn.inbox,
      booking: homepageEn.booking,
      money: homepageEn.money,
      setup: homepageEn.setup,
      not: homepageEn.not,
      faq: homepageEn.faq,
    }

    const thinTokens = tokenize(thinPageContent)
    const result = sharedTokenRatio(thinTokens, homepageTokens)

    // Ratio must be > 0.40 (i.e. overlap > 40%)
    expect(result.ratio).toBeGreaterThan(0.4)

    const passed = checkUniquenessForPages(
      [
        {
          niche: "thin-duplicate-page",
          templateId: "independent_colorist",
          content: { en: thinPageContent },
        },
      ],
      ["en"],
    )

    expect(passed).toBe(false)
  })
})
