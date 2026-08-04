import { content as en } from "./premium-colorist/en"
import { content as pl } from "./premium-colorist/pl"
import { content as uk } from "./premium-colorist/uk"
import { content as ru } from "./premium-colorist/ru"
import { content as es } from "./premium-colorist/es"
import { content as fr } from "./premium-colorist/fr"
import { content as de } from "./premium-colorist/de"
import { content as pt } from "./premium-colorist/pt"
import { content as tr } from "./premium-colorist/tr"

import { content as lashEn } from "./lash-artist/en"
import { content as lashPl } from "./lash-artist/pl"
import { content as lashUk } from "./lash-artist/uk"
import { content as lashRu } from "./lash-artist/ru"
import { content as lashEs } from "./lash-artist/es"
import { content as lashFr } from "./lash-artist/fr"
import { content as lashDe } from "./lash-artist/de"
import { content as lashPt } from "./lash-artist/pt"
import { content as lashTr } from "./lash-artist/tr"

import { content as salonEn } from "./hair-salon/en"
import { content as massageEn } from "./massage-therapist/en"

import type { NichePageContent } from "@/content/niches/types"
import type { NichePage } from "@/config/niche-pages"
import type { PublishedLocale } from "@/i18n/locales"

const premiumColorist = { en, uk, pl, ru, es, fr, de, pt, tr } satisfies Record<PublishedLocale, NichePageContent>
const lashArtist = {
  en: lashEn,
  uk: lashUk,
  pl: lashPl,
  ru: lashRu,
  es: lashEs,
  fr: lashFr,
  de: lashDe,
  pt: lashPt,
  tr: lashTr
} satisfies Record<PublishedLocale, NichePageContent>

/**
 * Pages staged in English only, via `locales: ["en"]` in the registry. No other
 * locale can route to them, so the remaining eight stay unwritten until each has
 * named human review. Move a niche out of here once it is fully translated.
 */
const stagedEnglishOnly: Record<string, Partial<Record<PublishedLocale, NichePageContent>>> = {
  "hair-salon": { en: salonEn },
  "massage-therapist": { en: massageEn },
}

export function getNicheContent(
  page: NichePage,
  locale: PublishedLocale,
): NichePageContent {
  if (page.niche === "premium-colorist") {
    return premiumColorist[locale]
  }

  if (page.niche === "lash-artist") {
    return lashArtist[locale]
  }

  const staged = stagedEnglishOnly[page.niche]
  if (staged) {
    const content = staged[locale]
    if (content) return content
    throw new Error(
      `"${page.niche}" has no "${locale}" content. The registry must not publish a locale without one.`,
    )
  }

  throw new Error(`No content module for enabled niche "${page.niche}"`)
}
