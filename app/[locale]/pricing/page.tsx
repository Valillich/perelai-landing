import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PricingPage } from "@/components/pricing/pricing-page"
import { isPublishedLocale, PUBLISHED_LOCALES } from "@/i18n/locales"
import { buildLocalizedPageMetadata } from "@/lib/seo"

type PageProps = { params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return PUBLISHED_LOCALES.map((locale) => ({ locale }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isPublishedLocale(locale)) return {}

  const t = await getTranslations({ locale, namespace: "pricing.meta" })
  return buildLocalizedPageMetadata({
    locale,
    pathname: "/pricing",
    title: t("title"),
    description: t("description"),
  })
}

export default async function PricingPageRoute({ params }: PageProps) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  setRequestLocale(locale)
  return <PricingPage locale={locale} />
}
