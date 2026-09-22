import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { validateLegalIdentityEnv } from "./env"
import { computeDocumentHash, verifyDocumentApproval } from "./hash"
import { interpolateLegalTokens } from "./interpolate"
import { parseAndValidateLegalMarkdown } from "./schema"
import {
  LEGAL_DOCUMENT_SLUGS,
  type LegalApprovalManifest,
  type LegalDocumentSlug,
  type LegalIdentity,
  type LoadedLegalDocument,
} from "./types"

export interface LoadLegalDocumentOptions {
  locale?: string
  contentDir?: string
  identity?: LegalIdentity
  envSource?: Record<string, string | undefined>
  manifest?: LegalApprovalManifest
  isProduction?: boolean
}

export function getDefaultLegalContentDir(): string {
  return path.join(process.cwd(), "content/legal")
}

export function loadApprovalManifest(contentDir = getDefaultLegalContentDir()): LegalApprovalManifest {
  const manifestPath = path.join(contentDir, "versions.json")
  if (!existsSync(manifestPath)) {
    throw new Error(`Approval manifest file not found at: ${manifestPath}`)
  }

  const rawJson = readFileSync(manifestPath, "utf-8")
  try {
    return JSON.parse(rawJson) as LegalApprovalManifest
  } catch (err) {
    throw new Error(`Failed to parse approval manifest at ${manifestPath}: ${String(err)}`)
  }
}

/**
 * Loads, parses, interpolates and verifies a canonical legal document.
 * 
 * In production mode (`isProduction: true`), rejects if any production gate fails:
 * - status === 'draft'
 * - unresolved [TBD]
 * - unresolved tokens
 * - manifest unpopulated or hash mismatch
 */
export function loadLegalDocument(
  slug: LegalDocumentSlug,
  options: LoadLegalDocumentOptions = {}
): LoadedLegalDocument {
  if (!LEGAL_DOCUMENT_SLUGS.includes(slug)) {
    throw new Error(`Unknown legal document slug: '${slug}'. Allowed: ${LEGAL_DOCUMENT_SLUGS.join(", ")}`)
  }

  const locale = options.locale ?? "en"
  const contentDir = options.contentDir ?? getDefaultLegalContentDir()
  const isProduction = options.isProduction ?? (process.env.NODE_ENV === "production")

  const filePath = path.join(contentDir, locale, `${slug}.md`)
  if (!existsSync(filePath)) {
    throw new Error(`Legal document file not found: ${filePath}`)
  }

  const rawContent = readFileSync(filePath, "utf-8")
  const { frontMatter, body } = parseAndValidateLegalMarkdown(rawContent, slug)

  // Resolve identity
  const identity =
    options.identity ??
    validateLegalIdentityEnv(options.envSource ?? process.env, { isProduction })

  // Interpolate tokens & optional blocks into the markdown body
  const interpolatedMarkdown = interpolateLegalTokens(body, identity)

  // Load manifest (or use provided)
  const manifest = options.manifest ?? loadApprovalManifest(contentDir)

  // Verify approval and compute immutable hash
  const verification = verifyDocumentApproval({
    slug,
    frontMatter,
    renderedContent: interpolatedMarkdown,
    manifest,
  })

  if (isProduction && !verification.validForProduction) {
    const reasonList = verification.blockedReasons.map((r) => `- [${r.code}] ${r.message}`).join("\n")
    throw new Error(
      `Production validation failed for legal document '${slug}':\n${reasonList}`
    )
  }

  return {
    slug,
    frontMatter,
    rawMarkdown: rawContent,
    interpolatedMarkdown,
    renderedHash: verification.computedSha256,
    verification,
  }
}

/**
 * Loads and inspects all canonical legal documents for preview or pre-flight verification.
 */
export function loadAllLegalDocuments(
  options: LoadLegalDocumentOptions = {}
): Record<LegalDocumentSlug, LoadedLegalDocument> {
  const result = {} as Record<LegalDocumentSlug, LoadedLegalDocument>
  for (const slug of LEGAL_DOCUMENT_SLUGS) {
    result[slug] = loadLegalDocument(slug, options)
  }
  return result
}
