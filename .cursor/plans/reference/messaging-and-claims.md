# Messaging, Claims and Copy Rails

**Purpose:** the single source of truth for *what the landing may say*. Every headline, feature card,
FAQ answer and meta description produced in Phases LP6–LP8 must be traceable to §2 of this file.
**Verified against:** `beauty-finance` source and `docs/releases/*` on 2026-07-25, plus workspace
`CONTEXT.md` §10 (financial invariants), §16 (messaging) and §17 (legal boundaries).

**Rule for every agent working on copy:** if a claim is not in §2, you may not write it. If you
believe it should be, add it to §2 with a source file path first, in a separate change.

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
| F4 | Clients + history | "Every client's visits, notes and payments in one place." | "CRM", "360° customer view", "lifetime value prediction" | `apps/api/src/clients/`, `notes/`, `ClientDetailsPage.tsx` |
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
| F15 | Staff & multi-company | "Add your team with roles, or run more than one business from one login." | "Enterprise permissions", "SSO" | `staff/`, `invites/`, `memberships/` |

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
| F20 | Mobile-first + desktop | "Built for your phone first. Comfortable on a laptop when you need it." | "Native app", "iOS app", "Android app" — it is a web app | `minimal_desktop_ready_layer_20260714` |
| F21 | Installable | "Works instantly in your browser. Install it on your phone when you're ready." | The literal word **"PWA"** (CONTEXT §17) | — |
| F22 | Light & dark | "Light and dark." | — | `dark_mode_integration_9058a729` |

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
| 6 | Set-up in an evening | Kills the migration anxiety | Templates, Google Calendar, contacts import |
| 7 | What Perelai is not | Disqualify + build trust | Not accounting, not a marketplace, not a medical record system |
| 8 | Niche router | Send visitors to their page | Links to every live niche page — this is also the internal-linking hub |
| 9 | FAQ | Objection handling | 6 questions, §8 below |
| 10 | Final CTA | Recap + risk reversal | Repeat primary CTA + the no-card line |

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
