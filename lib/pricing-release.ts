/**
 * Publication flag for paid checkout copy. A calendar date does not prove
 * that the live catalog and checkout have passed their release checks.
 * Static pages pick up a flag change when the landing is rebuilt.
 */
export function isPaidSubscriptionsLive(): boolean {
  return process.env.NEXT_PUBLIC_PAID_SUBSCRIPTIONS_LIVE === "true"
}
