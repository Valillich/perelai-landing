import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LegalDocumentPage } from "@/components/legal/legal-document-page"
import { isPublishedLocale, PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import {
  LEGAL_DOCUMENT_SLUGS,
  isLegalDraftPreviewEnabled,
  loadLegalDocument,
  type LegalDocumentSlug,
} from "@/lib/legal"
import { toAbsoluteLandingUrl } from "@/lib/seo"

type PageProps = {
  params: Promise<{ locale: string; document: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  // The isolated draft preview exists only in deployments that explicitly set
  // LEGAL_DRAFT_PREVIEW=true at build time. Production builds emit no pages.
  if (!isLegalDraftPreviewEnabled()) return []
  return PUBLISHED_LOCALES.flatMap((locale) =>
    LEGAL_DOCUMENT_SLUGS.map((document) => ({ locale, document }))
  )
}

const PREVIEW_ROBOTS = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: { index: false, follow: false },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, document } = await params
  if (
    !isLegalDraftPreviewEnabled() ||
    !isPublishedLocale(locale) ||
    !LEGAL_DOCUMENT_SLUGS.includes(document as LegalDocumentSlug)
  ) {
    return {}
  }

  const slug = document as LegalDocumentSlug
  // Load (without the production gate) so a missing/broken draft fails the
  // preview too instead of emitting metadata for a non-existent document.
  loadLegalDocument(slug, { isProduction: false })
  const canonicalUrl = toAbsoluteLandingUrl(
    localizePath(locale as PublishedLocale, `/legal-preview/${slug}`)
  )

  return {
    title: `[Draft preview] ${slug} — Perelai`,
    description:
      "Draft legal document preview. Not an approved or published document.",
    alternates: { canonical: canonicalUrl },
    robots: PREVIEW_ROBOTS,
  }
}

export default async function LegalDraftPreviewPage({ params }: PageProps) {
  const { locale, document } = await params
  if (
    !isLegalDraftPreviewEnabled() ||
    !isPublishedLocale(locale) ||
    !LEGAL_DOCUMENT_SLUGS.includes(document as LegalDocumentSlug)
  ) {
    notFound()
  }

  const slug = document as LegalDocumentSlug
  const canonicalUrl = toAbsoluteLandingUrl(
    localizePath(locale as PublishedLocale, `/legal-preview/${slug}`)
  )
  // isProduction: false is safe here — this route is the isolated preview
  // surface; the canonical /legal/* routes run the production gate.
  const doc = loadLegalDocument(slug, { isProduction: false })

  return (
    <LegalDocumentPage
      document={doc}
      locale={locale as PublishedLocale}
      canonicalUrl={canonicalUrl}
    />
  )
}
