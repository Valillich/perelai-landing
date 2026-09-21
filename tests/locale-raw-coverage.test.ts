import { describe, expect, test } from "vitest"
import fs from "node:fs"
import path from "node:path"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { MockCashDrawerSummary } from "@/components/mock/MockCashDrawerSummary"
import { MockWorkspaceAccessSummary } from "@/components/mock/MockWorkspaceAccessSummary"
import { MockPackageCheckout } from "@/components/mock/MockPackageCheckout"

/**
 * POS3 raw locale coverage and positioning invariant test suite.
 * Validates raw messages/<locale>/home.json directly without relying on next-intl fallback merges.
 */

const MANIFEST_KEYS = [
  "hero.eyebrow",
  "hero.title",
  "hero.accent",
  "hero.body",
  "hero.signup",
  "hero.how",
  "hero.trialMicro",
  "hero.micro",
  "hero.deviceMicro",
  "hero.imageAlt",
  "hero.imageCaption",
  "nav.start",
  "nav.start_short",
  "operations.title",
  "operations.body",
  "records.title",
  "records.body",
  "packages.title",
  "packages.body",
  "packages.summary",
  "packages.caption",
  "drawer.title",
  "drawer.body",
  "drawer.summary",
  "drawer.caption",
  "collaboration.title",
  "collaboration.body",
  "collaboration.teamTitle",
  "collaboration.teamBody",
  "collaboration.notesDetail",
  "collaboration.summary",
  "collaboration.caption",
  "collaboration.accessTitle",
  "collaboration.accessBody",
  "collaboration.accessSummary",
  "collaboration.planNote",
  "finance.title",
  "finance.body",
  "finance.summary",
  "finance.caption",
  "states.title",
  "drivers.title",
  "drivers.body",
  "setup.eyebrow",
  "setup.title",
  "setup.body",
  "setup.step1Title",
  "setup.step1Body",
  "setup.step2Title",
  "setup.step2Body",
  "setup.step3Title",
  "setup.step3Body",
  "not.title",
  "not.body",
  "not.item1Title",
  "not.item1Body",
  "not.item2Title",
  "not.item2Body",
  "not.item3Title",
  "not.item3Body",
  "faq.title",
  "faq.q1",
  "faq.a1",
  "faq.q2",
  "faq.a2",
  "faq.q3",
  "faq.a3",
  "faq.q4",
  "faq.a4",
  "faq.q5",
  "faq.a5",
  "faq.q6",
  "faq.a6",
  "closing.title",
  "closing.body",
  "closing.cta",
  "closing.micro",
  "meta.title",
  "meta.description",
  "footer.description",
  "footer.devices",
] as const

function getPath(obj: unknown, keyPath: string): unknown {
  return keyPath.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, obj)
}

describe("POS3 raw locale coverage (all 9 published locales)", () => {
  const rawLocales: Record<string, Record<string, unknown>> = {}
  const rawFileContents: Record<string, string> = {}

  for (const locale of PUBLISHED_LOCALES) {
    const filePath = path.join(process.cwd(), `messages/${locale}/home.json`)
    const content = fs.readFileSync(filePath, "utf8")
    rawFileContents[locale] = content
    rawLocales[locale] = JSON.parse(content)
  }

  const enData = rawLocales.en

  test.each(PUBLISHED_LOCALES)("%s: all 80 manifest scope keys exist and are non-empty", (locale) => {
    const data = rawLocales[locale]
    for (const key of MANIFEST_KEYS) {
      const val = getPath(data, key)
      expect(val, `Missing key "${key}" in messages/${locale}/home.json`).toBeDefined()
      expect(typeof val, `Key "${key}" is not string in messages/${locale}/home.json`).toBe("string")
      expect((val as string).trim().length, `Key "${key}" is empty in messages/${locale}/home.json`).toBeGreaterThan(0)
    }
  })

  test.each(PUBLISHED_LOCALES)("%s: no literal \\u2212 escape sequence (must be Unicode minus character)", (locale) => {
    expect(rawFileContents[locale].includes("\\u2212"), `${locale} contains literal \\u2212 string`).toBe(false)
  })

  test.each(PUBLISHED_LOCALES)("%s: hero title and accent end with a period", (locale) => {
    const data = rawLocales[locale]
    const title = getPath(data, "hero.title") as string
    const accent = getPath(data, "hero.accent") as string
    expect(title.endsWith("."), `hero.title should end with period in ${locale}: "${title}"`).toBe(true)
    expect(accent.endsWith("."), `hero.accent should end with period in ${locale}: "${accent}"`).toBe(true)
  })

  test.each(PUBLISHED_LOCALES)("%s: drawer.summary contains USD and unicode minus −5", (locale) => {
    const data = rawLocales[locale]
    const summary = getPath(data, "drawer.summary") as string
    expect(summary).toContain("USD")
    expect(summary).toContain("−5")
  })

  test.each(PUBLISHED_LOCALES)("%s: hero showcase autoplay controls are localized", (locale) => {
    const data = rawLocales[locale]
    const pause = getPath(data, "hero.showcase.pauseAutoplay") as string
    const resume = getPath(data, "hero.showcase.resumeAutoplay") as string
    expect(pause).toBeDefined()
    expect(resume).toBeDefined()
    expect(pause.length).toBeGreaterThan(0)
    expect(resume.length).toBeGreaterThan(0)
    if (locale !== "en") {
      expect(pause.includes("Pause")).toBe(false)
      expect(resume.includes("Resume")).toBe(false)
    }
  })

  test("ru: hero strings match the frozen owner baseline verbatim", () => {
    const ru = rawLocales.ru
    expect(getPath(ru, "hero.title")).toBe("Порядок в записях.")
    expect(getPath(ru, "hero.accent")).toBe("Ясность в оплатах.")
    expect(getPath(ru, "hero.body")).toBe("Планируйте визиты, ведите историю клиентов и отмечайте оплаты.")
    expect(getPath(ru, "hero.signup")).toBe("Попробовать 21 день")
    expect(getPath(ru, "hero.how")).toBe("Посмотреть, как это работает")
    expect(getPath(ru, "hero.trialMicro")).toBe("21 день STUDIO без карты. После пробного периода оформите подписку.")
  })

  const NON_ENGLISH = PUBLISHED_LOCALES.filter((l) => l !== "en")

  test.each(NON_ENGLISH)("%s: core paragraphs do not match English identically (no raw EN copy-paste)", (locale) => {
    const data = rawLocales[locale]
    const paragraphsToCheck = [
      "hero.eyebrow",
      "hero.body",
      "hero.trialMicro",
      "operations.title",
      "operations.body",
      "records.title",
      "records.body",
      "packages.title",
      "packages.body",
      "packages.summary",
      "drawer.title",
      "drawer.body",
      "collaboration.title",
      "collaboration.body",
      "collaboration.accessTitle",
      "collaboration.accessBody",
      "collaboration.planNote",
      "finance.title",
      "finance.body",
      "states.title",
      "not.title",
      "not.body",
      "not.item1Body",
      "not.item2Body",
      "not.item3Body",
      "faq.a1",
      "faq.a2",
      "faq.a3",
      "faq.a4",
      "faq.a5",
      "faq.a6",
      "closing.title",
      "closing.body",
      "meta.description",
      "footer.description",
    ]

    for (const key of paragraphsToCheck) {
      const locVal = getPath(data, key)
      const enVal = getPath(enData, key)
      expect(locVal, `Key ${key} in ${locale} matches EN identical string`).not.toBe(enVal)
    }
  })

  test.each(PUBLISHED_LOCALES)("%s: mock components render with actual localized labels without errors", (locale) => {
    const data = rawLocales[locale] as any

    const drawerLabels = {
      title: data.drawer.title,
      body: data.drawer.body,
      summary: data.drawer.summary,
      caption: data.drawer.caption,
    }
    const drawerHtml = renderToStaticMarkup(createElement(MockCashDrawerSummary, { locale, labels: drawerLabels }))
    const drawerDecoded = drawerHtml.replace(/&#x27;/g, "'")
    expect(drawerDecoded).toContain(drawerLabels.summary)
    expect(drawerDecoded).toContain(drawerLabels.title)

    const accessLabels = {
      accessTitle: data.collaboration.accessTitle,
      accessBody: data.collaboration.accessBody,
      accessSummary: data.collaboration.accessSummary,
      planNote: data.collaboration.planNote,
    }
    const accessHtml = renderToStaticMarkup(createElement(MockWorkspaceAccessSummary, { locale, labels: accessLabels }))
    const accessDecoded = accessHtml.replace(/&#x27;/g, "'")
    expect(accessDecoded).toContain(accessLabels.accessTitle)

    const packageLabels = {
      summary: data.packages.summary,
      caption: data.packages.caption,
    }
    const packageHtml = renderToStaticMarkup(createElement(MockPackageCheckout, { locale, labels: packageLabels }))
    const packageDecoded = packageHtml.replace(/&#x27;/g, "'")
    expect(packageDecoded).toContain(packageLabels.summary)
  })
})

