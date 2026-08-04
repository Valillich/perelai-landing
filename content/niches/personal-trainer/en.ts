import { personalTrainerResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

/**
 * `/for-personal-trainers` — niche `personal-trainer`, template `personal_trainer`, Wave 2.
 *
 * SOLO-FIRST. `personal_trainer` is `requiresStaff: false`, so this page speaks to an independent
 * personal trainer, and the setup section shows THREE steps, not four. It does not presuppose a
 * gym staff; the only team sentence allowed is TEAM contract TC1's "Work solo. Add people when you need them."
 *
 * ENGLISH-ONLY. Staged through `locales: ["en"]` in the registry.
 *
 * MOCK BLOCKER: `mock` is left as technical placeholder "lash-workspace" until a dedicated
 * personal trainer mock component is built in components/mock.
 */

export const content: NichePageContent = {
  meta: {
    title: "Perelai for personal trainers",
    description:
      "Track session revenue, recorded costs and calculated profit for any period, with client history and package redemptions kept readable.",
    ogImageAlt:
      "Perelai finance overview for a personal trainer, showing session revenue, recorded costs and calculated profit for a period — example data.",
  },

  hero: {
    eyebrow: "Finance software for personal trainers",
    h1: "A clear view of your personal training finances.",
    subhead:
      "Track session revenue, recorded costs and calculated profit for a day, week, month, quarter or year. Review the result by client and service category, while completed sessions, recorded payments and package redemptions remain separate.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "A full calendar does not answer the question",
      body: "Back-to-back 1:1 training sessions, strength coaching appointments, and workout assessments fill the day and tell you nothing about the month. Gym floor leasing, travel across town to client locations, and fitness gear replacement costs sit behind the workouts, and none of that is in the calendar.",
    },
    {
      title: "Prepaid package blocks obscure period tracking",
      body: "When a fitness client buys a ten-session workout block in advance, counting that lump-sum payment on day one leaves following coaching weeks looking unrecorded. Tracking package redemptions as clients attend each workout session keeps completed fitness work clear.",
    },
    {
      title: "Sessions, payments and expenses live in different places",
      body: "Appointments may sit in a calendar app, client payment records in another tool, and gym business expenses in notebook logs or paper receipts. Reviewing the period means bringing those records back together.",
    },
  ],

  dayInLife: {
    title: "Record each session. Review the period when you need it.",
    body: "Complete sessions, record payments, redeem package credits and add business expenses during normal administration. Perelai keeps those records connected to the client, service category and selected period.",
    steps: [
      {
        title: "Session completion and payment stay separate",
        body: "Completing a 1:1 Training Session records that the session took place. It does not record a payment. Payment status remains a separate part of the same visit.",
      },
      {
        title: "Payment stays connected to the session and client",
        body: "A recorded payment stays connected to the relevant session and client, so the financial history can be traced back to the work behind it.",
      },
      {
        title: "Package credits redeem against attended sessions",
        body: "When a client uses a prepaid Training Package, redeeming a credit is recorded as a non-cash settlement. Delivered sessions and recorded payments stay distinct.",
      },
      {
        title: "Track period training totals",
        body: "Evaluate session revenue, recorded costs, and calculated profit for a day, week, month, quarter, or year, organized by client and service category.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Discovery Session, 1:1 Training Session, Training Package, Online Coaching Plan",
      perelaiWord: "Services on a Visit",
      why: "The personal trainer template provides four starter services for fitness coaching, body conditioning, and workout programming. Each booked session becomes a Visit carrying the client, service and payment record together.",
    },
    {
      theirWord: "Custom Meal/Training Plan",
      perelaiWord: "Add-on on a Visit",
      why: "Delivered alongside 1:1 sessions or workout packages, a nutritional or workout add-on forms part of the visit record.",
    },
    {
      theirWord: "Gym Floor Rent, Client Travel, Equipment",
      perelaiWord: "Recorded Expense",
      why: "Record floor space fees, travel and equipment costs for a period. They contribute to the calculated profit shown for the selected period.",
    },
    {
      theirWord: "10-Session Block",
      perelaiWord: "Prepaid Package",
      why: "Prepaid client packages sit as credit balances, redeemed session by session without distorting period revenue.",
    },
  ],

  setup: {
    title: "Start from a personal trainer's service list, not a blank page.",
    body: "The personal trainer template opens with four editable services and one add-on, so your first screen already resembles a working fitness practice.",
    steps: [
      {
        title: "Open the personal trainer workspace",
        body: "Arriving from this page puts the personal trainer template first in onboarding, preloaded with Discovery Session, 1:1 Training Session, Training Package and Online Coaching Plan.",
      },
      {
        title: "Adjust services and cost categories",
        body: "Set your workout session lengths and pricing, keep Custom Meal/Training Plan as an add-on if offered, and log relevant gym expenses against selected periods.",
      },
      {
        title: "Record sessions and review period results",
        body: "Mark visits completed, record payments, redeem package credits and review revenue, recorded expenses and calculated profit for a day, week, month, quarter or year.",
      },
    ],
  },

  faq: [
    {
      q: "How are prepaid workout packages handled?",
      a: "Prepaid packages are recorded as credit balances. When a client attends a workout session, one credit is redeemed, keeping completed work and recorded payments distinct.",
    },
    {
      q: "Can I record expenses such as gym space rental or travel?",
      a: "Yes. You can record relevant business expenses for a period. They are included in the recorded costs and calculated profit shown for the selected period.",
    },
    {
      q: "Does completing a session also record a payment?",
      a: "No. Completion and payment status are recorded separately. A completed session can exist before a payment is recorded.",
    },
    {
      q: "Are template services editable?",
      a: "Yes. The template services (Discovery Session, 1:1 Training Session, Training Package, Online Coaching Plan) and Custom Meal/Training Plan add-on are fully editable.",
    },
  ],

  labels: {
    terminologyTitle: "Personal training terms and Perelai concepts.",
    inYourChair: "In your practice",
    inPerelai: "In Perelai",
    whyItMatters: "Why it matters",
    mocksTitle: "Personal training data, shown in the product.",
    mocksBody: "Example data uses the personal trainer template's own services and add-on.",
    faqTitle: "Frequently asked questions.",
  },

  whatItIsNot: {
    title: "Clear about what it is not.",
    body: "Perelai tracks completed workout sessions, logged costs and calculated profit across selected timeframes. It is not a complete gym back office.",
    items: [
      {
        title: "Not accounting software",
        body: "Revenue, expenses and calculated profit are tracked for a period. Perelai does not handle bookkeeping, tax filings or financial advisory services, and it does not replace your accountant.",
      },
      {
        title: "Not a fitness tracker or workout planner",
        body: "You can track services, add-on items and package redemptions. Workout programming, exercise reps and fitness progress are not part of it.",
      },
      {
        title: "Not a marketplace",
        body: "Your booking link is yours alone. Perelai does not charge commissions or rent client relationships.",
      },
    ],
  },

  cta: {
    title: "Know what the period came to.",
    body: "Begin with a personal trainer service menu to keep completed sessions, recorded payments, package redemptions and open order balances structured and readable.",
    label: "Create your workspace",
    microcopy: "You'll get a verification email to finish setting up.",
  },

  research: personalTrainerResearch,
}

/* ─────────────────────────────────────────────────────────────────────────────
 * CLAIM MAP — every financial sentence above, traced to a contract row.
 *
 *  hero.subhead  "revenue, recorded costs and calculated profit for a day, week, month, quarter or year" → FC1, FC9
 *  hero.subhead  "Review the result by client and service category"                                       → FC4, FC5
 *  hero.subhead  "completed sessions, recorded payments and package redemptions remain separate"          → FC2, FC7
 *  dayInLife[0]  completing a session does not record a payment                                          → FC2
 *  dayInLife[1]  payment attaches to the visit and client                                                → FC7, FC5
 *  dayInLife[2]  package redemption is a non-cash settlement                                             → FC7
 *  dayInLife[3]  period breakdown by client and service category                                         → FC1, FC4, FC5
 *  terminology   revenue minus recorded period expenses contributes to calculated profit                → FC9
 *  setup[2]      review revenue, recorded expenses and calculated profit for supported periods           → FC1, FC9
 *  faq[2]        completing a session and recording payment are separate                                 → FC2
 *  whatItIsNot   no bookkeeping / tax / advice                                                           → FC1
 * ───────────────────────────────────────────────────────────────────────────── */
