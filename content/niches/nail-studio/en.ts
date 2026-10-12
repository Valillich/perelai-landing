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
      "body": "A returning customer arrives wearing last appointment’s colour. Before the fresh coating, check whether the booking includes Gel Polish Removal. Removal and the new manicure each keep their own place and price in the record."
    },
    {
      "title": "Nail art changes what was delivered",
      "body": "A plain finish becomes a detailed design when the customer chooses decoration. Attach Nail Art to the manicure it supplements, with the charge you agreed, rather than leaving that choice only in your conversation."
    },
    {
      "title": "A regular client brings more than a time slot",
      "body": "Before preparing a new set, review earlier manicures and any notes about preferred shades or designs. After the polish is finished, mark the work complete and record how it was settled."
    }
  ],
  "dayInLife": {
    "title": "One appointment, from removal to finish",
    "body": "Use the client’s actual services as the basis of the record.",
    "steps": [
      {
        "title": "Choose the services for the slot",
        "body": "Reserve enough time for the selected menu items: Classic Manicure, Classic Pedicure, Gel Polish or Gel Polish Removal. You set the duration of each; the template does not dictate the length of a session."
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
      "why": "A prepaid series can cover eligible manicures or pedicures. Deducting its balance records coverage of that session, rather than charging the series again."
    }
  ],
  "setup": {
    "title": "Set up your own nail menu",
    "body": "Four starter services distinguish manicure, pedicure, coating and removal. There are two optional additions and a Polish & Tools expense category for supplies. Keep the ordinary cosmetic services you provide; this is not a clinical chart.",
    "steps": [
      {
        "title": "Open the nail artist template",
        "body": "The page recommends the nail artist template; it also works for an independent nail artist."
      },
      {
        "title": "Set your timings and prices",
        "body": "Adapt the manicure and pedicure menu to your own treatments within ordinary cosmetic care. Keep coating and removal distinguishable, then use Nail Art for decoration. This page makes no promise about podology or clinical treatment."
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
      "a": "A French finish or a single accent nail can sit under Nail Art. Name the addition as you offer it and enter its charge with the manicure. The booking then reflects the decoration as well as the base coating."
    },
    {
      "q": "Is this for podology or treatment records?",
      "a": "This page covers ordinary cosmetic manicure, pedicure and coatings. Medical activity and clinical records are outside the MVP scope."
    },
    {
      "q": "Will the package count as another payment at the visit?",
      "a": "No. Selling a prepaid series and using one eligible manicure are different events. The sale is recorded once; redemption deducts the balance. It does not make the coating session another receipt or add fresh revenue."
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
