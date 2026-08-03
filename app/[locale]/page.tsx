import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Homepage } from "@/components/homepage/homepage"
import { JsonLd } from "@/components/seo/json-ld"
import { isPublishedLocale } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import { buildLocalizedPageMetadata, toAbsoluteLandingUrl } from "@/lib/seo"
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
  const visibleFaqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
    { question: t("faq.q8"), answer: t("faq.a8") },
  ]

  const schema = toJsonLdDocument([
    getSoftwareApplicationJsonLd({
      locale,
      url: pageUrl,
      description: t("meta.description"),
      featureList: [t("money.detail"), t("inbox.detail"), t("booking.detail")],
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
