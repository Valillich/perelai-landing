import { spawnSync } from "node:child_process"
import { mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { DeviceFrame } from "@/components/devices/device-frame"
import { DeviceDensityLadder } from "@/components/devices/device-density-ladder"
import {
  DESKTOP_RAIL_UI_KEYS,
  MockDesktopRail,
  RAIL_CONTEXTUAL_DESTINATIONS,
  RAIL_PRIMARY_DESTINATIONS,
  railLabel,
} from "@/components/mock/MockDesktopRail"
import { MockDesktopShell } from "@/components/mock/MockDesktopShell"
import { MockMobileShell } from "@/components/mock/MockMobileShell"
import uiStrings from "@/data/app-ui-strings.generated.json"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"

const TEMPLATE = "independent_colorist"
const REFERENCE = "2026-07-15T12:00:00.000Z"
const ROOT = process.cwd()

const datasetFor = (locale: (typeof PUBLISHED_LOCALES)[number]) =>
  buildAppScreenDataset(TEMPLATE, locale, undefined, REFERENCE)

const ladderLabels = { summary: "One workspace", paid: "Paid", pending: "Unpaid" }

describe("rail label sourcing", () => {
  it("declares every key it renders and resolves each in every published locale", () => {
    for (const key of DESKTOP_RAIL_UI_KEYS) {
      for (const locale of PUBLISHED_LOCALES) {
        expect(
          (uiStrings.locales[locale] as Record<string, string>)[key],
          `${key} @ ${locale}`,
        ).toBeTruthy()
      }
    }
  })

  it("renders generated product labels, never hand-typed ones", () => {
    const markup = renderToStaticMarkup(
      createElement(MockDesktopRail, { locale: "de" }),
    )

    // German, so an English label in the output means a literal leaked in.
    expect(markup).toContain(railLabel("de", "nav.calendar"))
    expect(markup).toContain(railLabel("de", "settings"))
    expect(markup).not.toContain(railLabel("en", "settings"))
  })

  it("throws rather than rendering a blank rail slot", () => {
    expect(() =>
      // @ts-expect-error — deliberately unknown key
      railLabel("en", "desktop_navigation.not_a_key"),
    ).toThrow(/Missing rail UI string/)
  })

  it("keeps every destination's label key inside the declared allowlist", () => {
    const declared = new Set<string>(DESKTOP_RAIL_UI_KEYS)
    for (const destination of RAIL_PRIMARY_DESTINATIONS) {
      expect(declared).toContain(destination.key)
    }
    for (const destination of Object.values(RAIL_CONTEXTUAL_DESTINATIONS)) {
      expect(declared).toContain(destination.key)
    }
  })
})

describe("shells render in every published locale", () => {
  for (const locale of PUBLISHED_LOCALES) {
    it(`renders rail, desktop shell and mobile shell for ${locale}`, () => {
      const dataset = datasetFor(locale)

      const rail = renderToStaticMarkup(createElement(MockDesktopRail, { locale }))
      const desktop = renderToStaticMarkup(
        createElement(MockDesktopShell, {
          dataset,
          paidLabel: "Paid",
          pendingLabel: "Unpaid",
        }),
      )
      const mobile = renderToStaticMarkup(
        createElement(MockMobileShell, {
          dataset,
          paidLabel: "Paid",
          pendingLabel: "Unpaid",
        }),
      )

      expect(rail).toContain(railLabel(locale, "nav.calendar"))
      expect(rail).toContain(railLabel(locale, "profile"))
      expect(desktop).toContain("w-[82px]")
      expect(mobile).toContain(railLabel(locale, "nav.calendar"))
    })
  }
})

describe("the density ladder", () => {
  const dataset = datasetFor("en")
  const markup = renderToStaticMarkup(
    createElement(DeviceDensityLadder, { dataset, labels: ladderLabels }),
  )

  it("carries one semantic summary outside the decorative subtree", () => {
    const summaryIndex = markup.indexOf(ladderLabels.summary)
    const firstHidden = markup.indexOf('aria-hidden="true"')

    expect(summaryIndex).toBeGreaterThan(-1)
    expect(firstHidden).toBeGreaterThan(-1)
    expect(summaryIndex).toBeLessThan(firstHidden)
  })

  it("shows exactly one Example data caption", () => {
    const occurrences = markup.split(dataset.base.exampleCaption).length - 1
    expect(occurrences).toBe(1)
  })

  it("uses the product's own breakpoints, not invented ones", () => {
    // 64rem = 1024px and 85rem = 1360px from responsiveLayout.ts; 1600px cap
    // from DesktopWorkspace.
    expect(markup).toContain("@[64rem]:")
    expect(markup).toContain("@[85rem]:")
    expect(markup).toContain("max-w-[1600px]")
    expect(markup).toContain("min-w-[64rem]")
  })

  it("renders all three densities (phone, tablet, desktop) from one dataset", () => {
    expect(markup).toContain("w-[82px]")
    expect(markup).toContain(railLabel("en", "nav.calendar"))
    // The same day total appears across chromes because the dataset is shared.
    expect(markup).toContain(dataset.selectedDayLabel)
    // Frame sizes for phone (rounded-[26px]), tablet (rounded-[20px]), and desktop (rounded-[16px])
    expect(markup).toContain("rounded-[26px]")
    expect(markup).toContain("rounded-[20px]")
    expect(markup).toContain("rounded-[16px]")
  })

  it("is deterministic across renders", () => {
    const again = renderToStaticMarkup(
      createElement(DeviceDensityLadder, { dataset: datasetFor("en"), labels: ladderLabels }),
    )
    expect(again).toBe(markup)
  })

  it("renders in every published locale without throwing", () => {
    for (const locale of PUBLISHED_LOCALES) {
      expect(() =>
        renderToStaticMarkup(
          createElement(DeviceDensityLadder, {
            dataset: datasetFor(locale),
            labels: ladderLabels,
          }),
        ),
      ).not.toThrow()
    }
  })
})

describe("device frames stay neutral", () => {
  it("renders three sizes with token-only styling", () => {
    for (const size of ["phone", "tablet", "desktop"] as const) {
      const markup = renderToStaticMarkup(
        createElement(DeviceFrame, { size, children: null }),
      )
      expect(markup).toContain("border-border")
      expect(markup).toContain("bg-card")
    }
  })
})

describe("anti-pattern and drift guards", () => {
  const sources = [
    "components/mock/MockDesktopRail.tsx",
    "components/mock/MockDesktopShell.tsx",
    "components/mock/MockMobileShell.tsx",
    "components/devices/device-frame.tsx",
    "components/devices/device-density-ladder.tsx",
    "components/devices/device-showcase.tsx",
    "components/devices/device-page.tsx",
  ].map((file) => ({ file, source: readFileSync(resolve(ROOT, file), "utf8") }))

  it("contains no hardcoded hex or raw inline rgba color", () => {
    for (const { file, source } of sources) {
      expect(source, file).not.toMatch(/#[0-9a-fA-F]{3,8}\b/)
      expect(source, file).not.toMatch(/\brgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+/)
    }
  })

  it("never calls Date.now()", () => {
    for (const { file, source } of sources) {
      expect(source, file).not.toContain("Date.now(")
    }
  })

  it("keeps every new surface a server component", () => {
    for (const { file, source } of sources) {
      expect(source, file).not.toContain('"use client"')
    }
  })

  it("hand-types no product destination label", () => {
    const englishLabels = ["Calendar", "Clients", "Finance", "Settings", "Profile"]
    for (const { file, source } of sources) {
      for (const label of englishLabels) {
        expect(source, `${file} :: ${label}`).not.toContain(`>${label}<`)
      }
    }
  })

  it("adds no device-mockup, 3D or charting dependency", () => {
    const manifest = JSON.parse(readFileSync(resolve(ROOT, "package.json"), "utf8"))
    const names = Object.keys({
      ...manifest.dependencies,
      ...manifest.devDependencies,
    })
    for (const banned of ["device-mockup", "react-device", "@react-three", "three", "recharts"]) {
      expect(names).not.toContain(banned)
    }
  })
})

describe("verify:niches rail key guard", () => {
  it("exits non-zero when an allowlisted rail key is removed from the fixture", () => {
    const dir = mkdtempSync(join(tmpdir(), "dvc2r-"))
    const stringsPath = join(dir, "app-ui-strings.generated.json")
    const strings = JSON.parse(
      readFileSync(resolve(ROOT, "data/app-ui-strings.generated.json"), "utf8"),
    )

    for (const locale of Object.keys(strings.locales)) {
      delete strings.locales[locale]["nav.calendar"]
    }
    strings.allowlist = strings.allowlist.filter((key: string) => key !== "nav.calendar")
    writeFileSync(stringsPath, JSON.stringify(strings), "utf8")

    const result = spawnSync("pnpm", ["exec", "tsx", "scripts/verify-niches.mjs"], {
      cwd: ROOT,
      encoding: "utf8",
      env: { ...process.env, VERIFY_STRINGS_PATH: stringsPath },
    })

    expect(result.status).not.toBe(0)
    expect(result.stderr + result.stdout).toContain("MockDesktopRail references key")
  }, 30000)
})

describe("the shell kit stays a presentation layer", () => {
  /**
   * Originally a DVC2R scope guard asserting `/install` did not exist yet.
   * DVC4 owns that route, so the assertion was replaced by the invariant it
   * was actually protecting: the rendered shells must stay route-, nav- and
   * metadata-free, so they compose anywhere without dragging routing in.
   */
  const SHELL_MODULES = [
    "components/mock/MockDesktopRail.tsx",
    "components/mock/MockDesktopShell.tsx",
    "components/mock/MockMobileShell.tsx",
    "components/devices/device-frame.tsx",
    "components/devices/device-density-ladder.tsx",
  ]

  for (const modulePath of SHELL_MODULES) {
    it(`keeps ${modulePath} free of routing and metadata seams`, () => {
      const source = readFileSync(resolve(ROOT, modulePath), "utf8")

      expect(source).not.toMatch(/from "@\/i18n\/navigation"/)
      expect(source).not.toMatch(/from "next\/navigation"/)
      expect(source).not.toMatch(/from "@\/lib\/seo"/)
      expect(source).not.toMatch(/generateStaticParams|generateMetadata/)
      // The rail's active state is a static prop, never router-derived.
      expect(source).not.toMatch(/usePathname|useRouter/)
    })
  }
})
