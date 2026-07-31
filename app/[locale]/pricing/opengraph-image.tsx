import { notFound } from "next/navigation"
import { isPublishedLocale } from "@/i18n/locales"
import { messagesByLocale } from "@/i18n/messages"
import { PRICING_CAPABILITY_KEYS } from "@/content/pricing"
import {
  generateOgImageMetadata,
  renderOgCardImage,
} from "@/lib/og-image"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateImageMetadata({ params }: Props) {
  const { locale } = await params
  const pricing = isPublishedLocale(locale) ? messagesByLocale[locale].pricing : messagesByLocale.en.pricing

  return generateOgImageMetadata(`${pricing.hero.title} — ${pricing.hero.body}`)
}

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  const pricing = messagesByLocale[locale].pricing

  return renderOgCardImage({
    eyebrow: pricing.meta.title,
    title: pricing.hero.title,
    body: pricing.hero.body,
    localeLabel: locale,
    featureLines: PRICING_CAPABILITY_KEYS.slice(0, 4).map(
      (key) => pricing.capabilities[key],
    ),
  })
}
