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
export const PRICING_PLANS = [
  { code: "solo", name: "SOLO", monthlyUsd: 19, performerLimit: 1 },
  { code: "studio", name: "STUDIO", monthlyUsd: 29, performerLimit: 5 },
] as const
