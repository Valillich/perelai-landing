import type { PublishedLocale } from "@/i18n/locales"

export type MockKind = "colorist-workspace"

export interface NicheResearchSource {
  sourceUrl: string
  capturedAt: string
  publishedAt: string
  sourceKind: string
  excerpt: string
  theme: string
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
