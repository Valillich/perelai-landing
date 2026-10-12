import type { NichePageContent } from "@/content/niches/types"

// Founder-led workflow example; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai for nail artists",
    "description": "Plan ordinary manicure and pedicure appointments, add polish or nail art and keep client and payment records together.",
    "ogImageAlt": "Perelai for nail artists"
  },
  "hero": {
    "eyebrow": "Appointments for nail artists",
    "h1": "Keep the manicure, the extra detail and the payment in view.",
    "subhead": "Plan ordinary manicure and pedicure appointments, add polish or nail art and keep client and payment records together.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "Removal needs a place in the booking",
      "body": "A new coating may begin with removing the old one. Keep gel polish removal and the next service in the same appointment record."
    },
    {
      "title": "Nail art changes what was delivered",
      "body": "A plain finish and a detailed design involve different work. Add nail art to the appointment instead of leaving the extra charge only in a conversation."
    },
    {
      "title": "A regular client brings more than a time slot",
      "body": "Open the appointment history and relevant notes before the next set. Record payment separately from completing the service."
    }
  ],
  "dayInLife": {
    "title": "One appointment, from removal to finish",
    "body": "Use the client’s actual services as the basis of the record.",
    "steps": [
      {
        "title": "Choose the services for the slot",
        "body": "Start with Classic Manicure, Classic Pedicure, Gel Polish or Gel Polish Removal and adjust their durations."
      },
      {
        "title": "Add the requested design",
        "body": "Use the Nail Art add-on when provided. Keep the extra work and its price attached to the client appointment."
      },
      {
        "title": "Close the service and record payment",
        "body": "Mark completion, then record payment or apply an eligible prepaid package. A package redemption creates no new cash."
      },
      {
        "title": "Review the return visit",
        "body": "Keep the next booking and the previous service history together in the client record."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Manicure, pedicure and coating",
      "perelaiWord": "Services",
      "why": "These are editable service entries, scheduled for a particular client and time."
    },
    {
      "theirWord": "Nail Art",
      "perelaiWord": "Add-ons",
      "why": "The design belongs to the appointment it supplements."
    },
    {
      "theirWord": "A returning customer",
      "perelaiWord": "Client",
      "why": "The record keeps contact details and previous appointments."
    },
    {
      "theirWord": "A prepaid series of eligible services",
      "perelaiWord": "Packages",
      "why": "The package is sold once; using it reduces the remaining balance without new revenue."
    }
  ],
  "setup": {
    "title": "Set up your own nail menu",
    "body": "The template has four starter services, two add-ons and one expense category. Keep only what you provide.",
    "steps": [
      {
        "title": "Open the nail artist template",
        "body": "The page recommends the nail artist template; it also works for an independent nail artist."
      },
      {
        "title": "Set your timings and prices",
        "body": "Edit the four starter services. Nail Art is available as an add-on; cosmetic care is not a medical service promise."
      },
      {
        "title": "Add yourself as the professional",
        "body": "A single owner can provide services. The template’s performer requirement does not require a separate team login."
      },
      {
        "title": "Start with the next client",
        "body": "Add a client and book the service. Contact import via vCard is optional."
      }
    ]
  },
  "faq": [
    {
      "q": "Can an independent nail artist use it?",
      "a": "Yes. One working owner can be the performer. SOLO supports one active service professional without additional team access."
    },
    {
      "q": "Can I include removal with the appointment?",
      "a": "Yes. Gel Polish Removal is a starter service you can keep, edit or remove from your own menu."
    },
    {
      "q": "Where do I record a design?",
      "a": "Nail Art is an editable add-on. Attach it to the same appointment when that work was provided."
    },
    {
      "q": "Is this for podology or treatment records?",
      "a": "This page covers ordinary cosmetic manicure, pedicure and coatings. Medical activity and clinical records are outside the MVP scope."
    },
    {
      "q": "Will the package count as another payment at the visit?",
      "a": "No. Record the package sale once. Applying an eligible package uses its remaining balance without new cash or revenue."
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
    "title": "Make your next manicure easy to follow",
    "body": "Start with your service menu, book a client and keep the work and payment record connected.",
    "label": "Create your workspace",
    "microcopy": "Confirm your email to continue setup."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
