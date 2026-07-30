import { content as en } from "./premium-colorist/en"
import { content as pl } from "./premium-colorist/pl"
import { content as uk } from "./premium-colorist/uk"
import { content as lashEn } from "./lash-artist/en"
import { content as lashPl } from "./lash-artist/pl"
import { content as lashUk } from "./lash-artist/uk"
import type { NichePageContent } from "@/content/niches/types"
import type { NichePage } from "@/config/niche-pages"
import type { PublishedLocale } from "@/i18n/locales"

const premiumColorist = { en, uk, pl } satisfies Record<PublishedLocale, NichePageContent>
const lashArtist = { en: lashEn, uk: lashUk, pl: lashPl } satisfies Record<
  PublishedLocale,
  NichePageContent
>

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
