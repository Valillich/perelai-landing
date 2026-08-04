import { notFound } from "next/navigation"
import { getNicheContent } from "@/content/niches"
import { getEnabledNichePageBySlug } from "@/config/niche-pages"
import { isPublishedLocale } from "@/i18n/locales"
import {
  generateOgImageMetadata,
  renderOgCardImage,
} from "@/lib/og-image"
import { formatCurrency, localePrimaryMarket } from "@/lib/market"
import { buildMockDataset } from "@/lib/mock-data"

type Props = { params: Promise<{ locale: string; nichePage: string }> }

export async function generateImageMetadata({ params }: Props) {
  const { locale, nichePage } = await params

  if (!isPublishedLocale(locale)) {
    return generateOgImageMetadata("Perelai workspace preview")
  }

  const page = getEnabledNichePageBySlug(nichePage, locale)
  if (!page) {
    return generateOgImageMetadata("Perelai workspace preview")
  }

  const content = getNicheContent(page, locale)
  return generateOgImageMetadata(content.meta.ogImageAlt)
}

export default async function OpenGraphImage({ params }: Props) {
  const { locale, nichePage } = await params
  if (!isPublishedLocale(locale)) notFound()

  const page = getEnabledNichePageBySlug(nichePage, locale)
  if (!page) notFound()

  const content = getNicheContent(page, locale)
  const dataset = buildMockDataset(
    page.templateId,
    locale,
    localePrimaryMarket(locale),
    "2026-07-15T12:00:00.000Z",
  )

  const primaryVisit = dataset.visits[0]
  const featureLines = [
    `${primaryVisit.timeLabel} ${primaryVisit.serviceName} - ${primaryVisit.clientName}`,
    `${dataset.labels["inbox.title"]}: ${dataset.inboxCount}`,
    `${dataset.labels["chart_labels.revenue"]}: ${formatCurrency(dataset.kpis.revenue, dataset.market)}`,
    dataset.exampleCaption,
  ]

  return renderOgCardImage({
    eyebrow: content.hero.eyebrow,
    title: content.hero.h1,
    body: content.hero.subhead,
    localeLabel: locale,
    featureLines,
  })
}
