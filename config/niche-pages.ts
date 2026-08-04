import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"

export type BookingMode = "APPOINTMENT" | "REQUEST" | "ORDER" | "RENTAL"
export type NicheWave = "1a" | "1b" | "2" | "3a" | "3b" | "3c" | "hold-legal"

export interface NichePage {
  /** English canonical path, e.g. `/for-independent-colorists`. */
  path: string
  /** Slug emitted to the app — must exist in the generated catalog. */
  niche: string
  /** Expected template id — verified against the catalog. */
  templateId: string
  wave: NicheWave
  /** Only Wave 1a is enabled until later gates pass. */
  enabled: boolean
  aliases?: string[]
  /**
   * Locales this page is published in. Omit for the normal case — a page
   * translated into every published locale.
   *
   * Set it to stage a page that is approved in some locales but not others: only
   * these locales get a route, a sitemap entry, an hreflang alternate, a homepage
   * router card and a header menu item. A locale left out here has no page, so it
   * must not be advertised anywhere. Every locale listed must have a content
   * module and its `home.nicheRouter.*` label keys.
   */
  locales?: readonly PublishedLocale[]
}

/**
 * Slugs owned by real or planned site routes. Niche pages stay flat, so this
 * guard prevents a future registry entry from silently taking one over.
 */
export const RESERVED_SLUGS = [
  "pricing",
  "install",
  "legal",
  "privacy",
  "terms",
  "about",
  "blog",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
  "pricing.md",
  "en",
  "uk",
  "pl",
  "ru",
  "es",
  "fr",
  "de",
] as const

/**
 * Production booking-mode flags. Update only with dated production evidence.
 * REQUEST/ORDER/RENTAL stay false until Wave 3 gates pass.
 */
export const PRODUCTION_BOOKING_FLAGS = {
  APPOINTMENT: true,
  REQUEST: false,
  ORDER: false,
  RENTAL: false,
} as const

export const NICHE_PAGES: NichePage[] = [
  // Wave 1a
  {
    path: "/for-independent-colorists",
    niche: "premium-colorist",
    templateId: "independent_colorist",
    wave: "1a",
    enabled: true,
    aliases: ["/for-hair-colorists", "/for-colorists"],
  },

  // Wave 1b — enabled after the LP11.1 evidence gate
  {
    path: "/for-lash-artists",
    niche: "lash-artist",
    templateId: "brow_lash_artist",
    wave: "1b",
    enabled: true,
  },
  {
    path: "/for-nail-artists",
    niche: "nail-studio",
    templateId: "nail_salon",
    wave: "1b",
    enabled: false,
  },
  {
    // English-only staged launch (2026-08-04), same terms as `/for-salons`.
    path: "/for-massage-therapists",
    niche: "massage-therapist",
    templateId: "massage",
    wave: "1b",
    enabled: true,
    locales: ["en"],
  },
  {
    path: "/for-barbers",
    niche: "barbershop",
    templateId: "barber",
    wave: "1b",
    enabled: false,
  },
  {
    // English-only staged launch (2026-08-04). The eight other locales stay
    // unpublished until each has named human review; see content/niches/hair-salon.
    path: "/for-salons",
    niche: "hair-salon",
    templateId: "salon",
    wave: "1b",
    enabled: true,
    locales: ["en"],
  },
  {
    path: "/for-private-tutors",
    niche: "private-tutor",
    templateId: "tutor",
    wave: "1b",
    enabled: false,
  },
  {
    path: "/for-coaches",
    niche: "business-coach",
    templateId: "coach",
    wave: "1b",
    enabled: false,
  },

  // Wave 2 — present, disabled
  {
    path: "/for-spas",
    niche: "day-spa",
    templateId: "spa",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-makeup-artists",
    niche: "makeup-artist",
    templateId: "makeup_artist",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-personal-trainers",
    niche: "personal-trainer",
    templateId: "personal_trainer",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-music-teachers",
    niche: "music-teacher",
    templateId: "music_teacher",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-yoga-instructors",
    niche: "yoga-instructor",
    templateId: "yoga_instructor",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-language-schools",
    niche: "language-school",
    templateId: "language_school",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-career-coaches",
    niche: "career-coach",
    templateId: "career_coach",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-consultants",
    niche: "consulting",
    templateId: "consulting",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-accountants",
    niche: "accounting",
    templateId: "accounting",
    wave: "2",
    enabled: false,
  },
  {
    path: "/for-photographers",
    niche: "photography",
    templateId: "photographer",
    wave: "2",
    enabled: false,
  },

  // HOLD-LEGAL — present, disabled
  {
    path: "/for-aesthetic-clinics",
    niche: "aesthetic-clinic",
    templateId: "aesthetic_clinic",
    wave: "hold-legal",
    enabled: false,
  },
  {
    path: "/for-estheticians",
    niche: "esthetician",
    templateId: "advanced_skincare",
    wave: "hold-legal",
    enabled: false,
  },

  // Wave 3a REQUEST — present, disabled
  {
    path: "/for-freelance-designers",
    niche: "freelance-designer",
    templateId: "freelance_designer",
    wave: "3a",
    enabled: false,
  },
  {
    path: "/for-handymen",
    niche: "home-services",
    templateId: "handyman",
    wave: "3a",
    enabled: false,
  },
  {
    path: "/for-marketing-agencies",
    niche: "marketing-agency",
    templateId: "marketing_agency",
    wave: "3a",
    enabled: false,
  },
  {
    path: "/for-it-services",
    niche: "it-services",
    templateId: "it_services",
    wave: "3a",
    enabled: false,
  },

  // Wave 3b ORDER — present, disabled
  {
    path: "/for-course-creators",
    niche: "course-creator",
    templateId: "course_creator",
    wave: "3b",
    enabled: false,
  },
  {
    path: "/for-content-creators",
    niche: "content-creator",
    templateId: "content_creator",
    wave: "3b",
    enabled: false,
  },

  // Wave 3c RENTAL — present, disabled
  {
    path: "/for-coworking-spaces",
    niche: "coworking",
    templateId: "coworking",
    wave: "3c",
    enabled: false,
  },
  {
    path: "/for-car-rentals",
    niche: "car-rental",
    templateId: "car_rental",
    wave: "3c",
    enabled: false,
  },
  {
    path: "/for-equipment-rentals",
    niche: "equipment-rental",
    templateId: "equipment_rental",
    wave: "3c",
    enabled: false,
  },
  {
    path: "/for-event-venues",
    niche: "event-venue",
    templateId: "event_venue",
    wave: "3c",
    enabled: false,
  },
  {
    path: "/for-short-term-rentals",
    niche: "short-term-rental",
    templateId: "short_term_rental",
    wave: "3c",
    enabled: false,
  },
  {
    path: "/for-storage-facilities",
    niche: "storage-unit",
    templateId: "storage_unit",
    wave: "3c",
    enabled: false,
  },
]

export function getEnabledNichePages(): NichePage[] {
  return NICHE_PAGES.filter((page) => page.enabled)
}

function pageSlug(page: NichePage): string {
  return page.path.replace(/^\//, "")
}

/** Locales a page is actually published in. Defaults to every published locale. */
export function getNichePageLocales(page: NichePage): readonly PublishedLocale[] {
  return page.locales ?? PUBLISHED_LOCALES
}

export function isNichePagePublishedIn(page: NichePage, locale: PublishedLocale): boolean {
  return getNichePageLocales(page).includes(locale)
}

/** Enabled pages available in `locale` — what a locale may link to and list. */
export function getEnabledNichePagesForLocale(locale: PublishedLocale): NichePage[] {
  return getEnabledNichePages().filter((page) => isNichePagePublishedIn(page, locale))
}

/**
 * Resolves a slug to an enabled page. Pass `locale` on routing surfaces: a page
 * that is not published in that locale must 404 rather than render a missing
 * translation.
 */
export function getEnabledNichePageBySlug(
  slug: string,
  locale?: PublishedLocale,
): NichePage | undefined {
  if (RESERVED_SLUGS.includes(slug as (typeof RESERVED_SLUGS)[number])) return undefined
  const page = getEnabledNichePages().find((candidate) => pageSlug(candidate) === slug)
  if (!page) return undefined
  if (locale && !isNichePagePublishedIn(page, locale)) return undefined
  return page
}

export function getNicheStaticParams() {
  return getEnabledNichePages().flatMap((page) =>
    getNichePageLocales(page).map((locale) => ({ locale, nichePage: pageSlug(page) })),
  )
}

export function getNichePageByPath(pathname: string): NichePage | undefined {
  return NICHE_PAGES.find((page) => page.path === pathname || page.aliases?.includes(pathname))
}
