import { notFound } from "next/navigation"
import { isPublishedLocale } from "@/i18n/locales"
import { messagesByLocale } from "@/i18n/messages"
import { generateOgImageMetadata, renderOgCardImage } from "@/lib/og-image"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateImageMetadata({ params }: Props) {
  const { locale } = await params
  const devices = isPublishedLocale(locale)
    ? messagesByLocale[locale].devices
    : messagesByLocale.en.devices

  // The reviewed alt text from DVC3 — it already names the surface and marks
  // the data as illustrative, so the preview never reads as a real workspace.
  return generateOgImageMetadata(devices.meta.ogAlt)
}

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params
  if (!isPublishedLocale(locale)) notFound()

  const devices = messagesByLocale[locale].devices

  return renderOgCardImage({
    eyebrow: devices.nav.label,
    title: devices.hero.title,
    // Strip rich-text tags from the install hero body (page uses t.rich).
    body: devices.hero.body.replace(/<\/?url>/g, ""),
    localeLabel: locale,
    // The three honest limitations, so a shared preview carries the same
    // platform answer as the page and cannot promise a store listing.
    featureLines: [
      devices.limitations.installVaries,
      devices.limitations.noStore,
      devices.limitations.online,
    ],
  })
}
