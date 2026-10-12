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
      "body": "A client may book a fade and ask for a beard trim at the chair. Keep the extra service with that appointment so the record reflects the work performed."
    },
    {
      "title": "A return visit needs context",
      "body": "Check the previous service before the next cut. Keep relevant client notes with the client instead of reconstructing them from a message thread."
    },
    {
      "title": "The chair can be busy while payment is pending",
      "body": "Finishing a hot towel shave and receiving payment are separate steps. Record both, including whether a prepaid package covered the appointment."
    }
  ],
  "dayInLife": {
    "title": "From booking to the next cut",
    "body": "Use a concrete haircut as the thread through your working day.",
    "steps": [
      {
        "title": "Reserve time for a fade",
        "body": "Choose the service, client, performer and time. The editable starter catalog includes Classic Fade and Hot Towel Shave."
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
        "body": "Open the client history when the person returns. Previous appointments and payment records remain connected."
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
      "why": "Extra work belongs to the same appointment rather than to an unrelated payment."
    },
    {
      "theirWord": "The person in your chair",
      "perelaiWord": "Client",
      "why": "The client record keeps contact details and appointment history together."
    },
    {
      "theirWord": "A barber working alone",
      "perelaiWord": "Performer",
      "why": "One working owner can be the service professional. The template does not require a separate team login."
    }
  ],
  "setup": {
    "title": "Set up your chair, not an entire chain",
    "body": "Start with two editable services, two add-ons and one expense category.",
    "steps": [
      {
        "title": "Choose the barber template",
        "body": "This page recommends the barber template during setup."
      },
      {
        "title": "Adjust your menu",
        "body": "Set your own prices and durations. Keep or remove Beard Trim and Face Mask according to your services."
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
      "a": "Yes. Enter the prices and durations you actually use. The template does not set a required price list."
    },
    {
      "q": "Does a completed cut mean the client paid?",
      "a": "No. Completion and payment are separate. A prepaid package can also cover an eligible service without new cash at that appointment."
    },
    {
      "q": "Does it calculate barber commission?",
      "a": "No. Perelai records appointments, payments and operational figures. Payroll and commission calculations are outside this scope."
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
