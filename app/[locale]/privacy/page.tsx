import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LegalPage } from "@/components/legal/legal-page"
import { LEGAL_DRAFTS } from "@/content/legal"
import { isPublishedLocale, PUBLISHED_LOCALES } from "@/i18n/locales"
import { getLocalizedAlternates, localizePath } from "@/i18n/paths"
import { env } from "@/lib/env"

type PageProps = { params: Promise<{ locale: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return PUBLISHED_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isPublishedLocale(locale)) return {}

  const canonical = new URL(localizePath(locale, "/privacy"), env.NEXT_PUBLIC_LANDING_URL).toString()
  return {
    title: LEGAL_DRAFTS.privacy.title,
    description: LEGAL_DRAFTS.privacy.description,
    alternates: { canonical, languages: getLocalizedAlternates("/privacy", locale) },
  }
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  const canonicalUrl = new URL(localizePath(locale, "/privacy"), env.NEXT_PUBLIC_LANDING_URL).toString()
  return <LegalPage page="privacy" locale={locale} canonicalUrl={canonicalUrl} />
}
