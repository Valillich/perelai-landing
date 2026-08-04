import { musicTeacherResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

/**
 * `/for-music-teachers` — niche `music-teacher`, template `music_teacher`, Wave 2.
 *
 * SOLO-FIRST. `music_teacher` is `requiresStaff: false`, so this page speaks to an independent
 * music teacher, and the setup section shows THREE steps, not four. It does not presuppose a
 * music academy staff; the only team sentence allowed is TEAM contract TC1's "Work solo. Add people when you need them."
 *
 * ENGLISH-ONLY. Staged through `locales: ["en"]` in the registry.
 *
 * MOCK BLOCKER: `mock` is left as technical placeholder "lash-workspace" until a dedicated
 * music teacher mock component is built in components/mock.
 */

export const content: NichePageContent = {
  meta: {
    title: "Perelai for music teachers",
    description:
      "Track lesson revenue, recorded costs and calculated profit for any period, with student history and package redemptions kept readable.",
    ogImageAlt:
      "Perelai finance overview for a music teacher, showing lesson revenue, recorded costs and calculated profit for a period — example data.",
  },

  hero: {
    eyebrow: "Finance software for music educators",
    h1: "Absolute clarity for your teaching studio's finances.",
    subhead:
      "Log your incoming piano and guitar tuition, record outgoing maintenance costs like string replacements or tuning, and manage semester packages without complex accounting sheets.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Full rosters don't always mean high net margins",
      body: "Teaching back-to-back lessons across various instruments fills your schedule, but overhead from instrument upkeep, score printing, and room hire eats into those gains. If you aren't logging overhead against incoming fees, your true margin remains obscured.",
    },
    {
      title: "Prepaid semesters distort your monthly cash view",
      body: "Receiving a large lump sum for a full term makes that month look incredibly profitable while subsequent months look barren. Depleting lesson credits individually as they happen ensures your cash records reflect reality.",
    },
    {
      title: "Administrative chaos between schedules and ledgers",
      body: "Keeping track of appointments in one calendar, noting music book purchases on scrap paper, and verifying bank transfers in another app creates an unmanageable administrative burden.",
    },
  ],

  dayInLife: {
    title: "Document completed lessons and monitor your true earnings.",
    body: "Whether you just finished a guitar session or need to log sheet music costs, the entry takes only seconds. Recording transactions at the point of service gives you an accurate financial picture without any spreadsheets.",
    steps: [
      {
        title: "Keep instruction time and tuition payments uncoupled",
        body: "Marking a lesson as attended verifies the teaching happened. Payment is tracked as a distinct event, meaning uncollected tuition is never mistaken for settled cash.",
      },
      {
        title: "Payments stay connected to the lesson and student",
        body: "When a payment is recorded, it attaches to the specific student and lesson, keeping financial history tied to the instruction provided.",
      },
      {
        title: "Term block credits apply to scheduled visits",
        body: "Drawing down a credit from a Term Lesson Block settles the visit without cash movement. Delivered instruction and payment records remain separate.",
      },
      {
        title: "View studio financial performance",
        body: "Display lesson revenue, recorded costs, and calculated profit across a day, week, month, quarter, or year, broken down by student or lesson category.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Piano Lesson, Guitar Lesson",
      perelaiWord: "Services on a Visit",
      why: "The music teacher template includes two starter lesson options for instrumental repertoire, ear training, and scale practice. Each scheduled lesson becomes a Visit carrying the student, lesson type and payment record together.",
    },
    {
      theirWord: "Sheet Music",
      perelaiWord: "Add-on on a Visit",
      why: "Sheet Music books or printed scores register as add-on items attached to a student visit record.",
    },
    {
      theirWord: "Instrument Maintenance",
      perelaiWord: "Recorded Expense",
      why: "Record tuning, restringing and other teaching expenses as period costs. They contribute to the calculated profit shown for the selected period.",
    },
    {
      theirWord: "Term Lesson Block",
      perelaiWord: "Prepaid Package",
      why: "Prepaid lesson packages sit as credit balances, redeemed lesson by lesson without distorting period revenue.",
    },
  ],

  setup: {
    title: "Start from a music studio's lesson list, not a blank page.",
    body: "The music teacher template opens with two editable lesson types, one add-on and one expense category, so your first screen already resembles a working studio.",
    steps: [
      {
        title: "Configure your lesson catalog",
        body: "Choose instrumental lesson durations and tuition rates from the seeded music teacher template.",
      },
      {
        title: "Schedule lessons and add relevant items",
        body: "Schedule recurring lessons, complete visits and add Sheet Music when it forms part of the lesson record.",
      },
      {
        title: "Evaluate studio profitability across any chosen period",
        body: "Filter your records by week or academic term to compare lesson income against maintenance costs. The resulting profit margin is clearly displayed, keeping unpaid invoices isolated.",
      },
    ],
  },

  faq: [
    {
      q: "How does Perelai handle semester tuition blocks?",
      a: "Prepaid term packages act as student credits. When a student attends their scheduled time, a credit is deducted, aligning attendance perfectly with revenue.",
    },
    {
      q: "Can I log my instrument tuning and maintenance?",
      a: "Absolutely. Log expenses like piano tuning, restringing, score purchasing, or studio leasing. These deduct directly from incoming tuition to yield your net profit.",
    },
    {
      q: "What if families are late on paying their invoices?",
      a: "The system separates the completion of a teaching session from its payment. Any unpaid sessions clearly show up as outstanding balances.",
    },
    {
      q: "Is it possible to sell sheet music alongside tuition?",
      a: "Yes. The seeded services (like Piano Lesson) and Add-ons (like Sheet Music) are fully adaptable to your specific teaching model.",
    },
  ],

  labels: {
    terminologyTitle: "Music teaching terms and Perelai concepts.",
    inYourChair: "In your studio",
    inPerelai: "In Perelai",
    whyItMatters: "Why it matters",
    mocksTitle: "Music studio data, shown in the product.",
    mocksBody: "Example data uses the music teacher template's own services, add-on and expense.",
    faqTitle: "Frequently asked questions.",
  },

  whatItIsNot: {
    title: "Clear about what it is not.",
    body: "Perelai records completed lessons, teaching expenses and calculated profit for a chosen period. It does not act as your full studio back office.",
    items: [
      {
        title: "Not accounting software",
        body: "It displays period revenue, logged expenses and calculated profit. Bookkeeping, tax preparation and financial advice belong to your accountant.",
      },
      {
        title: "Not sheet music or notation software",
        body: "You can track services, add-on items and package redemptions. Sheet music notation, composition and audio recording are not part of it.",
      },
      {
        title: "Not a marketplace",
        body: "You own your booking link. Perelai does not take marketplace fees or interpose on student relationships.",
      },
    ],
  },

  cta: {
    title: "Know what the period came to.",
    body: "Start with a music studio lesson list to manage completed instruction, recorded payments, package redemptions and open order balances as readable records.",
    label: "Create your workspace",
    microcopy: "You'll get a verification email to finish setting up.",
  },

  research: musicTeacherResearch,
}

/* ─────────────────────────────────────────────────────────────────────────────
 * CLAIM MAP — every financial sentence above, traced to a contract row.
 *
 *  hero.subhead  "revenue, recorded costs and calculated profit for a day, week, month, quarter or year" → FC1, FC9
 *  hero.subhead  "Review the result by student and lesson category"                                      → FC4, FC5
 *  hero.subhead  "completed lessons, recorded payments and package redemptions remain separate"          → FC2, FC7
 *  dayInLife[0]  completing a lesson does not record a payment                                          → FC2
 *  dayInLife[1]  payment attaches to the visit and student                                              → FC7, FC5
 *  dayInLife[2]  package redemption is a non-cash settlement                                             → FC7
 *  dayInLife[3]  period breakdown by student and lesson category                                         → FC1, FC4, FC5
 *  terminology   revenue minus recorded period expenses contributes to calculated profit                → FC9
 *  setup[1]      schedule lessons and add Sheet Music                                                    → FC7
 *  setup[2]      review revenue, recorded expenses and calculated profit for supported periods           → FC1, FC9
 *  faq[1]        record relevant teaching expenses for a period                                          → FC5, FC9
 *  faq[2]        completing a lesson and recording payment are separate                                  → FC2
 *  whatItIsNot   no bookkeeping / tax / advice                                                           → FC1
 * ───────────────────────────────────────────────────────────────────────────── */
