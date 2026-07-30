import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { NichePage } from "@/components/niche/niche-page"
import { getNicheContent } from "@/content/niches"
import { getEnabledNichePageBySlug, getNicheStaticParams } from "@/config/niche-pages"
import { isPublishedLocale } from "@/i18n/locales"
import { env } from "@/lib/env"
import { getLocalizedAlternates, localizePath } from "@/i18n/paths"

type PageProps = { params: Promise<{ locale: string; nichePage: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getNicheStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, nichePage } = await params
  if (!isPublishedLocale(locale)) return {}

  const page = getEnabledNichePageBySlug(nichePage)
  if (!page) return {}

  const content = getNicheContent(page, locale)
  const canonical = new URL(localizePath(locale, page.path), env.NEXT_PUBLIC_LANDING_URL).toString()

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical, languages: getLocalizedAlternates(page.path, locale) },
    openGraph: { title: content.meta.title, description: content.meta.description },
  }
}

export default async function NicheLandingPage({ params }: PageProps) {
  const { locale, nichePage } = await params
  if (!isPublishedLocale(locale)) notFound()

  const page = getEnabledNichePageBySlug(nichePage)
  if (!page) notFound()

  setRequestLocale(locale)
  return <NichePage locale={locale} page={page} content={getNicheContent(page, locale)} />
}
