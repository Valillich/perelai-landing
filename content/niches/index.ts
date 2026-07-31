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

  throw new Error(`No content module for enabled niche "${page.niche}"`)
}
