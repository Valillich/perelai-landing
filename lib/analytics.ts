import type { PublishedLocale } from "@/i18n/locales"

export type LandingPageType = "home" | "pricing" | "niche" | "terms" | "privacy" | "install"
export type CtaPosition =
  | "header_login"
  | "header_signup"
  | "hero_signup"
  | "closing_signup"
  | "niche_hero"
  | "niche_final_cta"
  | "pricing_signup"
  | "install_hero_signup"
  | "install_login"
  | "install_final_signup"
export type CtaText = "create_workspace" | "log_in"
export type CtaDestination = "signup" | "login"

export interface LandingViewedEvent {
  name: "landing_viewed"
  properties: {
    landing_path: string
    locale: string
    page_type: LandingPageType
    niche?: string
  }
}

export interface LandingCtaClickedEvent {
  name: "landing_cta_clicked"
  properties: {
    cta_position: CtaPosition
    cta_text: CtaText
    destination: CtaDestination
    niche?: string
    utm_source?: string
    utm_campaign?: string
    landing_path?: string
  }
}

export interface PricingViewedEvent {
  name: "pricing_viewed"
  properties: {
    source_page: string
    surface: "page" | "section"
  }
}

export interface SignupStartedEvent {
  name: "signup_started"
  properties: {
    niche?: string
    utm_source?: string
    utm_campaign?: string
  }
}

export interface NichePageViewedEvent {
  name: "niche_page_viewed"
  properties: {
    niche: string
    template_id: string
    wave: string
  }
}

export interface LanguageSwitchedEvent {
  name: "language_switched"
  properties: {
    from_locale: string
    to_locale: string
  }
}

export interface FaqOpenedEvent {
  name: "faq_opened"
  properties: {
    question_id: string
    page_type: LandingPageType
  }
}

export interface DeviceMessageViewedEvent {
  name: "device_message_viewed"
  properties: {
    surface: "home" | "niche"
    locale: string
  }
}

export interface CollaborationMessageViewedEvent {
  name: "collaboration_message_viewed"
  properties: {
    surface: "home"
    locale: PublishedLocale
  }
}

export interface InstallGuideOpenedEvent {
  name: "install_guide_opened"
  properties: {
    platform: "iphone" | "ipad" | "android" | "desktop" | "browser"
    source_page: "/install"
  }
}

export interface InstallHelpClickedEvent {
  name: "install_help_clicked"
  properties: {
    source_surface: "hero" | "home_section" | "niche" | "header" | "footer" | "faq"
  }
}

/** Retained from LP8b; legal links are part of a separate, small funnel. */
export interface LegalViewedEvent {
  name: "legal_viewed"
  properties: {
    page: "terms" | "privacy"
    locale: string
    from?: "login" | "register" | "forgot"
  }
}

/** Retained from LP8b; legal links are part of a separate, small funnel. */
export interface LegalReturnClickedEvent {
  name: "legal_return_clicked"
  properties: {
    from: "login" | "register" | "forgot"
    destination: "login" | "register" | "forgot"
  }
}

export type AnalyticsEvent =
  | LandingViewedEvent
  | LandingCtaClickedEvent
  | PricingViewedEvent
  | SignupStartedEvent
  | NichePageViewedEvent
  | LanguageSwitchedEvent
  | FaqOpenedEvent
  | DeviceMessageViewedEvent
  | CollaborationMessageViewedEvent
  | InstallGuideOpenedEvent
  | InstallHelpClickedEvent
  | LegalViewedEvent
  | LegalReturnClickedEvent

export interface AnalyticsAdapter {
  track(event: AnalyticsEvent): void
}

const noOpAdapter: AnalyticsAdapter = {
  track: () => undefined,
}

let adapter: AnalyticsAdapter = noOpAdapter
const deliveredEventKeys = new Set<string>()

/**
 * The only analytics interface call sites use. It deliberately defaults to a
 * no-op, so enabling a provider remains an explicit owner/legal decision.
 */
export const analytics: AnalyticsAdapter = {
  track(event) {
    try {
      adapter.track(event)
    } catch {
      // Observability must never block navigation or legal links.
    }
  },
}

/** Prevents client-effect duplicates, including React strict-mode replays. */
export function trackAnalyticsEventOnce(key: string, event: AnalyticsEvent): boolean {
  if (deliveredEventKeys.has(key)) return false

  deliveredEventKeys.add(key)
  analytics.track(event)
  return true
}

/** Exposed for isolated tests; production code never clears the page-session guard. */
export function resetAnalyticsEventDeduplication(): void {
  deliveredEventKeys.clear()
}

/** Replaces the no-op with a provider adapter after an approved configuration exists. */
export function configureAnalyticsAdapter(nextAdapter: AnalyticsAdapter = noOpAdapter): void {
  adapter = nextAdapter
}

type AcquisitionProperties = Pick<
  SignupStartedEvent["properties"],
  "niche" | "utm_source" | "utm_campaign"
>

type CtaAcquisitionProperties = AcquisitionProperties &
  Pick<LandingCtaClickedEvent["properties"], "landing_path">

function safeAcquisitionValue(value: string | null, maximumLength: number): string | undefined {
  if (!value || value.length > maximumLength) return undefined

  // URL values are not free text: only bounded campaign identifiers can leave the page.
  if (!/^[a-z0-9][a-z0-9_-]*$/i.test(value)) return undefined
  if (/\d{7,}/.test(value)) return undefined

  return value
}

function acquisitionPropertiesFromHref(href: string): AcquisitionProperties {
  try {
    const url = new URL(href)
    const niche = safeAcquisitionValue(url.searchParams.get("niche"), 80)
    const source = safeAcquisitionValue(url.searchParams.get("utm_source"), 80)
    const campaign = safeAcquisitionValue(url.searchParams.get("utm_campaign"), 120)

    return {
      ...(niche ? { niche } : {}),
      ...(source ? { utm_source: source } : {}),
      ...(campaign ? { utm_campaign: campaign } : {}),
    }
  } catch {
    return {}
  }
}

function landingPathPropertyFromHref(href: string): Pick<CtaAcquisitionProperties, "landing_path"> {
  try {
    const path = new URL(href).searchParams.get("landing_path")
    if (!path || path.length > 240 || !/^\/[a-z0-9/-]*$/i.test(path)) return {}

    return { landing_path: path }
  } catch {
    return {}
  }
}

/** Builds a CTA payload only from bounded, allowlisted fields in its actual href. */
export function buildLandingCtaClickedEvent({
  href,
  ctaPosition,
  ctaText,
  destination,
}: {
  href: string
  ctaPosition: CtaPosition
  ctaText: CtaText
  destination: CtaDestination
}): LandingCtaClickedEvent {
  return {
    name: "landing_cta_clicked",
    properties: {
      cta_position: ctaPosition,
      cta_text: ctaText,
      destination,
      ...acquisitionPropertiesFromHref(href),
      ...landingPathPropertyFromHref(href),
    },
  }
}

/** Returns the signup event only for an actual register destination URL. */
export function buildSignupStartedEvent(href: string): SignupStartedEvent | undefined {
  try {
    if (new URL(href).pathname !== "/register") return undefined
  } catch {
    return undefined
  }

  return { name: "signup_started", properties: acquisitionPropertiesFromHref(href) }
}
