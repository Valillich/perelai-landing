import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { NichePage } from "@/components/niche/niche-page"
import { JsonLd } from "@/components/seo/json-ld"
import { getNicheContent } from "@/content/niches"
import {
  getEnabledNichePageBySlug,
  getNicheStaticParams,
  getNichePageLocales,
} from "@/config/niche-pages"
import { isPublishedLocale } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import { buildLocalizedPageMetadata, toAbsoluteLandingUrl } from "@/lib/seo"
import {
  getBreadcrumbListJsonLd,
  getSoftwareApplicationJsonLd,
  toJsonLdDocument,
} from "@/lib/structured-data"

type PageProps = { params: Promise<{ locale: string; nichePage: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getNicheStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, nichePage } = await params
  if (!isPublishedLocale(locale)) return {}

  const page = getEnabledNichePageBySlug(nichePage, locale)
  if (!page) return {}

  const content = getNicheContent(page, locale)
  return buildLocalizedPageMetadata({
    locale,
    pathname: page.path,
    title: content.meta.title,
    description: content.meta.description,
    availableLocales: getNichePageLocales(page),
  })
}

export default async function NicheLandingPage({ params }: PageProps) {
  const { locale, nichePage } = await params
  if (!isPublishedLocale(locale)) notFound()

  const page = getEnabledNichePageBySlug(nichePage, locale)
  if (!page) notFound()

  const content = getNicheContent(page, locale)
  const pageUrl = toAbsoluteLandingUrl(localizePath(locale, page.path))
  const schema = toJsonLdDocument([
    getSoftwareApplicationJsonLd({
      locale,
      url: pageUrl,
      description: content.meta.description,
      featureList: content.terminology.slice(0, 3).map(
        (row) => `${row.perelaiWord}: ${row.why}`,
      ),
    }),
    getBreadcrumbListJsonLd([
      {
        name: "Perelai",
        url: toAbsoluteLandingUrl(localizePath(locale, "/")),
      },
      {
        name: content.hero.eyebrow,
        url: pageUrl,
      },
    ]),
  ])

  setRequestLocale(locale)
  return (
    <>
      <NichePage locale={locale} page={page} content={content} />
      <JsonLd data={schema} />
    </>
  )
}
