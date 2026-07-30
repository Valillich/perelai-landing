import { content as en } from "./premium-colorist/en"
import { content as pl } from "./premium-colorist/pl"
import { content as uk } from "./premium-colorist/uk"
import type { NichePageContent } from "@/content/niches/types"
import type { NichePage } from "@/config/niche-pages"
import type { PublishedLocale } from "@/i18n/locales"

const premiumColorist = { en, uk, pl } satisfies Record<PublishedLocale, NichePageContent>

export function getNicheContent(
  page: NichePage,
  locale: PublishedLocale,
): NichePageContent {
  if (page.niche !== "premium-colorist") {
    throw new Error(`No content module for enabled niche "${page.niche}"`)
  }

  return premiumColorist[locale]
}
