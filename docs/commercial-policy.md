# Commercial Policy

**Updated:** 2026-09-19, POS0. Documentation only; no checkout, trial or production flag enabled.
**Purpose:** record who accepted each commercial fact, its source and the separate evidence needed before public use.

**Rule:** business approval permits preparation of copy, not an assertion of live availability. Publish only when the applicable display, runtime, TEAM and legal gates are satisfied. Do not ask the owner to reapprove the already accepted 21-day STUDIO / USD 19 / USD 29 / 1 / 5 decisions.

## Sources and precedence

- **D06:** [owner decisions 2026-09-06](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260906.md) — Valery, product owner: prices, independent workspace subscriptions, capacity, standard STUDIO, contact-only STUDIO+.
- **D16:** [policy 2026-09-16](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260916.md) — owner direction plus explicitly identified planning recommendations: trial STUDIO, subscription/change policy. Exact legal publication is not approved by this document.
- **V1:** [trial conversion evidence/limitation](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/paddle-trial-conversion-evidence.v1.md) §2 — selected launch implementation does **not** support early payment setup. It narrows D16 C-07's target, not the trial clock.
- **CAT:** [commercial catalog](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/commercial-catalog.v1.md), [app catalog](/Users/valery/Sites/beauty-finance/libs/core/src/billing/catalog.ts).
- **MVP:** [launch definitions 2026-09-19](/Users/valery/Sites/beauty-finance/.cursor/plans/terminology/mvp/01-launch-definitions.md), especially §2.
- **BILL7:** [commercial/legal handoff plan](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/07_landing_handoff_commercial_legal_20260822.plan.md).

Current source snapshot: app `6ba23125e08f05935f69d89c34a8d512fdefbf2f`, landing `4be46b0a2b5090877e51faf93c643aa26b1512f1`. App source was clean at POS0 inspection. Catalog has public display definitions but `purchaseAvailability: DISABLED` and `checkoutEnabled: false`. These are source defaults, not an inspection of deployed configuration. No production/provider check was run.

## Active launch registry

New IDs deliberately avoid reusing CF-01…04 for a different commercial promise.

| ID | Accepted fact / safe boundary | Authority / date | Preparation state | Before publication |
|---|---|---|---|---|
| CF-05 | One 21-day STUDIO trial without a card per payer; first eligible completed setup starts the clock; another workspace does not reset it | Valery, D16 C-19, 2026-09-16; MVP | APPROVED POLICY | G6: actual BILL1/3/4 trial/admission/expiry, TEAM and BILL8 evidence |
| CF-06 | V1 subscription purchase is available after trial expiry; without explicit purchase there is no automatic trial-end charge | V1 selected limitation, 2026-09-16; MVP | DOCUMENTED V1 BOUNDARY | Actual post-expiry conversion/recovery; do not publish early-setup or “charged on day 22” promises |
| CF-07 | SOLO USD 19/month per workspace; one active performer; no additional team access | Valery, D06 §§1–3, 2026-09-06; CAT/MVP | APPROVED POLICY | G7/BILL7 display artifact and common commercial release |
| CF-08 | STUDIO USD 29/month per workspace; up to five active performers; team access | Valery, D06 §§2–4, 2026-09-06; CAT/MVP | APPROVED POLICY | G3/G7, TEAM-RELEASE and BILL release |
| CF-09 | Working owner counts; active performer may count without login; non-performing administrator does not occupy a performer place, but requires STUDIO access | Valery, D06 §2; D16/MVP | APPROVED COUNTING RULE | Actual BILL3/TEAM capacity/access evidence; never “unlimited users” |
| CF-10 | Each workspace has its own independent subscription; price is not per login or customer-wide | Valery, D06 §1, 2026-09-06 | APPROVED POLICY | G7 / app selection and billing flow agree |
| CF-11 | STUDIO+ is contact-only, no public price/capacity/checkout or guaranteed access | Valery, D06 §5, 2026-09-06 | APPROVED DISPLAY SCOPE | Verified contact destination; no invented offer or email |
| CF-12 | Without another valid source, expiry restricts work; data are not deleted solely because trial ended | D16 §2; MVP §2 | DOCUMENTED POLICY | Actual restriction/recovery; retention, restricted export and deletion terms are separate |
| CF-13 | Paid subscriptions renew monthly after explicit purchase; base USD price, final currency/applicable taxes confirmed at checkout | D16 C-11 §5 + CAT; 2026-09-16, partial legal policy | POLICY BASIS; FINAL LEGAL COPY PENDING | BILL/legal seller/markets/terms, actual checkout amounts; no landing FX/VAT or unconditional cancellation/refund promise |
| CF-14 | Trial → SOLO requires one performer, no extra active access and no pending team invitations | D16 C-05 §3; MVP | DOCUMENTED POLICY | BILL3/4 readiness/remediation; never automatic staff deletion or keeping trial team on SOLO |

**Current publication status:** preparation allowed; public trial/paid-launch readiness **not established by POS0**. Detailed claim ledger: [launch checklist](launch-positioning-checklist.md), G3/G6/G7. Drawer implementation is confirmed and its preview is in POS2 scope. The remaining discrepancy with DR7 concerns public acceptance/enablement, not whether to build the landing component. It does not block the rest of the product; STUDIO still needs its own TEAM/BILL gates.

## Copy and implementation rules

- Copy and scoped approvals are in one [launch checklist](launch-positioning-checklist.md). On 2026-09-19 the owner approved six exact RU hero strings, including the primary CTA and trial helper. Other copy and translation review remain pending; this is separate from accepted prices/terms and live availability.
- Frozen RU: **Попробовать 21 день**, with **21 день STUDIO без карты. После пробного периода оформите подписку.** EN candidates remain **Start 21-day trial** and **21 days of STUDIO, no card required. Subscribe when your trial ends.** Show the next price near the principal CTA once the real flow is ready; do not rewrite the approved RU helper or interpret its approval as a release PASS.
- Preserve the verification-email helper; a click does not bypass registration/setup or start the clock by itself.
- Marketing translation templates use `{soloPrice}`, `{studioPrice}` and capacity values from BILL7's provider-free display artifact. USD19/29 here are approved reference values, not permission to duplicate literals in all locales.
- The app alone owns checkout. Generic signup needs no `offer` or `niche`; plan intent awaits BILL7. No provider identifiers in landing URLs.
- Standard STUDIO is not Founding Beta. Truthful app stage badges are a separate release decision; do not hide them in a mock to imply maturity.
- Client payment records, packages and Cash Drawer are not payment for Perelai. Do not infer card acquiring from the SaaS checkout integration.

## Still not approved — omit

- No commission / no per-booking fees: CF-02/03 remain unapproved. Absence of code is not policy.
- Free forever, a free SOLO tier, Founding deadline/cap/price lock, crossed-out prices, annual plans/savings.
- STUDIO+ USD49, ten performers, unlimited performers/users, or a purchase route.
- Full trial access to every function regardless of role/flag; Drawer before DR7 release.
- Refund guarantees, unconditional “cancel anytime”, grace duration, indefinite storage, restricted-state export, migration of historical beta users, jurisdiction/tax assertions not cleared by BILL/legal.
- Claims that “export does not exist”: code exists, but the public access promise remains unresolved.

## Historical CF registry — not active launch authority

| Old ID | Historical fact / status | Why it cannot justify current copy |
|---|---|---|
| CF-01 | “No card is collected today” — PENDING, no named approval; source was “no billing module”, 2026-07-25 | Obsolete source. CF-05 now grounds cardless **trial**, not blanket absence of billing |
| CF-02 | “No commission on bookings” — PENDING | Not accepted by the newer launch decisions; omit |
| CF-03 | “No per-booking fee” — PENDING | Same; no inference from subscription prices |
| CF-04 | “Free to use today” — PENDING, no named approval; source was “no billing”, 2026-07-25 | Superseded by limited trial + explicit paid subscription; not free forever |

The August neutral CTA remains a historical safe-copy decision, not a permanent ban on approved trial/price facts. The old USD19/29/49 Founding/Solo/Team ladder is not the current SOLO19/STUDIO29 catalog.
