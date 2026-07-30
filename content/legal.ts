export type LegalPageName = "terms" | "privacy"

export interface LegalSection {
  heading: string
  body: string
}

export interface LegalDraftContent {
  title: string
  description: string
  sections: LegalSection[]
}

export const LEGAL_DRAFT_EFFECTIVE_DATE = "July 30, 2026"
export const LEGAL_CONTACT_EMAIL = "legal@perelai.com"

/**
 * English is intentionally served at every published locale path until legal
 * counsel supplies approved translations. These are structured beta drafts,
 * not approved legal terms.
 */
export const LEGAL_DRAFTS: Record<LegalPageName, LegalDraftContent> = {
  terms: {
    title: "Terms of Service",
    description: "Draft Terms of Service for Perelai’s Founding Beta.",
    sections: [
      {
        heading: "Who we are",
        body: "Perelai provides booking, client and money software for independent service professionals. The final terms will identify the contracting entity and the contact details that apply to the service.",
      },
      {
        heading: "What the service is",
        body: "Perelai helps a workspace organise Visits, clients, bookings and recorded payments. It is not accounting, tax or financial-advice software, and it does not process payments for you.",
      },
      {
        heading: "Account and eligibility",
        body: "The final terms will set the conditions for opening and maintaining a workspace, including accurate account information and the authority to act for a business where applicable.",
      },
      {
        heading: "Acceptable use",
        body: "The service must be used lawfully and without harming the service, other people or their data. Final terms will set out the fuller acceptable-use rules and enforcement process.",
      },
      {
        heading: "Your data and your clients’ data",
        body: "You remain responsible for the information you add to a workspace and for having a lawful basis to use it. Final terms will explain the respective responsibilities of Perelai and workspace owners.",
      },
      {
        heading: "Availability during beta",
        body: "Perelai is in Founding Beta. The final terms will explain availability, support and any planned maintenance expectations without promising uninterrupted service.",
      },
      {
        heading: "Fees",
        body: "Perelai currently has no billing system and Founding Beta has no service fee. Any future paid offering will require final, dated terms before it takes effect.",
      },
      {
        heading: "Termination and export",
        body: "The final terms will explain how either party may end access and what happens to workspace information. This draft does not promise a data-export capability.",
      },
      {
        heading: "Liability",
        body: "The final terms will state the limits and exclusions that apply to the service, subject to the law that cannot be excluded.",
      },
      {
        heading: "Changes to these terms",
        body: "Final terms will explain how changes are announced and when they take effect. Registered users will receive notice before a material change takes effect.",
      },
      {
        heading: "Contact",
        body: "Questions about these draft terms can be sent to legal@perelai.com.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description: "Draft Privacy Policy for Perelai’s Founding Beta.",
    sections: [
      {
        heading: "Who the controller is",
        body: "The final policy will identify the Perelai controller, its contact details and the circumstances in which it processes personal data for a workspace.",
      },
      {
        heading: "What we collect",
        body: "Perelai may process account information, workspace content and technical information needed to provide and secure the service. The final policy will specify the categories and purposes in detail.",
      },
      {
        heading: "What we never collect in landing analytics",
        body: "Landing analytics must not include client personally identifiable information. The landing records only a narrow, allowlisted acquisition context and never captures form inputs.",
      },
      {
        heading: "Processors",
        body: "The final policy will name applicable processors, including hosting providers, Resend for email, Google when a user connects Calendar, and the analytics provider selected for the landing.",
      },
      {
        heading: "Legal basis",
        body: "The final policy will describe the legal bases that apply to each processing purpose, including the basis used for providing the service and meeting legal obligations.",
      },
      {
        heading: "Retention",
        body: "The final policy will explain how long account, workspace and technical information is retained, and the criteria used to determine those periods.",
      },
      {
        heading: "Your rights",
        body: "The final policy will explain available privacy rights, including GDPR rights for people in applicable markets such as Ukraine, Poland, Germany, France and Spain, and how to make a request.",
      },
      {
        heading: "Cookies and storage",
        body: "The landing does not set tracking cookies. It may use limited browser storage for functional preferences and first-touch attribution; this does not by itself determine consent obligations.",
      },
      {
        heading: "International transfers",
        body: "The final policy will describe when personal data is transferred internationally and the safeguards that apply.",
      },
      {
        heading: "Contact and complaints",
        body: "Questions, requests and complaints about this draft policy can be sent to legal@perelai.com. The final policy will include the relevant complaint routes.",
      },
    ],
  },
}
