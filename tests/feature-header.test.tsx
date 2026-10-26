import {createElement, type ReactNode} from "react"
import {renderToStaticMarkup} from "react-dom/server"
import {NextIntlClientProvider} from "next-intl"
import {describe, expect, it, vi} from "vitest"
import {LandingHeader} from "@/components/landing/landing-header"
import {FEATURE_TOPICS, featureHref} from "@/lib/feature-navigation"
import {messagesByLocale} from "@/i18n/messages"
import {PUBLISHED_LOCALES} from "@/i18n/locales"

// The Next router is the host boundary; render the real header and disclosures.
vi.mock("next/navigation", () => ({
  useRouter: () => ({replace: vi.fn(), push: vi.fn(), prefetch: vi.fn()}),
  usePathname: () => "/pricing",
  useSearchParams: () => new URLSearchParams(),
}))
vi.mock("@/i18n/navigation", () => ({
  Link: ({children, ...props}: {children: ReactNode; href: string}) => createElement("a", props, children),
  useRouter: () => ({replace: vi.fn(), push: vi.fn()}),
  usePathname: () => "/pricing",
}))

describe("global feature disclosures", () => {
  it.each(PUBLISHED_LOCALES)("keeps every destination reachable from Home, Pricing, Install and niches in %s", locale => {
    for (const canonicalPath of ["/", "/pricing", "/install", "/for-barbers"]) {
      const html = renderToStaticMarkup(createElement(NextIntlClientProvider, {
        locale, messages: messagesByLocale[locale], timeZone: "UTC",
        children: createElement(LandingHeader, {
          locale, canonicalPath, sectionAnchors: canonicalPath === "/" || canonicalPath === "/for-barbers",
        }),
      }))
      // Native disclosures also expose links when JavaScript is unavailable.
      expect(html).toContain("<details")
      expect(html).toContain("<summary")
      for (const topic of FEATURE_TOPICS) {
        const href = featureHref(locale, canonicalPath, topic.id)
        // One link in the desktop dropdown, one in the mobile feature group.
        expect(html.split(`href="${href}"`), `${canonicalPath} → ${topic.id}`).toHaveLength(3)
        const fullName = messagesByLocale[locale].home.featureNav.topics[topic.key]
        const escapedName = renderToStaticMarkup(createElement("span", null, fullName)).slice(6, -7)
        expect(html).toContain(escapedName)
      }
    }
  })
})
