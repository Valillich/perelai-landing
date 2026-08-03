# Product Marketing Context

**Document version:** v8
**Last updated:** 2026-08-03

## Product Overview
**One-liner:** Perelai is financial tracking and analytics software that connects the money of a service business to its clients, services and daily work.

**Short tagline:** Clear work. Clear money.

**Homepage message — OWNER-APPROVED 2026-08-03 (FM2).** Full approved set, claim mapping and approval record: [`docs/home-hero-copy-audit.md`](../docs/home-hero-copy-audit.md) §II.7. Claim gate: [`docs/finance-claim-contract.md`](../docs/finance-claim-contract.md). **Approved as English source only** — not yet implemented, not translated, not deployed. The strings currently in `messages/` are the superseded pre-approval draft and violate the repaired contract (§II.8 finding 1); FM4A/FM5 replace them.

| Surface | Approved English |
|---|---|
| Hero eyebrow | Simple finance software for independent service businesses |
| Hero H1 | **Revenue, costs and profit — connected to the work behind them.** (`title` + `accent`) |
| Hero body | Track revenue, costs and profit for any period. Break the result down by service category and client, while completed work, settled revenue and recorded payments stay separate. |
| Meta title | Perelai — Simple Finance Software for Service Businesses |
| Meta description | Track revenue, costs and profit for any period, with category and client breakdowns connected to the work behind them. |
| Closing title | Your financial result, connected to the work behind it. |

### Binding finance vocabulary (owner-set, 2026-08-03)

The application has an established finance vocabulary and the landing must preserve it.

| Term | Meaning | Rule |
|---|---|---|
| **Revenue / Cost / Profit** | Primary analytics metrics | Use these as the metric names |
| **Income / Expense** | Additional *transaction types* | **Never use Income as a synonym for Revenue** |
| **Payment** | A recorded receipt / allocation | — |
| **Account Balance** | Balance of a **payment account** | **Never use Balance as a synonym for customer debt** |
| **Outstanding / Overdue** | Scoped to **orders and instalments** | Never unscoped |

Never attach cash / money-received language to summary **Revenue**. Where debt is meant, always qualify
it — *"open-order balance"*, never a bare *"balance"* (§II.8 finding 3).

**Profit:** use **"calculated profit"** with **no equation**. Do not publish "revenue minus expenses"
until the exact FC9 formula and Cost/Expense terminology are verified (owner decision; FC9 amendment is
pending in FM1).

**Two retired positionings**, kept only as historical audit record — do not reintroduce either:
1. *“Your clients, bookings and cash flow — finally in one place.”* — retired v4. “Finally / in one place” remains a named ban (`messaging-and-claims.md` §4.1).
2. *“Know what still needs doing — and what was actually paid.”* — frozen at v4/v5 under MSG1, **superseded before publication** by the v6 category change. Its audit survives in `docs/home-hero-copy-audit.md`; the completed-vs-paid principle it carried survives as FC2 and is still in the hero body.

**What it does:** Financial tracking and analytics for small service businesses. Perelai records income, expenses, payments and outstanding balances, and connects every record to the client, service, visit, order, package or instalment behind it. Completed work is kept separate from money received. Booking, Calendar and clients are **not the category** — they are what keeps each financial record connected to the work behind it. *(R13: never say "without manual entry", "automatic bookkeeping" or any automation absolute — expenses, corrections and manually added work all require the owner to enter them.)* Not accounting, not bookkeeping, not a marketplace, not payment processing.

**Product category:** Financial tracking and analytics software for small service businesses. Plain-language form: *simple finance software for independent service businesses.*

**Category demotion note (2026-08-03).** Booking, Calendar and CRM moved from *category* to *mechanism*. The chain is: `booking / order → completed work → payment or debt → financial analytics`. Booking is a source of financial data and a reason the numbers need no manual entry — never the reason to buy. Do not lead any page, ad or meta description with booking.

**Product type:** SaaS, delivered browser-first as a web application. Installation is optional and depends on the browser and platform; it is not required to use Perelai. There is no current App Store or Google Play listing. Specific device-install, standalone-window, and notification claims remain governed by `docs/device-claim-contract.md`.

**Business model:** Founding beta — no billing system, no Stripe, no subscriptions or trials. Registration ends in email verification; no card collected today.

## Target Audience
**Target companies:** Independent colorists and premium solo beauty professionals in the United States. `APPOINTMENT` mode. Everything else is Wave 2+.

**Decision-makers:** Solo owner-operators (the professional who books, serves, and collects payment).

**The ICP did not change on 2026-08-02.** Perelai now documents two ways of working with other people
(team access inside one workspace; a link between two separate businesses that share space). Both are
**optional progressions the flagship solo buyer opts into later** — not a second audience, not a
repositioning toward salons, and never the frame of a headline. The buyer is still the solo
professional; the collaboration story exists to stop them disqualifying themselves in either
direction ("this is too big for me" / "I might hire someone next year, so I'd have to move again").

**Primary use case:** Know where the business stands financially for any period — what work was completed, what it cost, what has been paid, and what is still owed on open orders — with every number traceable to the client, service category and visit behind it.

**Jobs to be done:** *(rewritten finance-first, FM2)*
- "Tell me what my result actually is this month, without rebuilding it from memory."
- "Show me which service categories and which clients my revenue comes from."
- "Show me what is still owed on open orders and instalments, and what is overdue."

**Use cases:**
- Period financial summary: revenue, costs and calculated profit for a day, week, month, quarter or year (FC1, FC9)
- Category and client breakdowns — revenue by service category, costs by category, client revenue history (FC4, FC5)
- Period-over-period comparison of the result (FC6)
- Open-order and overdue-instalment debt review (FC3)
- Recording payments against the work they paid for (FC7)
- Operational capture that keeps those records connected: booking link, calendar, Inbox, clients, packages, instalments *(supporting mechanism, not the category)*

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| User (solo pro) | Knowing the real financial result without spreadsheet work; which clients and categories carry it | The result is reconstructed from memory, a notes app and a bank feed at month end | A period result you can open, with every number traceable to the work behind it |
| Champion | Same as user (solo operator is buyer and user) | Migration anxiety; fear the tool is built for 12-chair salons | Templates, imports, solo framing — set up in an evening |
| Decision Maker | Same | "I'll set it up and abandon it" | Records are created by the day's normal work, not by a separate month-end finance chore |
| Financial Buyer | Numbers that mean exactly one thing | Tools blur completed work, settled revenue and cash received into a single figure | Completed, settled, recorded cash and open-order debt stay separate states |
| Technical Influencer | — | — | — |

## Problems & Pain Points
**Core problem:** Independent service businesses cannot see their real financial position without rebuilding it by hand. The work happened in a calendar, the money landed in several places, the costs sit in receipts, and nothing connects a number back to the visit, client or service category that produced it.

**Why alternatives fall short:**
- Spreadsheets and notes apps do not connect a figure to the visit, client or category behind it, so the number cannot be checked
- Booking tools show a revenue chart that blurs completed work, settled revenue and cash actually received into one figure
- Generic expense trackers record money without the work that produced it, so category and client breakdowns are impossible
- Accounting software solves a different problem — filing and compliance — and expects a chart of accounts, debits and credits
- Marketplaces take a cut and rent the client relationship

**What it costs them:** Decisions made on a number the owner does not trust — pricing, which services to keep, which clients are worth the chair time — plus the month-end reconstruction itself.

**Emotional tension:** "I don't actually know what this month made." "The app says one thing and my bank says another." "Migrating my clients will take a weekend." "It'll be built for salons with 12 chairs, not me." "I'll set it up and then abandon it."

## Competitive Landscape
**Direct:** Small-business finance and expense trackers (spreadsheets, Wave-style trackers, generic expense apps) — fall short because they record money without the work behind it: no visit, client, service category or open-order link, so no breakdown and no state separation.

**Secondary:** Booking and practice tools with a revenue chart bolted on (Fresha, Vagaro, Acuity, GlossGenius, Square) — fall short because finance is a summary tab, and completed work, settled revenue and cash received are collapsed into one number.

**Indirect:** Accounting and tax software, bookkeepers — a different job (compliance and filing) with a different vocabulary. Perelai is operational finance, not accounting; it does not file, reconcile, or advise.

**Habit (the real competitor):** the notes app, the paper book and a mental estimate — free, familiar and "good enough" until a pricing or drop-a-service decision has to be made.

## Differentiation
**Key differentiators:** *(finance-first order, FM2)*
1. **Every number is traceable to the work behind it.** Payments are recorded against the visit, order or instalment they paid for; totals break down by client and service category. A generic tracker records an amount; Perelai records what it was for. (FC4, FC5, FC7)
2. **Completed, settled and recorded cash stay separate states.** A completed visit is included in summary revenue only when it is settled — and settlement can be a package redemption, which moves no cash. Competitors collapse these; Perelai does not. (FC2, FC7)
3. **Financial records are a by-product of the day's normal work.** Finishing a visit, recording a payment, adding a cost and redeeming a package are the operational actions that build the period summary — there is no separate month-end finance exercise. *(Not an automation claim: expenses, corrections and manual work still require the owner to enter them.)*
4. **Analytics without accounting vocabulary.** Category, client and period breakdowns with no chart of accounts, no debits and credits, no reconciliation. (FC1, FC4, FC5, FC6, FC9)

**Supporting mechanisms, not the category:** the booking link, calendar, operational Inbox, client records, packages and instalments exist because they are what keeps the financial record connected to real work. Never lead with them.

**Why customers choose us:** a period result they can open and check, where each figure traces back to a visit, a client and a category — without a spreadsheet and without learning accounting.

**Platform positioning:** Browser-first access is a compatibility fact, not a product differentiator or a comparison with native applications. Keep it subordinate to the financial proposition; only state device-specific facts that are `PASS` in `docs/device-claim-contract.md`.

## Objections
| Objection | Response |
|-----------|----------|
| Do I need a card to start? | **Do not answer on the page.** Every row in `docs/commercial-policy.md` (CF-01…CF-04) is `PENDING` with no owner and no approval date, so no card, price, commission or Founding Beta claim may be published. The approved copy sidesteps this by making no commercial claim at all. |
| Is this accounting software? | No. Perelai is operational finance software: it tracks completed work, expenses, payments and open-order debt for a period, and breaks the result down by client and service category. It does not file taxes, reconcile bank accounts, produce statutory reports, or give financial advice. |
| Will the number match my bank? | Not necessarily, and Perelai says so. Summary revenue counts completed work that is **settled** — and a visit settled by a prepaid package moves no cash. Money actually received is recorded separately as payments against the work it paid for. |
| Can I get my data out? | **Do not answer with a promise.** Export is `BLOCKED` (FC8): no export exists in code, and `docs/commercial-policy.md` lists export as not approved. |
| Migrating will take a weekend | vCard import, Google Calendar sync, niche templates with pre-filled services |
| Built for big salons, not me | Solo professional framing; templates for independent trades. Team capability does **not** mean salon-first: the collaboration section is placed late, opens with "Work solo. Add people when you need them.", and adds no CTA. Never answer this objection with "Built for teams" or "Manage your salon team". |
| If I add someone, will they see everything? | Answer with the two concrete roles, not with vague permission language: team members are invited with Staff or Supervisor access, and each gets the access their role allows. Do not say "granular permissions", "custom roles", or "complete privacy". |
| Someone else rents the room / the chair next to me — do we have to share a system? | No. A coworker is a **separate business**, not a team member: no shared account, no shared client list, no workspace access. Only company identity and occupied times cross that boundary. Publication of this answer is gated on TC5 in `docs/team-collaboration-claim-contract.md` — currently `HOLD`. |
| I'll set it up and abandon it | The financial record is built by the day's normal work — finishing a visit, recording a payment, adding a cost — not by a separate month-end session. Do not overstate this as automation: expenses and corrections still require entry. |
| Can I use it on my phone, iPad, or desktop? | Perelai works in a browser; installation is optional and varies by browser and platform. Do not upgrade this response to a device-specific installation, standalone-window, or iPhone-alert promise until the matching claim-contract row is `PASS`. |
| Is there an App Store or Google Play listing? | No current listing. State this calmly as a distribution fact; do not frame the absence as a product weakness or an unsupported speed/reliability benefit. |

**Anti-persona:** Businesses that need real accounting, tax filing, payroll, clinical records, or consumer lending. Say so plainly rather than trying to convert them.

## Switching Dynamics
*(Four Forces rewritten finance-first, FM2. The spine of every niche page.)*

**Push:** The month-end reconstruction. Money arrived in several places, costs sit in receipts, and no figure can be traced back to the visit that produced it — so the owner does not trust their own number and cannot answer "which services and clients actually carry this business?"

**Pull:** A period result you can open — completed work, expenses, payments, what is still owed on open orders — broken down by client and service category, with each figure traceable to the work behind it.

**Habit:** The notes app, the paper book and a mental estimate. Free, familiar, and "good enough" right up until a pricing or drop-a-service decision.

**Anxiety:** "Migrating my clients will take a weekend." "It'll be built for salons with 12 chairs, not me." "I'll set it up and then abandon it." Adding people has its own two-sided anxiety, and the second half is the one usually missed: *identity* ("is this too big for someone like me?") and *access* ("if I let someone in, what do they see?"). Answer identity by keeping the solo frame first and the collaboration content late; answer access with the two named roles and the exact company boundary, never with reassurance adjectives.

## CTA and commercial stage — **RESOLVED by owner 2026-08-03**

The owner resolved this by making the approved copy **commercially neutral**: it asserts no price, no
card status, no programme and no scarcity, so the pending commercial rows no longer gate it.

| Position | Approved copy |
|---|---|
| Primary CTA | **Create workspace** |
| Secondary CTA | **See how it works** |
| Micro-copy | **You'll get a verification email to finish setting up.** *(code-backed: `AuthRegisterResult.verificationRequired`)* |

**Banned from public copy:** *free*, *No card*, *Founding Beta*, *trial*, *future pricing*, *price lock*,
*seat scarcity*. This supersedes the older "Create your free workspace" / "No card." pairing in the rails
§6 table, which is updated to match.

CF-01–CF-04 in `docs/commercial-policy.md` may remain `PENDING`. They gate **future commercial copy
only** — a named owner must approve them there before any price, card, commission or beta claim is
published.

## Customer Language
**How they describe the problem:** *(Evidence class: proxy/founder input, **not** first-party VOC — see provenance note below. No finance-specific VOC has been gathered; the finance-first pivot has **zero** customer-language evidence behind it, which is a real gap FM2 records rather than papers over.)*
- "What did I actually make this month?" — *founder/advisor paraphrase, unverified*
- "The app says one number and my bank says another." — *founder/advisor paraphrase, unverified*
- Client wants to pay later / paid with a package / paid half now

**How they describe us:** *(Provenance, recorded 2026-08-03: these are internal paraphrases, not verified Voice of Customer. MSG0 rated flagship proxy research **LOW** confidence — all source URLs failed live recheck on 2026-08-02 and no pain theme cleared the ≥5-independent-signal bar. Do not quote these as customer language.)*
- A list of what still needs doing, and a record of what was actually paid
- A list that stays until you deal with it
- Your booking link, no commission
- Proxy device-language only (not yet validated for Perelai): app, phone, website, online booking, Android, desktop

**Words to use:** Visit, Order, Package (prepaid credits), Workspace access, Payment confirmation, Instalment, Public service request, Rental reservation, Operational Inbox item; browser-first; optional installation; team member (marketing prose); Staff / Supervisor (product role labels, taken from the generated app string catalog); coworker (**a linked separate business only**); occupied times

**Words to use (finance, added v6):** financial tracking; finance software; business finance workspace; income and expense tracking; payment tracking; cash-flow visibility; financial analytics; outstanding balances; money received; simple business finances; operational financial overview; profit (the app's own label — FC9).

**Use with care (v6):** *financial management* (implies budgets and forecasting Perelai does not have); *bookkeeping* (SEO copy only, never the category — it implies tax categories, reconciliation, formal reports and accountant access); *cash flow* (only where the number genuinely reflects money moving, not the settled-work total — FC2/FC7).

**Words to avoid:** accounting software; automated accounting; tax-ready books; financial advisor; profit optimization; banking; invoicing platform; **export / download your data** (FC8 `BLOCKED`, and not approved in `docs/commercial-policy.md`); **revenue by service** (analytics are category-granular — FC4); **"what came in" / "money received" attached to the summary total** (FC2/FC7 boundary); finally / at last (novelty theatre — nothing novel is being named); in one place / all in one / everything you need (category parity a calendar or salon suite can claim unchanged); personal CFO; CRM; accounting / bookkeeping / tax / P&L; marketplace / get discovered; AI triage / smart inbox; payment processing / get paid instantly; membership / subscription (for packages); receipt (fiscal sense); invoice / bill; financing / BNPL / credit / lending; PWA; native app; download; offline / offline sync; App Store / Google Play availability; one-click install everywhere; fake testimonials / usage counts; built for teams / manage your salon team / built for salons / requires a team; granular permissions / custom roles / enterprise workforce management / SSO; payroll / timesheets / commissions / HR; shared calendar (coworker sense) / shared client list / shared account; nothing is shared / complete privacy / private by default / anonymous; no double-booking ever / real-time locking; streamline collaboration / work better together / one shared workspace; streamline, optimize, innovative, seamless, leverage, empower, revolutionize, game-changing, effortlessly; exclamation points

**Glossary:**
| Term | Meaning |
|------|---------|
| Visit | Not "transaction" or "appointment record" |
| Order | Not "invoice" or "bill" |
| Package | Prepaid credits — not membership or subscription |
| Payment confirmation | Not fiscal receipt or tax invoice |
| Instalment | Not "payment plan" in UI labels |
| Operational Inbox item | Not "notification" |
| Team member | Someone with workspace access **inside one company**, invited as Staff or Supervisor. Marketing prose word; not "employee", "seat", or "user" |
| Coworker | A **separate business** linked to yours because you share space or equipment. Not a role, not a seat, not a colleague inside your workspace, and never a person |
| Occupied times | The only schedule information that crosses a coworker boundary — company name, colour, start, end. Not "their calendar", not "a shared calendar" |

## Brand Voice
**Tone:** Direct, honest, founder-led — credible for pre-commercial beta without fake social proof.

**Style:** Concrete over adjectives; specificity over hype; disqualify bad fits plainly.

**Personality:** Honest, practical, operator-focused, calm, precise

## Proof Points
**Metrics:** None publishable pre-commercial beta — no fabricated statistics.

**Customers:** None — no testimonials, logos, or usage counts.

**Testimonials:** Banned until real customers exist.

**Value themes:**
| Theme | Proof |
|-------|-------|
| Product transparency | At least one real screenshot per page family (homepage hero), captioned "Example data"; other visuals are rendered mocks from template catalog and app UI strings |
| Specificity | Concrete template facts (e.g. services, add-ons, linked costs for colorists) |
| Founder-led credibility | Short signed "why we built this" with real name and reply path |
| Risk reversal | Only product-backed facts — e.g. no card because no billing; no data-export promise; no scarcity without `docs/commercial-policy.md` approval |
| Honesty as differentiation | "What Perelai is not" — not accounting, not a marketplace, not a medical record system |
| Platform distribution | `docs/device-claim-contract.md` is the claim gate. Current `PASS`: browser delivery / use without installing (F21); no store listing (F23); internet required (F24); iPhone Home Screen setup and standalone window (F26), paired with the Open-as-Web-App condition. Still `BLOCKED`: iPad and Android install/standalone, named-browser install mechanics, and push/iPhone alerts. Do not generalise the iPhone PASS. |

## Goals
**Business goal:** Founding beta signups from independent US beauty professionals (`APPOINTMENT` mode).

**Conversion action:** Create workspace → app registration with email verification. *(Label is commercially neutral by owner decision 2026-08-03; do not reintroduce "free".)*

**Current metrics:** Pre-commercial — no public usage counts.

## Shippable capabilities (§2 inventory)
Use **Say** column verbatim or as base; never upgrade the claim.

**Core loop:** Operational Inbox; mode-aware Calendar; public booking page (no commission); clients + history; payment recording & allocation; finance overview; orders + instalments; packages; recurring visits.

**Setup and integrations:** Niche-aware onboarding (32 business types); Google Calendar sync; Google sign-in; vCard import; market-aware defaults; staff & multi-company.

**Working with other people (optional, secondary — added 2026-08-02).** Two mechanisms, never merged:

| Mechanism | What may be said | Claim gate on 2026-08-02 |
|---|---|---|
| Team access inside one workspace | "Invite team members with Staff or Supervisor access." · "Keep schedules, time off and assigned services together." · "Give each person the access their role allows." | TC1–TC4 `PASS` |
| Client context that follows the client | "Pinned client notes and visit notes stay with the client history." Once, as supporting proof inside the workspace side. | TC8 `PASS` |
| Coworker link between two separate businesses | "Link a separate business that shares your space." · "You each see the other company's occupied times — not client, service, staff, money or note details." · Occupied times are checked when a visit is saved and excluded from public booking availability. | TC5 **`HOLD`** — nothing in this row may ship, in any language or visual, until a new dated verification entry clears it |

The boundary is the message. Accepting a coworker invite creates **no** workspace access in the other
company and shares **no** client list. Never claim more privacy than that: company name, colour and
occupied intervals genuinely do cross. `docs/team-collaboration-claim-contract.md` is the gate;
`.cursor/plans/reference/messaging-and-claims.md` F15/F25/F4 carry the allowed wording.

**Communication:** Reminders & notifications (email, in-app, push — not SMS/WhatsApp/Telegram); client preferences; payment confirmations.

**Platform:** 7 languages in app; mobile-first + desktop web; installable in browser; light & dark.

## Not shippable (do not imply availability)
AI/NLP, smart insights, marketing broadcasts, cohorts, RFM, churn prediction; file attachments on notes; SaaS billing/subscriptions/trials; public REQUEST/ORDER/RENTAL intake (disabled by default); curated market price suggestions; SMS/WhatsApp/Telegram/Slack/Discord.

**Notes non-goals (added 2026-08-02).** Notes are real and stay under *Clients + history*. They are
not a product category and get no section, page, or nav item of their own. Do not imply attachments or
media, tags, mentions, note search, rich text, AI summarization, a global or company-wide notes feed,
or notes visible to a linked coworker company. Legacy client descriptions and transaction comments are
compatibility fields, not a feature.

**Collaboration non-goals (added 2026-08-02).** No payroll, timesheets, commissions, clock-in, or HR
records. No roles beyond Owner / Supervisor / Staff, and no user-defined roles. No cross-company
sharing of clients, services, staff, money, payment state, notes, titles, or transaction identifiers.
No enterprise permission platform, no SSO. The invite mechanics that exist in the app — expiry,
creator succession, caps, locking, database invariants, error codes — are implementation details and
never marketing content.

## Changelog
*Newest first. One line per revision: what changed and why.*
- v8 (2026-08-03) — **FM2 English source set owner-approved with replacements.** The owner rejected Candidate A and the FM2 draft verbatim and supplied their own strings: H1 is now metric-led — *"Revenue, costs and profit — connected to the work behind them."* — which resolves the II.4 finance-semantic dissent against "See the money". Recorded the owner's **binding finance vocabulary** (Revenue/Cost/Profit are the metrics; Income/Expense are transaction types; Income is never a synonym for Revenue; Balance is never customer debt; Outstanding/Overdue stay order- and instalment-scoped). CTA resolved: **"Create workspace"**, commercially neutral — *free*, *No card*, *Founding Beta*, *trial*, pricing, price lock and scarcity are banned, and CF-01–CF-04 no longer gate the phase. Public profit **equation withheld** pending an FC9 amendment. Approval recorded in `docs/home-hero-copy-audit.md` §II.7.9. Still English source only — no translation, no implementation.
- v7 (2026-08-03) — **FM2 canonical finance-first rewrite.** Rewrote primary use case, JTBD, use cases, personas, problems, competitive landscape, differentiation, Four Forces and objections so the whole document leads with financial clarity; Booking/Calendar/Inbox demoted to supporting mechanisms in prose as well as in the category line (closes FM0 R2). Removed the "without manual entry" absolute (R13). Added a CTA/commercial-stage section at status **`HOLD`** — `docs/commercial-policy.md` has no owner on any row, so "free", "no card" and "Founding Beta" cannot be reconciled by an agent (R12). Normalized this changelog: merged the two conflicting v5 entries and restored newest-first order (R12). Marked customer language as proxy/founder input and recorded that the finance pivot has no first-party VOC. Device (F20–F26), team (F15/TC1–TC4), coworker (F25/TC5 `HOLD`) and Notes (F4/TC8) content preserved unchanged. Public copy, components and translations **not** touched — FM2 forbids it.
- v6 (2026-08-03) — **Owner-directed category change: finance-first.** Category moved from "booking + client + money software" to "financial tracking and analytics software for small service businesses"; Booking/Calendar/CRM demoted from category to the mechanism that collects financial context. New one-liner, tagline, hero (eyebrow + "See the money behind your business."), meta and closing shipped to all nine published locales. Gated by the new [`docs/finance-claim-contract.md`](../docs/finance-claim-contract.md) (FC1–FC10): three copy lines in the owner's draft were amended or rejected because analytics are category-granular (not per-service), export is `BLOCKED`, and the summary total is settled work rather than cash received. The MSG1 hero was superseded before publication. Claim statuses otherwise unchanged; TC5 still HOLD; F1 upgraded to full PASS after its integration suite ran (14 passed).
- v5 (2026-08-03) — Owner's interim revision between MSG1 and the v6 repositioning: corrected Platform distribution proof — iPhone Home Screen + standalone (F26) is `PASS` with the Open-as-Web-App condition; iPad, Android, named-browser install mechanics and push remain `BLOCKED`. Fixes a stale v4 sentence that still said all install/standalone claims were blocked. *(Two separate v5 lines described this same revision; merged by FM2.)*
- v4 (2026-08-03) — MSG1 retired the "finally / in one place" one-liner and hero for a mechanism-led message ("Know what still needs doing — and what was actually paid."); added the frozen homepage message block (`AWAITING OWNER APPROVAL`), rewrote the primary use case and the "how they describe us" list off the retired parity frame, marked that list as unverified paraphrase after MSG0 rated flagship proxy research LOW, and added finally / in-one-place / all-in-one to Words to avoid. No claim status changed: Devices, team, coworker (TC5 still HOLD), Notes, ICP, personas, objections, non-goals, capability inventory and CTA are untouched.
- v3 (2026-08-02) — TEAM1 added working-with-other-people as an *optional secondary* capability (team access vs coworker link), two access objections, the identity/access anxiety split, team & coworker terminology, and Notes/collaboration non-goals. Flagship solo ICP, category, hero, and CTA unchanged; coworker wording is held on TC5 and is not publishable.
- v2 (2026-08-01) — DVC1A added browser-first and optional-install positioning, device objections, claim-avoidance language, and evidence-bound platform proof; core category and GTM unchanged.
- v1 (2026-07-29) — Initial context transcribed from `messaging-and-claims.md` §1–§5 for LP0 baseline.
