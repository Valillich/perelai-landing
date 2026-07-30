import { notFound } from "next/navigation"
import { PRICING_CAPABILITY_KEYS } from "@/content/pricing"
import enPricing from "@/messages/en/pricing.json"
import plPricing from "@/messages/pl/pricing.json"
import ukPricing from "@/messages/uk/pricing.json"
import { isPublishedLocale } from "@/i18n/locales"
import {
  generateOgImageMetadata,
  renderOgCardImage,
} from "@/lib/og-image"

const pricingByLocale = {
  en: enPricing,
  uk: ukPricing,
  pl: plPricing,
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateImageMetadata({ params }: Props) {
  const { locale } = await params
  const pricing = isPublishedLocale(locale)
    ? pricingByLocale[locale]
    : pricingByLocale.en

  return generateOgImageMetadata(`${pricing.hero.title} — ${pricing.hero.body}`)
}

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  const pricing = pricingByLocale[locale]

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
