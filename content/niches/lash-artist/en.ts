import { lashArtistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai for independent lash artists",
    description: "Keep lash bookings, client work and money visible when DMs and a late client disrupt the day.",
    ogImageAlt: "Perelai workspace for an independent lash artist, with lash visits, calendar and money overview",
  },
  hero: {
    eyebrow: "For independent lash artists",
    h1: "You can’t answer DMs all day.",
    subhead: "Keep Lash Extensions, refills and what was actually received in one workspace, so a late client does not leave you rebuilding the day at night.",
    mock: "lash-workspace",
  },
  pains: [
    { title: "A booking request should not sit in a DM thread", body: "Availability, a deposit question, a reference photo and a reschedule should not make you search messages between clients. A thread full of screenshots is not a reliable place to start a service day, especially when you are already preparing a set, setting out supplies and checking the first client’s details." },
    { title: "One blocked slot can change the whole day", body: "A Lash Lift & Tint cannot be squeezed into a Lash Refill slot, and a late full set changes every service after it. Keep the work in a calendar that reflects the service you are doing, not one generic appointment shape. The difference matters when brow work is booked around longer extension work." },
    { title: "Your time, supplies and money need the same view", body: "Record what was received, keep Supplies & Adhesive with the work, and see what is still outstanding without rebuilding the week in a spreadsheet. A busy Tuesday should not leave you guessing what the chair brought in after materials and overhead, or whether a string of refills covered the costs you tracked." },
    { title: "A previous visit should be easy to find", body: "When a returning client asks for a refill, their Visits, notes and payments belong with that client. You should not need to scroll through old DMs to find the last useful detail before the client is already at the bed. A client history is more useful when it is ready before the conversation starts." },
    { title: "The last message should not own your evening", body: "Clients can still ask questions directly. Routine booking can move to your own link, leaving you a clearer line between the last client and the rest of your night, rather than monitoring availability until you sleep. Your booking link handles the simple choice of service, person and time." },
  ],
  dayInLife: {
    title: "When the schedule moves, you can still see what needs attention.",
    body: "Perelai keeps the working parts of a lash day visible after the last client leaves, from a brow service in the morning to the money recorded after the final refill. The goal is not to make the craft generic. It is to give the precise service mix, client history, supply cost and unfinished decision a reliable place outside your message inbox. Isolation, lash trays, tweezers, under-eye pads, lash mapping, diameter, curvature, fanning, humidity, retention, bonder and adhesive preparation are real work around a set, not details a generic slot needs to flatten.",
    steps: [
      { title: "Brows have a clear start", body: "Place Brow Shaping, Brow Tint and Brow Lamination in the day as their own services, with their own time rather than a vague placeholder. The calendar can show the difference between a brow touch-up and a longer lash service, so a morning brow client does not blur into an afternoon extension set." },
      { title: "A lift gets the time it needs", body: "Keep Lash Lift & Tint visible in the calendar before the faster work around it starts to drift. When someone asks for another slot, you can see the shape of the day before replying, rather than promising a gap that is needed to reset the bed and prepare supplies." },
      { title: "A new set finds its place", body: "Add Lash Extensions as a Visit with the client details and the time it needs, instead of holding the plan only in a message thread. The Visit becomes a place for the service, notes and money activity together, which is easier to revisit when a client asks about the next fill." },
      { title: "A refill stays connected", body: "Keep Lash Refill in the calendar with the rest of the day, rather than chasing the latest message for the details. A returning client can be prepared for without rebuilding their history from memory or guessing whether a regular slot was moved, confirmed or still unanswered." },
      { title: "The next booking is a considered choice", body: "Use the open time you can actually see when a client asks for availability. A direct booking link lets a client choose a service, person and time without turning every open slot into a separate back-and-forth conversation in Instagram." },
      { title: "The service menu stays recognisable", body: "Keep the names your clients know, from Brow Lamination to Lash Extensions, in an editable service list. If your menu changes, you can adjust the starting list without turning your booking page into a generic salon catalogue." },
      { title: "Lash work has its own rhythm", body: "Cleansing, isolation, placement, curl choices and retention are part of the craft around a lash service. A Brow Shaping slot, a Lash Lift & Tint and an extension set do not ask the same thing of your time, concentration or preparation." },
      { title: "A returning client is not a blank slot", body: "A refill conversation can begin with the client’s own Visit history, notes and payment activity instead of a fresh message asking you to remember every prior detail. That gives you a better starting point before you decide what the next service needs." },
      { title: "Supplies have a job beside the service", body: "Link Supplies & Adhesive to the relevant work rather than keeping materials in a separate pile of receipts, notes and remembered purchases. The cost becomes part of the money view for the work that used it." },
      { title: "Money and loose ends stay visible", body: "Record what was received, connect Supplies & Adhesive, and leave the next decision in the Operational Inbox instead of carrying it into tomorrow. The end of the day has a list to work through, not a pile of notifications that disappear when read, which makes a follow-up easier to find before the next service begins." },
      { title: "The payment record has a clear end", body: "When you record what was actually received after a brow service, lift, extension set or refill, a Payment confirmation can give the client a link to open. The work completed and the money received stay separate, which avoids treating a booked or completed service as cash in hand." },
      { title: "Tomorrow starts with a real list", body: "An unanswered question, an amount still owed or a task after a Visit can remain visible in the Operational Inbox. Reading a notification does not clear the work, so the first look at tomorrow is less likely to begin with reconstructing what was missed." },
    ],
  },
  terminology: [
    { theirWord: "A Brow Shaping, Brow Tint or Brow Lamination slot", perelaiWord: "Visit", why: "Keep the named service, client notes and payment activity together, even when brow work sits between longer lash services and changes the rhythm of the calendar." },
    { theirWord: "Lash Lift & Tint, Lash Extensions or Lash Refill", perelaiWord: "Visit", why: "Give each kind of lash work its own place in the calendar instead of fitting every booking into the same block and hoping the timings hold after a late arrival." },
    { theirWord: "Brow & Lash Tint Combo added to the service", perelaiWord: "Add-ons", why: "Attach the extra work to the Visit it belongs to, so the service reflects what happened at the chair rather than a separate handwritten note or screenshot." },
    { theirWord: "Supplies & Adhesive used for the day", perelaiWord: "Linked expenses", why: "See that cost beside the work it supports rather than trying to remember it after a busy week of fresh sets, brow treatments and returning refill clients." },
    { theirWord: "A prepaid set of planned lash refills", perelaiWord: "Package", why: "Prepaid credits draw down as Visits are used, so the remaining visits are not a separate mental list, a phone note or a loose message in the client conversation." },
    { theirWord: "A client who will settle a balance later", perelaiWord: "Order", why: "Track what is still owed without calling it an invoice or bill, and keep the follow-up visible when you have a full chair list and several requests to answer." },
    { theirWord: "A policy question or follow-up after the last client", perelaiWord: "Operational Inbox item", why: "It stays until you resolve it, not until you read it and lose it beneath the next message, an incoming booking request or a day of new reschedules." },
  ],
  setup: {
    title: "Start with the lash work you already do.",
    body: "Not a blank generic list. The lash artist template starts with editable services, a tint add-on and a linked supply cost, so the first decisions look like your working day.",
    steps: [
      { title: "Open the lash artist workspace", body: "Arriving from this page puts the lash artist template first in onboarding. You begin with a trade choice that reflects the services a client sees on your booking link, rather than choosing from a salon-first blank setup." },
      { title: "Make the service list yours", body: "Start with Brow Shaping, Brow Tint, Brow Lamination, Lash Lift & Tint, Lash Extensions and Lash Refill. Edit a duration, add what you offer, or remove a service that is not part of your work. The list remains yours when your menu changes." },
      { title: "Bring over the essentials", body: "Import contacts from your phone with vCard, connect Google Calendar, then share your own booking link. You can start with the information that helps you work this week instead of moving everything at once or pausing bookings for a migration project." },
    ],
  },
  faq: [
    { q: "Will my lash services already be there?", a: "Yes. The lash artist template starts with six editable services: Brow Shaping, Brow Tint, Brow Lamination, Lash Lift & Tint, Lash Extensions and Lash Refill. It also includes Brow & Lash Tint Combo and Supplies & Adhesive, so you are not naming every common service from a blank page." },
    { q: "Can clients book without a DM exchange?", a: "Share one booking link in your bio or send it in a message. Clients pick a service, a person and a time. Perelai takes no commission on bookings. Someone looking for Brow Tint can start with that named service, while a Lash Refill client can see the same clear route without asking you to type out available times." },
    { q: "What happens when a client is late or does not show?", a: "Perelai can send automatic reminders by email, in-app and push. Work and money are recorded separately, so a missed Visit is not treated as money received. You decide how to handle a future booking request while the unfinished decision stays visible." },
    { q: "Can I see what the week actually brought in?", a: "Record what was actually received, link Supplies & Adhesive to the relevant work, and see revenue, costs and what is still outstanding without a spreadsheet. That gives you a clearer starting point than trying to reconstruct refills, brow work, fresh sets and materials from messages after the week is over. A completed extension set is work done, not automatically money received, so the number does not hide a balance that still needs attention." },
    { q: "Do I have to move everything in one weekend?", a: "No. Start with contacts from your phone using vCard and optionally connect Google Calendar. Your service list is editable, so you can make it yours as you go. Begin with the next few bookings, then decide what else is useful to bring across without pausing the work that pays the bills." },
  ],
  labels: {
    terminologyTitle: "The words in your lash room have a place in Perelai.",
    inYourChair: "In your lash room",
    inPerelai: "In Perelai",
    whyItMatters: "Why it matters",
    mocksTitle: "Lash artist data, shown in the product.",
    mocksBody: "Example data uses the lash artist template’s own services, add-on and linked expense.",
    faqTitle: "Questions lash artists ask before switching.",
  },
  whatItIsNot: {
    title: "Clear about what it is not.",
    body: "Perelai is for the client, booking and money side of your lash work. It does not pretend to replace specialist tools.",
    items: [
      { title: "Not accounting software", body: "It tracks what was booked, completed and paid for cash-flow visibility. It is not tax filing or financial advice." },
      { title: "Not a marketplace", body: "Your booking link is yours. Perelai takes no commission and does not rent the client relationship." },
      { title: "Not a medical record system", body: "It does not provide clinical records, diagnosis tracking or patient treatment management." },
    ],
  },
  cta: {
    title: "Keep the lash day visible after the last client.",
    body: "Create a workspace that starts with your services and keeps Visits, money and next decisions in one place.",
    label: "Create your workspace",
    microcopy: "No card. You’ll get a verification email to finish setting up.",
  },
  research: lashArtistResearch,
}
