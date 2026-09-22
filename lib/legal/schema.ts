import {
  LEGAL_DOCUMENT_SLUGS,
  type LegalDocumentFrontMatter,
  type LegalDocumentSlug,
  type LegalDocumentStatus,
} from "./types"

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const APPROVED_VERSION_REGEX = /^[a-zA-Z0-9._-]+$/

export function isValidIsoDate(dateString: string): boolean {
  if (!DATE_REGEX.test(dateString)) return false
  const [yearStr, monthStr, dayStr] = dateString.split("-")
  const year = parseInt(yearStr, 10)
  const month = parseInt(monthStr, 10)
  const day = parseInt(dayStr, 10)

  if (month < 1 || month > 12) return false
  if (day < 1 || day > 31) return false

  const date = new Date(Date.UTC(year, month - 1, day))
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  )
}

export function parseRawFrontMatter(rawContent: string): {
  frontMatterRecord: Record<string, string>
  body: string
} {
  const trimmed = rawContent.trimStart()
  if (!trimmed.startsWith("---")) {
    throw new Error("Legal document must start with front-matter delimiter '---'")
  }

  const endDelimiterIndex = trimmed.indexOf("\n---", 3)
  if (endDelimiterIndex === -1) {
    throw new Error("Legal document is missing closing front-matter delimiter '---'")
  }

  const frontMatterText = trimmed.slice(3, endDelimiterIndex).trim()
  const body = trimmed.slice(endDelimiterIndex + 4).replace(/^\r?\n/, "")

  const frontMatterRecord: Record<string, string> = {}
  const lines = frontMatterText.split(/\r?\n/)

  for (const line of lines) {
    const cleanLine = line.trim()
    if (!cleanLine || cleanLine.startsWith("#")) continue

    const colonIndex = cleanLine.indexOf(":")
    if (colonIndex === -1) {
      throw new Error(`Malformed front-matter line: "${cleanLine}"`)
    }

    const key = cleanLine.slice(0, colonIndex).trim()
    let value = cleanLine.slice(colonIndex + 1).trim()

    // Strip trailing comments (e.g. status: draft # draft | approved)
    // Only strip comment if '#' is outside quotes
    if (value.startsWith('"')) {
      const closingQuote = value.indexOf('"', 1)
      if (closingQuote !== -1) {
        value = value.slice(1, closingQuote)
      }
    } else if (value.startsWith("'")) {
      const closingQuote = value.indexOf("'", 1)
      if (closingQuote !== -1) {
        value = value.slice(1, closingQuote)
      }
    } else {
      const commentIndex = value.indexOf("#")
      if (commentIndex !== -1) {
        value = value.slice(0, commentIndex).trim()
      }
    }

    frontMatterRecord[key] = value
  }

  return { frontMatterRecord, body }
}

export function validateDocumentFrontMatter(
  record: Record<string, string>,
  expectedSlug?: LegalDocumentSlug
): LegalDocumentFrontMatter {
  const document = record.document?.trim() as LegalDocumentSlug
  if (!document) {
    throw new Error("Front matter must specify 'document'")
  }
  if (!LEGAL_DOCUMENT_SLUGS.includes(document)) {
    throw new Error(
      `Invalid document '${document}' in front matter. Allowed values: ${LEGAL_DOCUMENT_SLUGS.join(", ")}`
    )
  }
  if (expectedSlug && document !== expectedSlug) {
    throw new Error(
      `Document front-matter slug mismatch: expected '${expectedSlug}', found '${document}'`
    )
  }

  const status = record.status?.trim() as LegalDocumentStatus
  if (status !== "draft" && status !== "approved") {
    throw new Error(`Front matter 'status' must be either 'draft' or 'approved', received: '${record.status}'`)
  }

  const version = record.version?.trim()
  if (!version) {
    throw new Error("Front matter must specify 'version'")
  }

  const effectiveDate = record.effectiveDate?.trim()
  if (!effectiveDate) {
    throw new Error("Front matter must specify 'effectiveDate'")
  }

  const sourceLocale = record.sourceLocale?.trim()
  if (!sourceLocale) {
    throw new Error("Front matter must specify 'sourceLocale'")
  }

  const lastReviewedDate = record.lastReviewedDate?.trim()
  const approvedBy = record.approvedBy?.trim()

  if (status === "approved") {
    if (version.includes("[TBD")) {
      throw new Error(`Approved document cannot contain '[TBD' in version: "${version}"`)
    }
    if (!APPROVED_VERSION_REGEX.test(version)) {
      throw new Error(`Approved document version must match conservative slug [a-zA-Z0-9._-]: "${version}"`)
    }

    if (effectiveDate.includes("[TBD") || !isValidIsoDate(effectiveDate)) {
      throw new Error(`Approved document effectiveDate must be valid YYYY-MM-DD: "${effectiveDate}"`)
    }

    if (lastReviewedDate && (lastReviewedDate.includes("[TBD") || !isValidIsoDate(lastReviewedDate))) {
      throw new Error(`Approved document lastReviewedDate must be valid YYYY-MM-DD: "${lastReviewedDate}"`)
    }

    if (!approvedBy || approvedBy.includes("[TBD")) {
      throw new Error("Approved document must specify non-TBD 'approvedBy' reference")
    }
  }

  return {
    document,
    version,
    effectiveDate,
    lastReviewedDate: lastReviewedDate || undefined,
    status,
    sourceLocale,
    approvedBy: approvedBy || undefined,
  }
}

export function parseAndValidateLegalMarkdown(
  rawContent: string,
  expectedSlug?: LegalDocumentSlug
): { frontMatter: LegalDocumentFrontMatter; body: string } {
  const { frontMatterRecord, body } = parseRawFrontMatter(rawContent)
  const frontMatter = validateDocumentFrontMatter(frontMatterRecord, expectedSlug)
  return { frontMatter, body }
}
