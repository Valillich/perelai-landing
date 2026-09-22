import { describe, expect, it } from "vitest"
import {
  isValidIsoDate,
  parseAndValidateLegalMarkdown,
  parseRawFrontMatter,
  validateDocumentFrontMatter,
} from "@/lib/legal/schema"

describe("Legal Document Front-Matter Schema", () => {
  describe("isValidIsoDate", () => {
    it("validates legitimate YYYY-MM-DD dates", () => {
      expect(isValidIsoDate("2026-09-18")).toBe(true)
      expect(isValidIsoDate("2026-02-28")).toBe(true)
    })

    it("rejects invalid dates or formats", () => {
      expect(isValidIsoDate("18-09-2026")).toBe(false)
      expect(isValidIsoDate("2026-9-18")).toBe(false)
      expect(isValidIsoDate("2026-02-30")).toBe(false)
      expect(isValidIsoDate("2026-13-01")).toBe(false)
      expect(isValidIsoDate("[TBD: YYYY-MM-DD]")).toBe(false)
    })
  })

  describe("parseRawFrontMatter", () => {
    it("parses valid front matter and returns body", () => {
      const raw = `---
document: terms
version: "v1.0.0"
effectiveDate: "2026-09-18"
status: approved # draft | approved
sourceLocale: en
---

# Terms of Service
Content starts here.
`
      const { frontMatterRecord, body } = parseRawFrontMatter(raw)
      expect(frontMatterRecord.document).toBe("terms")
      expect(frontMatterRecord.version).toBe("v1.0.0")
      expect(frontMatterRecord.effectiveDate).toBe("2026-09-18")
      expect(frontMatterRecord.status).toBe("approved")
      expect(frontMatterRecord.sourceLocale).toBe("en")
      expect(body).toContain("# Terms of Service")
    })

    it("throws when missing front matter delimiter", () => {
      expect(() => parseRawFrontMatter("Just regular markdown")).toThrow(
        /must start with front-matter delimiter/
      )
    })

    it("throws when missing closing front matter delimiter", () => {
      expect(() =>
        parseRawFrontMatter(`---
document: terms
version: "1.0"
`)
      ).toThrow(/missing closing front-matter delimiter/)
    })
  })

  describe("validateDocumentFrontMatter", () => {
    it("accepts valid draft front matter with [TBD] markers", () => {
      const fm = validateDocumentFrontMatter(
        {
          document: "terms",
          version: "[TBD: counsel-approved immutable version]",
          effectiveDate: "[TBD: YYYY-MM-DD]",
          status: "draft",
          sourceLocale: "en",
          approvedBy: "[TBD: internal reference]",
        },
        "terms"
      )
      expect(fm.document).toBe("terms")
      expect(fm.status).toBe("draft")
      expect(fm.version).toContain("[TBD")
    })

    it("rejects unknown document slugs", () => {
      expect(() =>
        validateDocumentFrontMatter({
          document: "unknown-document",
          version: "1.0",
          effectiveDate: "2026-09-18",
          status: "draft",
          sourceLocale: "en",
        })
      ).toThrow(/Invalid document 'unknown-document'/)
    })

    it("rejects mismatch with expected slug", () => {
      expect(() =>
        validateDocumentFrontMatter(
          {
            document: "privacy",
            version: "1.0",
            effectiveDate: "2026-09-18",
            status: "draft",
            sourceLocale: "en",
          },
          "terms"
        )
      ).toThrow(/Document front-matter slug mismatch/)
    })

    it("enforces strict approved document requirements", () => {
      // Rejects [TBD] version in approved status
      expect(() =>
        validateDocumentFrontMatter({
          document: "terms",
          version: "[TBD: version]",
          effectiveDate: "2026-09-18",
          status: "approved",
          sourceLocale: "en",
          approvedBy: "Counsel Ref 1",
        })
      ).toThrow(/Approved document cannot contain '\[TBD'/)

      // Rejects invalid date format in approved status
      expect(() =>
        validateDocumentFrontMatter({
          document: "terms",
          version: "v1.0.0",
          effectiveDate: "2026/09/18",
          status: "approved",
          sourceLocale: "en",
          approvedBy: "Counsel Ref 1",
        })
      ).toThrow(/Approved document effectiveDate must be valid YYYY-MM-DD/)

      // Rejects missing approvedBy in approved status
      expect(() =>
        validateDocumentFrontMatter({
          document: "terms",
          version: "v1.0.0",
          effectiveDate: "2026-09-18",
          status: "approved",
          sourceLocale: "en",
        })
      ).toThrow(/must specify non-TBD 'approvedBy'/)

      // Accepts fully valid approved front matter
      const approved = validateDocumentFrontMatter({
        document: "terms",
        version: "2026-09-18.1",
        effectiveDate: "2026-09-18",
        status: "approved",
        sourceLocale: "en",
        approvedBy: "LEGAL-REF-2026-001",
      })
      expect(approved.status).toBe("approved")
      expect(approved.version).toBe("2026-09-18.1")
    })
  })

  describe("parseAndValidateLegalMarkdown", () => {
    it("parses and validates markdown document end-to-end", () => {
      const doc = `---
document: cookies
version: "1.0"
effectiveDate: "2026-09-18"
status: draft
sourceLocale: en
---

# Cookie Policy
Body text.
`
      const { frontMatter, body } = parseAndValidateLegalMarkdown(doc, "cookies")
      expect(frontMatter.document).toBe("cookies")
      expect(body.trim()).toBe("# Cookie Policy\nBody text.")
    })
  })
})
