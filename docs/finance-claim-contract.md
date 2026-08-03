# Finance Claim Contract

**Phase:** FM1 — evidence and claim contract for the finance-first repositioning
**Verification date:** 2026-08-03
**Landing HEAD:** `32aa27e1a57aefc4a9d6fb348e8cbbe9b2f66ae9`
**App HEAD (`beauty-finance`):** `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f` (worktree clean)

---

## 1. Why this contract exists

The category decision requires Perelai to be positioned as **financial tracking and analytics software for small service businesses**. Booking, Calendar, and CRM serve as the operational mechanism that collects financial context without manual entry.

This change shifts the load-bearing marketing claims to the finance surface. Every public finance claim, headline, card, FAQ item, and metadata string must be traceable to a `PASS` row in this contract and a matching entry in `.cursor/plans/reference/messaging-and-claims.md` §2 under the two-approval rule.

This document repairs and enforces the evidence boundaries established during the FM0 audit:
1. `earned` is conservatively **rejected** for public marketing copy (FC1).
2. "Outstanding" debt is explicitly **scoped** to open orders and overdue instalments (FC3).
3. "Brought in" is **rejected** for client revenue history to avoid cash/revenue confusion (FC5).
4. Recorded cash semantics are explicitly **distinguished** from settled revenue and non-cash package redemptions (FC7).
5. The UI metric label `Profit` is strictly **limited** to the product's calculation (`revenue - totalExpenses`) and forbidden from carrying accounting profit implications (FC9).

---

## 2. Test Evidence Executed on 2026-08-03

Unit tests were executed using repository commands against app HEAD `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f`:

| Test Command / Path | Test Result | Scope & Coverage | Status |
|---|---|---|---|
| `./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand apps/api/src/finance/finance.service.spec.ts apps/api/src/finance/finance.controller.spec.ts apps/api/src/orders/orders.service.spec.ts` | **71 passed** (3 suites) | `getSummary`, `getRevenueByCategory`, `getCostByCategory`, `getSummaryOverTime`, `getClientSummary`, `getClientRevenueByCategory`, `getClientCostByCategory`, `getClientSummaryOverTime`, `getDebtSummary`, order creation, payments, and instalment reconciliation | **PASS (unit)** |
| `./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand apps/api/src/payment-accounts/payment-accounts.service.spec.ts` | **30 passed** (1 suite) | Account resolution, currency matching (PERF.8A), balance calculation, allocation handling, non-cash package redemption exclusion | **PASS (unit)** |
| `./node_modules/.bin/jest --no-cache --config apps/web/jest.config.ts --runInBand src/hooks/useGhostVisitUndo.spec.ts` | **15 passed** (1 suite) | Visit status `COMPLETED` with `paymentStatus: PENDING` (completed work ≠ revenue) | **PASS (unit)** |
| `./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand --testPathIgnorePatterns='a^' --testPathPatterns='finance-audit.integration.spec\|finance-feed-v2.integration.spec'` | **Failed** (`TEST_DATABASE_URL` unset) | Integration database audit suites (`PERF.0`) | **HOLD (integration DB required)** |

> **Environment Note:** Source code inspection is `PASS` for all audited core finance methods. Integration suites requiring a live PostgreSQL test database are recorded as `HOLD (integration DB required)` per repository rules without blocking unit-verified source rows.

---

## 3. Financial State Model & Boundaries

The following state boundaries must be preserved across all marketing copy, component visuals, and localized strings:

```text
1. Completed Work      = VisitStatus.COMPLETED or VisitStatus.NO_SHOW (operational record of work done)
2. Settled Revenue     = REVENUE_FILTER: status IN [COMPLETED, NO_SHOW] AND paymentStatus = PAID
                         (includes cash/card/transfer/online payments AND non-cash package redemptions)
3. Cash Recorded       = PaymentAllocation where source NOT IN ('PACKAGE_REDEMPTION', 'TRANSFER')
                         (actual money allocated to cash/bank payment accounts)
4. Expenses / Costs    = TransactionItem (amount < 0) + AdditionalFinance (amount < 0)
5. Open Order Debt     = Order where status = 'OPEN' (totalAmount - sum of instalment amountPaid)
6. Overdue Debt        = Instalment where status NOT IN ('PAID', 'CANCELLED') AND dueDate < startOfToday
7. Product Profit      = In-product metric calculation: revenue - totalExpenses
```

### Critical Financial Invariant (ADR-0002 §5)
`paymentStatus = PAID` means *financially settled*, which is **not proof that cash was received**. A visit paid from a prepaid package is `PAID`, counts toward summary revenue, and creates **zero cash allocation**. Cash language ("what came in", "money received", "cash in hand") belongs exclusively to payments and payment accounts (FC7), never to summary revenue.

---

## 4. Audited Claim Rows (FC1–FC10)

| ID | User-Facing Concept & Allowed Public Wording | Prohibited Wording | Implementation Path & Filters | Test Evidence | Status |
|---|---|---|---|---|---|
| **FC1** | **Period Financial Summary**<br>Allowed: *"Track completed work, expenses, payments and what remains for any period."* | **"earned"**, **"what you earned"**, "accounting", "bookkeeping", "tax", "P&L", "tax-ready", "financial advice" | `apps/api/src/finance/finance.service.ts` (`getSummary` lines 734–819): returns `income`, `tips`, `expenses`, `profit`, `revenue`, `additionalIncome`, `additionalExpenses`; periods: `day\|week\|month\|quarter\|year`. | `finance.service.spec.ts` (71-test batch passed) | **PASS (source & unit)**<br>*Note: `earned` is explicitly REJECTED.* |
| **FC2** | **Settled Revenue Boundary**<br>Allowed: *"A completed visit is included in summary revenue only when it is settled."* | **"Revenue means cash in the bank"**, **"see the money that came in"** *(attached to summary total)*, "every completed visit becomes cash" | `apps/api/src/finance/finance.service.ts` (`REVENUE_FILTER` lines 44–47): `status IN [COMPLETED, NO_SHOW] AND paymentStatus = PAID`. Excludes `COMPLETED` visits with `paymentStatus = PENDING`. | `useGhostVisitUndo.spec.ts` (15 passed); `finance.service.spec.ts` | **PASS (source & unit)** |
| **FC3** | **Open Order & Instalment Debt Scope**<br>Allowed: *"See what is still owed on open orders and instalments, and what is overdue."* | **Unscoped "outstanding balances"**, "debt collection", "we chase payments for you", "guaranteed payment", "all company debt", "accounts receivable" | `apps/api/src/orders/orders.service.ts` (`getDebtSummary` lines 1321–1367): returns `openOrdersCount`, `totalOutstanding`, `overdueInstalmentsCount`. Explicitly scoped to `Order` where `status = 'OPEN'`. | `orders.service.spec.ts` (71-test batch passed) | **PASS (order-scoped)** |
| **FC4** | **Service-Category Aggregation Boundary**<br>Allowed: *"See which service categories bring in the most revenue, and where expenses sit."* | **"revenue by service"**, **"per-service profitability"**, "service-level P&L" — aggregation is by **category**, not individual service | `apps/api/src/finance/finance.service.ts` (`getRevenueByCategory` lines 821–874, `getCostByCategory` lines 876–913): groups on `categoryId`. | `finance.service.spec.ts` (71-test batch passed) | **PASS (category granularity only)** |
| **FC5** | **Client Financial History**<br>Allowed: *"See client revenue history and category breakdowns over time."* | **"what each client has brought in"**, "lifetime value prediction", "client scoring", "churn prediction" | `apps/api/src/finance/finance.service.ts` (`getClientSummary` lines 962–1036, `getClientRevenueByCategory` lines 1038–1096, `getClientCostByCategory` lines 1098–1141): scoped to `clientId`. | `finance.service.spec.ts` (71-test batch passed) | **PASS (settled revenue source)** |
| **FC6** | **Period Comparisons**<br>Allowed: *"Compare periods and see how your result moves month to month."* | "Forecasting", "projections", "budgets", "what-if planning" | `apps/api/src/finance/finance.service.ts` (`getSummaryOverTime` lines 915–960): generates local time buckets (`generateLocalBuckets`). | `finance.service.spec.ts` (71-test batch passed) | **PASS (source & unit)** |
| **FC7** | **Recorded Cash Ledger**<br>Allowed: *"Money actually received is recorded as payments against the work it paid for."* | "Payment processing", "we handle payments", "get paid instantly", "banking", "bank sync" | `apps/api/src/payment-accounts/payment-accounts.service.ts` (`calculateBalances` lines 334–439): `PaymentAllocation` ledger (`source NOT IN ('PACKAGE_REDEMPTION', 'TRANSFER')`). Package redemptions create zero cash allocation. | `payment-accounts.service.spec.ts` (30 passed); `finance-audit.integration.spec.ts` (requires `TEST_DATABASE_URL`) | **PASS (source & unit)**<br>*HOLD on integration DB* |
| **FC8** | **Data Export**<br>Allowed: *None (claim is blocked)* | **"Export"**, **"download your data"**, "export to CSV/Excel", "hand it to your accountant" | No export implementation found in `apps/api/src` or `apps/web/src`; `docs/commercial-policy.md` lists export as **not approved**. | Code search & commercial policy verification | **BLOCKED / FORBIDDEN** |
| **FC9** | **Product Profit Metric Label**<br>Allowed: *"See your calculated profit (revenue minus expenses) for any period."* | **"Net profit"**, **"accounting profit"**, **"tax profit"**, "P&L", "margin analysis", "tax-ready profit" | `apps/api/src/finance/finance.service.ts` line 805: `const profit = revenue - totalExpenses`. App UI string catalog labels metric `Profit` across all niche templates. | Generated string catalog; unit tests | **PASS (UI label only; not accounting profit)** |
| **FC10** | **Refunds & Corrections**<br>Allowed: *None (not audited for public copy)* | "Refunds and corrections", "void and reverse", "audit trail" as public marketing copy | ADR-0002 §7 describes backend reversals, but public-facing behaviour and UI workflow were **not** audited for public copy. | Not audited for public copy | **NOT AUDITED / BLOCKED** |

---

## 5. Marketing Terminology Table

Every term in this table has been audited against product code and claim rows. Copywriters and localized translators must adhere strictly to these classifications:

| Concept | Allowed Phrase | Careful Phrase | Banned Phrase | Source Row | Reason |
|---|---|---|---|---|---|
| **Summary Period Tracking** | "Track completed work, expenses, payments and what remains for any period." | "Track completed visits and expenses" | "Track what you earned", "accounting", "bookkeeping", "tax-ready", "P&L" | FC1 | `earned` is ambiguous recognized revenue; Perelai is operational finance software, not an accounting suite. |
| **Settled Revenue Boundary** | "A completed visit is included in summary revenue only when it is settled." | "Revenue counts completed work that is paid or redeemed" | "Revenue means cash in the bank", "every completed visit becomes cash" | FC2 | Settled revenue includes non-cash package redemptions (`paymentStatus = PAID`). Cash actually received is tracked separately. |
| **Debt Scope** | "See what is still owed on open orders and instalments, and what is overdue." | "See open order balances" | "Debt collection", "chase payments for you", "accounts receivable", "all client debt" | FC3 | `getDebtSummary` is strictly scoped to open orders and overdue instalments, not all company receivables. |
| **Service Granularity** | "See which service categories bring in the most revenue, and where expenses sit." | "Category breakdown" | "Revenue by service", "per-service profitability", "individual service P&L" | FC4 | Database aggregation is grouped by `categoryId`, not individual service IDs. |
| **Client Financial History** | "See client revenue history and category breakdowns over time." | "Client revenue over time" | "See what each client has brought in", "lifetime value prediction", "client scoring" | FC5 | "Brought in" implies cash received, whereas client summary calculates settled revenue. |
| **Trend & Comparison** | "Compare periods and see how your result moves month to month." | "Period-over-period comparison" | "Forecasting", "projections", "budgets", "what-if planning" | FC6 | Historical trend comparison only; no forecasting or budgeting capability exists in code. |
| **Cash Ledger** | "Money actually received is recorded as payments against the work it paid for." | "Recorded cash allocations" | "Payment processing", "we handle payments", "get paid instantly", "bank sync" | FC7 | Perelai records payments and allocations; it does not process payments or sync bank accounts. Package redemptions create zero cash allocation. |
| **Data Export** | *None* | *None* | "Export", "download your data", "export to CSV", "hand it to your accountant" | FC8 | No export feature exists in code; commercial policy marks export as not approved. |
| **Profit Metric** | "See your calculated profit (revenue minus expenses) for any period." | "In-app profit calculation" | "Net profit", "accounting profit", "tax profit", "P&L", "tax-ready profit" | FC9 | Metric is simple subtraction (`revenue - totalExpenses`); must not imply formal accounting profit. |
| **Refunds & Corrections** | *None* | *None* | "Refunds and corrections", "void and reverse", "audit trail" | FC10 | Public behavior and workflow not audited for public copy in this pass. |

---

## 6. Revalidation Triggers & Freshness Date

- **Freshness Date:** 2026-08-03
- **Landing HEAD:** `32aa27e1a57aefc4a9d6fb348e8cbbe9b2f66ae9`
- **App HEAD:** `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f`
- **Revalidation Trigger:** This contract must be revalidated if any of the following occur:
  1. Modification to `REVENUE_FILTER` or `getSummary` in `apps/api/src/finance/finance.service.ts`.
  2. Changes to `PaymentAllocationSource` or allocation queries in `apps/api/src/payment-accounts/payment-accounts.service.ts`.
  3. Changes to `getDebtSummary` or order status calculation in `apps/api/src/orders/orders.service.ts`.
  4. Implementation of export features (FC8) or public refund/correction workflows (FC10).
  5. Changes to commercial policy regarding export or payments in `docs/commercial-policy.md`.
