import catalog from "@/data/commercial-offers.generated.json"

/**
 * Publication flag for paid checkout copy. A calendar date does not prove
 * that the live catalog and checkout have passed their release checks.
 * Static pages pick up a flag change when the landing is rebuilt.
 */
export function isPaidSubscriptionsLive(): boolean {
  return process.env.NEXT_PUBLIC_PAID_SUBSCRIPTIONS_LIVE === "true"
}

/** Build-time publication gates; these never grant app purchase eligibility. */
export function getOfferSignupRelease() {
  const studioReleased = process.env.NEXT_PUBLIC_TEAM_RELEASED === "true"
  return {
    studioReleased,
    codes: isPaidSubscriptionsLive()
      ? catalog.offers.filter(offer => offer.publicStatus === "VISIBLE" &&
          (offer.planCode === "SOLO" || (offer.planCode === "STUDIO" && studioReleased)))
        .map(offer => offer.offerCode)
      : [],
  }
}
