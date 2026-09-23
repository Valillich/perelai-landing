import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { LegalMarkdownRenderer } from "@/components/legal/legal-markdown-renderer"
import {
  findUnresolvedTbdMarkers,
  findUnresolvedTokens,
  interpolateLegalTokens,
  sanitizeTextForMarkdown,
} from "@/lib/legal/interpolate"
import type { LegalIdentity } from "@/lib/legal/types"

describe("Legal Token Interpolation", () => {
  const baseIdentity: LegalIdentity = {
    providerFullName: "FOP Valerii Bondar",
    providerForm: "Individual Entrepreneur (FOP)",
    tradingName: "Perelai",
    countryOfRegistration: "Ukraine",
    registrationNumber: "1234567890",
    taxNumber: "9876543210",
    businessAddress: "Kyiv, Ukraine",
    supportEmail: "support@perelai.app",
    privacyEmail: "privacy@perelai.app",
    legalNoticesEmail: "legal@perelai.app",
    securityEmail: "security@perelai.app",
    euRep: null,
    ukRep: null,
    dpo: null,
  }

  describe("sanitizeTextForMarkdown", () => {
    it("preserves apostrophes, ampersands and quotes as plain text", () => {
      // The renderer emits React text nodes; React escapes HTML exactly once.
      // Pre-escaping here produced visible `&amp;`/`&#39;` artifacts (R7).
      expect(sanitizeTextForMarkdown("O'Connor & Partners")).toBe(
        "O'Connor & Partners"
      )
      expect(sanitizeTextForMarkdown('A "quoted" <value>')).toBe(
        'A "quoted" <value>'
      )
    })

    it("neutralises markdown-active characters without visible escapes", () => {
      expect(sanitizeTextForMarkdown("*bold* `code` [link](x)")).toBe(
        "∗bold∗ 'code' ［link］(x)"
      )
      expect(sanitizeTextForMarkdown("cell | break")).toBe("cell ｜ break")
    })

    it("collapses newlines so a value cannot inject block syntax", () => {
      expect(sanitizeTextForMarkdown("line one\n## injected heading")).toBe(
        "line one ## injected heading"
      )
    })

    it("renders identity with apostrophe/ampersand correctly in the final DOM", () => {
      // R7: visitors must see the real characters, not HTML entities.
      const markdown = interpolateLegalTokens(
        "Provider: {{LEGAL_PROVIDER_FULL_NAME}}",
        { ...baseIdentity, providerFullName: "O'Connor & Partners" }
      )
      const html = renderToStaticMarkup(
        createElement(LegalMarkdownRenderer, { content: markdown })
      )
      expect(html).toContain("O&#x27;Connor &amp; Partners")
      expect(html).not.toContain("&amp;#39;")
      expect(html).not.toContain("&amp;amp;")
    })
  })

  describe("interpolateLegalTokens", () => {
    it("replaces required legal identity tokens with escaped text", () => {
      const template =
        "This agreement is with {{LEGAL_PROVIDER_FULL_NAME}}, {{LEGAL_PROVIDER_FORM}}, trading as {{TRADING_NAME}}."
      const rendered = interpolateLegalTokens(template, baseIdentity)
      expect(rendered).toBe(
        "This agreement is with FOP Valerii Bondar, Individual Entrepreneur (FOP), trading as Perelai."
      )
    })

    it("replaces address and contact emails", () => {
      const template = `
Contact {{SUPPORT_EMAIL}} or {{PRIVACY_EMAIL}} or {{LEGAL_NOTICES_EMAIL}}.
Address: {{BUSINESS_ADDRESS}}
Registration: {{REGISTRATION_NUMBER}}, Tax: {{TAX_NUMBER}}
`
      const rendered = interpolateLegalTokens(template, baseIdentity)
      expect(rendered).toContain("support@perelai.app")
      expect(rendered).toContain("privacy@perelai.app")
      expect(rendered).toContain("legal@perelai.app")
      expect(rendered).toContain("Kyiv, Ukraine")
      expect(rendered).toContain("1234567890")
      expect(rendered).toContain("9876543210")
    })

    it("omits optional EU/UK/DPO blocks when not configured", () => {
      const template = `
Contact details:
\`[Render only if appointed: Our EU representative is {{EU_REP_NAME}}, {{EU_REP_ADDRESS}}, {{EU_REP_EMAIL}}.]\`
\`[Render only if appointed: Our UK representative is {{UK_REP_NAME}}, {{UK_REP_ADDRESS}}, {{UK_REP_EMAIL}}.]\`
\`[Render only if formally appointed: Our data protection officer is {{DPO_NAME}}, {{DPO_EMAIL}}.]\`
End of contacts.
`
      const rendered = interpolateLegalTokens(template, baseIdentity)
      expect(rendered).not.toContain("Our EU representative is")
      expect(rendered).not.toContain("Our UK representative is")
      expect(rendered).not.toContain("Our data protection officer is")
      expect(rendered).not.toContain("Render only if")
    })

    it("renders optional EU/UK/DPO blocks cleanly when configured", () => {
      const identityWithOptional: LegalIdentity = {
        ...baseIdentity,
        euRep: {
          name: "EU Rep Services",
          address: "Warsaw, Poland",
          email: "eurep@perelai.eu",
        },
        ukRep: {
          name: "UK Rep Services",
          address: "London, UK",
          email: "ukrep@perelai.co.uk",
        },
        dpo: {
          name: "Jane Doe",
          email: "dpo@perelai.app",
        },
      }

      const template = `
\`[Render only if appointed: Our EU representative is {{EU_REP_NAME}}, {{EU_REP_ADDRESS}}, {{EU_REP_EMAIL}}.]\`
\`[Render only if appointed: Our UK representative is {{UK_REP_NAME}}, {{UK_REP_ADDRESS}}, {{UK_REP_EMAIL}}.]\`
\`[Render only if formally appointed: Our data protection officer is {{DPO_NAME}}, {{DPO_EMAIL}}.]\`
`
      const rendered = interpolateLegalTokens(template, identityWithOptional)
      expect(rendered).toContain("Our EU representative is EU Rep Services, Warsaw, Poland, eurep@perelai.eu.")
      expect(rendered).toContain("Our UK representative is UK Rep Services, London, UK, ukrep@perelai.co.uk.")
      expect(rendered).toContain("Our data protection officer is Jane Doe, dpo@perelai.app.")
      expect(rendered).not.toContain("`[Render only if")
    })
  })

  describe("Token and TBD scanners", () => {
    it("finds unresolved tokens", () => {
      const text = "Contact {{SUPPORT_EMAIL}} or {{UNKNOWN_TOKEN}} and {{LEGAL_PROVIDER_FULL_NAME}}."
      const unresolved = findUnresolvedTokens(text)
      expect(unresolved).toEqual(["{{SUPPORT_EMAIL}}", "{{UNKNOWN_TOKEN}}", "{{LEGAL_PROVIDER_FULL_NAME}}"])
    })

    it("finds unresolved [TBD] markers", () => {
      const text = "Effective date: [TBD: YYYY-MM-DD]. Limit: [TBD: liability cap]."
      const markers = findUnresolvedTbdMarkers(text)
      expect(markers).toEqual(["[TBD: YYYY-MM-DD]", "[TBD: liability cap]"])
    })
  })
})
