import type { NichePageContent } from "@/content/niches/types"

// Founder-led workflow example; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai for barbers",
    "description": "Schedule haircuts and beard services, keep client history and record payments in one workspace for your barber practice.",
    "ogImageAlt": "Perelai for barbers"
  },
  "hero": {
    "eyebrow": "Appointments for barbers",
    "h1": "Keep the cut, the client and the payment together.",
    "subhead": "Schedule haircuts and beard services, keep client history and record payments in one workspace for your barber practice.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "A beard trim changes the appointment",
      "body": "A fade can turn into a longer session when the customer asks for beard shaping too. Keep Beard Trim beside the haircut, with its own charge, so the record matches what happened in the chair."
    },
    {
      "title": "A return visit needs context",
      "body": "A regular may want the same taper as last month. Before picking up the clippers, check the earlier cut and notes about length or styling preferences. Those details stay with the person who asked for them."
    },
    {
      "title": "The chair can be busy while payment is pending",
      "body": "The razor is put away and the customer heads to the counter. Completing Hot Towel Shave records the work; logging the settlement records how it was covered. An eligible prepaid package can cover the shave without another receipt."
    }
  ],
  "dayInLife": {
    "title": "From booking to the next cut",
    "body": "Use a concrete haircut as the thread through your working day.",
    "steps": [
      {
        "title": "Reserve time for a fade",
        "body": "Reserve a slot for Classic Fade or Hot Towel Shave, then assign the barber who will take the chair. Durations are yours to adjust around the cuts you offer."
      },
      {
        "title": "Attach the beard work",
        "body": "Add Beard Trim when it was provided, with its own price. The add-on stays connected to the appointment."
      },
      {
        "title": "Record the payment or apply a package",
        "body": "Record a cash or card payment, or apply an eligible prepaid package. Package use adds no new payment or revenue."
      },
      {
        "title": "Keep the next visit in context",
        "body": "When the regular returns for a fresh fade, the earlier haircut and settlement are still in their history. Check the notes before deciding what to repeat or change."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Classic Fade or Hot Towel Shave",
      "perelaiWord": "Services",
      "why": "The starter services are editable catalog entries; each scheduled appointment records a particular delivery."
    },
    {
      "theirWord": "Beard Trim added at the chair",
      "perelaiWord": "Add-ons",
      "why": "Trimming the beard after a haircut adds an item to that chair session. Its charge stays beside the fade, rather than becoming an unexplained receipt."
    },
    {
      "theirWord": "The person in your chair",
      "perelaiWord": "Client",
      "why": "Contact details identify the regular; earlier cuts and notes preserve context for their next haircut. Perelai does not decide the style or technique."
    },
    {
      "theirWord": "A barber working alone",
      "perelaiWord": "Performer",
      "why": "One working owner can be the service professional. The template does not require a separate team login."
    }
  ],
  "setup": {
    "title": "Set up your chair, not an entire chain",
    "body": "Your starting menu contains two services and two optional extras, plus Blades & Disinfectant as an expense category. Rename the entries to fit your shop; supplies remain a cost, not a customer-facing treatment.",
    "steps": [
      {
        "title": "Choose the barber template",
        "body": "This page recommends the barber template during setup."
      },
      {
        "title": "Adjust your menu",
        "body": "Shape the menu around your chair: a classic fade, towel shave and any beard work you actually offer. Beard Trim and Face Mask are optional additions; remove either if it does not belong on your price list."
      },
      {
        "title": "Add the working barber",
        "body": "Use your own performer profile if you work alone. Team access is a separate STUDIO capability."
      },
      {
        "title": "Bring in your next appointments",
        "body": "Add clients, optionally import vCard contacts and share your booking link when it is ready."
      }
    ]
  },
  "faq": [
    {
      "q": "Can I use it as a solo barber?",
      "a": "Yes. One working owner can provide the services. SOLO covers one active service professional; additional team access belongs to STUDIO."
    },
    {
      "q": "Does it include beard services?",
      "a": "The barber template includes Beard Trim as an editable add-on, alongside Classic Fade and Hot Towel Shave as starter services."
    },
    {
      "q": "Can I change the prices and timing?",
      "a": "Yes. Set your own rates and timings for cuts, shaves and extras. Your notes can describe fade height, blend, neckline or sideburn shape; Perelai does not choose the technique or dictate a tariff."
    },
    {
      "q": "Does a completed cut mean the client paid?",
      "a": "No. Completion and payment are separate. A prepaid package can also cover an eligible service without new cash at that appointment."
    },
    {
      "q": "Does it calculate barber commission?",
      "a": "No. Logged cuts and shaves can help you review the shop’s activity, but splitting takings between barbers remains your responsibility. Salary, commission agreements and payroll are not calculated here."
    }
  ],
  "labels": {
    "terminologyTitle": "Your work, and its record in Perelai",
    "inYourChair": "In your work",
    "inPerelai": "In Perelai",
    "whyItMatters": "What it means",
    "mocksTitle": "Example workspace",
    "mocksBody": "Synthetic data from this template.",
    "faqTitle": "Questions before you start"
  },
  "whatItIsNot": {
    "title": "Everyday records for your services",
    "body": "Use Perelai for appointments, clients and recorded payments.",
    "items": [
      {
        "title": "Operational accounts",
        "body": "Period revenue, costs and calculated profit depend on the records you enter. They are not tax reports."
      },
      {
        "title": "Client payments",
        "body": "Record how a client paid. Card acquiring is not included."
      }
    ]
  },
  "cta": {
    "title": "Start with your next haircut",
    "body": "Set up a barber workspace and follow one client from booking to the payment record.",
    "label": "Create your workspace",
    "microcopy": "Confirm your email to continue setup."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
