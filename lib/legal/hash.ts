import { createHash } from "node:crypto"
import { findUnresolvedTbdMarkers, findUnresolvedTokens } from "./interpolate"
import {
  slugToManifestKey,
  type LegalApprovalManifest,
  type LegalApprovalManifestEntry,
  type LegalDocumentFrontMatter,
  type LegalDocumentSlug,
  type ProductionBlockReason,
  type VerificationResult,
} from "./types"

/**
 * Computes immutable SHA-256 hash of the final rendered content string.
 */
export function computeDocumentHash(renderedContent: string): string {
  return createHash("sha256").update(renderedContent, "utf8").digest("hex")
}

export interface VerifyApprovalOptions {
  slug: LegalDocumentSlug
  frontMatter: LegalDocumentFrontMatter
  renderedContent: string
  manifest?: LegalApprovalManifest
}

/**
 * Verifies document approval status and hash against the committed approval manifest.
 * 
 * In production:
 * - frontMatter.status must be "approved"
 * - no unresolved [TBD] markers
 * - no unresolved {{...}} tokens
 * - manifest entry must be populated (version, effectiveDate, sha256, approvalRef)
 * - rendered hash must match manifest.sha256
 * - frontMatter version and effectiveDate must match manifest
 */
export function verifyDocumentApproval({
  slug,
  frontMatter,
  renderedContent,
  manifest,
}: VerifyApprovalOptions): VerificationResult {
  const computedSha256 = computeDocumentHash(renderedContent)
  const blockedReasons: ProductionBlockReason[] = []

  // 1. Check status
  if (frontMatter.status !== "approved") {
    blockedReasons.push({
      code: "STATUS_DRAFT",
      message: `Document '${slug}' has status '${frontMatter.status}'. Production requires 'approved'.`,
    })
  }

  // 2. Check for unresolved [TBD] markers in front matter or content
  const tbdInFrontMatter = [
    frontMatter.version,
    frontMatter.effectiveDate,
    frontMatter.lastReviewedDate,
    frontMatter.approvedBy,
  ].filter((v): v is string => Boolean(v && v.includes("[TBD")))

  const tbdInContent = findUnresolvedTbdMarkers(renderedContent)

  if (tbdInFrontMatter.length > 0 || tbdInContent.length > 0) {
    blockedReasons.push({
      code: "UNRESOLVED_TBD",
      message: `Document '${slug}' contains unresolved [TBD markers (${tbdInFrontMatter.length} in metadata, ${tbdInContent.length} in prose).`,
    })
  }

  // 3. Check for unresolved tokens
  const unresolvedTokens = findUnresolvedTokens(renderedContent)
  if (unresolvedTokens.length > 0) {
    blockedReasons.push({
      code: "UNRESOLVED_TOKEN",
      message: `Document '${slug}' contains unresolved tokens: ${unresolvedTokens.join(", ")}`,
    })
  }

  // 4. Manifest verification
  const manifestKey = slugToManifestKey(slug)
  const entry: LegalApprovalManifestEntry | undefined = manifest ? manifest[manifestKey] : undefined

  if (!entry) {
    blockedReasons.push({
      code: "MANIFEST_UNPOPULATED",
      message: `Approval manifest has no entry for document '${slug}' (key: '${manifestKey}').`,
    })
  } else {
    const isManifestPopulated =
      Boolean(entry.sha256?.trim()) &&
      Boolean(entry.version?.trim()) &&
      Boolean(entry.effectiveDate?.trim()) &&
      Boolean(entry.approvalRef?.trim())

    if (!isManifestPopulated) {
      blockedReasons.push({
        code: "MANIFEST_UNPOPULATED",
        message: `Approval manifest for '${slug}' is unpopulated (awaiting counsel/owner approval).`,
      })
    } else {
      if (entry.sha256.trim().toLowerCase() !== computedSha256.toLowerCase()) {
        blockedReasons.push({
          code: "APPROVAL_HASH_MISMATCH",
          message: `Rendered hash (${computedSha256}) does not match approval manifest hash (${entry.sha256}) for '${slug}'.`,
        })
      }

      if (entry.version.trim() !== frontMatter.version.trim()) {
        blockedReasons.push({
          code: "VERSION_MISMATCH",
          message: `Front matter version '${frontMatter.version}' does not match manifest version '${entry.version}' for '${slug}'.`,
        })
      }

      if (entry.effectiveDate.trim() !== frontMatter.effectiveDate.trim()) {
        blockedReasons.push({
          code: "DATE_INVALID",
          message: `Front matter effectiveDate '${frontMatter.effectiveDate}' does not match manifest effectiveDate '${entry.effectiveDate}' for '${slug}'.`,
        })
      }
    }
  }

  const validForProduction = blockedReasons.length === 0
  const validForPreview = true // Preview is permitted even when production approvals are missing

  return {
    validForProduction,
    validForPreview,
    computedSha256,
    blockedReasons,
  }
}
