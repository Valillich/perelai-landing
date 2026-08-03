import { readFileSync, readdirSync, existsSync } from "node:fs"
import { resolve } from "node:path"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { NextIntlClientProvider } from "next-intl"
import { Collaboration } from "@/components/homepage/collaboration"
import { PUBLISHED_LOCALES } from "@/i18n/locales"

const ROOT = process.cwd()
const HOMEPAGE_PATH = resolve(ROOT, "components/homepage/homepage.tsx")
const COLLABORATION_PATH = resolve(ROOT, "components/homepage/collaboration.tsx")

const REQUIRED_COLLABORATION_KEYS = [
  "title",
  "body",
  "teamTitle",
  "teamBody",
  "notesDetail",
  "summary",
  "caption",
] as const

describe("Homepage section order contract", () => {
  it("places Collaboration exactly after Devices and before Setup", () => {
    const source = readFileSync(HOMEPAGE_PATH, "utf8")
    const devicesIndex = source.indexOf("<Devices")
    const collabIndex = source.indexOf("<Collaboration")
    const setupIndex = source.indexOf("<Setup")
    const operationsIndex = source.indexOf("<Operations")

    expect(operationsIndex).toBeGreaterThan(-1)
    expect(devicesIndex).toBeGreaterThan(operationsIndex)
    expect(collabIndex).toBeGreaterThan(devicesIndex)
    expect(setupIndex).toBeGreaterThan(collabIndex)

    // Verify Devices immediately precedes Collaboration and Collaboration immediately precedes Setup
    const renderSection = source.slice(devicesIndex, setupIndex)
    expect(renderSection).toContain("<Devices")
    expect(renderSection).toContain("<Collaboration")
    expect(renderSection).not.toContain("<Problem")
    expect(renderSection).not.toContain("<Inbox")
    expect(renderSection).not.toContain("<Booking")
    expect(renderSection).not.toContain("<Money")
  })
})

describe("Collaboration key parity across all 9 published locales", () => {
  for (const locale of PUBLISHED_LOCALES) {
    it(`contains all 7 publishable home.collaboration.* keys for ${locale}`, () => {
      const messagesPath = resolve(ROOT, `messages/${locale}/home.json`)
      expect(existsSync(messagesPath), `Missing messages file for ${locale}`).toBe(true)

      const json = JSON.parse(readFileSync(messagesPath, "utf8"))
      expect(json.collaboration, `Missing collaboration object in ${locale}/home.json`).toBeDefined()

      for (const key of REQUIRED_COLLABORATION_KEYS) {
        const val = json.collaboration[key]
        expect(val, `Missing key home.collaboration.${key} @ ${locale}`).toBeTruthy()
        expect(typeof val).toBe("string")
        expect(val.trim().length).toBeGreaterThan(0)
      }

      expect(json.collaboration.coworkerTitle).toBeUndefined()
      expect(json.collaboration.coworkerBody).toBeUndefined()
    })
  }
})

describe("Server component & no forbidden interactive/CTA elements", () => {
  it("is a server component with no client directives", () => {
    const source = readFileSync(COLLABORATION_PATH, "utf8")
    expect(source).not.toContain('"use client"')
    expect(source).not.toContain("'use client'")
    expect(source).not.toMatch(/useState|useEffect|useMemo|useCallback|useRef/)
    expect(source).not.toContain('from "@/components/landing/reveal"')
  })

  it("contains no buttons, links, forms, or CTAs", () => {
    const source = readFileSync(COLLABORATION_PATH, "utf8")
    expect(source).not.toMatch(/<button|<a\b|href=|onClick|onSubmit/)
    expect(source).not.toMatch(/from "next\/link"|from "@\/i18n\/navigation"/)
  })

  it("keeps Notes as a supporting line, not a standalone section", () => {
    const homepageFiles = readdirSync(resolve(ROOT, "components/homepage"))
    const notesSection = homepageFiles.find((f) => f.toLowerCase().includes("notes"))
    expect(notesSection).toBeUndefined()
  })

  it("maintains a tiny client tracker island leaving the heavy mock and catalog outside", () => {
    const trackerPath = resolve(ROOT, "components/analytics/collaboration-section-tracker.tsx")
    const trackerSource = readFileSync(trackerPath, "utf8")

    expect(trackerSource).toContain('"use client"')
    expect(trackerSource).not.toContain("MockCollaborationWorkspace")
    expect(trackerSource).not.toContain("app-ui-strings.generated.json")
    expect(trackerSource).not.toContain("niche-catalog.generated.json")
  })
})

const decodeEntities = (markup: string) =>
  markup
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")

describe("All-locale Collaboration render test", () => {
  for (const locale of PUBLISHED_LOCALES) {
    it(`renders Collaboration cleanly in ${locale}`, () => {
      const messages = JSON.parse(
        readFileSync(resolve(ROOT, `messages/${locale}/home.json`), "utf8"),
      )

      const markup = decodeEntities(
        renderToStaticMarkup(
          createElement(
            NextIntlClientProvider,
            {
              locale,
              messages: { home: messages },
              children: createElement(Collaboration, { locale }),
            },
          ),
        ),
      )

      expect(markup).toContain(messages.collaboration.title)
      expect(markup).toContain(messages.collaboration.body)
      expect(markup).toContain(messages.collaboration.teamTitle)
      expect(markup).toContain(messages.collaboration.teamBody)
      expect(markup).toContain(messages.collaboration.notesDetail)
      expect(markup).not.toContain("home.collaboration.")
    })
  }
})
