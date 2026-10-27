import { readFileSync } from "node:fs"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { NextIntlClientProvider } from "next-intl"
import { afterEach, describe, expect, it, vi } from "vitest"
import { isGoogleCalendarReleased } from "@/lib/google-calendar-release"
import { GoogleDataAccess } from "@/components/homepage/google-data-access"
import { messagesByLocale } from "@/i18n/messages"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"

afterEach(() => vi.unstubAllEnvs())

describe("public Google data explanation", () => {
  it("keeps core homepage purpose visible before reveal JavaScript runs", () => {
    const reveal = readFileSync("components/landing/reveal.tsx", "utf8")
    const operations = readFileSync("components/homepage/operations.tsx", "utf8")
    // Entrance motion is transform-only: no caller can hide content pre-JS,
    // so the purpose copy is visible even when hydration or observers fail.
    expect(reveal).not.toMatch(/opacity:\s*0/)
    expect(operations).toContain('<GoogleDataAccess locale={locale} />')
  })
  it.each(PUBLISHED_LOCALES)("exposes both purposes, rollout limits and Privacy in initial HTML for %s", locale => {
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_CALENDAR_RELEASED", "false")
    const html = renderToStaticMarkup(createElement(NextIntlClientProvider, {
      locale, messages: messagesByLocale[locale], timeZone: "UTC",
      children: createElement(GoogleDataAccess, {locale}),
    }))
    const copy = messagesByLocale[locale].home.googleAccess
    for (const key of ["title", "signIn", "calendar", "availability", "optional", "privacyLink"] as const) {
      const escaped = renderToStaticMarkup(createElement("span", null, copy[key])).slice(6, -7)
      expect(html).toContain(escaped)
    }
    expect(html).toContain(`href="${localizePath(locale, "/legal/privacy")}"`)
    expect(html).not.toMatch(/<details|class="[^"]*(?:hidden|opacity-0)|\/login|\/register/)
  })

  it.each(PUBLISHED_LOCALES)("hides only the testing notice after Calendar release in %s", locale => {
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_CALENDAR_RELEASED", "true")
    const html = renderToStaticMarkup(createElement(NextIntlClientProvider, {
      locale, messages: messagesByLocale[locale], timeZone: "UTC",
      children: createElement(GoogleDataAccess, {locale}),
    }))
    const copy = messagesByLocale[locale].home.googleAccess
    const escaped = (text: string) => renderToStaticMarkup(createElement("span", null, text)).slice(6, -7)
    expect(html).not.toContain(escaped(copy.availability))
    for (const key of ["optional", "signIn", "calendar", "privacyLink"] as const) {
      expect(html).toContain(escaped(copy[key]))
    }
  })

  it("distinguishes account access from optional, read-only Calendar import", () => {
    const copy = messagesByLocale.en.home.googleAccess
    expect(copy.signIn).toContain("basic profile and email")
    expect(copy.calendar).toContain("read-only")
    expect(copy.calendar).toContain("never changes or deletes")
    expect(copy.availability).toContain("not yet generally available")
  })
})

describe("Calendar publication flag", () => {
  it.each([undefined, "false", "", "TRUE", "1"])("keeps the testing notice for %s", value => {
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_CALENDAR_RELEASED", value)
    expect(isGoogleCalendarReleased()).toBe(false)
  })
})
