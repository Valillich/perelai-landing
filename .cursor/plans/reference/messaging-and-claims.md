# Messaging, Claims and Copy Rails

**Purpose:** current source of truth for landing claims, together with the applicable evidence contracts.
**Current launch authority:** owner brief, [positioning plan](../positioning/README.md), [MVP definitions](/Users/valery/Sites/beauty-finance/.cursor/plans/terminology/mvp/01-launch-definitions.md), [commercial policy](../../../docs/commercial-policy.md).
**Updated:** 2026-09-19 (POS0 + owner RU hero freeze), documentation only. Six Russian hero strings are OWNER APPROVED in the [launch checklist](../../../docs/launch-positioning-checklist.md) §2. New UK/EN H1/body adaptations and other new copy retain their separate pending status.

A public claim must appear in §2 **and** satisfy its current evidence/publication gate. “Found in source”, approved business policy, editor-reviewed copy and released availability are distinct statuses.

**Supersession:** September launch direction replaces August finance-first/category, solo-US-only, commercial bans and FM ordering rules. The ledger IDs, device boundaries, coworker HOLD, notes restraint and financial honesty survive. August approvals belong to their exact old strings; they do not approve POS0 drafts. Historical audits/plans remain available but are not current execution instructions.

---

## 1. Positioning

**Category:** Appointment, client and payment-tracking software for independent beauty professionals and small studios. Financial overview is a strong supporting capability, not the entire reason to buy.

**Core story:** appointment → visit completed → payment recorded **or** prepaid package applied. Show the links through one client/work example; do not sell feature-count uniqueness. Appointment and visit describe scheduling and fulfilment of the same event, not two entities.

**Primary RU hero — OWNER APPROVED, 2026-09-19:** «Порядок в записях.» + «Ясность в оплатах.» in one H1. Body: «Планируйте визиты, ведите историю клиентов и отмечайте оплаты.» Primary CTA: «Попробовать 21 день». Secondary: «Посмотреть, как это работает». Trial helper: «21 день STUDIO без карты. После пробного периода оформите подписку.» These six strings are frozen verbatim; the owner's approval does not cover all other copy or publication readiness.

**Message rule:** benefit-led H1, immediately grounded by the three actions in body. G1/G2 support the product scope, not a guarantee of error-free records, automatic collection or increased income. Do not add team, packages or another promise to hero body. Explain package creation, recorded sale and remaining units below; optional «абонемент» at the first RU/UK explanation is not a new entity. The descriptive category remains valid for metadata/footer, not as an alternative H1.

**Translation status:** new UK/EN H1/body must be adapted from the approved RU in POS2; their old descriptive drafts are retired. Existing CTA/helper translation candidates and remaining new copy are not automatically approved. Full source and scoped status: [launch checklist](../../../docs/launch-positioning-checklist.md). Do not reopen RU selection or create experiment variants.

**Audience:** Independent beauty professionals and small beauty studios, including a team of up to five active performers under STUDIO. Solo work leads; team access is a supported progression, not an enterprise pitch. Review languages do not choose launch markets. Do not promise adaptation to every profession or rewrite all niche pages.

**Value hierarchy:**

1. Manage the working day: appointments and client context.
2. Record a payment or use an eligible package; show the remaining units without another money receipt.
3. Give team access when needed; explain Administrator scope precisely.
4. Review revenue, costs and calculated profit by the supported period/category/client views.
5. Include the implemented cash-reconciliation preview in POS2. G4 implementation is READY; public acceptance/enablement is checked separately before publishing.

**JTBD / Four Forces** *(editorial hypotheses, not VOC)*: keep appointment/context/payment records connected; reduce rechecking; preserve a familiar solo start; answer setup effort, access scope and later price. No new interview or competitor evidence exists in POS0. Do not claim all booking tools blur finance or that users necessarily abandon spreadsheets.

### Financial vocabulary and invariant

| Term | Meaning / rule |
|---|---|
| Revenue / Cost / Profit | Actual analytics metrics; preserve names and verified report scope |
| Income / Expense | Transaction types; never substitute Income for Revenue |
| Payment | Recorded receipt/allocation, not card acquiring |
| Account Balance | Payment-account balance, not customer debt |
| Outstanding / Overdue | Always qualify as order/instalment amounts |
| Cash expected / counted / difference | Physical cash reconciliation, not Revenue/Profit or overall account balance |

**ADR-0003 governs packages:** sale revenue is recognized once; redemption reduces units and sets the covered line amount to zero, creating no additional revenue or cash. PAID means settled, not proof of fresh money. The inherited FC2 wording that includes a package's face value in Revenue and the current landing fixture are stale; POS1 repairs them. Do not use their historical PASS to override this invariant. Use “calculated profit” without a public equation until its specific calculation contract is checked.

**Never:** automatic bookkeeping, no manual entry, every booking becomes revenue, guaranteed bank matching, unsupported per-service profit, statutory reporting or acquiring. Expenses/corrections still need entry.

**Anti-persona:** accounting/tax/payroll/clinical/lending/enterprise-permission needs. A short limitation is enough; no fear-based lecture.

---

## 2. Claim inventory and publication gates

F1–F26 preserve the earlier capability inventory, with September corrections below. They are not a blanket current-release attestation. Use the **Say** column as a ceiling, then the applicable G/TC/device/commercial gate. G1–G8 in §2.5 govern the new launch set.

### 2.1 Core loop

| # | Capability | Say | Never say | Source |
|---|---|---|---|---|
| F1 | Operational Inbox | "One list of what still needs your decision — it stays there until you resolve it, not until you read it." | "AI triage", "smart inbox", "automatically handles" | `apps/api/src/inbox/`, `components/inbox/`, ADR-0009 |
| F2 | Mode-aware Calendar | "Plan appointments and keep track of visits." | Do not promise REQUEST/ORDER/RENTAL **public intake** — see §4 | `CalendarPage.tsx`, `calendar-projection/`, ADR-0008 |
| F3 | Public booking page | "Share your booking link. Clients choose a service and time on your page." | "Marketplace", "get discovered", "new clients from Perelai" | `apps/api/src/public-booking/`, `PublicBookingPage.tsx` |
| F4 | Clients + history (incl. notes) | "Every client's visits, notes and payments in one place." Supporting line, when client context needs proof: "Pinned client notes and visit notes stay with the client history." | "CRM", "360° customer view", "lifetime value prediction". For the notes half: attachments, files, tags, mentions, note search, rich text, AI summaries, a global/company-wide notes feed, or notes visible to a linked coworker company | `apps/api/src/clients/`, `notes/`, `ClientDetailsPage.tsx`, `PinnedClientNoteCard.tsx`; supporting line gated by TC8 in [`docs/team-collaboration-claim-contract.md`](../../../docs/team-collaboration-claim-contract.md) (`PASS` 2026-08-02) |
| F5 | Payment recording & allocation | "Record what was actually received and see exactly what it paid for." | "Payment processing", "we handle payments", "get paid instantly" — Perelai **records**, it does not process | `payment-accounts/`, ADR-0002 |
| F6 | Finance overview | "Review revenue, costs and calculated profit for a selected period." Qualify any separate debt figure as open-order/instalment debt; G5/ADR-0003 apply. | "Accounting", "bookkeeping", "tax", "P&L", "financial advice" | `apps/api/src/finance/`, `FinancePage.tsx` |
| F7 | Orders + instalments | "Agree a payment schedule and track what's still owed." | "Financing", "BNPL", "credit", "lending", "invoice", "bill" | `apps/api/src/orders/`, ADR-0006 |
| F8 | Packages (prepaid credits) | "Create prepaid service packages and record their sale to clients. Track usage and what remains in each package." Redemption adds no new payment or revenue; G2 applies. | Membership/subscription as the product entity, online acquiring/storefront, guaranteed sales uplift | `MembershipTemplateEditorSheet.tsx` → `createPackageTemplate`; `SellMembershipSheet.tsx` → `sellClientPackage`; `apps/api/src/memberships/`, ADR-0003 |
| F9 | Recurring visits | "Set a client's regular slot once." | "Automatic rebooking" | `apps/api/src/recurring/` |

### 2.2 Setup and integrations

| # | Capability | Say | Never say | Source |
|---|---|---|---|---|
| F10 | Niche-aware onboarding | "Pick your trade and start with an editable service or item list — 32 selectable business types. Relevant templates also include add-ons and linked costs." | "AI-generated setup", "instant migration"; do not imply every template has non-empty add-on/expense lists | `libs/core/src/templates/`, `OnboardingPage.tsx` |
| F11 | Google Calendar event reading | **Omit from launch story by default.** Describe a specific read/import flow only after G8 verification. | Two-way sync, “keep both sides in step”, writing changes back to Google; Google sign-in is separate | `libs/server/calendar-sync/src/lib/contracts/google-calendar-scopes.ts` (`calendar.events.readonly`); G8 |
| F12 | Google sign-in | "Sign in with Google." | "Perelai reads your contacts" — the Contacts scope is **deliberately not requested** | `auth/google-auth.guard.ts` |
| F13 | vCard contact import | "Bring your contacts across from your phone." | "One-click migration from [competitor]" | `apps/api/src/imports/`, `ob14-vcard-preview-company-estimate.md` |
| F14 | Market-aware defaults | "Currency and country are set from your market; time-based service templates start with editable durations." | Do **not** promise suggested *prices* — the curated price catalog is intentionally empty (`ob13`). Do not promise durations for ORDER/REQUEST/non-time-based items. Durations come from the template, not from the market. | `supported-markets.ts`, `price-packs-catalog.ts` |
| F15 | Team access and performers | “Work solo or bring in your team.” Under G3: “Give your administrator access to scheduling and client checkout, without general financial reports.” | Unlimited users, team access in SOLO, administrator sees no money at all, invented/custom roles, payroll/commissions/HR; do not infer public release from internal TEAM mode | ADR-0014; `WorkspaceAccessSheet.tsx`, `WorkspaceAccessFormFields.tsx`; launch G3 and TEAM/BILL evidence. Multi-company marketing remains outside this launch story |
| F25 | Coworker shared availability (separate businesses) | "Link a separate business that shares your space." · "You each see the other company's occupied times — not client, service, staff, money or note details." · "Coworker occupied times are checked when a visit is saved and excluded from public booking availability." | "Shared calendar", "calendar sharing", "sync your calendars with your coworkers"; "nothing is shared"; "complete privacy", "private by default", "anonymous"; "no double-booking ever", "real-time locking"; "shared account", "shared client list", "one shared workspace", "collaborate with anyone"; coworker described as a role, seat, membership, or team member | `apps/api/src/coworkers/`, `coworker-busy.service.ts` (returns `id`, `startAt`, `endAt`, `companyName`, `companyColor` only), `apps/api/prisma/schema.prisma` (`CoworkerGroup`, `CoworkerMembership`, `CoworkerInvite`), `apps/api/src/public-booking/public-booking.service.ts`; **publication gated by TC5–TC7** in [`docs/team-collaboration-claim-contract.md`](../../../docs/team-collaboration-claim-contract.md) |

**Collaboration gate — updated 2026-09-19.** Workspace access and linked separate companies remain distinct. A team member has access inside one company; performer profile and login/role are independent. Administrator and Business manager/SUPERVISOR are not synonyms.

| Scope | Evidence status | Current rule |
|---|---|---|
| F15 / former TC1–TC4 | Historical August role evidence, not September commercial release proof | New Administrator, plan capacity and STUDIO access claims use G3/G6/G7 plus current TEAM release evidence |
| F4 / TC8 | Existing notes evidence retained; not re-executed by POS0 | One supporting client-history line, never a standalone Notes section |
| F25 / TC5–TC7 | TC5 remains HOLD in landing contract | No coworker copy, panel, label, sr-only summary or implied release. TC6/TC7 cannot independently clear the link |
| Multi-company / TC9 | Historical HOLD for this section | No launch collaboration expansion; separate subscription per workspace is a commercial fact, not a new collaboration promise |

Use [team-collaboration-claim-contract.md](../../../docs/team-collaboration-claim-contract.md) for earlier scope and evidence. POS1/POS2 update affected current mappings without retroactively upgrading historical PASS. Clearing a hold requires dated evidence, not a copy edit.

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
| F26 | iPhone Home Screen + own window | "Add Perelai to your iPhone Home Screen and it opens from its own icon, in its own window." Pair it with the condition: iOS asks whether to open it as a web app, and that switch has to stay on. | Do not extend to iPad or Android — those rows are `BLOCKED`. Never "native app", "native performance", "same as a native app" (§4.2, absolute). Do not promise alerts: the push row is still `BLOCKED` | `manifest.json` → `display: "standalone"`, `apple-mobile-web-app-capable` in `apps/web/index.html`, `installTarget.ts` `ios-share-sheet` route; **physical iPhone evidence 2026-08-02** in [`docs/device-claim-contract.md`](../../../docs/device-claim-contract.md) §2.1 |
| F24 | Internet connection required | "Perelai needs an internet connection." | "Works offline", "offline-first", "book clients offline", "syncs when you reconnect", "no internet required" | `apps/web/public/notification-sw.js` (notification-only service worker — no offline application shell, no cache strategy, no background sync), `apps/web/src/utils/webPush.ts`; see `docs/device-claim-contract.md` §1.5 |

**Device gate (amended 2026-08-02).** F20–F24 and F26 are the Platform rows that touch
devices, browsers or distribution. F26 takes the next free ledger number after the TEAM1
collaboration row and sits here in §2.4 because it is a platform fact, not a team one. A device sentence needs **two** approvals: it must appear here
*and* its matching row in [`docs/device-claim-contract.md`](../../../docs/device-claim-contract.md)
must read `PASS`. Audit prose cannot override a `BLOCKED` contract row.

**Previously verified scope (matching contract PASS required at publication; not re-tested by POS0):**

| Ledger | Claim-contract row that must be `PASS` | Allowed public shape |
|---|---|---|
| **F21** | **Use without installing** (+ browser delivery) | "Perelai runs in a web browser. Installing it is optional." — never a named-device install promise |
| **F23** | **No store distribution** | "There is no App Store or Google Play listing." — sourced from dated store searches, not from "no native code in the repo" |
| **F24** | Internet required | "Perelai needs an internet connection." |
| **F26** | **iPhone Safari Home Screen setup** + **Standalone app window (iPhone)** | "Add Perelai to your iPhone Home Screen and it opens from its own icon, in its own window." — **iPhone only**, and paired with the Open-as-Web-App condition |

**Not shippable until their contract rows pass:**

- **F20's device-specific *Say* expansions** and every strong cross-device / multi-pane marketing line
  beyond what the **Responsive layout density** `PASS` row literally allows.
- **iPad and Android** Home Screen / install / standalone wording, and any push promise — those
  contract rows stayed `BLOCKED` when the iPhone rows cleared on 2026-08-02. F26 does not generalise:
  one device passing is evidence about that device.
- Chrome / Instagram / Facebook / embedded-webview mechanics — still `BLOCKED`.
- Responsive density *may* ship in the narrow form backed by the density `PASS` row (authenticated
  automated captures at 1024 / 1360 / 1600 with DOM pane asserts). Do not upgrade that into
  unqualified "use it on iPad" without the cross-device row.

### 2.5 Launch G1–G8 overlay (2026-09-19)

Exact phrase-to-evidence/role/plan/locale/revision register: [launch checklist](../../../docs/launch-positioning-checklist.md), §6. These add the new launch meanings to the ledger; they do not mark the release ready.

| Gate | Allowed meaning / source | Publication condition |
|---|---|---|
| G1 / F1–F4 | Schedule appointments, retain client history; app Calendar/Clients, ADR-0001 | Actual APPOINTMENT journey |
| G2 / F5/F8 | Record payments; recognise a prepaid package at sale and redeem its credits without new cash or revenue; ADR-0002/0003/0006 | Payment vs redemption proof; POS1 fixture correction; no card acquiring |
| G3 / F15 | Administrator scheduling/permitted checkout without general reports; ADR-0014 and access UI | Real STUDIO trial/paid admission, current role boundaries and TEAM-RELEASE |
| G4 | Reconcile expected and counted cash; ADR-0015, CashDrawer UI, implemented DR0–DR6 | IMPLEMENTATION READY, included in POS2. Public release evidence unresolved: report still says NO-GO; reconcile actual acceptance/enablement in POS4. Also SOLO owner, not STUDIO-only |
| G5 / F6 | Revenue, costs and calculated profit by supported period/category/client; Finance API/UI | Metric scope and zero duplicate package revenue are fixed in the POS1 fixture; no cash=Revenue claim |
| G6 | One 21-day STUDIO trial without a card, explicit purchase after expiry in v1 | Accepted decisions 16.09 + v1 limitation; BILL1/3/4/8, TEAM and applicable legal release |
| G7 | SOLO USD19/STUDIO USD29 monthly per workspace; 1/5 active performers; STUDIO+ contact-only | Decisions 06.09, catalog, BILL7 display artifact + purchase/release gates |
| G8 / F11 | Read Google Calendar events, only if released | Read-only scope and actual flow verified; omit by default |

---

## 3. Not part of the current launch promise

| Area | Rule |
|---|---|
| AI/NLP, smart insights, marketing broadcasts/cohorts/RFM/churn prediction | No availability claim |
| File/media attachments on notes | No availability claim; notes remain a small client-history detail |
| SaaS subscriptions/trial | **No longer “no code”.** Approved launch policy exists; publication follows G6/G7/BILL/TEAM/legal evidence |
| Cash reconciliation | Implemented and included in POS2; no implementation HOLD. Public promise still needs current acceptance/enablement because DR7 records NO-GO |
| Google Calendar | G8 verification required; two-way is false under current scope |
| Public REQUEST/ORDER/RENTAL intake | Do not broaden APPOINTMENT launch into disabled public flows |
| Curated market price suggestions | Do not promise automatic service pricing |
| SMS/WhatsApp/Telegram/Slack/Discord | Do not add channel claims |
| Workspace Data Export | Code exists; packaging, restricted access and retention guarantees remain commercial/legal questions. Do not claim “no export code” or promise access based solely on code |
| STUDIO+ | Contact-only; no capacity, price, checkout or rollout date |

---

## 4. Banned claims and words

### 4.1 Hard bans — never, on any page, in any language

| Banned | Why |
|---|---|
| "personal CFO" | Implies advisory capabilities outside the product boundary. |
| Unapproved trial length, free forever, automatic charge when the cardless trial ends | Approved launch is 21-day STUDIO without a card, followed by explicit purchase in v1. Publication is gated, not categorically forbidden. |
| "+38% repeat bookings", any un-sourced statistic | Fabricated. Every number needs a source or it goes. |
| "Every booking automatically becomes revenue" | Violates the fulfilment/payment separation (CONTEXT §10). |
| "Save thousands on marketplace fees" | Unverifiable savings claim. |
| "All-in-one business platform", "AI-powered ERP", "replace every tool", "full accounting" | CONTEXT §16 do-not-use list. |
| "HIPAA-ready", "clinical records", "diagnosis", "patient treatment management" | CONTEXT §17. Blocks the regulated niches entirely. |
| "guaranteed churn prediction" | CONTEXT §16; feature does not exist. |
| "fiscal receipt", "tax invoice", "official cash receipt" | CONTEXT §17. Use "payment confirmation". |
| "lending", "credit", "BNPL", "financing" | CONTEXT §17. Instalments = tracking an agreed schedule. |
| "PWA" | CONTEXT §17 wording rule. |
| Fake testimonials, fake logos, fake counts ("Join 10,000+ pros") | No verified publishable customer proof has been supplied. A beta or launch label does not authorize invented evidence. |
| Team-only / enterprise positioning; “requires a team” | Solo professionals and small studios are both in scope. Mentioning a small studio is no longer banned; replacing the homepage with salon workforce management is outside launch scope. |
| "Payroll", "timesheets", "commissions", "clock in/out", "HR" | Added 2026-08-02. Perelai stores staff schedules, time-off blocks and assigned services. It calculates no wage, hour total, or commission. Also an anti-persona boundary (§1). |
| "Granular permissions", "custom roles", "define your own roles", "permission matrix" | Added 2026-08-02. Roles have explicit product scopes, now including Administrator; role and performer link are independent. Vagueness here reads as enterprise software to a solo buyer and overstates the product. |
| "Shared calendar", "share your calendar with your coworkers", "calendar sharing" (coworker sense) | Added 2026-08-02. Only occupied intervals cross a coworker boundary. F11 reads Google events and is separate from coworker availability; neither permits a two-way or shared-calendar promise. |
| "Nothing is shared", "complete privacy", "private by default", "anonymous" (coworker sense) | Added 2026-08-02. Company name, colour and occupied intervals *are* shared. Overclaiming privacy is the fastest way to be caught being wrong; state the precise visible and hidden fields instead. |
| "No double-booking ever", "never double-book", "real-time locking" | Added 2026-08-02. Coworker occupied times are checked on save and excluded from public booking availability. That is a check, not a guarantee. |
| "Streamline collaboration", "work better together", "one shared workspace", "collaborate with anyone" | Added 2026-08-02. §4.3 already bans "streamline". These phrases also hide *which* of the two mechanisms is meant, which is the exact ambiguity this section exists to remove. |
| **"finally", "at last", "in one place", "all in one", "everything you need" as the hero or closing argument** — including the retired live hero *"Your clients, bookings and cash flow — finally in one place."* | Added 2026-08-03 (MSG1). "In one place" is category parity: a booking tool, a CRM, a calendar or a salon suite can print it unchanged, so it differentiates nothing and invites a feature-count comparison. "Finally" manufactures novelty without naming anything novel. Together they made Perelai sound like a larger planner instead of a system that keeps unresolved work visible and separates completed work from money received. Applies in every published locale — ban the local equivalents too. **Scope:** this bans the *positioning argument*, not the F4 feature-level phrasing "Every client's visits, notes and payments in one place", which stays as written in §2.1. Rationale and the full rejected-direction register: [`docs/home-hero-copy-audit.md`](../../../docs/home-hero-copy-audit.md) §10. |

### 4.2 Terminology discipline (from the app glossary — keep landing and app consistent)

| Use | Not |
|---|---|
| Appointment / visit (scheduling / fulfilment of the same event) | transaction; two separate entities invented for the demo |
| Order | invoice, bill |
| Prepaid package; RU «Пакет услуг», UK «Пакет послуг» | membership, Perelai subscription, automatic recurring charge |
| Workspace access | membership |
| Payment confirmation | receipt (fiscal sense) |
| Instalment | payment plan (in UI labels), installment (spelling) |
| Public service request | booking, visit |
| Rental reservation | visit, booking |
| Operational Inbox item | notification |
| Team member with access; active service professional for plan capacity | login count as performer count; unlimited users; administrative role treated as a performer |
| Administrator / Business manager semantics; exact UI roles from the generated app catalog | Administrator = Supervisor; unshipped translated control labels; custom roles |
| Coworker — **a linked separate business** | coworker as a person, a colleague inside your workspace, a role, or a seat |
| Occupied times | shared calendar, busy calendar sharing, their schedule |

### 4.3 Style bans (copywriting skill)

No exclamation points. No "streamline", "optimize", "innovative", "seamless", "leverage", "empower",
"revolutionize", "game-changing", "effortlessly". Prefer the concrete number over the adverb.

---

## 5. Proof without invented social proof

No new verified testimonials, logos, usage counts or conversion lift were supplied. Do not manufacture them.

1. Preserve the existing interactive product previews and their established screenshot/evidence anchors. No new screenshot campaign, shell redesign or visual system is required for this launch.
2. Keep exact app control labels generated from a clean source revision; factual fixture values must satisfy ADRs. A mock is “Example data”, not a live account or proof of production availability.
3. Correct the existing package/Revenue error before using finance previews as proof. New package/admin fragments remain small; Drawer is separate and optional.
4. Trial/no-card and prices use accepted business policy **and** release checks—not absence of billing code. No export, refund, price-lock or scarcity guarantee without its own authority.
5. Show the product boundary plainly. Do not turn “not accounting” into the leading message or add empty “as seen in” strips.

---

## 6. CTA policy

One primary action. RU hero CTA/helper are frozen in §1 and the launch checklist. English candidates below still need adaptation review; actual public use requires G6/G7 release clearance:

| Position | Copy | Destination / rule |
|---|---|---|
| Primary | **Start 21-day trial** | Existing `buildAppSignupUrl`, then registration, email verification and eligible setup |
| Secondary | **See how it works** | Existing #how |
| Login | **Log in** | Configured app login |
| Trial helper | **21 days of STUDIO, no card required. Subscribe when your trial ends.** | V1 explicit post-expiry purchase; no early card setup |
| Price helper | **After the trial: SOLO {soloPrice}/month or STUDIO {studioPrice}/month per workspace.** | Approved USD anchors from BILL7 display catalog; final checkout currency/tax disclosed |
| Verification helper | **You'll get a verification email to finish setting up.** | Preserve the actual email-verification handoff |

Full source and per-scope status: [launch checklist](../../../docs/launch-positioning-checklist.md). Six RU hero strings are approved, translations and other new strings remain pending. Approved business facts and the RU freeze are not reopened.

No landing checkout or provider IDs. `offer` only through completed BILL7 handoff. Home does not invent `niche`. Keep price/trial disclosure near hero/final/Pricing CTAs; do not repeat a paragraph under every header button. Generic **Create workspace** is a fallback only for a verified available signup, not a workaround to advertise an unready STUDIO trial.

---

## 7. Homepage message hierarchy

The [launch specification](../positioning/01_home_pricing_copy_and_previews.md) replaces FM/DVC/TEAM historical placement instructions where they conflict. Preserve the previews themselves.

| Order | Section | One job |
|---|---|---|
| 1 | Hero | Order in appointments / clarity about recorded payments, one concrete action sentence, audience eyebrow, CTA and trial/next price |
| 2 | Operations (#features) | Schedule → complete visit → record payment/apply package; existing Inbox preview |
| 3 | Connected records + package fragment | Explain payment vs package and remaining units |
| 4 | Drawer, **POS2 implementation READY** | Expected/count/difference; build preview now, reconcile public G4 before publication |
| 5 | Collaboration + access fragment | Work solo or with a team; precise Administrator scope; no separate CTA |
| 6 | Finance overview | Revenue/costs/calculated profit for the selected period |
| 7 | Drivers | Category/client breakdown, without repeating the hero |
| 8 | Devices | Browser access and already-verified optional-install boundaries |
| 9 | Setup (#how) | Editable services, vCard clients, direct booking link |
| 10 | Not | Short accounting/marketplace/clinical boundaries |
| 11 | Niche router | Preserve current links; no new niche programme |
| 12 | FAQ | Six short launch objections |
| 13 | Final CTA | Repeat the same primary action and commercial facts |

Calendar first, Finance second in the existing HeroShowcase; retain its controls/animation/accessibility. Remove only the standalone text-only FinancialStates section, carrying its necessary explanation into Package/Finance. Notes remains one client-history line. Move #features to Operations; leave #how in Setup. Remove Find your trade from both header versions, not the footer or route registry.

This is narrative/wording work, not approval to rebuild app previews. Exact fixtures/labels and summaries must match what is actually rendered.

---

## 8. FAQ bank

Current source copy and RU/UK/EN answers: [launch checklist](../../../docs/launch-positioning-checklist.md). Home uses six questions:

1. How do clients book? — Direct link; service/time choice, no marketplace or commission promise.
2. Is there a trial and do I need a card? — 21-day STUDIO, no card, starts after eligible setup; actual expiry in app.
3. What happens after the trial? — Explicit subscription purchase; otherwise work restricted absent another valid source. Expiry itself does not delete data; no retention/export guarantee.
4. Can I work with a team? — STUDIO; distinguish active service professionals and administrative access.
5. Is a package a subscription? — Prepaid client services, not recurring card charges or a Perelai subscription.
6. Is this accounting software? — No; actual operational/financial tracking scope, not tax reporting or card acquiring.

Pricing FAQ expands only the trial clock, 1/5 counting, SOLO preparation, price currency/tax and paid renewal. Setup covers verification/vCard; no false two-way sync or migration-time claim. Do not preserve old “no billing”, pending-price, unapproved no-commission answers because they once passed a test.

---

## 9. Niche page copy contract

**Launch-scope note (2026-09-19):** preserve existing routes. The creation rules below apply to future niche work, not a requirement to redo niches before launch. POS1/POS3 make only a finite list of shared factual corrections (trial/price, two-way sync, package/roles); no new niche research programme. §1/§6 and commercial gates override older niche commercial strings.

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
| "What Perelai is not" | shared | §7 |
| Footer / nav | shared | — |

**The terminology table is product-derived proof.** Keep its labels/data tied to the actual template; do not claim competitors cannot reproduce a similar table. Example for
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

## 10. Customer research for future niche creation

POS0 uses explicit founder-led hypotheses and does not claim research-backed uplift. New research is not a blocker for this compact general launch set. For future new niche pages, spend
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
