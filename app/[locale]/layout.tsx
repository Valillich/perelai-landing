import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { JsonLd } from "@/components/seo/json-ld"
import { LegacyAttributionCleanup } from "@/lib/attribution"
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

// This must run in the document head: legal pages are statically rendered, so
// their `from` context is unavailable on the server. The strict allowlist
// matches validReturnFrom() without accepting a full return URL.
const legalChromeInlineScript = `(function(){try{var from=new URLSearchParams(window.location.search).get("from");if(from === "login" || from === "register" || from === "forgot" || from === "onboarding" || from === "settings" || from === "billing" || from === "data-transfer"){document.documentElement.classList.add("legal-from-app")}}catch(e){}})();`

export function generateStaticParams() {
  return PUBLISHED_LOCALES.map((locale) => ({ locale }))
}

export const dynamicParams = false

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_LANDING_URL),
  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
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
        <script dangerouslySetInnerHTML={{ __html: legalChromeInlineScript }} />
      </head>
      <body>
        <JsonLd data={baseSchema} />
        <LegacyAttributionCleanup />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
