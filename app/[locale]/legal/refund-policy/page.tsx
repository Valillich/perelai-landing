import { permanentRedirect, notFound } from "next/navigation"
import { isPublishedLocale, PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"

type PageProps = { params: Promise<{ locale: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return PUBLISHED_LOCALES.map((locale) => ({ locale }))
}

export default async function LegalRefundPolicyRedirectPage({ params }: PageProps) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  permanentRedirect(localizePath(locale as PublishedLocale, "/legal/billing"))
}
