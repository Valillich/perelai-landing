import catalog from "@/data/commercial-offers.generated.json"

export const PRICING_CAPABILITY_KEYS = [
  "calendar",
  "booking",
  "clients",
  "payments",
  "packages",
  "cashDrawer",
  "orders",
  "inbox",
  "finance",
  "insights",
] as const

export type PricingCapabilityKey = (typeof PRICING_CAPABILITY_KEYS)[number]

// Public display facts from the app's provider-neutral billing catalog.
// Informational while checkout remains disabled in the app.
export const PRICING_PLANS = catalog.offers
  .filter(offer => offer.publicStatus === "VISIBLE")
  .map(offer => ({
    code: offer.planCode.toLowerCase() as "solo" | "studio",
    name: offer.planCode,
    offerCode: offer.offerCode,
    monthlyUsd: offer.canonicalAmountMinor / 100,
    performerLimit: offer.performerLimit,
  }))
