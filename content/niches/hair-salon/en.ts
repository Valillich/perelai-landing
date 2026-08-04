import { hairSalonResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

/**
 * `/for-salons` — niche `hair-salon`, template `salon`, Wave 1b, `requiresStaff: true`.
 *
 * NOT PUBLISHED. `config/niche-pages.ts` keeps this page `enabled: false` and this module is
 * deliberately not wired into `content/niches/index.ts`: `NicheContentByLocale` requires all nine
 * published locales, and only English exists. English is UNAPPROVED — no translation is authorised
 * until a named owner approves the exact strings below.
 *
 * BLOCKER BEFORE ENABLING: `MockKind` offers only "colorist-workspace" and "lash-workspace". The
 * `mock` value below is a placeholder so the module type-checks. A salon mock must be built before
 * this page renders, otherwise `labels.mocksBody` describes data the visual does not show.
 *
 * LANGUAGE: en-US, matching the product's own seeded strings ("Color Product", "Women's Haircut").
 * Sole deliberate exception is "instalment", which is the spelling used across `messages/en/*.json`,
 * `lib/finance-fixture.ts` and the product's own `Instalment` model. Changing it here alone would
 * desynchronise this page from the homepage and the app.
 *
 * COPY EVIDENCE:
 *   terminology / setup / faq → product evidence. Every named service, add-on and expense is the
 *     exact seeded `salon` template string at product HEAD e566f2cb.
 *   pains[0], pains[1], dayInLife → proxy professional-forum research, see ./research.ts.
 *   pains[2] (tool fragmentation) → FOUNDER OPINION. The recent independent source offered in
 *     review could not be captured (reddit.com blocked by policy), so this card rests on a
 *     well-known pain, not on cited evidence. It is the weakest card on the page.
 *   every financial clause → docs/finance-claim-contract.md; map at the foot of this file.
 *
 * PROHIBITED AND ABSENT: "Built for salons" / "requires a team" (TC1); payroll, commission,
 * timesheets, HR as capabilities (TC3); any coworker or linked-business clause (TC5/TC6, both HOLD);
 * "earned", "brought in", "income", export/download (FC8), refunds and corrections (FC10), "P&L",
 * "accounting", "tax", "without manual entry", "automatic", "real-time", "budget"/"forecast" (FC6).
 * Also absent per docs/commercial-policy.md, where CF-01 and CF-02 are PENDING: "no card" and any
 * "no commission" claim.
 */

export const content: NichePageContent = {
  meta: {
    title: "Perelai for hair salon owners",
    description:
      "Track revenue, recorded costs and calculated profit for any period, with the result grouped by service category and client.",
    ogImageAlt:
      "Perelai finance overview for a hair salon, showing revenue, costs and calculated profit for a period with a service-category breakdown — example data.",
  },

  hero: {
    eyebrow: "Finance software for hair salon owners",
    h1: "See your salon's month without rebuilding it by hand.",
    subhead:
      "Track revenue, recorded costs and calculated profit for any period. Review the result by service category and client, while recorded payments and open order or instalment balances stay separate.",
    // PLACEHOLDER — no salon MockKind exists yet. See the blocker note above.
    mock: "colorist-workspace",
  },

  pains: [
    {
      title: "The month gets reconstructed, not read",
      body: "Revenue sits in the booking system, payments are spread across accounts, and product costs arrive on supplier invoices weeks later. Month-end becomes an evening spent rebuilding what already happened, from memory and a card terminal summary.",
    },
    {
      title: "Revenue alone does not show what the month cost",
      body: "A full schedule can still hide product costs, rent and other recorded expenses. Experienced owners ask what a figure already accounts for before they trust it. Perelai keeps revenue, recorded costs and calculated profit visible as separate figures.",
    },
    {
      title: "The tools do not tell one story",
      body: "Appointments, client history and payment records often live in different systems that never exchange data, so somebody has to check two or three places to answer one question. Perelai keeps each recorded financial event connected to the client and the work behind it.",
    },
  ],

  dayInLife: {
    title: "Record the day as it happens. Read the month when you need it.",
    body: "Complete visits, record payments, redeem packages and add costs as part of the day's work. Perelai keeps each record connected to the client, service category and period it belongs to, so a month-end review starts from a record instead of a reconstruction.",
    steps: [
      {
        title: "An appointment is completed, not yet settled",
        body: "Marking Women's Haircut complete records that the work happened. It does not assert that money arrived. The visit sits in a state you can see instead of being quietly counted as revenue.",
      },
      {
        title: "A payment is recorded against the work it paid for",
        body: "When the client settles, the payment attaches to that visit rather than to an anonymous end-of-day total, so the figure keeps its connection to the client and the service category behind it.",
      },
      {
        title: "A package redemption settles without a new payment",
        body: "A prepaid client redeeming a Treatment settles the visit and moves no money that day. Perelai records the redemption, so recorded payments and settled revenue stay two separate numbers instead of one misleading one.",
      },
      {
        title: "The period answers back",
        body: "Choose a day, week, month, quarter or year and read revenue, recorded costs and calculated profit for it, with the service-category and client breakdown underneath and any open order balance kept separate.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Women's Haircut, Root Color, Balayage / Dimensional Color, Gloss & Toner, Treatment",
      perelaiWord: "Services on a Visit",
      why: "The salon template starts with these five, editable. Each booked appointment becomes a Visit carrying the client, the service and the money activity together.",
    },
    {
      theirWord: "Blow Dry & Style or Bond Treatment added at the chair",
      perelaiWord: "Add-ons",
      why: "Extra work attaches to the Visit it was performed on, so the record matches what happened rather than what was originally booked.",
    },
    {
      theirWord: "Color work compared with finishing work",
      perelaiWord: "Service category",
      why: "Revenue and costs are grouped by category, so the breakdown compares color work with finishing work. It does not report a separate figure for each individual service on the menu.",
    },
    {
      theirWord: "Color Product and Disposable Supplies",
      perelaiWord: "Linked expenses",
      why: "These are recorded as costs for the period, so they appear in the same view as the category revenue they supported instead of surfacing only on a supplier statement. Perelai does not measure how much product a single formula used.",
    },
    {
      theirWord: "A client on a prepaid course of appointments",
      perelaiWord: "Package",
      why: "Credits draw down as Visits are used. A redemption settles the visit and creates no cash movement, which is why redeemed work and recorded payments are shown as different things.",
    },
    {
      theirWord: "A course of treatments being paid off across visits",
      perelaiWord: "Order and instalments",
      why: "What is still owed stays attached to that order, so an outstanding amount has a defined scope rather than being a general sense that somebody owes something.",
    },
    {
      theirWord: "Revenue minus recorded period costs",
      perelaiWord: "Profit",
      why: "Perelai's profit figure is revenue minus the expenses recorded for the period you selected. It is an operational number for running the salon, not an accounting or tax result.",
    },
    {
      theirWord: "What each team member can access",
      perelaiWord: "Staff or Supervisor access",
      why: "Each person is invited with a role, and access follows that role, so a team can work in one workspace without every account being set up the same way.",
    },
  ],

  setup: {
    title: "Start from a salon's service list, not a blank page.",
    body: "The salon template opens with five editable services, two add-ons and two linked expense types, so the first screen already resembles a working salon.",
    steps: [
      {
        title: "Open the salon workspace",
        body: "Arriving from this page puts the salon template first in onboarding. You start with Women's Haircut, Root Color, Balayage / Dimensional Color, Gloss & Toner and Treatment rather than naming a service list from nothing.",
      },
      {
        title: "Make the menu and the costs yours",
        body: "Adjust durations and prices, keep Blow Dry & Style and Bond Treatment as add-ons if you offer them, and keep Color Product and Disposable Supplies as the cost types you record against each period.",
      },
      {
        title: "Add the people who work the floor",
        body: "Invite team members with Staff or Supervisor access, and keep schedules, time off and assigned services together. Access follows the role each person is invited with.",
      },
      {
        title: "Bring over what helps this week",
        body: "Import contacts with vCard, connect Google Calendar, and share your booking link. Start with the next few weeks rather than pausing the salon for a migration.",
      },
    ],
  },

  faq: [
    {
      q: "Will the salon's services already be set up?",
      a: "Yes. The salon template starts with Women's Haircut, Root Color, Balayage / Dimensional Color, Gloss & Toner and Treatment, plus Blow Dry & Style and Bond Treatment as add-ons and Color Product and Disposable Supplies as linked expenses. All of it is editable.",
    },
    {
      q: "How detailed is the service breakdown?",
      a: "Revenue and costs are grouped by service category, so you can compare color work with finishing work across a selected period, and see a client's revenue history over time. Perelai does not calculate profitability for each individual service on your menu.",
    },
    {
      q: "Does Perelai track the color used in each formula?",
      a: "No. Perelai records costs by period and service category. It does not weigh color, calculate formula-level usage, or manage backbar inventory. If you need the exact product cost behind a single formula, that is a different kind of tool.",
    },
    {
      q: "Does a completed appointment count as money received?",
      a: "No. Completed work, settled revenue and recorded payments are tracked separately. An appointment can be finished and still be waiting on payment, and a prepaid package can settle a visit without any money moving that day. Keeping the three apart is what makes the period figure mean something.",
    },
    {
      q: "What does the profit figure include?",
      a: "Revenue for the period you selected, minus the expenses recorded against that period. It is a calculation for running the salon, not an accounting or tax result, and it does not replace your accountant.",
    },
    {
      q: "Can my team use the same workspace?",
      a: "Yes. Invite team members with Staff or Supervisor access. Schedules, time off and assigned services stay in the same workspace, with access based on each role.",
    },
  ],

  labels: {
    terminologyTitle: "Salon words, and what they are called in Perelai.",
    inYourChair: "In your salon",
    inPerelai: "In Perelai",
    whyItMatters: "Why it matters",
    mocksTitle: "Salon data, shown in the product.",
    mocksBody: "Example data uses the salon template's own services, add-ons and linked expenses.",
    faqTitle: "What hair salon owners ask first.",
  },

  whatItIsNot: {
    title: "Clear about what it is not.",
    body: "Perelai tracks the money connected to the work your salon did. It does not pretend to be the rest of your back office.",
    items: [
      {
        title: "Not accounting software",
        body: "It records revenue, costs and a calculated profit figure for a period. It does not do bookkeeping, tax filing or financial advice, and it does not replace your accountant.",
      },
      {
        title: "Not payroll or HR",
        body: "You can invite team members and keep schedules, time off and assigned services together. Wages, commission and timesheets are not part of it.",
      },
      {
        title: "Not backbar inventory",
        body: "Color Product and Disposable Supplies are recorded as costs for a period. Perelai does not weigh product, track usage per formula, or reorder stock.",
      },
    ],
  },

  cta: {
    title: "See the month without rebuilding it.",
    body: "Start from a salon service list and keep completed work, recorded payments, package redemptions and open order balances as separate, readable records.",
    label: "Create your workspace",
    microcopy: "You'll get a verification email to finish setting up.",
  },

  research: hairSalonResearch,
}

/* ─────────────────────────────────────────────────────────────────────────────
 * CLAIM MAP — every financial sentence above, traced to a contract row.
 *
 *  hero.subhead  "revenue, recorded costs and calculated profit for any period"  → FC1, FC9
 *  hero.subhead  "by service category and client"                                → FC4, FC5
 *  hero.subhead  "open order or instalment balances"                             → FC3 (scoped)
 *  hero.subhead  "recorded payments … stay separate"                             → FC2, FC7
 *  pains[1]      revenue, recorded costs and profit as separate figures          → FC1, FC9
 *  pains[2]      recorded event connected to client and work                     → FC7
 *  dayInLife[0]  completed does not assert money arrived                         → FC2
 *  dayInLife[1]  payment attaches to the visit it paid for                       → FC7
 *  dayInLife[2]  redemption settles, moves no cash                               → FC7
 *  dayInLife[3]  period set; category/client breakdown; open order kept separate → FC1, FC4, FC5, FC3
 *  terminology   "grouped by category … not each individual service"             → FC4 (as a limit)
 *  terminology   "does not measure how much product a single formula used"       → FC4 (as a limit)
 *  terminology   "revenue minus the expenses recorded"                           → FC9
 *  terminology   "Staff or Supervisor access", access follows role               → TC2, TC4
 *  setup[2]      schedules, time off, assigned services                          → TC3
 *  faq[1]        category granularity, client history, no per-service P&L        → FC4, FC5
 *  faq[2]        no formula costing, no backbar inventory                        → FC4 boundary
 *  faq[3]        completed / settled / recorded kept separate                    → FC2, FC7
 *  faq[4]        not an accounting or tax result                                 → FC9, FC1
 *  faq[5]        role-based access, no privacy absolute                          → TC2, TC4
 *  whatItIsNot   no bookkeeping / tax / advice                                   → FC1
 *  whatItIsNot   no wages, commission, timesheets                                → TC3 (as exclusion)
 *  whatItIsNot   no weighing, per-formula usage, reordering                      → FC4 boundary
 *
 * TC4 NOTE: this page claims only that access follows the role a person is invited with. It does
 * NOT claim staff cannot see finance data — TC4's prohibited wording covers both "staff can never
 * see another client" and "everyone sees everything", and the exact finance visibility of the STAFF
 * role was not audited for public copy. Do not strengthen this without a new verification entry.
 * ───────────────────────────────────────────────────────────────────────────── */
