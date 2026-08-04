import type { NichePage } from "@/config/niche-pages"

/**
 * Maps a niche slug to its `home.nicheRouter.*` message keys.
 *
 * The homepage router and the header menu both read this, so a new niche page
 * cannot end up labelled in one place and mislabelled in the other. Adding a
 * page to NICHE_PAGES without an entry here is a build-time type error only if
 * you go through `nicheLabelKeys` — which is why nothing else should inline
 * these strings.
 */
const NICHE_LABEL_KEYS: Record<string, { label: string; description: string }> = {
  "premium-colorist": {
    label: "nicheRouter.coloristsLabel",
    description: "nicheRouter.coloristsDescription",
  },
  "lash-artist": {
    label: "nicheRouter.lashArtistsLabel",
    description: "nicheRouter.lashArtistsDescription",
  },
  "hair-salon": {
    label: "nicheRouter.salonsLabel",
    description: "nicheRouter.salonsDescription",
  },
  "massage-therapist": {
    label: "nicheRouter.massageLabel",
    description: "nicheRouter.massageDescription",
  },
  "personal-trainer": {
    label: "nicheRouter.personalTrainerLabel",
    description: "nicheRouter.personalTrainerDescription",
  },
  "music-teacher": {
    label: "nicheRouter.musicTeacherLabel",
    description: "nicheRouter.musicTeacherDescription",
  },
}

export interface NicheLabelKeys {
  label: string
  description: string
}

/**
 * Returns the message keys for a niche page, or null when the page has no
 * copy yet. Callers skip unlabelled pages rather than rendering a raw slug.
 */
export function nicheLabelKeys(page: NichePage): NicheLabelKeys | null {
  return NICHE_LABEL_KEYS[page.niche] ?? null
}

/** Enabled niche pages that have translated labels, in registry order. */
export function labelledNichePages(pages: NichePage[]): Array<{
  page: NichePage
  keys: NicheLabelKeys
}> {
  return pages.flatMap((page) => {
    const keys = nicheLabelKeys(page)
    return keys ? [{ page, keys }] : []
  })
}
