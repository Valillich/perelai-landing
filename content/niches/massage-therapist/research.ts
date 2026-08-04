import type { NichePageContent } from "@/content/niches/types"

/**
 * LP11.2 customer-research pass for `/for-massage-therapists`
 * (niche `massage-therapist`, template `massage`).
 *
 * EVIDENCE CLASS: proxy professional-forum discussion (SalonGeek — Salon Professionals Forum).
 * Not first-party Perelai VOC. Nobody here is a Perelai customer, and nothing below is a testimonial.
 *
 * CAPTURE METHOD: read in-browser on 2026-08-04 at the three thread URLs below; author handles and
 * ISO post timestamps taken from each thread's own markup. Excerpts are verbatim, trimmed only at
 * word boundaries. reddit.com remains blocked by policy in every tool available here.
 *
 * KNOWN LIMITATION — RECENCY: these threads run 2011–2018. None falls inside a 12-month window.
 * Directional only.
 *
 * KNOWN LIMITATION — SEGMENT: SalonGeek is UK hair *and* beauty. `T_MOBILE` is a qualifying Swedish
 * massage therapist; `T_ACCOUNTING` and `T_NETPROFIT` are solo beauty and hair professionals whose
 * financial question — one person, one pair of hands, consumables and travel against what is left —
 * is the same one this page answers. Each entry's `sourceKind` records which is which.
 *
 * NO REUSE: checked against `hair-salon`, `lash-artist` and `premium-colorist` research. All three
 * thread URLs are new to this corpus and no phrase is shared.
 *
 * NOT RENDERED: `research` is stripped by `scripts/check-uniqueness.mjs` and is not read by the page.
 */

const capturedAt = "2026-08-04"

const T_ACCOUNTING =
  "https://www.salongeek.com/threads/mobile-hairdressing-accounting-what-do-you-use.251510/"
const T_NETPROFIT = "https://www.salongeek.com/threads/net-profit-what-is-it.128708/"
const T_MOBILE =
  "https://www.salongeek.com/threads/mobile-beauty-therapy-or-renting-room-in-a-salon-advice-gratefully-received.324302/"

export const massageTherapistResearch: NichePageContent["research"] = {
  sources: [
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-09",
      sourceKind: "Solo mobile professional asking how to track money (SalonGeek)",
      excerpt: "So I need to start recording things better, what do u all use for keeping track of your income and expenditures??",
      theme: "Tracking it by hand",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-09",
      sourceKind: "Solo mobile professional describing what she wants (SalonGeek)",
      excerpt: "I'd like something that is hair focused and works out profit, times etc and notes for each client etc.",
      theme: "One place instead of several",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-09",
      sourceKind: "Solo professional on scale and cost (SalonGeek)",
      excerpt: "It's only me so don't want to pay for something fancy but equally I'd like to do something bit more comprehensive than just my basic spreadsheet!",
      theme: "Solo, not a salon floor",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-10",
      sourceKind: "Solo practitioner running three separate tools (SalonGeek)",
      excerpt: "I use ovatu (scheduling) I zettle (transactions) and receipts2go (expenses)",
      theme: "One place instead of several",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-10",
      sourceKind: "Sole trader describing her spreadsheet (SalonGeek)",
      excerpt: "I work for myself and there's only me. I use excel which my fiancé set up for me.",
      theme: "Tracking it by hand",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-10",
      sourceKind: "Sole trader on what her spreadsheet computes (SalonGeek)",
      excerpt: "It calculates my travel expenses which are 45p per mile and my products used per client.",
      theme: "Consumables and travel against the treatment",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-10",
      sourceKind: "Sole trader on her month-end routine (SalonGeek)",
      excerpt: "It have my total amount & profit at the bottom. I print it off at the end of my working month so I have a hard copy too.",
      theme: "Tracking it by hand",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-10",
      sourceKind: "Beauty therapist on cost per treatment (SalonGeek)",
      excerpt: "works out how much each treatment costs you and work out profit margin for yourself",
      theme: "Consumables and travel against the treatment",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_ACCOUNTING,
      capturedAt,
      publishedAt: "2014-02-11",
      sourceKind: "Sole trader keeping paper records (SalonGeek)",
      excerpt: "I just have a salon accounts book that you can buy from any wholesaler.",
      theme: "Tracking it by hand",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_NETPROFIT,
      capturedAt,
      publishedAt: "2011-01-26",
      sourceKind: "Solo therapist asking what a profit figure contains (SalonGeek)",
      excerpt: "Can anyone explain what net profit includes?",
      theme: "What a figure already accounts for",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_NETPROFIT,
      capturedAt,
      publishedAt: "2011-01-26",
      sourceKind: "Solo therapist trying to place her own pay (SalonGeek)",
      excerpt: "Is this the amount that's left after business and personal expenses (wages) are taken out?",
      theme: "What a figure already accounts for",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_NETPROFIT,
      capturedAt,
      publishedAt: "2011-01-26",
      sourceKind: "Peer explaining the deduction order (SalonGeek)",
      excerpt: "It's your busnisses profit after everything has been taken out (eg wages, heat, products etc).",
      theme: "What a figure already accounts for",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_NETPROFIT,
      capturedAt,
      publishedAt: "2011-01-26",
      sourceKind: "Solo therapist after several conflicting answers (SalonGeek)",
      excerpt: "I'm getting mixed opinions on this.",
      theme: "What a figure already accounts for",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_MOBILE,
      capturedAt,
      publishedAt: "2018-08-06",
      sourceKind: "Qualifying L3 Swedish massage therapist (SalonGeek)",
      excerpt: "I am qualifying as a L3 Swedish Massage Therapist and a L2 Beauty Therapist next month and I have been advertising as a mobile therapist",
      theme: "Solo, not a salon floor",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_MOBILE,
      capturedAt,
      publishedAt: "2018-08-06",
      sourceKind: "Peer on the cost of covering a wide area (SalonGeek)",
      excerpt: "Being mobile you wouldn't want to cover a large area due to travel time, fuel costs and wear and tear on your vehicle.",
      theme: "Consumables and travel against the treatment",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_MOBILE,
      capturedAt,
      publishedAt: "2018-08-07",
      sourceKind: "Mobile therapist, 3 years trading (SalonGeek)",
      excerpt: "any further out I don't do unless they are will to pay for my travel expenses",
      theme: "Consumables and travel against the treatment",
      evidenceClass: "independent_forum",
    },
  ],

  verbatims: [
    { phrase: "So I need to start recording things better, what do u all use for keeping track of your income and expenditures??", sourceUrl: T_ACCOUNTING, theme: "Tracking it by hand" },
    { phrase: "I'd like something that is hair focused and works out profit, times etc and notes for each client etc.", sourceUrl: T_ACCOUNTING, theme: "One place instead of several" },
    { phrase: "It's only me so don't want to pay for something fancy but equally I'd like to do something bit more comprehensive than just my basic spreadsheet!", sourceUrl: T_ACCOUNTING, theme: "Solo, not a salon floor" },
    { phrase: "I use ovatu (scheduling) I zettle (transactions) and receipts2go (expenses)", sourceUrl: T_ACCOUNTING, theme: "One place instead of several" },
    { phrase: "I work for myself and there's only me. I use excel which my fiancé set up for me.", sourceUrl: T_ACCOUNTING, theme: "Tracking it by hand" },
    { phrase: "It calculates my travel expenses which are 45p per mile and my products used per client.", sourceUrl: T_ACCOUNTING, theme: "Consumables and travel against the treatment" },
    { phrase: "It have my total amount & profit at the bottom. I print it off at the end of my working month so I have a hard copy too.", sourceUrl: T_ACCOUNTING, theme: "Tracking it by hand" },
    { phrase: "works out how much each treatment costs you and work out profit margin for yourself", sourceUrl: T_ACCOUNTING, theme: "Consumables and travel against the treatment" },
    { phrase: "I just have a salon accounts book that you can buy from any wholesaler.", sourceUrl: T_ACCOUNTING, theme: "Tracking it by hand" },
    { phrase: "Can anyone explain what net profit includes?", sourceUrl: T_NETPROFIT, theme: "What a figure already accounts for" },
    { phrase: "Is this the amount that's left after business and personal expenses (wages) are taken out?", sourceUrl: T_NETPROFIT, theme: "What a figure already accounts for" },
    { phrase: "I'm getting mixed opinions on this.", sourceUrl: T_NETPROFIT, theme: "What a figure already accounts for" },
    { phrase: "I am qualifying as a L3 Swedish Massage Therapist and a L2 Beauty Therapist next month and I have been advertising as a mobile therapist", sourceUrl: T_MOBILE, theme: "Solo, not a salon floor" },
    { phrase: "Being mobile you wouldn't want to cover a large area due to travel time, fuel costs and wear and tear on your vehicle.", sourceUrl: T_MOBILE, theme: "Consumables and travel against the treatment" },
    { phrase: "any further out I don't do unless they are will to pay for my travel expenses", sourceUrl: T_MOBILE, theme: "Consumables and travel against the treatment" },
  ],
}
