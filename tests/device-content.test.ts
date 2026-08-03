import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { messagesByLocale } from "@/i18n/messages"

const ROOT = process.cwd()

function leafPaths(value: unknown, prefix = ""): string[] {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
      leafPaths(child, prefix ? `${prefix}.${key}` : key),
    )
  }
  return [prefix]
}

function getByPath(value: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (!current || typeof current !== "object") return undefined
    return (current as Record<string, unknown>)[key]
  }, value)
}

const BANNED_PATTERNS: Array<{ name: string; pattern: RegExp }> = [
  { name: "PWA", pattern: /\bPWA\b/ },
  { name: "native app", pattern: /\bnative app\b/i },
  { name: "download CTA", pattern: /\b(download the app|download now|get it on)\b/i },
  { name: "offline-first", pattern: /offline-first/i },
  { name: "one-click install", pattern: /one-?click install|install in every browser/i },
  {
    name: "store availability claim",
    pattern:
      /\b(available (on|in) (the )?(app store|google play)|download on the app store|get it on google play)\b/i,
  },
]

describe("devices message-key parity", () => {
  const enKeys = leafPaths(messagesByLocale.en.devices)

  it("covers every published locale", () => {
    for (const locale of PUBLISHED_LOCALES) {
      expect(messagesByLocale[locale].devices, locale).toBeTruthy()
    }
  })

  for (const locale of PUBLISHED_LOCALES) {
    it(`matches English key set for ${locale}`, () => {
      const keys = leafPaths(messagesByLocale[locale].devices)
      expect(keys.sort()).toEqual([...enKeys].sort())
    })
  }

  it("has no empty string values in any locale", () => {
    for (const locale of PUBLISHED_LOCALES) {
      for (const key of enKeys) {
        const value = getByPath(messagesByLocale[locale].devices, key)
        expect(typeof value, `${locale}.${key}`).toBe("string")
        expect(String(value).trim().length, `${locale}.${key}`).toBeGreaterThan(0)
      }
    }
  })
})

describe("devices banned claims", () => {
  for (const locale of PUBLISHED_LOCALES) {
    it(`has no banned prospect-facing claims in ${locale}`, () => {
      const devices = messagesByLocale[locale].devices
      for (const key of leafPaths(devices)) {
        const value = String(getByPath(devices, key))
        for (const banned of BANNED_PATTERNS) {
          expect(banned.pattern.test(value), `${locale}.${key} → ${banned.name}`).toBe(false)
        }
      }
    })
  }
})

describe("devices caption and alt contracts", () => {
  const required = [
    "hero.caption",
    "showcase.caption",
    "showcase.screenshotCaption",
    "showcase.screenshotCaptionEnglishUi",
    "showcase.screenshotAlt",
    "meta.ogAlt",
  ]

  for (const locale of PUBLISHED_LOCALES) {
    it(`keeps caption/alt keys present for ${locale}`, () => {
      const devices = messagesByLocale[locale].devices
      for (const key of required) {
        expect(String(getByPath(devices, key)).length).toBeGreaterThan(0)
      }
      expect(String(getByPath(devices, "showcase.screenshotCaption"))).toMatch(
        /Actual product|Справжній|Prawdziwy|Настоящий|Producto real|Produit réel|Echtes Produkt|Produto real|Gerçek ürün/i,
      )
    })
  }

  it("keeps the desktop capture on disk as claim evidence", () => {
    // The capture no longer ships to visitors — the showcase renders live DOM
    // instead — but DVC2's evidence set still gates the desktop multi-pane
    // claim, so the asset and its manifest row must survive. See
    // `docs/device-capture-manifest.md` §7 for the open §8.5 contract gap.
    expect(existsSync(join(ROOT, "public/product/devices/desktop-calendar-1440.webp"))).toBe(true)
    expect(existsSync(join(ROOT, "public/product/devices/desktop-calendar-1440.jpg"))).toBe(true)
  })
})

describe("device presentation source contracts", () => {
  const guideSource = readFileSync(join(ROOT, "components/devices/platform-guide.tsx"), "utf8")
  const showcaseSource = readFileSync(
    join(ROOT, "components/devices/device-showcase.tsx"),
    "utf8",
  )
  const pageSource = readFileSync(join(ROOT, "components/devices/device-page.tsx"), "utf8")
  const confidenceSource = readFileSync(
    join(ROOT, "components/devices/device-confidence.tsx"),
    "utf8",
  )
  const tabsSource = readFileSync(
    join(ROOT, "components/devices/device-emphasis-tabs.tsx"),
    "utf8",
  )

  it("keeps all platform guides present for server-visible HTML", () => {
    for (const id of ["iphone", "ipad", "android", "desktop", "embedded"]) {
      expect(guideSource).toContain(`"${id}"`)
    }
    expect(guideSource).toContain("DeviceEmphasisTabs")
    expect(guideSource).toContain("DeviceEmphasisPanel")
    expect(pageSource).toContain("PlatformGuide")
    expect(pageSource).toContain("faq.q1")
    expect(pageSource).toContain("limitations.noStore")
  })

  it("composes DVC2R shells only, without store badges", () => {
    expect(showcaseSource).toContain("MockMobileShell")
    expect(showcaseSource).toContain("MockDesktopShell")
    // Every showcase visual is rendered DOM, so it follows the theme and the
    // reader's locale. The capture manifest records that no screenshot ships.
    expect(showcaseSource).not.toContain("next/image")
    expect(showcaseSource).not.toContain("/product/devices/")
    expect(showcaseSource).not.toMatch(/App Store|Google Play|badge/i)
    expect(pageSource).toContain("MockDesktopShell")
    expect(pageSource).toContain("DeviceShowcase")
    expect(pageSource).toContain("PlatformGuide")
    expect(pageSource).not.toMatch(/Date\.now\(/)
    expect(confidenceSource).toContain('href="/install"')
  })

  it("does not sniff UA, install prompts, or persist device selection", () => {
    for (const source of [
      guideSource,
      showcaseSource,
      pageSource,
      confidenceSource,
      tabsSource,
    ]) {
      expect(source).not.toMatch(/userAgent|beforeinstallprompt|display-mode|localStorage/)
    }
  })

  it("keeps inactive tab panels in the DOM and hides them visually", () => {
    expect(tabsSource).toContain('role="tabpanel"')
    expect(tabsSource).toContain("hidden={!active}")
    expect(tabsSource).not.toMatch(/display:\s*none/)
  })
})

describe("device concepts in home FAQ across all published locales", () => {
  for (const locale of PUBLISHED_LOCALES) {
    it(`includes iPad and laptop/computer concepts in home.faq.q8/a8 for ${locale}`, () => {
      const home = JSON.parse(readFileSync(join(ROOT, `messages/${locale}/home.json`), "utf8"))
      const q8 = home.faq?.q8 ?? ""
      const a8 = home.faq?.a8 ?? ""

      expect(q8.length, `${locale}.home.faq.q8`).toBeGreaterThan(0)
      expect(a8.length, `${locale}.home.faq.a8`).toBeGreaterThan(0)

      // Must explicitly mention iPad/tablet concept in q8
      expect(q8, `${locale} missing iPad/tablet concept in home.faq.q8`).toMatch(/iPad|tablet|планшет|таблет/i)
      // Must explicitly mention laptop/computer concept in q8
      expect(q8, `${locale} missing laptop/computer concept in home.faq.q8`).toMatch(/laptop|portátil|computador|ordinateur|komputer|ноутбук|ноутбуц|комп|dizüstü/i)
    })
  }
})

