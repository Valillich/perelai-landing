import { readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import {
  LEGAL_DOCUMENT_SLUGS,
  loadAllLegalDocuments,
  loadApprovalManifest,
  loadLegalDocument,
  slugToManifestKey,
  validateLegalIdentityEnv,
  type LegalIdentity,
} from "@/lib/legal"
import {
  PRODUCTION_LEGAL_IDENTITY,
  PRODUCTION_LEGAL_IDENTITY_ENV,
} from "@/lib/legal/production-identity"

describe("Canonical Legal Documents (content/legal/en/)", () => {
  const otherIdentity: LegalIdentity = {
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

  it("has a populated approval manifest entry matching each document's front matter", () => {
    const manifest = loadApprovalManifest()
    const docs = loadAllLegalDocuments({ identity: PRODUCTION_LEGAL_IDENTITY, isProduction: false })

    for (const slug of LEGAL_DOCUMENT_SLUGS) {
      const entry = manifest[slugToManifestKey(slug)]
      const { frontMatter } = docs[slug]
      expect(frontMatter.status).toBe("approved")
      expect(entry.version).toBe(frontMatter.version)
      expect(entry.effectiveDate).toBe(frontMatter.effectiveDate)
      expect(entry.approvalRef).toBe(frontMatter.approvedBy)
      expect(entry.sha256).toMatch(/^[a-f0-9]{64}$/)
    }
  })

  it("passes the production gate for all 7 documents with the approved identity snapshot", () => {
    for (const slug of LEGAL_DOCUMENT_SLUGS) {
      const doc = loadLegalDocument(slug, {
        identity: PRODUCTION_LEGAL_IDENTITY,
        isProduction: true,
      })
      expect(doc.verification.validForProduction).toBe(true)
      expect(doc.verification.blockedReasons).toEqual([])
    }
  })

  it("fails closed in production when the deployed identity differs from the approved snapshot", () => {
    for (const slug of LEGAL_DOCUMENT_SLUGS) {
      expect(() =>
        loadLegalDocument(slug, {
          identity: otherIdentity,
          isProduction: true,
        })
      ).toThrow(/APPROVAL_HASH_MISMATCH/)
    }
  })

  it("resolves the production identity snapshot through strict production env validation", () => {
    expect(
      validateLegalIdentityEnv({ ...PRODUCTION_LEGAL_IDENTITY_ENV }, { isProduction: true })
    ).toEqual(PRODUCTION_LEGAL_IDENTITY)
  })

  it("documents the exact production identity values in .env.example", () => {
    const example = readFileSync(join(process.cwd(), ".env.example"), "utf8")
    for (const [key, value] of Object.entries(PRODUCTION_LEGAL_IDENTITY_ENV)) {
      expect(example).toContain(`${key}="${value}"`)
    }
  })

  it("publishes no internal drafting notes or unrendered optional blocks", () => {
    const docs = loadAllLegalDocuments({ identity: PRODUCTION_LEGAL_IDENTITY, isProduction: true })
    for (const slug of LEGAL_DOCUMENT_SLUGS) {
      const rendered = docs[slug].interpolatedMarkdown
      expect(rendered).not.toMatch(/counsel|\[Internal|Release check|Render only if|implementation LLM|\[verify/i)
    }
  })
})
