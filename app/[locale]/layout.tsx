import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { JsonLd } from "@/components/seo/json-ld"
import { PostHogBootstrap } from "@/components/analytics/posthog-provider"
import { isPublishedLocale, PUBLISHED_LOCALES } from "@/i18n/locales"
import { env } from "@/lib/env"
import {
  getOrganizationJsonLd,
  getWebSiteJsonLd,
  toJsonLdDocument,
} from "@/lib/structured-data"
import "../globals.css"

const themeInlineScript = `(function() {
  try {
    var stored = localStorage.getItem('perelai-theme');
    var isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();`

export function generateStaticParams() {
  return PUBLISHED_LOCALES.map((locale) => ({ locale }))
}

export const dynamicParams = false

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_LANDING_URL),
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isPublishedLocale(locale)) notFound()

  setRequestLocale(locale)

  const baseSchema = toJsonLdDocument([
    getOrganizationJsonLd(),
    getWebSiteJsonLd(locale),
  ])

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInlineScript }} />
      </head>
      <body>
        <JsonLd data={baseSchema} />
        <PostHogBootstrap locale={locale} />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
