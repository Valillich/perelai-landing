import {createElement} from "react"
import {renderToStaticMarkup} from "react-dom/server"
import {NextIntlClientProvider} from "next-intl"
import {afterEach, describe, expect, it, vi} from "vitest"
import {PricingPage} from "@/components/pricing/pricing-page"
import {messagesByLocale} from "@/i18n/messages"
import {PUBLISHED_LOCALES} from "@/i18n/locales"

// Next router is the external host boundary for this static render.
vi.mock("next/navigation", () => ({
  useRouter: () => ({replace: vi.fn(), push: vi.fn(), prefetch: vi.fn()}),
  usePathname: () => "/en/pricing",
  useSearchParams: () => new URLSearchParams(),
}))
vi.mock("@/i18n/navigation", () => ({
  Link: ({children, ...props}: {children: React.ReactNode; href: string}) => createElement("a", props, children),
  useRouter: () => ({replace: vi.fn(), push: vi.fn()}),
  usePathname: () => "/pricing",
}))
afterEach(() => vi.unstubAllEnvs())

function renderPricing(locale: (typeof PUBLISHED_LOCALES)[number]) {
  return renderToStaticMarkup(createElement(NextIntlClientProvider,
    {locale, messages: messagesByLocale[locale], timeZone: "UTC",
      children: createElement(PricingPage, {locale})}))
}

describe("Pricing publication composition", () => {
  it.each(PUBLISHED_LOCALES)("renders catalog prices, generic signup and legal links in %s", locale => {
    vi.stubEnv("NEXT_PUBLIC_PAID_SUBSCRIPTIONS_LIVE", "false")
    vi.stubEnv("NEXT_PUBLIC_TEAM_RELEASED", "false")
    const html = renderPricing(locale)
    expect(html).toContain("$19")
    expect(html).toContain("$29")
    expect(html).toContain("/register?")
    expect(html).not.toContain("offer=")
    expect(html).toContain("/legal/terms")
    expect(html).toContain("/legal/privacy")
    expect(html).toContain("/legal/billing")
    expect(html).toContain("mailto:")
    expect(html).not.toMatch(/(?:pri|pro|ctm)_[a-z0-9]+|paddle\.js|\{limit\}/)
  })

  it.each([["false", false], ["true", true]])("TEAM release %s controls the STUDIO signup link", (team, released) => {
    vi.stubEnv("NEXT_PUBLIC_PAID_SUBSCRIPTIONS_LIVE", "true")
    vi.stubEnv("NEXT_PUBLIC_TEAM_RELEASED", team)
    const html = renderPricing("en")
    expect(html).toContain("offer=SOLO_MONTHLY")
    expect(html.includes("offer=STUDIO_MONTHLY")).toBe(released)
    expect(html).not.toContain("offer=STUDIO_PLUS")
  })
})
