import type { PublishedLocale } from "@/i18n/locales"

export type MockKind = "colorist-workspace" | "lash-workspace"

/**
 * Evidence class for a research source. Optional so existing niche research files stay valid;
 * new research should always declare it, because these classes carry different weight and
 * different publication rules.
 *
 * - `independent_forum`      — unmoderated practitioner discussion. Proxy VOC, not first-party.
 * - `vendor_hosted_customer` — a customer quote published by a vendor about their own product.
 *                              Never usable as Perelai social proof.
 * - `competitor_claim`       — a competitor's own marketing claim. Usable only to set a capability
 *                              boundary in internal review; never quoted on a public page.
 * - `first_party_voc`        — Perelai's own users or prospects, with recorded consent.
 */
export type NicheEvidenceClass =
  | "independent_forum"
  | "vendor_hosted_customer"
  | "competitor_claim"
  | "first_party_voc"

export interface NicheResearchSource {
  sourceUrl: string
  capturedAt: string
  publishedAt: string
  sourceKind: string
  excerpt: string
  theme: string
  evidenceClass?: NicheEvidenceClass
}

export interface NicheResearchVerbatim {
  phrase: string
  sourceUrl: string
  theme: string
}

export interface NichePageContent {
  meta: { title: string; description: string; ogImageAlt: string }
  hero: { eyebrow: string; h1: string; subhead: string; mock: MockKind }
  pains: Array<{ title: string; body: string }>
  dayInLife: { title: string; body: string; steps: Array<{ title: string; body: string }> }
  terminology: Array<{ theirWord: string; perelaiWord: string; why: string }>
  setup: { title: string; body: string; steps: Array<{ title: string; body: string }> }
  faq: Array<{ q: string; a: string }>
  labels: {
    terminologyTitle: string
    inYourChair: string
    inPerelai: string
    whyItMatters: string
    mocksTitle: string
    mocksBody: string
    faqTitle: string
  }
  whatItIsNot: { title: string; body: string; items: Array<{ title: string; body: string }> }
  cta: { title: string; body: string; label: string; microcopy: string }
  research: { sources: NicheResearchSource[]; verbatims: NicheResearchVerbatim[] }
}

export type NicheContentByLocale = Record<PublishedLocale, NichePageContent>
