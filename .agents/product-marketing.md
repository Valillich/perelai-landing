# Product Marketing Context

**Document version:** v12
**Last updated:** 2026-09-21
**Scope:** POS2 corrective pass. The owner explicitly approved the six Russian hero strings on 2026-09-19: **RU SOURCE FROZEN**. General framing reflects the owner direction: independent professionals and small teams working by appointment, not beauty-only and not "any profession/CRM". New UK/EN headline/body adaptations follow this framing; other new copy remains candidate/review pending. This is not approval of every translation or evidence of a published release.

## Product Overview

**One-liner:** Perelai is a workspace for independent professionals and small teams to manage appointments, clients, payment records and prepaid service packages.

**Product category:** Appointment, client and payment-tracking software for independent professionals and small teams working by appointment. Financial overview is a supporting strength, not the entire category. Not accounting software, a marketplace or client payment processing.

**What it does:** Plan an appointment, carry out the visit, then record the payment or apply a prepaid package. Client history keeps the context; financial views help review revenue, costs and calculated profit. Team access is available under the STUDIO launch policy, subject to commercial/security release checks. Cash reconciliation is implemented (DR0–DR6/UI) and its landing preview is included in POS2 at the owner's request. Public availability still needs reconciliation with the DR7 report, which currently records NO-GO; do not repeat implementation or invent acceptance.

**Core story:** appointment → visit completed → payment recorded **or** package applied. Appointment/visit are scheduling and fulfilment of the same service event, not two newly invented entities. If a cash-drawer example is shown later, the drawer session opens **before** receiving cash.

**Message strategy:** Lead with a calm benefit—order in appointments, clarity about recorded payments—then explain the mechanism in one concrete sentence. Keep the audience in a short eyebrow and demonstrate the client/visit/payment/package connection below. The category remains appointment, client and payment tracking; the headline need not repeat that category verbatim. Do not claim the feature list is unique. No “finally”, “all in one”, “Apple/Stripe for beauty”, unsupported competitor comparisons or guaranteed results.

**Approved Russian hero — owner, 2026-09-19:**

- `hero.title`: «Порядок в записях.»
- `hero.accent`: «Ясность в оплатах.»
- `hero.body`: «Планируйте визиты, ведите историю клиентов и отмечайте оплаты.»
- `hero.signup`: «Попробовать 21 день»
- `hero.how`: «Посмотреть, как это работает»
- `hero.trialMicro`: «21 день STUDIO без карты. После пробного периода оформите подписку.»

Implement these six strings verbatim, with title/accent forming one H1. Do not add packages, team, income or another slogan to the body. Keep those capabilities in their product sections. “Отмечайте оплаты” means recording a payment, not processing it, automatic reconciliation or one-click operation. The two benefits are not a guarantee of error-free work or increased revenue.

New UK/EN H1/body adaptations must follow this approved RU source in POS2; no exact UK/EN version is frozen yet. Existing translated CTA/helper candidates and the audience eyebrow have separate review status. Full source set, historical alternatives, claim mapping and approval scope: [launch copy checklist](../docs/launch-positioning-checklist.md). The August finance-first hero, previous MSG freezes and September descriptive H1 drafts are historical; do not restore them from old tests or ask the owner to choose again.

**Product type / distribution:** Browser-first SaaS; installation is optional. Keep current device claims bounded by [device-claim-contract.md](../docs/device-claim-contract.md). POS0 does not reverify store listings, cross-device access, platform installation or notifications, and grants no broader device claim.

### Business model: approved policy ≠ released offer

Sources: owner decisions [2026-09-06](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260906.md), [2026-09-16](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260916.md), [trial conversion v1](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/paddle-trial-conversion-evidence.v1.md), [MVP definitions](/Users/valery/Sites/beauty-finance/.cursor/plans/terminology/mvp/01-launch-definitions.md).

| Fact | Current launch rule |
|---|---|
| Trial | One 21-day STUDIO trial per payer, no card required; begins at the first eligible completed workspace setup. Another workspace does not restart it. |
| Trial → paid, v1 | Early payment setup is unavailable. When the trial ends, the user explicitly purchases a subscription; there is no automatic trial-end charge without purchase. |
| SOLO | USD 19/month per workspace; one active service professional; no additional team access. |
| STUDIO | USD 29/month per workspace; up to five active service professionals and team access. |
| Counting | A working owner counts. A service professional may count without a login. An administrator without a service-professional profile uses no performer place, but their access still requires STUDIO. Not “unlimited users”. |
| After expiry | Without another valid access source, work is restricted. Expiry itself does not delete data; no indefinite retention or export promise. |
| Paid renewal | Monthly after explicit purchase, with exact terms owned by BILL/legal. Do not confuse this with the cardless trial. |
| STUDIO+ | Contact only; no public price, limit, purchase CTA or guaranteed availability. |
| Price display | Approved USD anchors; final currency and applicable taxes confirmed at checkout. No local FX/VAT calculation; demo currency is separate. |

Current code includes Billing. “No card because there is no billing” and “free beta until pricing is announced” are obsolete. [Commercial policy](../docs/commercial-policy.md) separates accepted business facts from publication gates; prices/trial do not require a second owner decision.

## Target Audience

**Primary:** Independent professionals who manage their own clients and appointments (e.g. massage therapists, tutors, beauty professionals).
**Secondary, in the same launch story:** Small teams with up to five active service professionals, including teams needing a non-performing administrator.
**Decision-maker:** Owner/operator; the SaaS payer may be a different person and is not automatically a workspace administrator.

This replaces the prior solo-colorist/US-only restriction for the general Home. RU/UK/EN are copy-review languages, not a decision about launch jurisdictions, ad targeting or willingness to pay. Colorist examples remain valid illustration datasets, not a product category restriction. Existing non-beauty niche URLs remain available, but developing their positioning is outside POS0–POS4.

**Primary use case:** Carry a client's appointment through the working day, retain their history, and know whether payment was recorded or a package was used.

**Jobs to be done** *(founder-led hypotheses, not customer quotations)*:

- Keep the day's appointments and client context easy to find.
- Record the outcome of a visit without confusing a new payment with a prepaid package.
- Give a team member the appropriate access without making the solo workflow feel oversized.
- Review period revenue, costs and calculated profit alongside the underlying records.

## Personas

| Persona | Job / concern | Value to demonstrate |
|---|---|---|
| Independent professional, buyer and user | Appointments, client history and recording payment during a working day | The connected visit/payment/package example, not a dashboard lecture |
| Small-studio owner, buyer | Bring in professionals or an administrator; understand plan capacity and role boundaries | STUDIO's 1-workspace/5-performer limit and specific access scope |
| Administrator, daily user | Scheduling and permitted client checkout | Operational actions without general financial reporting; not “no amounts visible” |
| Payer | Trial end, recurring cost and independent subscriptions | Explicit purchase after trial; transparent price per workspace |

## Problems & Pain Points

**Working hypothesis:** Client context, appointments and payment/package records are easier to lose track of when maintained separately. This is a scenario the product demonstrates, not a validated universal claim about beauty professionals.

**Emotional aim:** Confidence about the next appointment and the record left after it; permission to start solo and add help. Avoid shame (“you have chaos”), invented savings, guaranteed income growth and unverified “set up in an evening”.

**Research status:** Existing MSG0 proxy research was LOW confidence; no new interviews, customer quotes, five-second test or competitor study were conducted for POS0. Do not turn founder/advisor recommendations into VOC.

## Competitive Landscape

**Alternatives to consider:** Appointment tools, salon software, separate payment/expense trackers, paper calendars and notes. No comparative capability audit underpins this launch copy. Do not assert that competitors blur all revenue/cash states, lack privacy, or cannot connect records.

**Boundary:** Accounting/tax software and acquiring services solve jobs Perelai does not promise. The landing can explain its own scope without attacking those products.

## Differentiation: demonstrate, do not declare uniqueness

1. **A connected working example:** The client, visit, recorded payment and package usage have clear links and distinct meanings.
2. **A practical solo-to-studio path:** The working day stays central; STUDIO adds role-based access when help is needed, subject to release checks.
3. **Financial detail without making the homepage a finance manual:** Period metrics and category/client breakdowns remain useful secondary proof.
4. **Cash reconciliation, implemented and in POS2 scope:** A small expected/count/difference example, not an accounting, fiscal or card-terminal claim. Landing implementation is unblocked; public-release evidence is separate.

These are value themes, not claims that no other product offers them. Preserve the existing interactive DOM previews, tokens, accessibility and localization. Fix only inaccurate data/labels, necessary spacing/order and the bounded new fragments in the launch plan.

## Objections

| Question | Honest response / boundary |
|---|---|
| Is this for me if I work alone? | Yes, the core story starts with independent professionals. SOLO is for one active performer without extra team access; trial evaluates STUDIO. |
| Can an administrator help without seeing all reports? | Under STUDIO, scheduling and permitted client checkout without general financial reporting. Necessary checkout amounts and current OPEN drawer data may be visible; never “cannot see any financial data”. |
| Is this a way to take card payments? | Perelai records client payments. This is not a promise of card acquiring; paying for Perelai is a separate subscription flow. |
| Is a package a subscription? | No. A prepaid client package, recurring appointments and a Perelai subscription are three different things. |
| Do I need a card? What happens later? | Approved launch policy: no card for 21-day STUDIO; explicitly purchase SOLO/STUDIO after expiry. Publish only with actual trial and conversion readiness. |
| Will Revenue equal cash in the drawer or my bank? | No such promise. Package usage adds no new payment or revenue; cash counts and payment-account balances are separate from analytics. |
| Can I import clients? | vCard import is the narrow current claim. No migration time guarantee, full competitor migration or two-way Google Calendar claim. |
| Can I export my data? | Export code exists, but launch packaging/restricted access and retention promises remain BILL/legal decisions. Omit a marketing guarantee. |
| Can I work with a separate business in the same space? | Coworker is a separate-company mechanism. TC5 remains held in the landing contract; omit it from this launch copy. |
| Do I have to install it? | Browser-first use, optional installation; detailed platform statements follow the device contract. |

**Anti-persona:** Businesses needing statutory accounting, tax filing, payroll, clinical records, card acquiring, consumer lending or an enterprise/custom-role suite.

## Switching Dynamics

**Push:** Rechecking the appointment, client note and payment/package record in different places.
**Pull:** A concrete client journey and an honest trial with a visible next price.
**Habit:** Existing calendar, messages and personal notes; no need to ridicule them.
**Anxiety:** Setup effort, paying for an oversized tool, accidental charges, and access to financial reports.
Answer these through short setup steps, SOLO/STUDIO distinction, explicit trial-end purchase and the specific administrator boundary—not a long anxiety manifesto.

## CTA and commercial presentation

The Russian primary CTA, secondary CTA and trial helper above are owner-approved; publication still requires the actual trial/conversion gates. The English strings below remain adaptation candidates, not an inherited exact-copy approval.

| Surface | EN candidate after release gates |
|---|---|
| Primary | Start 21-day trial |
| Secondary | See how it works → existing #how |
| Trial helper | 21 days of STUDIO, no card required. Subscribe when your trial ends. |
| Price helper | After the trial: SOLO {soloPrice}/month or STUDIO {studioPrice}/month per workspace. |
| Verification helper | You'll get a verification email to finish setting up. |
| Header login | Log in → existing app login |

Use one primary action and the existing signup URL/attribution helper. No checkout/provider SDK on the landing, no invented niche attribution, no offer parameter until BILL7 hands it off.
Before release, “Create workspace” is only a possible truthful generic fallback **if that signup is verified**; it does not authorize a public trial launch. No free-forever or cancellation/refund guarantees.

## Customer Language and Glossary

Natural marketing prose may differ from an app control label; exact labels inside previews must come from the generated catalog at a clean app revision after relevant M1/M2 changes. Do not hand-type translated roles or silently adopt a proposed UK label as shipped UI.

| Term | Meaning / use |
|---|---|
| Appointment / visit | Schedule and fulfilment of a service event, not separate product entities |
| Service professional / active performer | Person providing services; plan-capacity unit independent of login |
| Team member with access | Workspace membership and role, independent of performer profile |
| Administrator | Reception scheduling and permitted checkout, without general Finance; narrow OPEN drawer scope when enabled |
| Business manager | SUPERVISOR semantics; not Administrator or a limited mentor. Exact UI label from app source |
| Prepaid package | Client's prepaid service units; RU «Пакет услуг», UK «Пакет послуг». «Абонемент» may explain the first RU/UK mention, not rename the entity. Creation and recorded sale are backed by existing template/sale sheets; no online store/acquiring claim. Not membership or Perelai subscription |
| Recurring appointments | Repetition in the calendar, not a recurring charge |
| Record a payment | Record received client money, not process a card |
| Revenue / Cost / Profit | Actual analytics metric names. Keep them; do not rename all finance labels “Money” |
| Income / Expense | Transaction types, not alternative names for Revenue / Cost |
| Account Balance | Payment-account balance, not customer debt |
| Outstanding / Overdue | Qualify as order/instalment amounts |
| Cash drawer / cash reconciliation | Expected vs counted physical cash; not Revenue, bank reconciliation, fiscal receipt or payroll shift |
| Perelai subscription | Payment for this software, separate from client payments/packages |
| Coworker | A linked separate business, not a person/role in this workspace; held from launch copy |

**Financial invariant:** ADR-0003 recognizes package-sale revenue once. Applying that package reduces eligible units and creates **zero additional revenue and zero new money** for the covered amount. PAID means settled, not necessarily cash received. The inherited August FC2 explanation/fixture must be corrected in POS1; it cannot override ADR-0003. Use “calculated profit” without a public equation until its specific contract is verified.

**Avoid:** Finally / all-in-one; “all features”; any-profession promises; automated accounting / no manual entry; per-service profit when only category data is proven; unlimited users; payroll/commissions/custom roles; absolute privacy; two-way Calendar; fiscal receipts/tax invoices; free forever, Founding price lock, invented scarcity, annual savings; PWA jargon, native/offline/store availability beyond verified facts; fake metrics/testimonials.

## Brand Voice

**Tone:** Calm, direct, helpful; professional without finance or enterprise jargon.
**Style:** A short action or observable benefit per block. Natural RU/UK and idiomatic EN, not literal translations of internal names.
**Personality:** Practical, precise, warm, restrained.
**Notes:** Keep notes as a supporting client-history line, not a separate category or feature section.

## Proof Points and Publication Boundaries

No new customer counts, testimonials or measured business outcomes are supplied. “Example data” remains mandatory on product demonstrations. No new screenshot programme or redesign is required.

| Theme | Proof / current boundary |
|---|---|
| Clients, visits, recorded payments, packages | G1/G2: app source + ADRs; release journey and corrected landing fixture still required |
| Financial overview | G5: actual metric scope; package arithmetic correction is a prerequisite |
| Team and Administrator | G3: ADR-0014 + existing access UI; true BILL admission + TEAM release evidence, not internal test mode |
| Trial and prices | G6/G7: approved owner policy; separate BILL7/public display and BILL/TEAM/legal gates |
| Cash reconciliation | G4 implementation READY: DR0–DR6/UI; include the preview in POS2. Public evidence unresolved: DR7 still says NO-GO; verify current acceptance/enablement before publication |
| Google Calendar | G8: read-only scope, not two-way; omit from launch story unless actual released flow is verified |
| Devices | Existing device contract; no broader platform promise from POS0 |
| Coworker | F25/TC5 HOLD unchanged; no visual, sr-only or FAQ workaround |

The [launch checklist](../docs/launch-positioning-checklist.md) records exact sources, revisions and statuses. A claim in source or a commercial decision is not production evidence.

## Goals and Scope

**Business goal:** Qualified trial starts and subsequent paid use by independent beauty professionals and small studios.
**Conversion path:** CTA → registration → verification/setup → eligible STUDIO trial → first appointment/visit → first recorded payment/package use → return → explicit subscription purchase.
**Current metrics:** No launch conversion baseline or willingness-to-pay study supplied. Do not claim the new wording has increased conversion.
**Launch scope:** Home, Pricing and necessary shared factual corrections across existing languages/routes. No new niche programme, A/B platform, analytics system, UI export v2 or full redesign. One owner-approved Russian hero; adapt it for the other locales. Retired editorial alternatives are history, not launch variants.
**Not promised:** AI, marketing broadcasts, clinical tools, payroll, public intake modes beyond released APPOINTMENT, full migration, media attachments to notes, unrestricted retention/export, STUDIO+ capacity or automatic subscription conversion.

## Changelog

*Newest first. One line per revision: what changed and why.*

- v12 (2026-09-21) — **POS2 owner general framing update:** widened target audience from beauty-only to independent professionals and small teams working by appointment (e.g. massage therapists, tutors, beauty professionals); updated category line, one-liner, personas, and site/doc descriptions accordingly; preserved owner RU hero freeze verbatim, commercial pricing/trial policies, colorist preview dataset as an example, and separate publication/release gates.
- v11 (2026-09-19) — **Owner-approved RU hero freeze:** replaced the descriptive feature-list draft with «Порядок в записях. Ясность в оплатах.», the exact action-led body, two CTAs and trial helper supplied by the owner; updated message strategy and translation status, retired launch alternatives and kept all commercial/claim/publication gates separate. Documentation only; v1–v10 history preserved.
- v10 (2026-09-19) — **POS0 owner-feedback follow-up:** clarified RU/UK hero as payment tracking, moved packages from the general hero body into a creation/sale/use feature story, and included the implemented Drawer preview in POS2; kept public-release evidence distinct because the current DR7 report still records NO-GO. New strings remain candidates; previous history preserved.
- v9 (2026-09-19) — **POS0 launch repositioning:** replaced finance-only/US-solo-only framing with daily appointment, client and payment/package work for independent beauty professionals and small studios; updated JTBD, personas, objections, CTA, glossary, evidence and goals; incorporated approved 21-day STUDIO/no-card and SOLO USD 19/STUDIO USD 29 policy with separate release gates, Administrator/performer boundaries and ADR-0003 correction; removed unsupported comparative/automation claims. Exact RU/UK/EN launch strings await owner review; public messages/previews unchanged.
- v8 (2026-08-03) — **FM2 English source set owner-approved with replacements.** The owner rejected Candidate A and the FM2 draft verbatim and supplied their own strings: H1 is now metric-led — *"Revenue, costs and profit — connected to the work behind them."* — which resolves the II.4 finance-semantic dissent against "See the money". Recorded the owner's **binding finance vocabulary** (Revenue/Cost/Profit are the metrics; Income/Expense are transaction types; Income is never a synonym for Revenue; Balance is never customer debt; Outstanding/Overdue stay order- and instalment-scoped). CTA resolved: **"Create workspace"**, commercially neutral — *free*, *No card*, *Founding Beta*, *trial*, pricing, price lock and scarcity are banned, and CF-01–CF-04 no longer gate the phase. Public profit **equation withheld** pending an FC9 amendment. Approval recorded in `docs/home-hero-copy-audit.md` §II.7.9. Still English source only — no translation, no implementation.
- v7 (2026-08-03) — **FM2 canonical finance-first rewrite.** Rewrote primary use case, JTBD, use cases, personas, problems, competitive landscape, differentiation, Four Forces and objections so the whole document leads with financial clarity; Booking/Calendar/Inbox demoted to supporting mechanisms in prose as well as in the category line (closes FM0 R2). Removed the "without manual entry" absolute (R13). Added a CTA/commercial-stage section at status **`HOLD`** — `docs/commercial-policy.md` has no owner on any row, so "free", "no card" and "Founding Beta" cannot be reconciled by an agent (R12). Normalized this changelog: merged the two conflicting v5 entries and restored newest-first order (R12). Marked customer language as proxy/founder input and recorded that the finance pivot has no first-party VOC. Device (F20–F26), team (F15/TC1–TC4), coworker (F25/TC5 `HOLD`) and Notes (F4/TC8) content preserved unchanged. Public copy, components and translations **not** touched — FM2 forbids it.
- v6 (2026-08-03) — **Owner-directed category change: finance-first.** Category moved from "booking + client + money software" to "financial tracking and analytics software for small service businesses"; Booking/Calendar/CRM demoted from category to the mechanism that collects financial context. New one-liner, tagline, hero (eyebrow + "See the money behind your business."), meta and closing shipped to all nine published locales. Gated by the new [`docs/finance-claim-contract.md`](../docs/finance-claim-contract.md) (FC1–FC10): three copy lines in the owner's draft were amended or rejected because analytics are category-granular (not per-service), export is `BLOCKED`, and the summary total is settled work rather than cash received. The MSG1 hero was superseded before publication. Claim statuses otherwise unchanged; TC5 still HOLD; F1 upgraded to full PASS after its integration suite ran (14 passed).
- v5 (2026-08-03) — Owner's interim revision between MSG1 and the v6 repositioning: corrected Platform distribution proof — iPhone Home Screen + standalone (F26) is `PASS` with the Open-as-Web-App condition; iPad, Android, named-browser install mechanics and push remain `BLOCKED`. Fixes a stale v4 sentence that still said all install/standalone claims were blocked. *(Two separate v5 lines described this same revision; merged by FM2.)*
- v4 (2026-08-03) — MSG1 retired the "finally / in one place" one-liner and hero for a mechanism-led message ("Know what still needs doing — and what was actually paid."); added the frozen homepage message block (`AWAITING OWNER APPROVAL`), rewrote the primary use case and the "how they describe us" list off the retired parity frame, marked that list as unverified paraphrase after MSG0 rated flagship proxy research LOW, and added finally / in-one-place / all-in-one to Words to avoid. No claim status changed: Devices, team, coworker (TC5 still HOLD), Notes, ICP, personas, objections, non-goals, capability inventory and CTA are untouched.
- v3 (2026-08-02) — TEAM1 added working-with-other-people as an *optional secondary* capability (team access vs coworker link), two access objections, the identity/access anxiety split, team & coworker terminology, and Notes/collaboration non-goals. Flagship solo ICP, category, hero, and CTA unchanged; coworker wording is held on TC5 and is not publishable.
- v2 (2026-08-01) — DVC1A added browser-first and optional-install positioning, device objections, claim-avoidance language, and evidence-bound platform proof; core category and GTM unchanged.
- v1 (2026-07-29) — Initial context transcribed from `messaging-and-claims.md` §1–§5 for LP0 baseline.
