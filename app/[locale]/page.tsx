import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Homepage } from "@/components/homepage/homepage"
import { JsonLd } from "@/components/seo/json-ld"
import { isPublishedLocale } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import { buildLocalizedPageMetadata, toAbsoluteLandingUrl } from "@/lib/seo"
import { HOME_FAQ_ITEMS } from "@/config/home-faq"
import {
  getFaqPageJsonLd,
  getSoftwareApplicationJsonLd,
  toJsonLdDocument,
} from "@/lib/structured-data"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isPublishedLocale(locale)) return {}

  const t = await getTranslations({ locale, namespace: "home.meta" })
  return buildLocalizedPageMetadata({
    locale,
    pathname: "/",
    title: t("title"),
    description: t("description"),
  })
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "home" })
  const pageUrl = toAbsoluteLandingUrl(localizePath(locale, "/"))
  const visibleFaqs = HOME_FAQ_ITEMS.map((item) => ({
    question: t(item.qKey),
    answer: t(item.aKey),
  }))

  const schema = toJsonLdDocument([
    getSoftwareApplicationJsonLd({
      locale,
      url: pageUrl,
      description: t("meta.description"),
      featureList: [t("operations.body"), t("records.body"), t("finance.body")],
    }),
    getFaqPageJsonLd(visibleFaqs),
  ])

  return (
    <>
      <Homepage locale={locale} />
      <JsonLd data={schema} />
    </>
  )
}
