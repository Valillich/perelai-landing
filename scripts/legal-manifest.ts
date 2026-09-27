/**
 * Recomputes the approval manifest hashes for approved legal documents.
 *
 *   pnpm legal:manifest          # verify content/legal/versions.json (exit 1 on drift)
 *   pnpm legal:manifest --write  # write hashes for documents already marked approved
 *
 * Hashes are computed against PRODUCTION_LEGAL_IDENTITY, the snapshot the
 * production NEXT_PUBLIC_LEGAL_* environment must match. Writing never marks a
 * document approved: status, version and approvedBy come from its front matter.
 */
import { readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { getDefaultLegalContentDir, loadApprovalManifest, loadLegalDocument } from "../lib/legal/loader"
import { PRODUCTION_LEGAL_IDENTITY } from "../lib/legal/production-identity"
import { LEGAL_DOCUMENT_SLUGS, slugToManifestKey, type LegalApprovalManifest } from "../lib/legal/types"

const write = process.argv.includes("--write")
const MANIFEST_REASONS = new Set(["APPROVAL_HASH_MISMATCH", "MANIFEST_UNPOPULATED", "VERSION_MISMATCH", "DATE_INVALID"])
const contentDir = getDefaultLegalContentDir()
const manifestPath = path.join(contentDir, "versions.json")
const current = loadApprovalManifest(contentDir)
const next: LegalApprovalManifest = JSON.parse(readFileSync(manifestPath, "utf-8"))
const problems: string[] = []

for (const slug of LEGAL_DOCUMENT_SLUGS) {
  const doc = loadLegalDocument(slug, {
    contentDir,
    identity: PRODUCTION_LEGAL_IDENTITY,
    manifest: current,
    isProduction: false,
  })
  const key = slugToManifestKey(slug)
  const { frontMatter, renderedHash } = doc

  if (frontMatter.status !== "approved") {
    problems.push(`${slug}: status is '${frontMatter.status}'`)
    continue
  }

  const entry = {
    version: frontMatter.version,
    effectiveDate: frontMatter.effectiveDate,
    sha256: renderedHash,
    approvalRef: frontMatter.approvedBy ?? "",
  }
  next[key] = entry

  for (const reason of doc.verification.blockedReasons) {
    if (write && MANIFEST_REASONS.has(reason.code)) continue
    problems.push(`${slug}: [${reason.code}] ${reason.message}`)
  }
  console.log(`${slug.padEnd(14)} ${entry.version} ${entry.effectiveDate} ${renderedHash}`)
}

if (write) {
  writeFileSync(manifestPath, `${JSON.stringify(next, null, 2)}\n`)
  console.log(`\nWrote ${path.relative(process.cwd(), manifestPath)}`)
}

if (problems.length > 0) {
  console.error(`\n${problems.join("\n")}`)
  process.exit(1)
}
