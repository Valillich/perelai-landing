import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LegalDocumentPage } from "@/components/legal/legal-document-page"
import { isPublishedLocale, PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { getLocalizedAlternates, localizePath } from "@/i18n/paths"
import {
  LEGAL_DOCUMENT_SLUGS,
  loadLegalDocument,
  type LegalDocumentSlug,
} from "@/lib/legal"
import { toAbsoluteLandingUrl } from "@/lib/seo"

type PageProps = {
  params: Promise<{ locale: string; document: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return PUBLISHED_LOCALES.flatMap((locale) =>
    LEGAL_DOCUMENT_SLUGS.map((document) => ({ locale, document }))
  )
}

const DOCUMENT_TITLES: Record<LegalDocumentSlug, { title: string; description: string }> = {
  terms: {
    title: "Terms of Service",
    description: "Terms of Service and legal conditions for using Perelai.",
  },
  privacy: {
    title: "Privacy Notice",
    description: "Privacy Notice explaining how personal data is handled by Perelai.",
  },
  dpa: {
    title: "Data Processing Addendum",
    description: "Data Processing Addendum (DPA) governing Customer Personal Data processing.",
  },
  "booking-terms": {
    title: "Public Booking Terms",
    description: "Public Booking Terms for end clients booking through Perelai pages.",
  },
  cookies: {
    title: "Cookie Policy",
    description: "Policy covering cookies, local storage, and similar technologies on Perelai surfaces.",
  },
  subprocessors: {
    title: "Subprocessor List",
    description: "Approved third-party subprocessors handling data for Perelai.",
  },
  billing: {
    title: "Refund & Cancellation Policy",
    description: "SaaS subscription billing, cancellation, and refund policy for Perelai.",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, document } = await params
  if (!isPublishedLocale(locale) || !LEGAL_DOCUMENT_SLUGS.includes(document as LegalDocumentSlug)) {
    return {}
  }

  const slug = document as LegalDocumentSlug
  const meta = DOCUMENT_TITLES[slug]
  const doc = loadLegalDocument(slug, { isProduction: false })
  const canonicalUrl = toAbsoluteLandingUrl(localizePath(locale as PublishedLocale, `/legal/${slug}`))
  const isDraft = doc.frontMatter.status === "draft"

  return {
    title: `${meta.title} — Perelai`,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: getLocalizedAlternates(`/legal/${slug}`, locale as PublishedLocale, PUBLISHED_LOCALES),
    },
    // Draft documents are strictly noindex per LGL-1
    robots: isDraft
      ? {
          index: false,
          follow: true,
          nocache: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
          index: true,
          follow: true,
        },
  }
}

export default async function LegalCanonicalPage({ params }: PageProps) {
  const { locale, document } = await params
  if (!isPublishedLocale(locale) || !LEGAL_DOCUMENT_SLUGS.includes(document as LegalDocumentSlug)) {
    notFound()
  }

  const slug = document as LegalDocumentSlug
  const canonicalUrl = toAbsoluteLandingUrl(localizePath(locale as PublishedLocale, `/legal/${slug}`))
  const doc = loadLegalDocument(slug, { isProduction: false })

  return <LegalDocumentPage document={doc} locale={locale as PublishedLocale} canonicalUrl={canonicalUrl} />
}
