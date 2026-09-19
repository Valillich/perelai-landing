export const PRICING_CAPABILITY_KEYS = [
  "inbox",
  "calendar",
  "booking",
  "clients",
  "payments",
  "finance",
  "orders",
  "packages",
  "onboarding",
  "contactImport",
  "languages",
  "mobile",
  "themes",
] as const

export type PricingCapabilityKey = (typeof PRICING_CAPABILITY_KEYS)[number]
