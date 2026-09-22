import { describe, expect, it } from "vitest"
import { computeDocumentHash, verifyDocumentApproval } from "@/lib/legal/hash"
import type { LegalApprovalManifest, LegalDocumentFrontMatter } from "@/lib/legal/types"

describe("Legal Verification and Immutable Hashing", () => {
  const sampleApprovedContent = `# Terms of Service
This is the verified text of the terms of service.
All parties agree to these conditions.`

  const expectedSha256 = computeDocumentHash(sampleApprovedContent)

  const approvedFrontMatter: LegalDocumentFrontMatter = {
    document: "terms",
    version: "2026-09-18.1",
    effectiveDate: "2026-09-18",
    status: "approved",
    sourceLocale: "en",
    approvedBy: "LEGAL-APPROVAL-001",
  }

  const populatedManifest: LegalApprovalManifest = {
    terms: {
      version: "2026-09-18.1",
      effectiveDate: "2026-09-18",
      sha256: expectedSha256,
      approvalRef: "LEGAL-APPROVAL-001",
    },
    privacy: { version: "", effectiveDate: "", sha256: "", approvalRef: "" },
    dpa: { version: "", effectiveDate: "", sha256: "", approvalRef: "" },
    bookingTerms: { version: "", effectiveDate: "", sha256: "", approvalRef: "" },
    cookies: { version: "", effectiveDate: "", sha256: "", approvalRef: "" },
    subprocessors: { version: "", effectiveDate: "", sha256: "", approvalRef: "" },
    billing: { version: "", effectiveDate: "", sha256: "", approvalRef: "" },
  }

  it("computes deterministic SHA-256 hash", () => {
    const hash1 = computeDocumentHash("Hello World")
    const hash2 = computeDocumentHash("Hello World")
    expect(hash1).toBe(hash2)
    expect(hash1).toBe("a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e")
  })

  it("passes production verification when all approval criteria and hash match", () => {
    const result = verifyDocumentApproval({
      slug: "terms",
      frontMatter: approvedFrontMatter,
      renderedContent: sampleApprovedContent,
      manifest: populatedManifest,
    })

    expect(result.validForProduction).toBe(true)
    expect(result.validForPreview).toBe(true)
    expect(result.computedSha256).toBe(expectedSha256)
    expect(result.blockedReasons).toHaveLength(0)
  })

  it("rejects draft status in production verification", () => {
    const draftFrontMatter: LegalDocumentFrontMatter = {
      ...approvedFrontMatter,
      status: "draft",
    }

    const result = verifyDocumentApproval({
      slug: "terms",
      frontMatter: draftFrontMatter,
      renderedContent: sampleApprovedContent,
      manifest: populatedManifest,
    })

    expect(result.validForProduction).toBe(false)
    expect(result.validForPreview).toBe(true)
    expect(result.blockedReasons.some((r) => r.code === "STATUS_DRAFT")).toBe(true)
  })

  it("rejects unresolved [TBD] in production verification", () => {
    const contentWithTbd = `${sampleApprovedContent}\nGoverning law: [TBD: jurisdiction].`

    const result = verifyDocumentApproval({
      slug: "terms",
      frontMatter: approvedFrontMatter,
      renderedContent: contentWithTbd,
      manifest: populatedManifest,
    })

    expect(result.validForProduction).toBe(false)
    expect(result.blockedReasons.some((r) => r.code === "UNRESOLVED_TBD")).toBe(true)
  })

  it("rejects unresolved {{TOKEN}} in production verification", () => {
    const contentWithToken = `${sampleApprovedContent}\nEmail: {{SUPPORT_EMAIL}}`

    const result = verifyDocumentApproval({
      slug: "terms",
      frontMatter: approvedFrontMatter,
      renderedContent: contentWithToken,
      manifest: populatedManifest,
    })

    expect(result.validForProduction).toBe(false)
    expect(result.blockedReasons.some((r) => r.code === "UNRESOLVED_TOKEN")).toBe(true)
  })

  it("rejects unpopulated approval manifest", () => {
    const unpopulatedManifest: LegalApprovalManifest = {
      ...populatedManifest,
      terms: { version: "", effectiveDate: "", sha256: "", approvalRef: "" },
    }

    const result = verifyDocumentApproval({
      slug: "terms",
      frontMatter: approvedFrontMatter,
      renderedContent: sampleApprovedContent,
      manifest: unpopulatedManifest,
    })

    expect(result.validForProduction).toBe(false)
    expect(result.blockedReasons.some((r) => r.code === "MANIFEST_UNPOPULATED")).toBe(true)
  })

  it("rejects tampered or modified content (hash mismatch)", () => {
    const tamperedContent = `${sampleApprovedContent} (extra unauthorized text)`

    const result = verifyDocumentApproval({
      slug: "terms",
      frontMatter: approvedFrontMatter,
      renderedContent: tamperedContent,
      manifest: populatedManifest,
    })

    expect(result.validForProduction).toBe(false)
    expect(result.blockedReasons.some((r) => r.code === "APPROVAL_HASH_MISMATCH")).toBe(true)
  })

  it("rejects version mismatch between front matter and manifest", () => {
    const mismatchedFrontMatter: LegalDocumentFrontMatter = {
      ...approvedFrontMatter,
      version: "2026-09-18.2", // manifest has 2026-09-18.1
    }

    const result = verifyDocumentApproval({
      slug: "terms",
      frontMatter: mismatchedFrontMatter,
      renderedContent: sampleApprovedContent,
      manifest: populatedManifest,
    })

    expect(result.validForProduction).toBe(false)
    expect(result.blockedReasons.some((r) => r.code === "VERSION_MISMATCH")).toBe(true)
  })
})
