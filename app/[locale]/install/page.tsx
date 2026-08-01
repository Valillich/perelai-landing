import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PageViewTracker } from "@/components/analytics/page-view-tracker"
import { DevicePage } from "@/components/devices/device-page"
import { LandingFooter } from "@/components/landing/landing-footer"
import { LandingHeader } from "@/components/landing/landing-header"
import { JsonLd } from "@/components/seo/json-ld"
import { isPublishedLocale, PUBLISHED_LOCALES } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import { buildLocalizedPageMetadata, toAbsoluteLandingUrl } from "@/lib/seo"
import {
  getBreadcrumbListJsonLd,
  getSoftwareApplicationJsonLd,
  toJsonLdDocument,
} from "@/lib/structured-data"

/** The canonical English path; `localizePath` derives every other locale. */
const INSTALL_PATH = "/install"

type PageProps = { params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return PUBLISHED_LOCALES.map((locale) => ({ locale }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isPublishedLocale(locale)) return {}

  const t = await getTranslations({ locale, namespace: "devices.meta" })
  return buildLocalizedPageMetadata({
    locale,
    pathname: INSTALL_PATH,
    title: t("title"),
    description: t("description"),
  })
}

/**
 * The canonical `/install` hub (plan §6.1, §7.1).
 *
 * `DevicePage` is the long-form composition and deliberately carries no
 * navigation, so the shell is assembled here.
 */
export default async function InstallPageRoute({ params }: PageProps) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  setRequestLocale(locale)

  const tNav = await getTranslations({ locale, namespace: "devices.nav" })
  const tMeta = await getTranslations({ locale, namespace: "devices.meta" })
  const tShowcase = await getTranslations({ locale, namespace: "devices.showcase" })
  const tLimitations = await getTranslations({ locale, namespace: "devices.limitations" })

  const pageUrl = toAbsoluteLandingUrl(localizePath(locale, INSTALL_PATH))
  const homeUrl = toAbsoluteLandingUrl(localizePath(locale, "/"))

  const schema = toJsonLdDocument([
    getSoftwareApplicationJsonLd({
      locale,
      url: pageUrl,
      description: tMeta("description"),
      featureList: [
        tShowcase("phone.body"),
        tShowcase("ipad.body"),
        tShowcase("desktop.body"),
      ],
    }),
    getBreadcrumbListJsonLd([
      { name: "Perelai", url: homeUrl },
      { name: tNav("label"), url: pageUrl },
    ]),
  ])

  return (
    <>
      <main className="flex min-h-screen flex-col bg-background text-foreground">
        <PageViewTracker landingPath={INSTALL_PATH} locale={locale} pageType="install" />
        <LandingHeader locale={locale} canonicalPath={INSTALL_PATH} />
        <div className="flex-1">
          <DevicePage locale={locale} />
        </div>
        <LandingFooter locale={locale} canonicalPath={INSTALL_PATH} />
      </main>
      <JsonLd data={schema} />
    </>
  )
}
