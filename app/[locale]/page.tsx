import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Homepage } from "@/components/homepage/homepage"
import { env } from "@/lib/env"
import { isPublishedLocale } from "@/i18n/locales"
import { getLocalizedAlternates, localizePath } from "@/i18n/paths"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isPublishedLocale(locale)) return {}

  const t = await getTranslations({ locale, namespace: "home.meta" })
  const canonical = new URL(localizePath(locale, "/"), env.NEXT_PUBLIC_LANDING_URL).toString()

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical, languages: getLocalizedAlternates("/", locale) },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  setRequestLocale(locale)
  return <Homepage locale={locale} />
}
