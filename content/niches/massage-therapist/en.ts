import { massageTherapistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

/**
 * `/for-massage-therapists` — niche `massage-therapist`, template `massage`, Wave 1b.
 *
 * SOLO-FIRST. `massage` is `requiresStaff: false`, so this page speaks to one practitioner and the
 * setup section shows THREE steps, not four. It must not presuppose a team; the only team sentence
 * allowed is TEAM contract TC1's "Work solo. Add people when you need them."
 *
 * ENGLISH-ONLY. Staged through `locales: ["en"]` in the registry. English is UNAPPROVED — no
 * translation until a named owner approves these exact strings.
 *
 * LANGUAGE: en-US, matching the product's seeded strings. Sole deliberate exception is "instalment",
 * the spelling used across `messages/en/*.json`, `lib/finance-fixture.ts` and the product's own
 * `Instalment` model.
 *
 * COPY EVIDENCE:
 *   terminology / setup / faq → product evidence. Every named service, add-on and expense is the
 *     exact seeded `massage` template string at product HEAD e566f2cb.
 *   pains / dayInLife         → proxy professional-forum research, see ./research.ts. Every pain maps
 *     to a captured theme; the tool-fragmentation card rests on a real, cited source this time.
 *   every financial clause    → docs/finance-claim-contract.md; map at the foot of this file.
 *
 * EMPHASIS, AND WHY IT DIFFERS FROM `/for-salons`: the `massage` template seeds three services and a
 * single linked expense, so a service-category breakdown is coarse here. This page therefore leads on
 * period result, client history, prepaid packages and open balances, and mentions category only as
 * available — claiming a rich category story off three similar services would outrun the product.
 *
 * PROHIBITED AND ABSENT: clinical or medical framing of any kind — no SOAP notes, treatment plans,
 * health records, diagnosis, insurance billing or "HIPAA-ready" (CONTEXT §17 and CONTEXT:316);
 * payroll, commission, timesheets (TC3); any coworker clause (TC5/TC6, both HOLD); "earned",
 * "brought in", "income", export/download (FC8), refunds and corrections (FC10), "P&L", "accounting",
 * "tax", "without manual entry", "automatic", "real-time", "budget"/"forecast" (FC6); and, per
 * docs/commercial-policy.md where CF-01 and CF-02 are PENDING, "no card" and any "no commission" claim.
 */

export const content: NichePageContent = {
  meta: {
    title: "Perelai for massage therapists",
    description:
      "Track revenue, recorded costs and calculated profit for any period, with client history, prepaid packages and open balances kept separate.",
    ogImageAlt:
      "Perelai finance overview for a massage therapist, showing revenue, recorded costs and calculated profit for a period — example data.",
  },

  hero: {
    eyebrow: "Finance software for massage therapists",
    h1: "A full week and a good week are not the same number.",
    subhead:
      "Revenue, the costs you log against it, and what the two leave — for a day, a week or a year. Alongside what each regular has spent, which prepaid blocks are still running, and anything left unpaid on an order.",
    // PLACEHOLDER — `MockKind` is vestigial; the rendered mock comes from
    // buildMockDataset("massage", locale). See the salon module for the same note.
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "A booked-out week is not the answer to the question",
      body: "Three Deep Tissue appointments back to back fill the day and tell you nothing about the month. The number that matters sits behind the oils you replaced, the room you rent or the miles you drove, and none of that is in the calendar you just filled.",
    },
    {
      title: "Scheduling here, payments there, receipts somewhere else",
      body: "Solo practitioners routinely end up running one app for appointments, another for taking payment and a third for receipts. Each works. None of them answers a question that needs all three, so you become the integration between them.",
    },
    {
      title: "It is only you, so the admin has nowhere else to go",
      body: "There is no front desk to hand it to. Recording the week ends up as an evening with a spreadsheet somebody set up for you, or a paper book from the wholesaler, rebuilt at the end of every month because nothing collected it as it happened.",
    },
  ],

  dayInLife: {
    title: "Log it between clients. Look at it whenever you want to.",
    body: "Finishing a session, taking money for it, drawing down somebody's block of six, restocking oils — each of those is one tap while the couch is being changed over. Because they are logged where they happen, the practice can be looked at later without anybody sitting down to remember it.",
    steps: [
      {
        title: "Finished and settled are two different things",
        body: "Ticking off a Relaxation Massage says the hour happened. It says nothing about whether you have been paid for it. Those live as separate states, so a fully booked Tuesday never quietly turns into a number that has not arrived.",
      },
      {
        title: "Money lands on the session it belongs to",
        body: "Payment goes onto that hour with that client, not into an undifferentiated pot for the day. Six months later the amount still points back to who it came from and which treatment it was for.",
      },
      {
        title: "Six-session blocks come off the block, not the register",
        body: "Somebody midway through a prepaid block takes an hour of your time and hands over nothing, and that is correct. Drawing a credit down is logged as its own kind of event, which is why delivered and paid never collapse into a single misleading total.",
      },
      {
        title: "Pick a stretch of time and read it",
        body: "A day, a week, a month, a quarter, a year — whichever you actually think in. You get revenue, the costs you logged against it, and what those two leave. Anything still outstanding on an order or instalment sits apart from the money already recorded.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Deep Tissue Massage, Relaxation Massage, Sports Massage",
      perelaiWord: "Services on a Visit",
      why: "The massage template starts with these three, editable. Each booked appointment becomes a Visit carrying the client, the treatment and the money activity together.",
    },
    {
      theirWord: "A Hot Stone Add-on booked onto the session",
      perelaiWord: "Add-ons",
      why: "The extra attaches to the Visit it was performed on, so the record matches the session that actually happened rather than the one originally booked.",
    },
    {
      theirWord: "The Massage Oils invoice you paid last Thursday",
      perelaiWord: "Linked expenses",
      why: "Logged against the stretch of time it falls in, so restocking shows up next to the hours it supported. Nobody weighs a bottle: this is a purchase you entered, not a measurement of what one client used.",
    },
    {
      theirWord: "The client three sessions into a block of six",
      perelaiWord: "Package",
      why: "Credits come down one at a time as hours are used. What that person is still owed is a stored figure, not a note on the back of their card.",
    },
    {
      theirWord: "Someone paying off a course in chunks",
      perelaiWord: "Order and instalments",
      why: "The remainder belongs to that particular arrangement. When something is described as outstanding it means that specific unpaid amount, not a vague sense of money floating around.",
    },
    {
      theirWord: "The Thursday-morning regular of nine years",
      perelaiWord: "Client revenue history",
      why: "What that person has actually spent with you, laid out over time next to the hours they booked. Loyalty stops being a feeling you have and starts being a figure you can look at.",
    },
    {
      theirWord: "What is left once the month's purchases come off",
      perelaiWord: "Profit",
      why: "Takes the period's revenue and subtracts the expenses you logged into it. A working number for deciding whether to raise your hourly rate — emphatically not a tax position or an accountant's bottom line.",
    },
    {
      theirWord: "Just you and a couch, at least this year",
      perelaiWord: "One workspace",
      why: "Work solo. Add people when you need them — nothing here assumes a second pair of hands, and none of the above breaks if there never is one.",
    },
  ],

  setup: {
    title: "An evening, not a weekend.",
    body: "Three treatments, one add-on and one cost type are waiting when you arrive. Everything below is optional tidying.",
    steps: [
      {
        title: "Land on the massage template",
        body: "Following this page hands you Deep Tissue Massage, Relaxation Massage and Sports Massage already written down. Nobody stares at an empty screen wondering what to call a sixty-minute Swedish.",
      },
      {
        title: "Bend it to your practice",
        body: "Lengths, rates, whether Hot Stone rides along as an extra, and Massage Oils standing in for whatever you actually restock. Rename, delete, add — none of it is fixed.",
      },
      {
        title: "Carry across only what Monday needs",
        body: "Numbers off your phone via vCard, Google Calendar joined up if you live in it, and a link ready to paste wherever people find you. Nine years of history can follow later, or never.",
      },
    ],
  },

  faq: [
    {
      q: "Will my treatments already be set up?",
      a: "Yes. The massage template starts with Deep Tissue Massage, Relaxation Massage and Sports Massage, plus a Hot Stone Add-on and Massage Oils as a linked expense. All of it is editable, so a menu with four treatments or twelve is a few minutes of work.",
    },
    {
      q: "Does Perelai keep clinical notes or handle insurance billing?",
      a: "No, and this is worth being direct about. Perelai keeps client and visit notes for running your practice. It is not a health record system: no intake or SOAP notes, no treatment plans, no diagnosis tracking, and no insurance claims or billing. If your practice depends on those, Perelai is not the right tool for that part of it.",
    },
    {
      q: "If my week was fully booked, is that my revenue?",
      a: "Not necessarily, and conflating the two is how a good-looking week disappoints you later. An hour you have delivered, an hour you have been paid for, and an hour drawn from somebody's prepaid block are three different states here. They are counted apart on purpose, so the figure you end up looking at means one specific thing.",
    },
    {
      q: "How do I know where somebody is in their block of six?",
      a: "Each credit comes off as an hour gets used, leaving the remainder stored against that client instead of on a card in a drawer. Courses being paid for in chunks behave the same way: the unpaid part stays attached to its own arrangement rather than being folded into money you have already taken.",
    },
    {
      q: "Where does the profit number come from?",
      a: "Revenue over whichever stretch of time you picked, less the expenses you logged into that same stretch. Useful for deciding whether an hour is priced right. Not a tax position, not a bottom line an accountant would sign off, and no substitute for having one.",
    },
  ],

  labels: {
    terminologyTitle: "How your vocabulary maps onto ours.",
    inYourChair: "On the couch",
    inPerelai: "In Perelai",
    whyItMatters: "Why it matters",
    mocksTitle: "A practice like yours, rendered live.",
    mocksBody: "Figures below are illustrative, built from this template's three treatments, its add-on and its cost type.",
    faqTitle: "Asked before signing up.",
  },

  whatItIsNot: {
    title: "Where it stops.",
    body: "This follows the money attached to hours you have delivered. Three things it deliberately will not do:",
    items: [
      {
        title: "Not a health record system",
        body: "Notes exist for running the practice — who prefers what pressure, who is back in two weeks. No intake forms, SOAP charting, treatment plans, diagnosis tracking or insurance claims.",
      },
      {
        title: "Not accounting software",
        body: "You get revenue, logged costs and what they leave over a chosen stretch of time. Bookkeeping, filing and financial advice are somebody else's job, and your accountant keeps theirs.",
      },
      {
        title: "Not a marketplace",
        body: "The booking link belongs to you. Perelai does not rent the client relationship.",
      },
    ],
  },

  cta: {
    title: "Know what the week actually came to.",
    body: "Start from a massage service list and keep completed work, recorded payments, prepaid sessions and open balances as separate, readable records.",
    label: "Create your workspace",
    microcopy: "You'll get a verification email to finish setting up.",
  },

  research: massageTherapistResearch,
}

/* ─────────────────────────────────────────────────────────────────────────────
 * CLAIM MAP — every financial sentence above, traced to a contract row.
 *
 *  hero.subhead  "revenue, recorded costs and calculated profit for any period"  → FC1, FC9
 *  hero.subhead  "a client's history"                                            → FC5
 *  hero.subhead  "open on orders and instalments"                                → FC3 (scoped)
 *  pains[0]      recorded costs sit behind the filled calendar                   → FC1
 *  dayInLife[0]  completed does not assert money arrived                         → FC2
 *  dayInLife[1]  payment attaches to the visit it paid for                       → FC7
 *  dayInLife[2]  package redemption settles, moves no money                      → FC7
 *  dayInLife[3]  period set; open balance separate from settled                  → FC1, FC3, FC2
 *  terminology   "does not measure how much oil a single treatment used"         → FC4 (as a limit)
 *  terminology   client revenue history over time                                → FC5
 *  terminology   "revenue minus the expenses recorded"                           → FC9
 *  terminology   "Work solo. Add people when you need them."                     → TC1 (exact PASS wording)
 *  faq[1]        no clinical records, no insurance billing                       → CONTEXT §17 boundary
 *  faq[2]        completed / settled / recorded kept separate                    → FC2, FC7
 *  faq[3]        package draw-down; instalment balance kept separate             → FC7, FC3
 *  faq[4]        not an accounting or tax result                                 → FC9, FC1
 *  whatItIsNot   no health records / SOAP / insurance                            → CONTEXT §17 boundary
 *  whatItIsNot   no bookkeeping / tax / advice                                   → FC1
 *
 * SOLO NOTE: the only team-adjacent sentence is TC1's exact approved wording. This page makes no
 * claim about roles, access scoping or staff, because it does not need one — `massage` is
 * `requiresStaff: false` and TC2/TC3/TC4 are not required to tell this story.
 * ───────────────────────────────────────────────────────────────────────────── */
