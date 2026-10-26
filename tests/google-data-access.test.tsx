import { readFileSync } from "node:fs"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { NextIntlClientProvider } from "next-intl"
import { describe, expect, it } from "vitest"
import { GoogleDataAccess } from "@/components/homepage/google-data-access"
import { messagesByLocale } from "@/i18n/messages"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"

describe("public Google data explanation", () => {
  it("keeps core homepage purpose visible before reveal JavaScript runs", () => {
    const hero = readFileSync("components/homepage/hero.tsx", "utf8")
    const operations = readFileSync("components/homepage/operations.tsx", "utf8")
    expect(hero).not.toMatch(/<Reveal(?![^>]*fade=)[^>]*>/)
    expect(operations).toContain('<Reveal fade={false}>')
    expect(operations).toContain('<GoogleDataAccess locale={locale} />')
  })
  it.each(PUBLISHED_LOCALES)("exposes both purposes, rollout limits and Privacy in initial HTML for %s", locale => {
    const html = renderToStaticMarkup(createElement(NextIntlClientProvider, {
      locale, messages: messagesByLocale[locale], timeZone: "UTC",
      children: createElement(GoogleDataAccess, {locale}),
    }))
    const copy = messagesByLocale[locale].home.googleAccess
    for (const key of ["title", "signIn", "calendar", "availability", "privacyLink"] as const) {
      const escaped = renderToStaticMarkup(createElement("span", null, copy[key])).slice(6, -7)
      expect(html).toContain(escaped)
    }
    expect(html).toContain(`href="${localizePath(locale, "/legal/privacy")}"`)
    expect(html).not.toMatch(/<details|class="[^"]*(?:hidden|opacity-0)|\/login|\/register/)
  })

  it("distinguishes account access from optional, read-only Calendar import", () => {
    const copy = messagesByLocale.en.home.googleAccess
    expect(copy.signIn).toContain("basic profile and email")
    expect(copy.calendar).toContain("read-only")
    expect(copy.calendar).toContain("never changes or deletes")
    expect(copy.availability).toContain("not yet generally available")
  })
})
