import { ImageResponse } from "next/og"
import { OgCard } from "@/components/seo/og-card"

export const OG_IMAGE_SIZE = { width: 1200, height: 630 }
export const OG_IMAGE_CONTENT_TYPE = "image/png"

export function generateOgImageMetadata(alt: string) {
  return [
    {
      id: "default",
      alt,
      size: OG_IMAGE_SIZE,
      contentType: OG_IMAGE_CONTENT_TYPE,
    },
  ]
}

export function renderOgCardImage(props: {
  eyebrow: string
  title: string
  body: string
  localeLabel: string
  featureLines: string[]
}) {
  return new ImageResponse(
    (
      <OgCard
        eyebrow={props.eyebrow}
        title={props.title}
        body={props.body}
        localeLabel={props.localeLabel}
        featureLines={props.featureLines}
      />
    ),
    {
      ...OG_IMAGE_SIZE,
    },
  )
}
