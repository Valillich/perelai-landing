import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import {
  MockCashDrawerSummary,
  CASH_DRAWER_UI_KEYS,
  formatDrawerAmount,
  drawerLabel,
} from "@/components/mock/MockCashDrawerSummary"
import {
  MockWorkspaceAccessSummary,
  WORKSPACE_ACCESS_UI_KEYS,
} from "@/components/mock/MockWorkspaceAccessSummary"
import {
  MockPackageCheckout,
  PACKAGE_CHECKOUT_UI_KEYS,
} from "@/components/mock/MockPackageCheckout"
import uiStrings from "@/data/app-ui-strings.generated.json"

const ROOT = process.cwd()

function readJson(path: string): Record<string, unknown> {
  return JSON.parse(readFileSync(resolve(ROOT, path), "utf8"))
}

function readSource(path: string): string {
  return readFileSync(resolve(ROOT, path), "utf8")
}

describe("POS2 pinpoint checks", () => {
  describe("RU hero strings (OWNER APPROVED)", () => {
    const ru = readJson("messages/ru/home.json") as Record<string, Record<string, string>>

    it("hero.title is verbatim", () => {
      expect(ru.hero.title).toBe("Порядок в записях.")
    })

    it("hero.accent is verbatim", () => {
      expect(ru.hero.accent).toBe("Ясность в оплатах.")
    })

    it("hero.body is verbatim", () => {
      expect(ru.hero.body).toBe(
        "Планируйте визиты, ведите историю клиентов и отмечайте оплаты.",
      )
    })

    it("hero.signup is verbatim", () => {
      expect(ru.hero.signup).toBe("Попробовать 21 день")
    })

    it("hero.how is verbatim", () => {
      expect(ru.hero.how).toBe("Посмотреть, как это работает")
    })

    it("hero.trialMicro is verbatim", () => {
      expect(ru.hero.trialMicro).toBe(
        "21 день STUDIO без карты. После пробного периода оформите подписку.",
      )
    })
  })

  describe("hero.tsx renders one H1 with title + accent", () => {
    const source = readSource("components/homepage/hero.tsx")

    it("has exactly one <h1", () => {
      const matches = source.match(/<h1/g)
      expect(matches).toHaveLength(1)
    })

    it("renders hero.trialMicro and hero.micro", () => {
      expect(source).toContain('hero.trialMicro')
      expect(source).toContain('hero.micro')
    })
  })

  describe("HeroShowcase tab order", () => {
    const source = readSource("components/homepage/hero-showcase.tsx")

    it("Calendar is first in the screens array", () => {
      const calendarIndex = source.indexOf('"calendar"')
      const financeIndex = source.indexOf('"finance"')
      expect(calendarIndex).toBeGreaterThan(-1)
      expect(financeIndex).toBeGreaterThan(-1)
      expect(calendarIndex).toBeLessThan(financeIndex)
    })
  })

  describe("Header has no NicheMenu", () => {
    const source = readSource("components/landing/landing-header.tsx")

    it("does not import NicheMenu", () => {
      expect(source).not.toContain("NicheMenu")
    })

    it("does not pass group prop to MobileNav", () => {
      expect(source).not.toContain("nicheMenuLabel")
    })
  })

  describe("ConnectedRecords includes MockPackageCheckout", () => {
    const source = readSource("components/homepage/connected-records.tsx")

    it("imports MockPackageCheckout", () => {
      expect(source).toContain("MockPackageCheckout")
    })

    it("renders packages.title label", () => {
      expect(source).toContain("packages.title")
    })
  })

  describe("Collaboration includes MockWorkspaceAccessSummary", () => {
    const source = readSource("components/homepage/collaboration.tsx")

    it("imports MockWorkspaceAccessSummary", () => {
      expect(source).toContain("MockWorkspaceAccessSummary")
    })

    it("renders collaboration.accessTitle label", () => {
      expect(source).toContain("collaboration.accessTitle")
    })
  })

  describe("Setup anchor", () => {
    const source = readSource("components/homepage/setup.tsx")

    it("has id=how", () => {
      expect(source).toContain('id="how"')
    })
  })

  describe("Hero secondary CTA", () => {
    const source = readSource("components/homepage/hero.tsx")

    it("links to #how anchor", () => {
      expect(source).toContain('href="#how"')
    })
  })

  describe("MockCashDrawerSummary (R1 contract)", () => {
    const defaultLabels = {
      title: "Title",
      body: "Body",
      summary: "Summary",
      caption: "Caption",
    }

    it("server-renders across all 9 published locales", () => {
      for (const locale of PUBLISHED_LOCALES) {
        const html = renderToStaticMarkup(
          createElement(MockCashDrawerSummary, { locale, labels: defaultLabels }),
        )
        expect(html).toContain("150")
        expect(html).not.toContain("\\u2212")
        expect(html).not.toContain("&amp;#x2212;")
      }
    })

    it("formats negative amount with unicode minus (U+2212), not literal escape", () => {
      const formatted = formatDrawerAmount(-5, "en")
      expect(formatted).toBe("−$5")
      expect(formatted.charCodeAt(0)).toBe(0x2212)
    })

    it("renders deterministically", () => {
      const r1 = renderToStaticMarkup(
        createElement(MockCashDrawerSummary, { locale: "en", labels: defaultLabels }),
      )
      const r2 = renderToStaticMarkup(
        createElement(MockCashDrawerSummary, { locale: "en", labels: defaultLabels }),
      )
      expect(r1).toBe(r2)
    })
  })

  describe("MockWorkspaceAccessSummary (R1 contract)", () => {
    const defaultLabels = {
      accessTitle: "Title",
      accessBody: "Body",
      accessSummary: "Summary",
      planNote: "Team access is part of STUDIO.",
      caption: "Caption",
    }

    it("server-renders across all 9 published locales", () => {
      for (const locale of PUBLISHED_LOCALES) {
        const html = renderToStaticMarkup(
          createElement(MockWorkspaceAccessSummary, { locale, labels: defaultLabels }),
        )
        expect(html).toContain("Title")
        expect(html).toContain("Team access is part of STUDIO.")
      }
    })

    it("planNote is accessible and NOT inside aria-hidden=true", () => {
      const html = renderToStaticMarkup(
        createElement(MockWorkspaceAccessSummary, { locale: "en", labels: defaultLabels }),
      )
      expect(html).not.toMatch(/aria-hidden="true"[^>]*>[^<]*Team access is part of STUDIO\./)
      expect(html).toContain("Team access is part of STUDIO.")
    })

    it("renders deterministically", () => {
      const r1 = renderToStaticMarkup(
        createElement(MockWorkspaceAccessSummary, { locale: "en", labels: defaultLabels }),
      )
      const r2 = renderToStaticMarkup(
        createElement(MockWorkspaceAccessSummary, { locale: "en", labels: defaultLabels }),
      )
      expect(r1).toBe(r2)
    })
  })

  describe("MockPackageCheckout (R1 contract)", () => {
    const defaultLabels = {
      title: "Title",
      body: "Body",
      summary: "Summary",
      caption: "Caption",
    }

    it("server-renders across all 9 published locales", () => {
      for (const locale of PUBLISHED_LOCALES) {
        const html = renderToStaticMarkup(
          createElement(MockPackageCheckout, { locale, labels: defaultLabels }),
        )
        expect(html).toContain("2 / 3")
        expect(html).toContain("0")
        expect(html).not.toContain("≈")
      }
    })

    it("explicitly labels unit count and zero new payment without approximation", () => {
      const html = renderToStaticMarkup(
        createElement(MockPackageCheckout, { locale: "en", labels: defaultLabels }),
      )
      expect(html).toContain("2 / 3")
      expect(html).toContain("$0")
      expect(html).not.toMatch(/≈\s*\$0/)
    })

    it("renders deterministically", () => {
      const r1 = renderToStaticMarkup(
        createElement(MockPackageCheckout, { locale: "en", labels: defaultLabels }),
      )
      const r2 = renderToStaticMarkup(
        createElement(MockPackageCheckout, { locale: "en", labels: defaultLabels }),
      )
      expect(r1).toBe(r2)
    })
  })

  describe("Declared UI Keys coverage & negative guards", () => {
    it("all declared keys for MockCashDrawerSummary exist in every published locale", () => {
      for (const locale of PUBLISHED_LOCALES) {
        const bag = uiStrings.locales[locale] as Record<string, string>
        for (const key of CASH_DRAWER_UI_KEYS) {
          expect(bag[key]).toBeDefined()
          expect(typeof bag[key]).toBe("string")
        }
      }
    })

    it("all declared keys for MockWorkspaceAccessSummary exist in every published locale", () => {
      for (const locale of PUBLISHED_LOCALES) {
        const bag = uiStrings.locales[locale] as Record<string, string>
        for (const key of WORKSPACE_ACCESS_UI_KEYS) {
          expect(bag[key]).toBeDefined()
          expect(typeof bag[key]).toBe("string")
        }
      }
    })

    it("all declared keys for MockPackageCheckout exist in every published locale", () => {
      for (const locale of PUBLISHED_LOCALES) {
        const bag = uiStrings.locales[locale] as Record<string, string>
        for (const key of PACKAGE_CHECKOUT_UI_KEYS) {
          expect(bag[key]).toBeDefined()
          expect(typeof bag[key]).toBe("string")
        }
      }
    })

    it("negative test: missing key throws in helper", () => {
      expect(() => drawerLabel("en", "non_existent.cash_key" as any)).toThrow(
        /Missing cash drawer UI string/,
      )
    })
  })
})

