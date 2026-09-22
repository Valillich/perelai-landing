import type { LegalDocumentSlug } from "./types"

export interface LegalNavItem {
  slug: LegalDocumentSlug
  title: string
  shortTitle: string
}

export const LEGAL_NAV_ITEMS: LegalNavItem[] = [
  { slug: "terms", title: "Terms of Service", shortTitle: "Terms" },
  { slug: "privacy", title: "Privacy Notice", shortTitle: "Privacy" },
  { slug: "dpa", title: "Data Processing Addendum", shortTitle: "DPA" },
  { slug: "booking-terms", title: "Public Booking Terms", shortTitle: "Booking Terms" },
  { slug: "cookies", title: "Cookie Policy", shortTitle: "Cookies" },
  { slug: "subprocessors", title: "Subprocessors", shortTitle: "Subprocessors" },
  { slug: "billing", title: "Refund & Cancellation Policy", shortTitle: "Refund Policy" },
]
