import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it, vi } from "vitest"
import { validReturnFrom } from "@/lib/legal/return"

let mockSearchParams = new URLSearchParams()

vi.mock("next/navigation", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next/navigation")>()
  return {
    ...actual,
    useSearchParams: () => mockSearchParams,
  }
})

vi.mock("@/i18n/navigation", () => ({
  Link: ({ children, href, className }: any) => createElement("a", { href, className }, children),
}))

vi.mock("@/components/landing/landing-header", () => ({
  LandingHeader: () => createElement("header", { "data-testid": "landing-header" }, "LandingHeader"),
}))

vi.mock("@/components/landing/landing-footer", () => ({
  LandingFooter: () => createElement("footer", { "data-testid": "landing-footer" }, "LandingFooter"),
}))

const ROOT = process.cwd()
const source = (relativePath: string) => readFileSync(join(ROOT, relativePath), "utf8")

describe("Legal Chrome Context and Parameter Allowlist", () => {
  it("accepts only the 7 documented app return destinations", () => {
    const ALLOWED = [
      "login",
      "register",
      "forgot",
      "onboarding",
      "settings",
      "billing",
      "data-transfer",
    ] as const

    for (const val of ALLOWED) {
      expect(validReturnFrom(val)).toBe(val)
    }

    // Untrusted or malicious values must fail closed
    expect(validReturnFrom(undefined)).toBeUndefined()
    expect(validReturnFrom(null)).toBeUndefined()
    expect(validReturnFrom("")).toBeUndefined()
    expect(validReturnFrom("https://evil.example.com")).toBeUndefined()
    expect(validReturnFrom("admin")).toBeUndefined()
    expect(validReturnFrom("dashboard")).toBeUndefined()
    expect(validReturnFrom("callback")).toBeUndefined()
  })

  it("includes CSS rule in globals.css to hide marketing chrome synchronously", () => {
    const css = source("app/globals.css")
    expect(css).toContain("html.legal-from-app .legal-marketing-chrome")
    expect(css).toContain("display: none !important")
  })

  it("runs the allowlisted app-context check from the document head before legal chrome can be parsed", () => {
    const layout = source("app/[locale]/layout.tsx")
    const documentPage = source("components/legal/legal-document-page.tsx")
    const legacyPage = source("components/legal/legal-page.tsx")

    expect(layout).toContain("const legalChromeInlineScript")
    expect(layout).toContain('new URLSearchParams(window.location.search).get("from")')
    expect(layout).toContain('from === "login"')
    expect(layout).toContain('from === "register"')
    expect(layout).toContain('from === "forgot"')
    expect(layout).toContain('from === "onboarding"')
    expect(layout).toContain('from === "settings"')
    expect(layout).toContain('from === "billing"')
    expect(layout).toContain('from === "data-transfer"')
    const headScript = layout.indexOf("__html: legalChromeInlineScript")
    expect(layout.indexOf("<head>")).toBeLessThan(headScript)
    expect(headScript).toBeLessThan(layout.indexOf("<body>"))

    expect(documentPage).not.toContain("legal-from-app")
    expect(legacyPage).not.toContain("legal-from-app")
  })
})

describe("LegalReturnToApp Component Visibility", () => {
  it("renders null when from parameter is absent or not allowlisted", async () => {
    const { LegalReturnToApp } = await import("@/components/legal/return-to-app")

    // When from is absent
    mockSearchParams = new URLSearchParams()
    const renderedNull = renderToStaticMarkup(
      createElement(LegalReturnToApp, { page: "terms", locale: "en" })
    )
    expect(renderedNull).toBe("")

    // When from is untrusted
    mockSearchParams = new URLSearchParams({ from: "https://evil.example.com" })
    const renderedUntrusted = renderToStaticMarkup(
      createElement(LegalReturnToApp, { page: "terms", locale: "en" })
    )
    expect(renderedUntrusted).toBe("")
  })

  it("renders contextual return button when from parameter is allowlisted", async () => {
    const { LegalReturnToApp } = await import("@/components/legal/return-to-app")

    mockSearchParams = new URLSearchParams({ from: "register" })
    const rendered = renderToStaticMarkup(
      createElement(LegalReturnToApp, { page: "terms", locale: "en" })
    )
    expect(rendered).toContain("Back to sign up")
    expect(rendered).toContain("app.perelai.com/register")
  })
})

describe("Legal Marketing Chrome Components Visibility", () => {
  it("evaluates useLegalFrom correctly based on search parameters", async () => {
    const { useLegalFrom } = await import("@/components/legal/legal-marketing-chrome")

    mockSearchParams = new URLSearchParams()
    expect(useLegalFrom()).toBeUndefined()

    mockSearchParams = new URLSearchParams({ from: "register" })
    expect(useLegalFrom()).toBe("register")

    mockSearchParams = new URLSearchParams({ from: "https://evil.example.com" })
    expect(useLegalFrom()).toBeUndefined()
  })

  it("renders marketing header, footer, and back-home link with legal-marketing-chrome class", async () => {
    mockSearchParams = new URLSearchParams()
    const {
      LegalChromeProvider,
      LegalMarketingHeader,
      LegalMarketingFooter,
      LegalBackHomeLink,
    } = await import("@/components/legal/legal-marketing-chrome")

    const headerHtml = renderToStaticMarkup(
      createElement(LegalChromeProvider, null, createElement(LegalMarketingHeader, { locale: "en", canonicalPath: "/legal/terms" }))
    )
    expect(headerHtml).toContain("legal-marketing-chrome")

    const footerHtml = renderToStaticMarkup(
      createElement(LegalChromeProvider, null, createElement(LegalMarketingFooter, { locale: "en", canonicalPath: "/legal/terms" }))
    )
    expect(footerHtml).toContain("legal-marketing-chrome")

    const backHomeHtml = renderToStaticMarkup(
      createElement(LegalChromeProvider, null, createElement(LegalBackHomeLink, { label: "Back to home" }))
    )
    expect(backHomeHtml).toContain("legal-marketing-chrome")
    expect(backHomeHtml).toContain("Back to home")
  })
})

describe("Legal document navigation", () => {
  it("preserves only an allowlisted from value between legal tabs", async () => {
    const { LegalNav } = await import("@/components/legal/legal-nav")

    mockSearchParams = new URLSearchParams({
      from: "billing",
      return_to: "https://evil.example",
      token: "sensitive-token",
    })
    const html = renderToStaticMarkup(createElement(LegalNav, { currentSlug: "terms" }))

    expect(html).toContain('href="/legal/privacy?from=billing"')
    expect(html).toContain('href="/legal/billing?from=billing"')
    expect(html).not.toContain("return_to")
    expect(html).not.toContain("sensitive-token")

    mockSearchParams = new URLSearchParams({ from: "https://evil.example" })
    const invalidHtml = renderToStaticMarkup(createElement(LegalNav, { currentSlug: "terms" }))
    expect(invalidHtml).toContain('href="/legal/privacy"')
    expect(invalidHtml).not.toContain("?from=")
  })
})
