import type { NichePageContent } from "@/content/niches/types"

/**
 * LP11.2 customer-research pass for `/for-salons` (niche `hair-salon`, template `salon`).
 *
 * EVIDENCE CLASS: proxy professional-forum discussion (SalonGeek — Salon Professionals Forum).
 * This is NOT first-party Perelai VOC. No participant was recruited, interviewed or compensated by us,
 * and nothing here is a Perelai customer statement.
 *
 * CAPTURE METHOD: read in-browser on 2026-08-04 at the thread URLs below; author handles and ISO post
 * timestamps taken from each thread's own markup. Excerpts are verbatim and trimmed only at word
 * boundaries. reddit.com was unreachable from this environment (blocked to this user agent and by
 * browser policy), so the Reddit-based pattern used by `lash-artist` could not be repeated here.
 *
 * KNOWN LIMITATION — RECENCY: the accessible SalonGeek threads on salon finances run 2007–2019. None
 * falls inside a 12-month recency window. Treat frequency as directional only. A refresh against
 * current first-party VOC is required before these themes are used to justify anything beyond copy.
 *
 * KNOWN LIMITATION — SEGMENT: the forum is UK hair *and* beauty. Posts from single-operator and
 * mobile professionals are retained where the financial question is identical, and are marked as such
 * in `sourceKind`. Owner-with-team posts carry the salon-floor themes this page leads on.
 *
 * NO REUSE: checked against `content/niches/lash-artist/research.ts` and
 * `content/niches/premium-colorist/research.ts` — no shared source URL and no shared phrase.
 *
 * NOT RENDERED: `research` is stripped by `scripts/check-uniqueness.mjs` and is not read by
 * `app/[locale]/[nichePage]/page.tsx`. This corpus is review evidence, not public copy. The
 * `competitor_claim` entry below must never reach a public surface.
 *
 * OPEN RESEARCH LEADS — supplied in review on 2026-08-04, NOT captured and NOT included below
 * because reddit.com is blocked by policy in every tool available here. Do not treat them as
 * evidence until someone with access captures them:
 *   - r/smallbusiness 1k6clsc — salon owner running Acuity + Square + HubSpot + Google Docs;
 *     staff manually cross-check what a client already paid. Would be the first *recent*
 *     independent source for the tool-fragmentation theme.
 *   - r/hairstylist 1bj0cxo — recorded-expense spreadsheets used to justify a price increase.
 */

const capturedAt = "2026-08-04"

const T_MARGIN = "https://www.salongeek.com/threads/gross-profit-margin.155596/"
const T_NORMAL = "https://www.salongeek.com/threads/what-is-a-normal-profit-margin-per-month-for-salons.80234/"
const T_BREAKEVEN = "https://www.salongeek.com/threads/%C2%A3540-per-day-break-even-london-beauty-salon.331146/"
const T_SHEET = "https://www.salongeek.com/threads/spreadsheet-template.258267/"
const T_PROFITABLE = "https://www.salongeek.com/threads/what-are-the-most-profitable-salon-treatments.55128/"
const T_SETUP = "https://www.salongeek.com/threads/suggestions-revenue-estimates-and-cost-for-salon-set-up.311658/"

export const hairSalonResearch: NichePageContent["research"] = {
  sources: [
    {
      sourceUrl: T_MARGIN,
      capturedAt,
      publishedAt: "2011-10-21",
      sourceKind: "Salon professional, working out margins (SalonGeek)",
      excerpt: "I'm trying to get my head round gross profit margins and working costs and budgets out.....yes my brain is about to blow!",
      theme: "The result is worked out by hand",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_NORMAL,
      capturedAt,
      publishedAt: "2008-09-18",
      sourceKind: "New salon owner (SalonGeek)",
      excerpt: "so far my financial planning is saying i will be about $1000 up each month. Is this good/average for a new hair salon?",
      theme: "The result is worked out by hand",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_NORMAL,
      capturedAt,
      publishedAt: "2008-09-19",
      sourceKind: "Salon owner reply (SalonGeek)",
      excerpt: "is that after you have paid your self a wage?",
      theme: "What counts before the figure means anything",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_SETUP,
      capturedAt,
      publishedAt: "2017-02-19",
      sourceKind: "Salon owner, 3.5 years trading (SalonGeek)",
      excerpt: "It took me 18 months to break even and 2 years before I started paying myself a wage.",
      theme: "What counts before the figure means anything",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_BREAKEVEN,
      capturedAt,
      publishedAt: "2019-09-30",
      sourceKind: "Small salon owner, 6 years trading (SalonGeek)",
      excerpt: "Ok so if your overhead is £15,000, assuming 20 working days a month, you need to take a minimum turnover £750 a day.",
      theme: "Costs and takings held in separate places",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_BREAKEVEN,
      capturedAt,
      publishedAt: "2019-09-29",
      sourceKind: "Small salon owner, capacity planning (SalonGeek)",
      excerpt: "I'd work backwards - how many clients can you service based on 60% room capacity and calculate minimum average spend targets.",
      theme: "The floor's capacity versus the floor's result",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_BREAKEVEN,
      capturedAt,
      publishedAt: "2019-10-14",
      sourceKind: "Salon owner with employed staff (SalonGeek)",
      excerpt: "that's before wages for my girls are deducted",
      theme: "Costs and takings held in separate places",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_PROFITABLE,
      capturedAt,
      publishedAt: "2007-05-19",
      sourceKind: "Salon owner asking about treatment mix (SalonGeek)",
      excerpt: "What is your most profitable treatment and why ?",
      theme: "Which kind of work carries the result",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_PROFITABLE,
      capturedAt,
      publishedAt: "2007-05-20",
      sourceKind: "Salon professional clarifying the question (SalonGeek)",
      excerpt: "do body treatments have a greater profit percentage than facials etc",
      theme: "Which kind of work carries the result",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_PROFITABLE,
      capturedAt,
      publishedAt: "2007-05-21",
      sourceKind: "Salon professional on product cost per service (SalonGeek)",
      excerpt: "Massage def most profitable. Minimal products used.",
      theme: "Which kind of work carries the result",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_PROFITABLE,
      capturedAt,
      publishedAt: "2007-05-19",
      sourceKind: "Salon professional on overheads (SalonGeek)",
      excerpt: "Also it's not just the cost of the treatment, its overheads such as water, rent, electric, petrol, etc etc!!",
      theme: "Costs and takings held in separate places",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_PROFITABLE,
      capturedAt,
      publishedAt: "2007-05-19",
      sourceKind: "Salon professional on true cost of a service (SalonGeek)",
      excerpt: "all the costs it takes you to set up, your hourly wage and all the other expenses you incur to provide services",
      theme: "Costs and takings held in separate places",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_SHEET,
      capturedAt,
      publishedAt: "2014-04-08",
      sourceKind: "Hairdresser asking for a tracking spreadsheet (SalonGeek)",
      excerpt: "I need just a very basic one just to show incomings, outgoings, expenses something I could do myself independently",
      theme: "Tracking it in a spreadsheet",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_SHEET,
      capturedAt,
      publishedAt: "2014-11-26",
      sourceKind: "Forum owner scoping what people actually want (SalonGeek)",
      excerpt: "Just something to produce a basic P&L? e.g. something to record income (daily) and expenses (daily)?",
      theme: "Tracking it in a spreadsheet",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_SETUP,
      capturedAt,
      publishedAt: "2017-02-20",
      sourceKind: "London salon owner describing her team (SalonGeek)",
      excerpt: "I am still the only full timer, with one part time stylist and a Saturday assistant.",
      theme: "The floor's capacity versus the floor's result",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_SETUP,
      capturedAt,
      publishedAt: "2017-02-16",
      sourceKind: "Salon professional on column capacity (SalonGeek)",
      excerpt: "You'd be lucky to fill 1 column like that, let alone 2.",
      theme: "The floor's capacity versus the floor's result",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: T_SETUP,
      capturedAt,
      publishedAt: "2017-02-16",
      sourceKind: "Salon owner on real service durations (SalonGeek)",
      excerpt: "A cut and colour can be anything up to 3 hours depending on what they're having done.",
      theme: "The floor's capacity versus the floor's result",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: "https://www.salonscale.com/en-us",
      capturedAt,
      publishedAt: "2026-08-04",
      sourceKind: "Competitor homepage, captured in-browser (SalonScale)",
      excerpt: "the true cost behind every formula, instantly with real-time product costs, inventory, ordering",
      theme: "CAPABILITY BOUNDARY — not a Perelai claim",
      evidenceClass: "competitor_claim",
    },
  ],

  verbatims: [
    { phrase: "I'm trying to get my head round gross profit margins and working costs and budgets out.....yes my brain is about to blow!", sourceUrl: T_MARGIN, theme: "The result is worked out by hand" },
    { phrase: "so far my financial planning is saying i will be about $1000 up each month. Is this good/average for a new hair salon?", sourceUrl: T_NORMAL, theme: "The result is worked out by hand" },
    { phrase: "is that after you have paid your self a wage?", sourceUrl: T_NORMAL, theme: "What counts before the figure means anything" },
    { phrase: "It took me 18 months to break even and 2 years before I started paying myself a wage.", sourceUrl: T_SETUP, theme: "What counts before the figure means anything" },
    { phrase: "Ok so if your overhead is £15,000, assuming 20 working days a month, you need to take a minimum turnover £750 a day.", sourceUrl: T_BREAKEVEN, theme: "Costs and takings held in separate places" },
    { phrase: "I'd work backwards - how many clients can you service based on 60% room capacity and calculate minimum average spend targets.", sourceUrl: T_BREAKEVEN, theme: "The floor's capacity versus the floor's result" },
    { phrase: "that's before wages for my girls are deducted", sourceUrl: T_BREAKEVEN, theme: "Costs and takings held in separate places" },
    { phrase: "What is your most profitable treatment and why ?", sourceUrl: T_PROFITABLE, theme: "Which kind of work carries the result" },
    { phrase: "do body treatments have a greater profit percentage than facials etc", sourceUrl: T_PROFITABLE, theme: "Which kind of work carries the result" },
    { phrase: "Massage def most profitable. Minimal products used.", sourceUrl: T_PROFITABLE, theme: "Which kind of work carries the result" },
    { phrase: "Also it's not just the cost of the treatment, its overheads such as water, rent, electric, petrol, etc etc!!", sourceUrl: T_PROFITABLE, theme: "Costs and takings held in separate places" },
    { phrase: "I need just a very basic one just to show incomings, outgoings, expenses something I could do myself independently", sourceUrl: T_SHEET, theme: "Tracking it in a spreadsheet" },
    { phrase: "Just something to produce a basic P&L? e.g. something to record income (daily) and expenses (daily)?", sourceUrl: T_SHEET, theme: "Tracking it in a spreadsheet" },
    { phrase: "I am still the only full timer, with one part time stylist and a Saturday assistant.", sourceUrl: T_SETUP, theme: "The floor's capacity versus the floor's result" },
    { phrase: "You'd be lucky to fill 1 column like that, let alone 2.", sourceUrl: T_SETUP, theme: "The floor's capacity versus the floor's result" },
  ],
}
