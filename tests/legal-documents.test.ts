import { describe, expect, it } from "vitest"
import {
  LEGAL_DOCUMENT_SLUGS,
  loadAllLegalDocuments,
  loadApprovalManifest,
  loadLegalDocument,
  type LegalIdentity,
} from "@/lib/legal"

describe("Canonical Legal Documents (content/legal/en/)", () => {
  const dummyIdentity: LegalIdentity = {
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

  it("ensures approval manifest has unpopulated entries for all documents", () => {
    const manifest = loadApprovalManifest()
    const keys = ["terms", "privacy", "dpa", "bookingTerms", "cookies", "subprocessors", "billing"] as const

    for (const key of keys) {
      const entry = manifest[key]
      expect(entry).toBeDefined()
      expect(entry.version).toBe("")
      expect(entry.effectiveDate).toBe("")
      expect(entry.sha256).toBe("")
      expect(entry.approvalRef).toBe("")
    }
  })

  it("loads all 7 documents in preview mode", () => {
    const docs = loadAllLegalDocuments({
      identity: dummyIdentity,
      isProduction: false,
    })

    for (const slug of LEGAL_DOCUMENT_SLUGS) {
      const doc = docs[slug]
      expect(doc).toBeDefined()
      expect(doc.slug).toBe(slug)
      expect(doc.frontMatter.document).toBe(slug)
      expect(doc.frontMatter.status).toBe("draft")
      expect(doc.frontMatter.sourceLocale).toBe("en")

      // Valid for preview
      expect(doc.verification.validForPreview).toBe(true)

      // Blocked for production
      expect(doc.verification.validForProduction).toBe(false)
      const reasons = doc.verification.blockedReasons.map((r) => r.code)
      expect(reasons).toContain("STATUS_DRAFT")
      expect(reasons).toContain("UNRESOLVED_TBD")
      expect(reasons).toContain("MANIFEST_UNPOPULATED")
    }
  })

  it("strictly rejects production load of draft documents", () => {
    for (const slug of LEGAL_DOCUMENT_SLUGS) {
      expect(() =>
        loadLegalDocument(slug, {
          identity: dummyIdentity,
          isProduction: true,
        })
      ).toThrow(/Production validation failed for legal document/)
    }
  })
})
