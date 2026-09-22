export const LEGAL_DOCUMENT_SLUGS = [
  "terms",
  "privacy",
  "dpa",
  "booking-terms",
  "cookies",
  "subprocessors",
  "billing",
] as const

export type LegalDocumentSlug = (typeof LEGAL_DOCUMENT_SLUGS)[number]

/**
 * Manifest document keys per 01_legal_facts_env_contract.md §10.
 * bookingTerms in manifest maps to booking-terms document slug.
 */
export const MANIFEST_DOCUMENT_KEYS = [
  "terms",
  "privacy",
  "dpa",
  "bookingTerms",
  "cookies",
  "subprocessors",
  "billing",
] as const

export type ManifestDocumentKey = (typeof MANIFEST_DOCUMENT_KEYS)[number]

export function slugToManifestKey(slug: LegalDocumentSlug): ManifestDocumentKey {
  if (slug === "booking-terms") return "bookingTerms"
  return slug
}

export function manifestKeyToSlug(key: ManifestDocumentKey): LegalDocumentSlug {
  if (key === "bookingTerms") return "booking-terms"
  return key
}

export type LegalDocumentStatus = "draft" | "approved"

export interface LegalDocumentFrontMatter {
  document: LegalDocumentSlug
  version: string
  effectiveDate: string
  lastReviewedDate?: string
  status: LegalDocumentStatus
  sourceLocale: string
  approvedBy?: string
}

export interface EuRepresentativeIdentity {
  name: string
  address: string
  email: string
}

export interface UkRepresentativeIdentity {
  name: string
  address: string
  email: string
}

export interface DpoIdentity {
  name: string
  email: string
}

export interface LegalIdentity {
  // Required in production
  providerFullName: string
  providerForm: string
  tradingName: string
  countryOfRegistration: string
  registrationNumber: string
  taxNumber: string
  businessAddress: string
  supportEmail: string
  privacyEmail: string
  legalNoticesEmail: string
  securityEmail: string

  // Optional all-or-nothing blocks
  euRep?: EuRepresentativeIdentity | null
  ukRep?: UkRepresentativeIdentity | null
  dpo?: DpoIdentity | null
}

export interface LegalApprovalManifestEntry {
  version: string
  effectiveDate: string
  sha256: string
  approvalRef: string
}

export type LegalApprovalManifest = Record<ManifestDocumentKey, LegalApprovalManifestEntry>

export interface ProductionBlockReason {
  code:
    | "STATUS_DRAFT"
    | "UNRESOLVED_TBD"
    | "UNRESOLVED_TOKEN"
    | "MISSING_IDENTITY"
    | "DISALLOWED_EMAIL_DOMAIN"
    | "APPROVAL_HASH_MISMATCH"
    | "MANIFEST_UNPOPULATED"
    | "DATE_INVALID"
    | "VERSION_MISMATCH"
  message: string
}

export interface VerificationResult {
  validForProduction: boolean
  validForPreview: boolean
  computedSha256: string
  blockedReasons: ProductionBlockReason[]
}

export interface LoadedLegalDocument {
  slug: LegalDocumentSlug
  frontMatter: LegalDocumentFrontMatter
  rawMarkdown: string
  interpolatedMarkdown: string
  renderedHash: string
  verification: VerificationResult
}
