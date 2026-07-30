import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LegalPage } from "@/components/legal/legal-page"
import { LEGAL_DRAFTS } from "@/content/legal"
import { isPublishedLocale, PUBLISHED_LOCALES } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import { buildLocalizedPageMetadata, toAbsoluteLandingUrl } from "@/lib/seo"

type PageProps = { params: Promise<{ locale: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return PUBLISHED_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isPublishedLocale(locale)) return {}

  return buildLocalizedPageMetadata({
    locale,
    pathname: "/terms",
    title: LEGAL_DRAFTS.terms.title,
    description: LEGAL_DRAFTS.terms.description,
  })
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  const canonicalUrl = toAbsoluteLandingUrl(localizePath(locale, "/terms"))
  return <LegalPage page="terms" locale={locale} canonicalUrl={canonicalUrl} />
}
