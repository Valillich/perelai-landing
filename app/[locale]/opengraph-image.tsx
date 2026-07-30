import { notFound } from "next/navigation"
import enHome from "@/messages/en/home.json"
import plHome from "@/messages/pl/home.json"
import ukHome from "@/messages/uk/home.json"
import { isPublishedLocale } from "@/i18n/locales"
import {
  generateOgImageMetadata,
  renderOgCardImage,
} from "@/lib/og-image"

const homeByLocale = {
  en: enHome,
  uk: ukHome,
  pl: plHome,
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateImageMetadata({ params }: Props) {
  const { locale } = await params
  const home = isPublishedLocale(locale) ? homeByLocale[locale] : homeByLocale.en

  return generateOgImageMetadata(home.hero.imageAlt)
}

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  const home = homeByLocale[locale]

  return renderOgCardImage({
    eyebrow: "Perelai",
    title: `${home.hero.title} ${home.hero.accent}`,
    body: home.hero.body,
    localeLabel: locale,
    featureLines: [home.inbox.detail, home.booking.detail, home.money.detail],
  })
}
