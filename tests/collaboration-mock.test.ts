import { mkdtempSync, readFileSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { spawnSync } from "node:child_process"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import {
  TEAM_COLLABORATION_UI_KEYS,
  MockCollaborationWorkspace,
  collaborationLabel,
} from "@/components/mock/MockCollaborationWorkspace"
import uiStrings from "@/data/app-ui-strings.generated.json"
import { PUBLISHED_LOCALES } from "@/i18n/locales"

const ROOT = process.cwd()
const SOURCE_PATH = resolve(ROOT, "components/mock/MockCollaborationWorkspace.tsx")
const source = readFileSync(SOURCE_PATH, "utf8")

const FROZEN_SUMMARY =
  "Example Perelai workspace showing team roles, schedules and a pinned client note inside one business."
const FROZEN_CAPTION = "Example data"

/** React escapes `'` and `&` in text nodes; French and Turkish labels carry both. */
const decodeEntities = (markup: string) =>
  markup
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")

const renderMock = (
  locale: (typeof PUBLISHED_LOCALES)[number],
  overrides?: { summary?: string; exampleCaption?: string; showCaption?: boolean },
) =>
  decodeEntities(
    renderToStaticMarkup(
      createElement(MockCollaborationWorkspace, {
        locale,
        summary: overrides?.summary ?? FROZEN_SUMMARY,
        exampleCaption: overrides?.exampleCaption ?? FROZEN_CAPTION,
        showCaption: overrides?.showCaption,
        mockData: {
          pinnedNote: "Prefers quiet mornings before colour.",
          visitNote: "Confirmed shade match on last visit.",
          hours1: "Mon–Fri · 09:00–17:00",
          hours2: "Tue–Sat · 10:00–18:00",
          hours3: "Wed–Sun · 11:00–19:00",
        }
      }),
    ),
  )

describe("TEAM_COLLABORATION_UI_KEYS", () => {
  it("declares the team-only key set required while TC5 is HOLD", () => {
    expect([...TEAM_COLLABORATION_UI_KEYS]).toEqual([
      "staff_management.header_title",
      "staff_management.status_active",
      "staff_management.working_hours",
      "staff_management.role_staff_title",
      "staff_management.role_supervisor_title",
      "notes.pinned_title",
      "notes.visit_note",
    ])
  })

  it("resolves every declared key in every published locale", () => {
    for (const key of TEAM_COLLABORATION_UI_KEYS) {
      for (const locale of PUBLISHED_LOCALES) {
        expect(
          (uiStrings.locales[locale] as Record<string, string>)[key],
          `${key} @ ${locale}`,
        ).toBeTruthy()
      }
    }
  })

  it("throws rather than rendering a blank product label", () => {
    expect(() =>
      collaborationLabel(
        "en",
        "staff_management.not_a_key" as (typeof TEAM_COLLABORATION_UI_KEYS)[number],
      ),
    ).toThrow(/Missing collaboration UI string/)
  })
})

describe("MockCollaborationWorkspace server render", () => {
  for (const locale of PUBLISHED_LOCALES) {
    it(`renders generated product labels for ${locale}`, () => {
      const markup = renderMock(locale)

      for (const key of TEAM_COLLABORATION_UI_KEYS) {
        expect(markup).toContain(collaborationLabel(locale, key))
      }
    })
  }

  it("is deterministic across repeated renders", () => {
    const first = renderMock("en")
    const second = renderMock("en")
    expect(second).toBe(first)
  })

  it("carries exactly one sr-only summary outside the aria-hidden subtree", () => {
    const markup = renderMock("en")
    const summaryIndex = markup.indexOf(FROZEN_SUMMARY)
    const srOnlyIndex = markup.indexOf("sr-only")
    const firstHidden = markup.indexOf('aria-hidden="true"')

    expect(summaryIndex).toBeGreaterThan(-1)
    expect(srOnlyIndex).toBeGreaterThan(-1)
    expect(firstHidden).toBeGreaterThan(-1)
    expect(summaryIndex).toBeLessThan(firstHidden)
    expect(srOnlyIndex).toBeLessThan(firstHidden)
    expect(markup.split(FROZEN_SUMMARY).length - 1).toBe(1)
    expect(markup.split('aria-hidden="true"').length - 1).toBe(1)
  })

  it("shows exactly one Example data caption by default", () => {
    const markup = renderMock("en")
    expect(markup.split(FROZEN_CAPTION).length - 1).toBe(1)
    expect(markup).toMatch(/<figcaption[^>]*>Example data<\/figcaption>/)
  })

  it("omits the caption when showCaption is false", () => {
    const markup = renderMock("en", { showCaption: false })
    expect(markup).not.toContain(FROZEN_CAPTION)
    expect(markup).not.toContain("<figcaption")
  })
})

describe("privacy and TC5 HOLD shape", () => {
  it("renders no coworker zone, keys, or occupied-time surface", () => {
    expect(source).not.toMatch(/coworker\./)
    expect(source).not.toContain("Occupied")
    expect(source).not.toContain("busy_block")
    expect(source).not.toContain("invite_privacy")
    expect(source).not.toContain("list_title")

    const markup = renderMock("en")
    expect(markup).not.toMatch(/coworker/i)
    expect(markup).not.toContain("Occupied")
  })

  it("keeps note labels inside the workspace zone and never invents a coworker subtree", () => {
    const markup = renderMock("en")
    // Notes must appear (workspace proof), but no second company surface.
    expect(markup).toContain(collaborationLabel("en", "notes.pinned_title"))
    expect(markup).toContain(collaborationLabel("en", "notes.visit_note"))
    expect(markup).not.toMatch(/companyColor|companyName|transactionId|payment/i)
    expect(markup).not.toMatch(/\$\d|€\d|£\d/)
    expect(source).not.toContain("companyColor")
    expect(source).not.toContain("companyName")
  })

  it("contains no real-looking email or phone data", () => {
    expect(source).not.toMatch(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
    expect(source).not.toMatch(/\+?\d[\d\s().-]{7,}\d/)

    const markup = renderMock("en")
    expect(markup).not.toMatch(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
    expect(markup).not.toMatch(/\+?\d[\d\s().-]{7,}\d/)
  })

  it("does not expose invented employee or note rows outside aria-hidden", () => {
    const markup = renderMock("en")
    const hiddenStart = markup.indexOf('aria-hidden="true"')
    const beforeHidden = markup.slice(0, hiddenStart)

    expect(beforeHidden).not.toContain("Mia")
    expect(beforeHidden).not.toContain("Leo")
    expect(beforeHidden).not.toContain("Ana")
    expect(beforeHidden).not.toContain("Prefers quiet mornings")
    expect(beforeHidden).not.toContain("Confirmed shade match")
  })
})

describe("anti-pattern guards", () => {
  it("is a server component with no interactivity, routing, or fetch", () => {
    expect(source).not.toContain('"use client"')
    expect(source).not.toContain("'use client'")
    expect(source).not.toMatch(/useState|useEffect|useMemo|useCallback|useRef/)
    expect(source).not.toMatch(/onClick|onKeyDown|onChange|href=|<button|<a |<input|<select|<textarea/)
    expect(source).not.toMatch(/from "@\/i18n\/navigation"|from "next\/navigation"|from "next\/link"/)
    expect(source).not.toMatch(/\bfetch\s*\(|Date\.now\s*\(|Math\.random\s*\(/)
  })

  it("uses semantic tokens only — no raw hex or inline RGB/RGBA", () => {
    expect(source).not.toMatch(/#[0-9a-fA-F]{3,8}\b/)
    expect(source).not.toMatch(/\brgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/)
  })

  it("hand-types no English product role or note labels", () => {
    expect(source).not.toContain(">Staff<")
    expect(source).not.toContain(">Supervisor<")
    expect(source).not.toContain(">Pinned note<")
    expect(source).not.toContain(">Visit note<")
    expect(source).not.toContain(">Team & Availability<")
    expect(source).not.toContain(">Working Hours<")
    expect(source).not.toContain(">active<")
  })
})

describe("verify:niches collaboration key guard", () => {
  it("exits non-zero when one declared collaboration key is missing from one locale", () => {
    const dir = mkdtempSync(join(tmpdir(), "team3-collab-"))
    const stringsPath = join(dir, "app-ui-strings.generated.json")
    const strings = JSON.parse(
      readFileSync(resolve(ROOT, "data/app-ui-strings.generated.json"), "utf8"),
    )

    delete strings.locales.fr["notes.visit_note"]
    writeFileSync(stringsPath, JSON.stringify(strings), "utf8")

    const result = spawnSync("pnpm", ["verify:niches"], {
      cwd: ROOT,
      encoding: "utf8",
      env: { ...process.env, VERIFY_STRINGS_PATH: stringsPath },
    })

    expect(result.status).not.toBe(0)
    const output = `${result.stdout}\n${result.stderr}`
    expect(output).toMatch(/notes\.visit_note/)
    expect(output).toMatch(/MockCollaborationWorkspace|missing from locale=fr|allowlisted key/)
  }, 30000)
})
