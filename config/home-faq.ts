/**
 * Shared FAQ definitions for Homepage UI and JSON-LD schema (POS2).
 * Uses stable semantic analytics IDs instead of position-dependent indices.
 */
export const HOME_FAQ_ITEMS = [
  { id: "booking", qKey: "faq.q1", aKey: "faq.a1" },
  { id: "trial", qKey: "faq.q2", aKey: "faq.a2" },
  { id: "trial_end", qKey: "faq.q3", aKey: "faq.a3" },
  { id: "team", qKey: "faq.q4", aKey: "faq.a4" },
  { id: "packages", qKey: "faq.q5", aKey: "faq.a5" },
  { id: "accounting_payments", qKey: "faq.q6", aKey: "faq.a6" },
] as const

export type HomeFaqItem = (typeof HOME_FAQ_ITEMS)[number]
