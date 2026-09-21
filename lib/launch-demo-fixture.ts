/**
 * Fixed demonstration data for POS2 homepage preview components.
 * Package, administrator access, and cash drawer session scenarios.
 * These are NOT real user data — purely illustrative marketing examples.
 */

/** Package redemption example: 3 visits total, 1 used, 2 remaining. */
export const PACKAGE_DEMO = {
  total: 3,
  used: 1,
  remaining: 2,
  unit: "visits" as const,
} as const

/** Cash drawer session closing scenario (POS2 §3C). */
export const DRAWER_DEMO = {
  /** Opening float entered by the operator. */
  opening: 100,
  /** Cash received during the session (visit payments allocated to cash). */
  cashReceived: 50,
  /** System-calculated expected amount: opening + cashReceived. */
  expected: 150,
  /** Operator's physical count at closing. */
  counted: 145,
  /** Difference: counted − expected. Negative means short. */
  difference: -5,
  /** Fixed demo currency code and symbol. */
  currency: "USD" as const,
  currencySymbol: "$",
} as const

/** Administrator workspace access example (POS2 §3B). */
export const ADMIN_DEMO = {
  role: "Administrator" as const,
  isPerformer: false,
} as const
