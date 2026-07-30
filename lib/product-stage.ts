/**
 * Landing mirror of the app's `utils/productStage.ts`.
 *
 * The app ships a beta badge and notice from the same toggle, defaulting to on
 * when the variable is unset. The landing has to agree: a visitor who reads
 * "beta" in the product and nothing on the pricing page — or the reverse — is
 * being told two different things about the same product.
 *
 * Read at module scope on purpose: `NEXT_PUBLIC_*` is inlined at build time,
 * so this resolves during SSG and the flag is baked into the static HTML.
 */
const PRODUCT_STAGE_ENABLED = process.env.NEXT_PUBLIC_PRODUCT_STAGE_ENABLED

/** Defaults to true when unset, matching the app. */
export function isProductStageEnabled(): boolean {
  if (typeof PRODUCT_STAGE_ENABLED !== "string") return true
  return PRODUCT_STAGE_ENABLED.toLowerCase() === "true"
}
