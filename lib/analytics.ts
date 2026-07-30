export interface LandingCtaClickedEvent {
  name: "landing_cta_clicked"
  properties: {
    location: string
    destination: "signup" | "login"
    campaign: string
    niche?: string
    landingPath?: string
  }
}

export interface LegalViewedEvent {
  name: "legal_viewed"
  properties: {
    page: "terms" | "privacy"
    locale: string
    from?: "login" | "register" | "forgot"
  }
}

export interface LegalReturnClickedEvent {
  name: "legal_return_clicked"
  properties: {
    from: "login" | "register" | "forgot"
    destination: "login" | "register" | "forgot"
  }
}

export type AnalyticsEvent =
  | LandingCtaClickedEvent
  | LegalViewedEvent
  | LegalReturnClickedEvent

export interface AnalyticsAdapter {
  track(event: AnalyticsEvent): void
}

const noOpAdapter: AnalyticsAdapter = {
  track: () => undefined,
}

let adapter: AnalyticsAdapter = noOpAdapter

/**
 * The only analytics interface call sites use. LP10 can replace its adapter
 * without coupling landing code to a vendor SDK.
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

export function configureAnalyticsAdapter(nextAdapter: AnalyticsAdapter = noOpAdapter): void {
  adapter = nextAdapter
}
