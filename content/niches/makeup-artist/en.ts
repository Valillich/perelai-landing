import type { NichePageContent } from "@/content/niches/types"

// Founder-led workflow example; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai for makeup artists",
    "description": "Schedule bridal, event and trial makeup, keep client context and record each service and payment.",
    "ogImageAlt": "Perelai for makeup artists"
  },
  "hero": {
    "eyebrow": "Appointments for makeup artists",
    "h1": "Keep the makeup trial and the event booking connected.",
    "subhead": "Schedule bridal, event and trial makeup, keep client context and record each service and payment.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "The trial and the event are different appointments",
      "body": "A rehearsal helps plan the final look, but it has its own date and service record. Keep both appointments with the same client."
    },
    {
      "title": "Event preparation needs clear timing",
      "body": "Set the duration and price for bridal or event makeup. The booking remains a specific service appointment, rather than an undefined event project."
    },
    {
      "title": "The conversation should survive the booking",
      "body": "Keep relevant notes with the client and record what was delivered. Completion and payment stay distinct, even when a package is used."
    }
  ],
  "dayInLife": {
    "title": "From a makeup trial to the event day",
    "body": "Follow the client across separate service appointments.",
    "steps": [
      {
        "title": "Create the client and reserve a slot",
        "body": "Choose Bridal Makeup or Event Makeup from the editable catalog and set the time."
      },
      {
        "title": "Record the trial when provided",
        "body": "Makeup Trial is an editable add-on. Attach it to the appropriate appointment and price it according to your own offer."
      },
      {
        "title": "Keep the later appointment with the client",
        "body": "Book the event-day service with the same client. Its time and outcome have a separate record."
      },
      {
        "title": "Record how the service was settled",
        "body": "Record payment or apply a matching prepaid package. A completed appointment alone is not proof that new money arrived."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Bridal Makeup or Event Makeup",
      "perelaiWord": "Services",
      "why": "These are editable starter services, not an event-management project."
    },
    {
      "theirWord": "Makeup Trial",
      "perelaiWord": "Add-ons",
      "why": "The trial is a cosmetic service, with your own pricing. It is separate from the Perelai software trial."
    },
    {
      "theirWord": "The person preparing for the occasion",
      "perelaiWord": "Client",
      "why": "Both the preparation and event appointments can be connected to one client."
    },
    {
      "theirWord": "A recorded payment",
      "perelaiWord": "Payment record",
      "why": "Record money received without implying built-in card acquiring."
    }
  ],
  "setup": {
    "title": "Start with your makeup services",
    "body": "The template provides two services, one add-on and one expense category.",
    "steps": [
      {
        "title": "Choose the makeup artist template",
        "body": "This page recommends makeup artist during onboarding."
      },
      {
        "title": "Make the service menu yours",
        "body": "Set prices and durations for bridal and event makeup. Keep or edit Makeup Trial; an unspecified price does not mean free."
      },
      {
        "title": "Book the next occasion",
        "body": "Add the client and schedule the service. Use relevant notes and payment records as the work progresses."
      }
    ]
  },
  "faq": [
    {
      "q": "Is Makeup Trial the 21-day software trial?",
      "a": "No. Makeup Trial is a service add-on in your own catalog. The Perelai STUDIO trial is access to the software; the two have different purposes."
    },
    {
      "q": "Is a trial makeup appointment free?",
      "a": "The template does not set a free price. You decide the price of your own services and add-ons."
    },
    {
      "q": "Can I keep a trial and wedding-day booking with one client?",
      "a": "Yes. Schedule the appropriate appointments against the same client. Each appointment retains its own time and service record."
    },
    {
      "q": "Does this include permanent makeup?",
      "a": "This page covers ordinary bridal, event and trial makeup. Permanent makeup and medical procedures are outside the chosen MVP scope."
    },
    {
      "q": "Can I work as an independent artist?",
      "a": "Yes. One working owner can provide the services. SOLO includes one active service professional; additional team access belongs to STUDIO."
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
    "title": "Plan the next look with its client record",
    "body": "Open a makeup workspace and connect appointments, services and recorded payments.",
    "label": "Create your workspace",
    "microcopy": "Confirm your email to continue setup."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
