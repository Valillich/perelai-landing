import { independentColoristResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai for independent colorists",
    description: "A calmer way to manage color visits, booking requests and cash flow.",
    ogImageAlt: "Perelai workspace for an independent colorist, showing color visits, a calendar and money overview",
  },
  hero: {
    eyebrow: "For independent colorists",
    h1: "When one double-booking can throw your whole day.",
    subhead: "Put flooded DMs, color visits and today’s money in one workspace built around the way you work.",
    mock: "colorist-workspace",
  },
  pains: [
    { title: "Your Instagram DMs are completely flooded", body: "A booking request should not live beside a formula question, a photo and a late-night reschedule." },
    { title: "A ten-minute delay can make the day feel shot", body: "Root Color, Balayage and a last-minute Styling Finish have different timing. Your calendar needs to hold the shape of the work." },
    { title: "‘I’ll pay next time’ is still a loose end", body: "Record what was actually received, see what is outstanding, and keep Color Product and Disposable Supplies in view." },
  ],
  dayInLife: {
    title: "When the day gets shot, you still know what is next.",
    body: "Perelai keeps the work of a color day visible without asking you to reconstruct it at night.",
    steps: [
      { title: "Consultation and Strand Test", body: "Start the Visit with the service that sets the color plan." },
      { title: "Root Color or Dimensional Color", body: "Keep today’s color work in the calendar alongside the time it needs." },
      { title: "Bond Treatment and Styling Finish", body: "Add the work that changes the visit, including the extras your client chose." },
      { title: "Payment and follow-up", body: "Leave with the amount received, outstanding work and the next decision visible in the Operational Inbox." },
    ],
  },
  terminology: [
    { theirWord: "A Root Color, Balayage or Gloss & Toner", perelaiWord: "Visit", why: "Keep the service, client notes and payment activity together." },
    { theirWord: "Bond Treatment, Extra Product for Long Hair or Styling Finish", perelaiWord: "Add-ons", why: "Attach the extra work to the Visit that needs it." },
    { theirWord: "Color Product and Disposable Supplies", perelaiWord: "Linked expenses", why: "See costs alongside the work they belong to." },
    { theirWord: "A prepaid set of color refreshes", perelaiWord: "Package", why: "Prepaid credits draw down as Visits are used." },
    { theirWord: "‘She’ll settle next time’", perelaiWord: "Order", why: "Track what is still owed without calling it an invoice or bill." },
    { theirWord: "Letting a client know money was received", perelaiWord: "Payment confirmation", why: "Send a confirmation your client can open from a link." },
    { theirWord: "What still needs your decision after the last client", perelaiWord: "Operational Inbox item", why: "It stays until you resolve it, not until you read it." },
  ],
  setup: {
    title: "Start with the color work you already do.",
    body: "No generic blank list. The colorist template starts with editable services, add-ons and linked expenses.",
    steps: [
      { title: "Open the colorist workspace", body: "Your arrival from this page puts the independent colorist template first in onboarding." },
      { title: "Make the list yours", body: "Begin with Consultation & Strand Test, Root Color, Dimensional Color / Balayage, Corrective Color, Gloss & Toner, and Haircut & Finish. Edit what you need." },
      { title: "Bring over the essentials", body: "Import contacts from your phone with vCard, connect Google Calendar, then share your own booking link." },
    ],
  },
  faq: [
    { q: "Will my color services already be there?", a: "Yes. The independent colorist template starts with six editable services, including Root Color, Dimensional Color / Balayage, Corrective Color, Gloss & Toner, and Haircut & Finish. It also includes Bond Treatment, Extra Product for Long Hair and Styling Finish as add-ons." },
    { q: "Can clients stop booking through my DMs?", a: "Share one booking link in your bio or send it in a message. Clients pick a service, a person and a time. Perelai takes no commission on bookings." },
    { q: "What happens when someone does not show?", a: "Perelai can send automatic reminders by email, in-app and push. It records work and money separately, so a missed Visit is not treated as money received." },
    { q: "Can I see whether a color day actually paid off?", a: "Record what was actually received, link Color Product and Disposable Supplies to the relevant work, and see revenue, costs and what is still outstanding without a spreadsheet." },
    { q: "Do I have to move everything in one weekend?", a: "No. Start with contacts from your phone using vCard and optionally connect Google Calendar. The service list is already editable, so you can make it yours as you go." },
  ],
  labels: {
    terminologyTitle: "The words in your chair have a place in Perelai.",
    inYourChair: "In your chair",
    inPerelai: "In Perelai",
    whyItMatters: "Why it matters",
    mocksTitle: "Colorist data, shown in the product.",
    mocksBody: "Example data uses the independent colorist template’s own services, add-ons and linked expenses.",
    faqTitle: "Questions colorists ask before switching.",
  },
  whatItIsNot: {
    title: "Clear about what it is not.",
    body: "Perelai is for running the client, booking and money side of your color work. It does not pretend to replace specialist tools.",
    items: [
      { title: "Not accounting software", body: "It tracks what was booked, completed and paid for cash-flow visibility. It is not tax filing or financial advice." },
      { title: "Not a marketplace", body: "Your booking link is yours. Perelai takes no commission and does not rent the client relationship." },
      { title: "Not a medical record system", body: "It does not provide clinical records, diagnosis tracking or patient treatment management." },
    ],
  },
  cta: {
    title: "Keep the color work moving, without rebuilding the day later.",
    body: "Create a workspace that starts with your color services and keeps visits, money and follow-ups in one place.",
    label: "Create your workspace",
    microcopy: "No card. You’ll get a verification email to finish setting up.",
  },
  research: independentColoristResearch,
}
