# Finance claim contract

**Phase:** FIN0 — evidence and claim contract for the finance-first repositioning
**Verification date:** 2026-08-03
**Landing HEAD:** `7e528d67231d9a772eec71af4bb7b4f1ea80bd14`
**App HEAD (`beauty-finance`):** `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f` (worktree clean)

## Why this contract exists

The owner directed a category change on 2026-08-03: Perelai is to be positioned as **finance software
for small service businesses**, with Booking, Calendar and CRM demoted to the mechanism that *collects
the financial context* rather than the product category.

That change moves the load-bearing claims from F1/F3 (Inbox, booking link) to the finance surface. The
existing rail carried exactly **one** finance analytics row — F6, *"Revenue, costs and what's still
outstanding — without a spreadsheet."* Every other sentence in the new positioning (per-client results,
per-category breakdowns, period comparison, contribution/profit, outstanding balances) was **unaudited**.
This file audits them before any of it reaches public copy or translation.

Same rule as the device and team contracts: a finance sentence needs **two** approvals — a row here that
reads `PASS`, and a matching entry in `.cursor/plans/reference/messaging-and-claims.md` §2.

## Test evidence run on 2026-08-03

`TEST_DATABASE_URL` was supplied by the owner for this session, which unblocked the integration suites
that FIN0's predecessor (MSG0) had to record as blocked.

| Command | Result |
|---|---|
| `jest … --testPathPatterns='operational-inbox.integration.spec'` | **14 passed** — this clears the MSG0 blocker on F1 |
| `jest … finance.service.spec.ts finance.controller.spec.ts orders.service.spec.ts` | **71 passed** |
| `jest … --testPathPatterns='finance-audit.integration.spec\|finance-feed-v2.integration.spec'` | **27 passed** |

> **Credential handling.** The connection string is deliberately **not** recorded in this repository.
> `TEST_DATABASE_URL` is a developer-supplied environment variable; see `docs/testing-env.md` for how to
> set it. Committing a live database URL with its password into a tracked document would publish the
> credential to everyone with repository access and to every future clone.

---

## Claim rows

| ID | Exact allowed public wording | Prohibited wording | Implementation path | Evidence | Status |
|---|---|---|---|---|---|
| **FC1** | "Track what you earned, what you spent and what is left, for any period." | "Accounting", "bookkeeping", "tax", "P&L", "tax-ready", "financial advice" | `finance.service.ts` `getSummary` → returns `income`, `tips`, `expenses`, `profit`, `revenue`, `additionalIncome`, `additionalExpenses`; periods `day\|week\|month\|quarter\|year` | 71-test unit batch | **PASS** |
| **FC2** | "A completed visit does not count until it is settled." | **"Revenue means cash in the bank"**, "see the money that came in" *attached to the summary number*, "every completed visit becomes revenue" | `finance.service.ts` `REVENUE_FILTER = { status: [COMPLETED, NO_SHOW], paymentStatus: PAID }` — a `COMPLETED` visit with `paymentStatus: PENDING` is excluded from revenue | `useGhostVisitUndo.spec.ts` 15 passed (MSG0); `finance.service.spec.ts` | **PASS**, with the boundary in FC7 |
| **FC3** | "See what is still owed, and what is overdue." | "Debt collection", "we chase payments for you", "guaranteed payment" | `orders.service.ts` `getDebtSummary(companyId)` → `openOrdersCount`, `totalOutstanding`, `overdueInstalmentsCount` | `orders.service.spec.ts` within the 71-test batch | **PASS** — company-wide, **order-scoped** |
| **FC4** | "See which service categories bring in the most, and where the costs sit." | **"revenue by service"**, "per-service profitability" — the grouping is by **category**, not by individual service | `finance.service.ts` `getRevenueByCategory`, `getCostByCategory` — group on `categoryId` | 71-test unit batch | **PASS at category granularity only** |
| **FC5** | "See what each client has brought in over time." | "Lifetime value prediction", "client scoring", "churn prediction", "CRM" | `getClientSummary`, `getClientRevenueByCategory`, `getClientCostByCategory`, `getClientSummaryOverTime` | 71-test unit batch | **PASS** |
| **FC6** | "Compare periods and see how the result moves month to month." | "Forecasting", "projections", "budgets", "what-if planning" | `getSummaryOverTime`; `PeriodsList` day/week/month/quarter/year | 71-test unit batch | **PASS** |
| **FC7** | "Money you actually received is recorded as payments against the work it paid for." | "Payment processing", "we handle payments", "get paid instantly", "banking" | ADR-0002: `PaymentAllocation` is the canonical cash ledger; `payment-accounts.service.ts` balances derive from allocations | `payment-accounts.service.spec.ts` (MSG0, 173-test batch); `finance-audit.integration.spec.ts` 27 passed | **PASS** |
| **FC8** | — | **"Export"**, "download your data", "export to CSV/Excel", "hand it to your accountant" | No export implementation found in `apps/api/src` or `apps/web/src` (searched 2026-08-03) | Absence + `docs/commercial-policy.md` lists *"Data export availability"* as **not approved** | **BLOCKED** |
| **FC9** | The word **"profit"** may be used, because the app's own generated string catalog labels the metric `Profit` in every niche vocabulary. | Do not extend it to "net profit", "P&L", "margin analysis", "tax-ready profit", or any accounting-grade framing | `apps/web/public/locales/en/{beauty,pro,rent,freelance,edu,personal}.json` → `Profit` | Generated catalog | **PASS as a label, not as an accounting claim** |
| **FC10** | — | "Refunds and corrections", "void and reverse", "audit trail" as *public* copy | ADR-0002 §7 describes reversals, but the public-facing behaviour was **not** audited in this pass | Not audited | **NOT AUDITED — do not claim** |

---

## The one boundary that matters most

FC2 and FC7 describe **two different numbers**, and the finance-first positioning makes it easy to blur
them. Getting this wrong would be the exact failure Perelai criticises competitors for.

```text
Finance summary revenue   = completed work that is SETTLED
                            (paymentStatus = PAID — cash and/or package redemption)

Cash actually received    = sum of PaymentAllocation
                            (package redemption creates NO allocation — ADR-0002 §1, §5)
```

ADR-0002 §5 is explicit: `paymentStatus = PAID` means *financially settled*, and **is not proof that cash
was received**. A visit paid entirely from a prepaid package is `PAID`, counts toward summary revenue,
and moved no money that day.

**Consequence for copy.** The safe axis is *completed → settled → outstanding*. Attaching cash language
("what came in", "money received", "cash in hand") to the **summary/analytics number** is prohibited.
Cash language belongs to payments and payment accounts (FC7), where it is true.

This is why the owner's draft line *"so you can see what came in, what is still owed"* is not published
as written, and why the owner's own safer alternative is the one adopted:

> **See what was completed, what was paid and what is still outstanding.**

---

## Disposition of the owner's proposed copy

| Proposed | Disposition |
|---|---|
| "Financial tracking and analytics for independent service businesses" (eyebrow) | **Eligible** — FC1, FC4, FC5, FC6 |
| "See the money behind your business." (H1) | **Eligible** — asserts no capability; "behind" is exactly the connect-money-to-work mechanism |
| "track income, expenses, payments and outstanding balances" | **Eligible** — FC1 + FC7 + FC3 |
| "Keep completed work separate from money received" | **Eligible** — FC2. Retained from the previous positioning; it is the one claim that survives the category change unchanged |
| "understand which clients and **services** drive your results" | **Amend → "service categories"** — FC4 is category-granular. "Services" overstates by one level |
| "See what you delivered, what you **earned** and what was actually paid" | **Rejected** — the owner flagged `earned` themselves; it reads as recognised revenue |
| "so you can see **what came in**, what is still owed" (Вариант 3) | **Rejected** — attaches cash semantics to the settled-work number. See the boundary above |
| "Your business finances, **without the spreadsheet**" (Вариант 4) | **Rejected as an absolute**; the owner's safer form is adopted instead: "Spend less time managing business finances in spreadsheets" |
| "Understand your business finances without accounting complexity." | **Eligible** — states what is *not* required of the user; makes no accounting claim |
| "Financial clarity built into your daily workflow." | **Eligible** — FC1/FC2/FC7 describe records created during normal work |
| CTA "**Join the Founding Beta**" | **Blocked.** `docs/commercial-policy.md` has no approved Founding Beta row, and rails §6 allows that label *only while the programme is approved and active*. Primary CTA stays **"Create your free workspace"** |
| "export" (listed as a product requirement) | **FC8 BLOCKED** — kept out of copy entirely |
| Screenshot order: Finance → Client → Payment → Inbox → Calendar | **Eligible as a plan**, but it is a visual/asset change, not copy. Not executed in this pass |

---

## Product risk the owner already identified

> *"Иначе landing будет обещать финансовый продукт, а пользователь после регистрации увидит
> booking-приложение с дополнительным dashboard."*

The audit says this risk is **lower than feared but real**. Present and verified: per-period summary,
revenue/cost by category, per-client results, trend over time, outstanding and overdue, allocations,
instalments, packages. Absent or unaudited: **export (FC8, blocked)** and **refunds/corrections
(FC10, not audited)**. Nothing in the frozen copy depends on either.

The genuine gap is *granularity*, not existence: analytics group by **category**, so per-individual-service
profitability is not available and must not be implied.
