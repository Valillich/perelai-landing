import { notFound } from "next/navigation"
import { isPublishedLocale } from "@/i18n/locales"
import {
  generateOgImageMetadata,
  renderOgCardImage,
} from "@/lib/og-image"
import { messagesByLocale } from "@/i18n/messages"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateImageMetadata({ params }: Props) {
  const { locale } = await params
  const home = isPublishedLocale(locale) ? messagesByLocale[locale].home : messagesByLocale.en.home

  return generateOgImageMetadata(home.hero.imageAlt)
}

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  const home = messagesByLocale[locale].home

  return renderOgCardImage({
    eyebrow: "Perelai",
    title: `${home.hero.title} ${home.hero.accent}`,
    body: home.hero.body,
    localeLabel: locale,
    featureLines: [home.inbox.detail, home.booking.detail, home.money.detail],
  })
}
