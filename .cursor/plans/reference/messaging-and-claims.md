# Messaging, Claims and Copy Rails

**Purpose:** the single source of truth for *what the landing may say*. Every headline, feature card,
FAQ answer and meta description produced in Phases LP6–LP8 must be traceable to §2 of this file.
**Verified against:** `beauty-finance` source and `docs/releases/*` on 2026-07-25, plus workspace
`CONTEXT.md` §10 (financial invariants), §16 (messaging) and §17 (legal boundaries).

**Rule for every agent working on copy:** if a claim is not in §2, you may not write it. If you
believe it should be, add it to §2 with a source file path first, in a separate change.

**Amended 2026-08-02 (TEAM1, team collaboration).** F4 gained the notes supporting line and its
never-say list; F15 gained the narrow team shapes; F25 (coworker shared availability) was added and is
**held** on TC5; a Collaboration gate was added after §2.2; §4.1 gained eight collaboration bans;
§4.2 gained the team/coworker terminology rows; §7 inserted **Collaboration** as row 7 and the former
rows 7–11 shifted to 8–12. Nothing in §1 (positioning/ICP) or §6 (CTA policy) changed.

---

## 1. Positioning (use this, don't re-derive it)

**Category (the shelf):** booking + client + money software for independent service professionals.
Not a CRM, not accounting, not a marketplace.

**One-liner:** *Your clients, bookings and cash flow — finally in one place.*

**What makes it different (in priority order):**

1. **The operational Inbox.** Everyone else sends notifications. Perelai keeps a company-level list of
   *unresolved work* that stays there until someone actually resolves it. Reading a notification does
   not clear the item. This is the differentiator; lead with it after the core promise.
2. **Fulfilment and money are separate — on purpose.** A completed visit is not revenue. A paid visit
   may be settled by cash, by prepaid credits, or both. Competitors blur this and produce numbers
   owners do not trust. Perelai does not.
3. **Onboarding that already knows the business.** 32 selectable business types with editable
   service/item lists; relevant templates also include add-ons, linked costs and time-based
   durations. The right one is preselected from the page the user arrived on, and the app's
   vocabulary changes with it.
4. **Direct booking with no take rate.** The public booking link is the business's own; Perelai takes
   no commission on bookings.

**ICP (initial GTM, do not broaden):** independent colorists and premium solo beauty professionals in
the **United States**. `APPOINTMENT` mode. Everything else is Wave 2+.

**Jobs to be done:**
- "Stop losing track of what still needs doing after a busy day."
- "Know what I actually earned this week without rebuilding it from memory."
- "Let clients book me without me answering DMs at 11pm."

**Four forces (JTBD) — the spine of every niche page:**

| Force | Content |
|---|---|
| **Push** | Bookings in DMs, notes in three places, money reconstructed from memory at month end, no idea which clients stopped coming. |
| **Pull** | One list of what still needs doing; one number you can trust; a link you can put in your bio. |
| **Habit** | The notes app + the paper book + the phone calendar works "well enough" and costs nothing. |
| **Anxiety** | "Migrating my clients will take a weekend." "It'll be built for salons with 12 chairs, not me." "I'll set it up and then abandon it." |

Anxiety is the one the current landing does nothing about. Each niche page must answer all three
anxieties explicitly — that is what the vCard/Google Calendar import section, the solo-vs-team framing
and the terminology table are *for*.

**Anti-persona:** businesses that need real accounting, tax filing, payroll, clinical records, or
consumer lending. Say so plainly rather than trying to convert them.

---

## 2. Shippable feature inventory

Every row is implemented in code today. Use the **Say** column verbatim or as a base; never upgrade
the claim.

### 2.1 Core loop

| # | Capability | Say | Never say | Source |
|---|---|---|---|---|
| F1 | Operational Inbox | "One list of what still needs your decision — it stays there until you resolve it, not until you read it." | "AI triage", "smart inbox", "automatically handles" | `apps/api/src/inbox/`, `components/inbox/`, ADR-0009 |
| F2 | Mode-aware Calendar | "A calendar that shows the kind of work you actually do — appointments, orders, requests or reservations." | Do not promise REQUEST/ORDER/RENTAL **public intake** — see §4 | `CalendarPage.tsx`, `calendar-projection/`, ADR-0008 |
| F3 | Public booking page | "Share one link. Clients pick a service, a person and a time. No commission." | "Marketplace", "get discovered", "new clients from Perelai" | `apps/api/src/public-booking/`, `PublicBookingPage.tsx` |
| F4 | Clients + history (incl. notes) | "Every client's visits, notes and payments in one place." Supporting line, when client context needs proof: "Pinned client notes and visit notes stay with the client history." | "CRM", "360° customer view", "lifetime value prediction". For the notes half: attachments, files, tags, mentions, note search, rich text, AI summaries, a global/company-wide notes feed, or notes visible to a linked coworker company | `apps/api/src/clients/`, `notes/`, `ClientDetailsPage.tsx`, `PinnedClientNoteCard.tsx`; supporting line gated by TC8 in [`docs/team-collaboration-claim-contract.md`](../../../docs/team-collaboration-claim-contract.md) (`PASS` 2026-08-02) |
| F5 | Payment recording & allocation | "Record what was actually received and see exactly what it paid for." | "Payment processing", "we handle payments", "get paid instantly" — Perelai **records**, it does not process | `payment-accounts/`, ADR-0002 |
| F6 | Finance overview | "Revenue, costs and what's still outstanding — without a spreadsheet." | "Accounting", "bookkeeping", "tax", "P&L", "financial advice" | `apps/api/src/finance/`, `FinancePage.tsx` |
| F7 | Orders + instalments | "Agree a payment schedule and track what's still owed." | "Financing", "BNPL", "credit", "lending", "invoice", "bill" | `apps/api/src/orders/`, ADR-0006 |
| F8 | Packages (prepaid credits) | "Sell a package of visits and let it draw down automatically." | "Membership", "subscription", "loyalty program" | `apps/api/src/memberships/`, ADR-0003 |
| F9 | Recurring visits | "Set a client's regular slot once." | "Automatic rebooking" | `apps/api/src/recurring/` |

### 2.2 Setup and integrations

| # | Capability | Say | Never say | Source |
|---|---|---|---|---|
| F10 | Niche-aware onboarding | "Pick your trade and start with an editable service or item list — 32 selectable business types. Relevant templates also include add-ons and linked costs." | "AI-generated setup", "instant migration"; do not imply every template has non-empty add-on/expense lists | `libs/core/src/templates/`, `OnboardingPage.tsx` |
| F11 | Google Calendar sync | "Connect your Google Calendar and keep both sides in step." | Do not merge with Google sign-in — they are **separate** integrations | `apps/api/src/integrations/`, plan `google_oauth_calendar_sync_20260620` |
| F12 | Google sign-in | "Sign in with Google." | "Perelai reads your contacts" — the Contacts scope is **deliberately not requested** | `auth/google-auth.guard.ts` |
| F13 | vCard contact import | "Bring your contacts across from your phone." | "One-click migration from [competitor]" | `apps/api/src/imports/`, `ob14-vcard-preview-company-estimate.md` |
| F14 | Market-aware defaults | "Currency and country are set from your market; time-based service templates start with editable durations." | Do **not** promise suggested *prices* — the curated price catalog is intentionally empty (`ob13`). Do not promise durations for ORDER/REQUEST/non-time-based items. Durations come from the template, not from the market. | `supported-markets.ts`, `price-packs-catalog.ts` |
| F15 | Staff & multi-company | "Add your team with roles, or run more than one business from one login." Narrow homepage shapes: "Invite team members with Staff or Supervisor access." · "Keep schedules, time off and assigned services together." · "Give each person the access their role allows." | "Enterprise permissions", "SSO", "granular permissions", "custom roles", "roles you define", "payroll", "timesheets", "commissions", "HR management", "built for salons", "requires a team", "enterprise workforce management". Never restate a role scope as an absolute ("Staff can never see another client", "everyone sees everything") | `staff/`, `invites/`, `memberships/`, `common/utils/staff-scope.util.ts`; narrow shapes gated by TC1–TC4 in [`docs/team-collaboration-claim-contract.md`](../../../docs/team-collaboration-claim-contract.md) (`PASS` 2026-08-02) |
| F25 | Coworker shared availability (separate businesses) | "Link a separate business that shares your space." · "You each see the other company's occupied times — not client, service, staff, money or note details." · "Coworker occupied times are checked when a visit is saved and excluded from public booking availability." | "Shared calendar", "calendar sharing", "sync your calendars with your coworkers"; "nothing is shared"; "complete privacy", "private by default", "anonymous"; "no double-booking ever", "real-time locking"; "shared account", "shared client list", "one shared workspace", "collaborate with anyone"; coworker described as a role, seat, membership, or team member | `apps/api/src/coworkers/`, `coworker-busy.service.ts` (returns `id`, `startAt`, `endAt`, `companyName`, `companyColor` only), `apps/api/prisma/schema.prisma` (`CoworkerGroup`, `CoworkerMembership`, `CoworkerInvite`), `apps/api/src/public-booking/public-booking.service.ts`; **publication gated by TC5–TC7** in [`docs/team-collaboration-claim-contract.md`](../../../docs/team-collaboration-claim-contract.md) |

**Collaboration gate (added 2026-08-02, TEAM1).** F25 takes the next free ledger number after F24 but
lives here in §2.2, beside F15, because the two mechanisms have to be read together. F15 and F25
describe mechanisms that must never
be merged. A **team member** has workspace access inside *one* company (`CompanyMembership`, Staff or
Supervisor). A **coworker** is a *separate business* linked to yours; accepting a coworker invite
creates no membership and shares no client list. Like the device rows, a collaboration sentence needs
**two** approvals: it must appear here *and* its matching row in
[`docs/team-collaboration-claim-contract.md`](../../../docs/team-collaboration-claim-contract.md)
must read `PASS`.

| Ledger | Claim-contract rows | Status on 2026-08-02 | Consequence |
|---|---|---|---|
| **F15** narrow shapes | TC1, TC2, TC3, TC4 | `PASS` | The team half of the collaboration section may ship. |
| **F4** notes supporting line | TC8 | `PASS` | One supporting line, inside the workspace side only. Never a standalone Notes section, never in a coworker surface. |
| **F25** | TC5 `HOLD`, TC6 `PASS`, TC7 `PASS` | **Held on TC5** | No coworker sentence, key, label, panel, or visual may ship. TC6/TC7 describe the boundary *of* a link that TC5 has not yet cleared, so they cannot carry it alone. |
| **F15** multi-company half | TC9 `HOLD` | Held **for this section only** | "Run more than one business from one login" stays exactly where it is today. Do not import it into collaboration copy. |

TC5 is held because its focused integration evidence could not be executed (no `TEST_DATABASE_URL`),
not because the mechanism was found absent. Clearing it requires a new dated verification entry in the
claim contract — not a reading of this table.

### 2.3 Communication

| # | Capability | Say | Never say | Source |
|---|---|---|---|---|
| F16 | Reminders & notifications | "Automatic reminders by email, in-app and push." | "SMS", "WhatsApp", "Telegram" — not implemented | `apps/api/src/notifications/`, `system-tasks/` |
| F17 | Client preferences | "Clients choose what they want to hear from you." | — | `public-client-auth/`, `ClientEmailPreferencesSection.tsx` |
| F18 | Payment confirmations | "Send a payment confirmation your client can open from a link." | "Receipt" in the fiscal sense, "tax invoice", "official cash receipt" (CONTEXT §17) | `public-receipt/` |

### 2.4 Platform

| # | Capability | Say | Never say | Source |
|---|---|---|---|---|
| F19 | 7 languages | "Works in English, Ukrainian, Polish, Russian, Spanish, French and German." | Do not list a language the landing itself does not ship | `apps/web/public/locales/` |
| F20 | Mobile-first + desktop | "Built for your phone first. Comfortable on a laptop when you need it." | "Native app", "iOS app", "Android app" — it is a web app. Also: unqualified **"use it on iPad"** / cross-device promises until *Cross-device workspace* is `PASS`. Narrow density wording is gated by the separate *Responsive layout density* contract row (now `PASS` with automated 1024/1360/1600 pane asserts) — do not inflate it into a device matrix claim | `apps/web/src/utils/responsiveLayout.ts` (`64rem`/`85rem`), `DesktopNavigationRail.tsx`, `DesktopWorkspace.tsx`, `BottomNavigation.tsx`; device-specific wording gated by [`docs/device-claim-contract.md`](../../../docs/device-claim-contract.md) |
| F21 | Browser first; use without installing | "Perelai runs in a web browser. Installing it is optional." | The literal word **"PWA"** (CONTEXT §17). Also: any **promise** that a named phone/browser will offer Install / Home Screen / an icon window — those rows are `BLOCKED` in the claim contract; "install in every browser", "one tap on any device" | Browser delivery: `apps/web/index.html`, `apps/web/public/manifest.json`. Optionality (use without installing): workspace `CONTEXT.md` §11 + §19.18, `OnboardingReviewStep.tsx` (install stays secondary). Claim-contract row **Use without installing** must read `PASS`. Named-browser install availability is a **separate** `BLOCKED` row — do not fold it into F21 |
| F22 | Light & dark | "Light and dark." | — | `dark_mode_integration_9058a729` |
| F23 | No store distribution | "There is no App Store or Google Play listing." | "Coming to the App Store", "Google Play soon", store badges, "download the app". Do not frame the absence as a benefit (device plan §5.4 rule 2) | Dated external store searches on **2026-08-01** (Apple iTunes Search API US/UA + bundleId lookups; Google Play search via Playwright DOM scrape) — evidence in [`docs/research/store-listing-checks/store-listing-absence-2026-08-01.json`](../../../docs/research/store-listing-checks/store-listing-absence-2026-08-01.json); claim-contract §1.6 / F23 row `PASS`. Repository absence alone is **not** sufficient |
| F24 | Internet connection required | "Perelai needs an internet connection." | "Works offline", "offline-first", "book clients offline", "syncs when you reconnect", "no internet required" | `apps/web/public/notification-sw.js` (notification-only service worker — no offline application shell, no cache strategy, no background sync), `apps/web/src/utils/webPush.ts`; see `docs/device-claim-contract.md` §1.5 |

**Device gate (amended 2026-08-01, DVC2 repair).** F20–F24 are the only Platform rows that touch
devices, browsers or distribution. A device sentence needs **two** approvals: it must appear here
*and* its matching row in [`docs/device-claim-contract.md`](../../../docs/device-claim-contract.md)
must read `PASS`. Audit prose cannot override a `BLOCKED` contract row.

**Shippable today (mechanically `PASS` in both places):**

| Ledger | Claim-contract row that must be `PASS` | Allowed public shape |
|---|---|---|
| **F21** | **Use without installing** (+ browser delivery) | "Perelai runs in a web browser. Installing it is optional." — never a named-device install promise |
| **F23** | **No store distribution** | "There is no App Store or Google Play listing." — sourced from dated store searches, not from "no native code in the repo" |
| **F24** | Internet required | "Perelai needs an internet connection." |

**Not shippable until their contract rows pass:**

- **F20's device-specific *Say* expansions** and every strong cross-device / multi-pane marketing line
  beyond what the **Responsive layout density** `PASS` row literally allows.
- Named Safari / Chrome / Instagram / Facebook / Home Screen / standalone / push paths — contract
  rows remain `BLOCKED` pending physical evidence.
- Responsive density *may* ship in the narrow form backed by the density `PASS` row (authenticated
  automated captures at 1024 / 1360 / 1600 with DOM pane asserts). Do not upgrade that into
  unqualified "use it on iPad" without the cross-device row.

---

## 3. Not shippable — planned, not built

Do not reference these in any tense that implies availability. "Coming soon" is also a promise; prefer
silence unless there is a dated commitment.

| Area | State | Source |
|---|---|---|
| AI / NLP magic input, smart insights, marketing broadcasts, cohorts, RFM, churn prediction | plan exists, **all todos pending** | `intelligence_core_analytics_marketing_nlp_20260717.plan.md` |
| File attachments / media on notes | plan exists, **all todos pending** | `file_storage_media_attachments_20260620.plan.md` |
| SaaS billing, subscriptions, free trials, plan entitlement | **no code at all** — no Stripe, no billing module in `apps/api/src` | verified 2026-07-25 |
| Public REQUEST / ORDER / RENTAL intake | implemented but **disabled by default** | `publicBookingFeatureFlags.ts`, `.env.example:31-40` |
| Curated market price suggestions | catalog **intentionally empty** | `ob13-market-price-provenance.md` |
| SMS, WhatsApp, Telegram, Slack, Discord | explicitly out of scope | `email_verification_client_system_notifications_20260620.plan.md` |

---

## 4. Banned claims and words

### 4.1 Hard bans — never, on any page, in any language

| Banned | Why |
|---|---|
| "personal CFO" | CONTEXT §16 do-not-use list. Currently on the live site 4×. |
| "14-day free trial", "no credit card required", any trial length | No billing system exists. |
| "+38% repeat bookings", any un-sourced statistic | Fabricated. Every number needs a source or it goes. |
| "Every booking automatically becomes revenue" | Violates the fulfilment/payment separation (CONTEXT §10). |
| "Save thousands on marketplace fees" | Unverifiable savings claim. |
| "All-in-one business platform", "AI-powered ERP", "replace every tool", "full accounting" | CONTEXT §16 do-not-use list. |
| "HIPAA-ready", "clinical records", "diagnosis", "patient treatment management" | CONTEXT §17. Blocks the regulated niches entirely. |
| "guaranteed churn prediction" | CONTEXT §16; feature does not exist. |
| "fiscal receipt", "tax invoice", "official cash receipt" | CONTEXT §17. Use "payment confirmation". |
| "lending", "credit", "BNPL", "financing" | CONTEXT §17. Instalments = tracking an agreed schedule. |
| "PWA" | CONTEXT §17 wording rule. |
| Fake testimonials, fake logos, fake counts ("Join 10,000+ pros") | Pre-commercial beta. There are no customers to cite yet. |
| "Built for teams", "Manage your salon team", "Salon team management", "built for salons" | Added 2026-08-02 (TEAM1). Destroys message match with the flagship solo ICP, whose documented anxiety is *"It'll be built for salons with 12 chairs, not me."* Collaboration is a progression the visitor opts into, never the frame. |
| "Payroll", "timesheets", "commissions", "clock in/out", "HR" | Added 2026-08-02. Perelai stores staff schedules, time-off blocks and assigned services. It calculates no wage, hour total, or commission. Also an anti-persona boundary (§1). |
| "Granular permissions", "custom roles", "define your own roles", "permission matrix" | Added 2026-08-02. There are exactly three role semantics — Owner, Supervisor, Staff. Vagueness here reads as enterprise software to a solo buyer and overstates the product. |
| "Shared calendar", "share your calendar with your coworkers", "calendar sharing" (coworker sense) | Added 2026-08-02. Only occupied intervals cross a coworker boundary. F11 Google Calendar **sync** is a separate, real integration — do not let this ban shadow it, and do not let F11's wording leak into coworker copy. |
| "Nothing is shared", "complete privacy", "private by default", "anonymous" (coworker sense) | Added 2026-08-02. Company name, colour and occupied intervals *are* shared. Overclaiming privacy is the fastest way to be caught being wrong; state the precise visible and hidden fields instead. |
| "No double-booking ever", "never double-book", "real-time locking" | Added 2026-08-02. Coworker occupied times are checked on save and excluded from public booking availability. That is a check, not a guarantee. |
| "Streamline collaboration", "work better together", "one shared workspace", "collaborate with anyone" | Added 2026-08-02. §4.3 already bans "streamline". These phrases also hide *which* of the two mechanisms is meant, which is the exact ambiguity this section exists to remove. |

### 4.2 Terminology discipline (from the app glossary — keep landing and app consistent)

| Use | Not |
|---|---|
| Visit | transaction, appointment record |
| Order | invoice, bill |
| Package (prepaid credits) | membership, subscription |
| Workspace access | membership |
| Payment confirmation | receipt (fiscal sense) |
| Instalment | payment plan (in UI labels), installment (spelling) |
| Public service request | booking, visit |
| Rental reservation | visit, booking |
| Operational Inbox item | notification |
| Team member *(marketing prose)* | employee, seat, user, headcount, "your staff" as a mass noun |
| Staff, Supervisor *(product role labels — take the English from the generated app string catalog, never hand-typed)* | `STAFF` / `SUPERVISOR` enum names in prose; invented role names |
| Coworker — **a linked separate business** | coworker as a person, a colleague inside your workspace, a role, or a seat |
| Occupied times | shared calendar, busy calendar sharing, their schedule |

### 4.3 Style bans (copywriting skill)

No exclamation points. No "streamline", "optimize", "innovative", "seamless", "leverage", "empower",
"revolutionize", "game-changing", "effortlessly". Prefer the concrete number over the adverb.

---

## 5. Proof strategy when you have no customers

The hardest constraint: pre-commercial beta ⇒ **no testimonials, no logos, no usage counts.** The
usual trust block is unavailable, and faking it is banned (§4.1). Substitute, in this order:

1. **Product transparency as proof.** *(Narrowed 2026-07-28 by
   [`../product_mock_kit_20260728.md`](../product_mock_kit_20260728.md) §5 — LP5b.)*
   **At least one real screenshot per page family**, on the homepage hero, unedited and captioned.
   Every other product visual is a **rendered mock** built from the app's own template catalog and the
   app's own translated UI strings — which makes it localized, themed, region-aware, and provably the
   product's data, where a screenshot would be an English still life re-shot 168 times.
   Caption every mock and every screenshot: *"Example data."*
   The rule this replaces — *"real screenshots, not stylised mockups"* — was aimed at invented
   interfaces. A mock whose service names, labels and currency come from generated files and whose
   build fails when they stop matching is not an invented interface; a hand-drawn illustration is,
   and those are still banned.
2. **Specificity as proof.** "6 services, 3 add-ons and 2 linked costs, pre-filled for colorists" beats
   "get set up in minutes". Specific claims read as true because only someone who built it would know them.
3. **Founder-led credibility.** A short, signed "why we built this" with a real name and a way to reply.
   Founder-led outreach is the documented distribution channel — the page should match the voice of the
   DMs that drive traffic to it.
4. **Risk reversal that is actually real.** Use only product-backed, dated owner-approved facts.
   “No card” is currently code-backed because there is no billing. Do not promise data export; no
   export capability was found. Do not say closing a tab cancels anything. A founding-price lock,
   beta duration or scarcity is a commercial obligation and ships only when recorded with approver
   and date in `docs/commercial-policy.md`.
5. **Honesty as differentiation.** A short "what Perelai is not" block — not accounting, not a
   marketplace, not a medical record system. It disqualifies bad fits, and it is the most credible thing
   on a page with no customers.
6. **Public roadmap / changelog** once one exists. A dated changelog is third-party-verifiable proof of
   momentum.

**Replace the trust block with these. Do not leave an empty "as seen in" strip.**

---

## 6. CTA policy (stage-gated)

The CTA must never promise a mechanism that does not exist. There is no trial, and registration ends in
an email-verification screen, not in the app.

**Current stage — no billing, founding beta:**

| Position | Copy | Destination |
|---|---|---|
| Primary | **Create your free workspace** (alt: *Join the Founding Beta* only while that programme is approved and active) | `buildAppSignupUrl({ niche, source, campaign, landingPath, locale })` |
| Secondary | **See how it works** | `#how` on the same page |
| Header, logged-out | **Log in** | `${NEXT_PUBLIC_APP_URL}/login` |
| Micro-copy under primary | "No card. You'll get a verification email to finish setting up." | — |

That micro-copy is not decoration: `AuthRegisterResult` is `{ verificationRequired: true }`, so the
user *will* hit an inbox step. Saying so ahead of time is the cheapest activation win available.

**After self-service billing ships** (only then):

| Position | Copy |
|---|---|
| Primary | **Start free trial** |
| Secondary | **View demo** |

Banned CTA copy: "Submit", "Sign Up", "Learn More", "Click Here", "Get Started" (generic).

---

## 7. Homepage message hierarchy

One idea per section, in this order. Each section advances one argument.

| # | Section | Job | Key line |
|---|---|---|---|
| 1 | Hero | State the promise for a cold visitor in 5 seconds | *Your clients, bookings and cash flow — finally in one place.* |
| 2 | Problem | Prove you understand the day | The DMs, the notes app, the "what did I actually earn this week" |
| 3 | The Inbox | The differentiator, shown not told | *A notification tells you something happened. The Inbox keeps it until you deal with it.* |
| 4 | Booking link | Removes the "how do clients reach me" question | One link, your clients, no commission |
| 5 | Money that adds up | The honesty argument | Completed work and received money are tracked separately — so the number is real |
| 6 | Device fit | Answer "will this fit how I work?" before migration anxiety starts | *Perelai runs in a web browser. Installing it is optional, and there is no App Store or Google Play listing.* (F21 + F23) |
| 7 | Collaboration | Answer "can I use this alone, and what happens if I add someone?" | *Work solo. Add people when you need them.* (F15 narrow shapes; F4 notes line as the one supporting proof) |
| 8 | Set-up in an evening | Kills the migration anxiety | Templates, Google Calendar, contacts import |
| 9 | What Perelai is not | Disqualify + build trust | Not accounting, not a marketplace, not a medical record system |
| 10 | Niche router | Send visitors to their page | Links to every live niche page — this is also the internal-linking hub |
| 11 | FAQ | Objection handling | 6 questions, §8 below |
| 12 | Final CTA | Recap + risk reversal | Repeat primary CTA + the no-card line |

**Order constraints (binding).**

```text
Hero → Problem → Inbox → Booking → Money → Devices → Collaboration → Setup → Not → Niche router → FAQ → Final CTA
```

- **Device fit stays immediately after Money.** That adjacency is the DVC decision (device plan §6.3)
  and Collaboration does not disturb it — Collaboration is inserted *after* Devices, not between Money
  and Devices.
- **Collaboration sits between Devices and Setup** because it is objection handling, not a new
  purchase argument: Inbox, Booking and Money must land first, and the section then hands the visitor
  straight to Setup's existing "your team if you have one" step (§8 FAQ 2).
- **Collaboration adds no CTA.** The page keeps exactly one primary action. It also adds no route, no
  header/footer item, no anchor target, no FAQ row, no metadata, OG/Twitter, JSON-LD or `llms.txt`
  claim, and no niche-page block. The `#features` anchor stays on Inbox.
- **Notes is not a section.** It appears once, as a supporting line inside Collaboration's workspace
  side (F4 + TC8). See `docs/team-collaboration-copy-audit.md` §8 for the recorded rationale.

---

## 8. FAQ bank (objection handling)

Six for the homepage; each niche page swaps 3–5 of them for niche-specific ones.

1. **Do I need a card to start?** No card is collected today because there is no billing system.
   State beta duration or a future price commitment only when `docs/commercial-policy.md` records
   dated owner approval.
2. **What happens right after I sign up?** You confirm your email, then a short setup: your trade,
   your services, your team if you have one, and optional imports.
3. **Will my services already be there?** Yes — each selectable business type starts with an
   editable service or item list. Relevant templates also include add-ons and linked costs.
4. **Can I bring my clients and calendar across?** Yes: contacts from your phone (vCard) and two-way
   Google Calendar sync.
5. **Do you take a cut of my bookings?** No. Your booking link is yours; Perelai takes no commission.
6. **Is this accounting software?** No. Perelai tracks what was booked, completed and paid so you can
   see your cash flow. It is not accounting, tax filing, or financial advice.

---

## 9. Niche page copy contract

A niche page is **not** the homepage with a swapped headline. The pSEO uniqueness rule and the CRO
message-match rule both apply: **≥60% of body text must be niche-specific.**

| Block | Must be niche-specific | Source of truth |
|---|---|---|
| H1 + subhead | ✅ | the niche's own words for the job |
| Pain list (3–5) | ✅ | customer research, §10 |
| A day in the life | ✅ | the niche's actual workflow |
| **Terminology table** | ✅ | the template's `terminologyProfile` + service/add-on/expense list |
| **Product mocks** | ✅ | rendered from that template's own `services` / `addons` / `expenses` — LP5b, not a screenshot |
| Setup steps | ✅ | 3 steps, or **4 if `requiresStaff: true`** |
| FAQ (5) | ✅ | niche objections |
| CTA + micro-copy | mode-specific | §6 |
| "What Perelai is not" | shared | §7 row 7 |
| Footer / nav | shared | — |

**The terminology table is the highest-value block.** It is product-derived proprietary data — the
strongest category in the pSEO defensibility hierarchy — and no competitor can copy it. Example for
`independent_colorist` (`terminologyProfile: beauty`):

| In your chair | In Perelai |
|---|---|
| A colour appointment | a **Visit** with services and add-ons |
| Bond builder, long-hair surcharge | **Add-ons** linked to the service |
| Colour and developer used | **Linked expenses**, deducted from that visit's margin |
| A prepaid block of 5 blow-dries | a **Package** that draws down as you use it |
| "She'll settle next time" | an **Order** with an outstanding balance |
| Money in the till today | a **Payment allocation** against a visit or an order |

Build one of these per niche from the template's own `services` / `addons` / `expenses` arrays. Never
invent a term the app does not use — cross-check against §4.2.

---

## 10. Customer research before writing (do not skip)

Copy written from the product's point of view will underperform. Before drafting any niche page, spend
30 minutes gathering **verbatim** language:

- Reddit: `r/Hairstylist`, `r/beauty`, `r/smallbusiness`, `r/freelance` — search "double booked",
  "no-show", "how do you track", "client wants to pay later"
- Facebook/Instagram niche groups; TikTok comments on "salon life" content
- Review sites for the incumbents the ICP actually uses (paper book, notes app, Square, Fresha, Vagaro,
  Acuity, GlossGenius) — mine the 2–3★ reviews, which is where the switching pain lives
- The founder's own outreach DMs — the highest-signal source available and already in hand

Record 10–15 verbatim phrases per niche in the page's front-matter. Headlines must use the ICP's words,
not the product's. This is what the `customer-research` skill is for; run it per niche, not once
globally.
