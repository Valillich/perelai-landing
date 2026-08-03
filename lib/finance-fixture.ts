/**
 * Deterministic homepage finance ledger (FM3 §6 / FM4B).
 *
 * Single source of truth for every KPI, trend point, feed row, category total,
 * client total, and open-order figure rendered on the homepage. Illustrative
 * example data for template `independent_colorist` at APP_SCREEN_REFERENCE —
 * never real customer data, never percentage-derived, never independently seeded.
 */

export const FINANCE_FIXTURE_TEMPLATE_ID = "independent_colorist" as const

export type FinanceCategoryId = "color" | "styling"

export type FinanceVisitStatus = "completed" | "no_show"
export type FinancePaymentStatus = "paid" | "pending"
export type FinanceCashAllocation = "cash" | "card" | "package" | "none"

export interface FinanceVisitRow {
  id: string
  clientKey: "Mia" | "Leo" | "Ana" | "Noah" | "Eva"
  /** Catalog service / addon / fee name key fragment for resolveName. */
  nameKey: string
  day: number
  status: FinanceVisitStatus
  paymentStatus: FinancePaymentStatus
  cashAllocation: FinanceCashAllocation
  amount: number
  categoryId: FinanceCategoryId
}

export interface FinanceExpenseRow {
  id: string
  nameKey: string
  day: number
  amount: number
  categoryId: FinanceCategoryId
}

export interface FinanceOrderInstalment {
  amount: number
  dueDay: number
  paid: boolean
  /** Unpaid and due before reference "today" (day 15). */
  overdue: boolean
}

export interface FinanceOpenOrder {
  clientKey: "Noah"
  labelKey: "color_correction_package"
  total: number
  instalments: FinanceOrderInstalment[]
}

/** Source ledger — July 2026, template independent_colorist (FM3 §6.2). */
export const FINANCE_VISIT_ROWS: readonly FinanceVisitRow[] = [
  {
    id: "v1",
    clientKey: "Mia",
    nameKey: "templates.independent_colorist.services.ic3",
    day: 2,
    status: "completed",
    paymentStatus: "paid",
    cashAllocation: "card",
    amount: 220,
    categoryId: "color",
  },
  {
    id: "v2",
    clientKey: "Mia",
    nameKey: "templates.independent_colorist.addons.ic_add_bond",
    day: 2,
    status: "completed",
    paymentStatus: "paid",
    cashAllocation: "card",
    amount: 35,
    categoryId: "color",
  },
  {
    id: "v3",
    clientKey: "Leo",
    nameKey: "templates.independent_colorist.services.ic2",
    day: 6,
    status: "completed",
    paymentStatus: "paid",
    cashAllocation: "card",
    amount: 140,
    categoryId: "color",
  },
  {
    id: "v4",
    clientKey: "Leo",
    nameKey: "templates.independent_colorist.addons.ic_add_style",
    day: 6,
    status: "completed",
    paymentStatus: "paid",
    cashAllocation: "cash",
    amount: 25,
    categoryId: "styling",
  },
  {
    id: "v5",
    clientKey: "Ana",
    nameKey: "templates.independent_colorist.services.ic6",
    day: 9,
    status: "completed",
    paymentStatus: "paid",
    cashAllocation: "cash",
    amount: 65,
    categoryId: "styling",
  },
  {
    id: "v6",
    clientKey: "Noah",
    nameKey: "templates.independent_colorist.services.ic5",
    day: 12,
    status: "completed",
    paymentStatus: "paid",
    cashAllocation: "package",
    amount: 90,
    categoryId: "color",
  },
  {
    id: "v7",
    clientKey: "Eva",
    nameKey: "templates.independent_colorist.services.ic4",
    day: 14,
    status: "completed",
    paymentStatus: "pending",
    cashAllocation: "none",
    amount: 260,
    categoryId: "color",
  },
  {
    id: "v8",
    clientKey: "Ana",
    nameKey: "templates.independent_colorist.services.ic2",
    day: 15,
    status: "no_show",
    paymentStatus: "paid",
    cashAllocation: "card",
    amount: 50,
    categoryId: "color",
  },
] as const

export const FINANCE_EXPENSE_ROWS: readonly FinanceExpenseRow[] = [
  {
    id: "e1",
    nameKey: "templates.independent_colorist.expenses.ice1",
    day: 3,
    amount: 180,
    categoryId: "color",
  },
  {
    id: "e2",
    nameKey: "templates.independent_colorist.expenses.ice2",
    day: 8,
    amount: 60,
    categoryId: "color",
  },
] as const

export const FINANCE_OPEN_ORDER: FinanceOpenOrder = {
  clientKey: "Noah",
  labelKey: "color_correction_package",
  total: 450,
  instalments: [
    { amount: 150, dueDay: 3, paid: true, overdue: false },
    { amount: 100, dueDay: 10, paid: false, overdue: true },
    { amount: 200, dueDay: 25, paid: false, overdue: false },
  ],
}

export interface FinanceCategoryTotals {
  categoryId: FinanceCategoryId
  completedWork: number
  settledRevenue: number
  cashRecorded: number
  expenses: number
  calculatedProfit: number
}

export interface FinanceClientTotals {
  clientKey: FinanceVisitRow["clientKey"]
  completed: number
  settled: number
  cash: number
}

export interface FinanceTotals {
  completedWork: number
  settledRevenue: number
  cashRecorded: number
  expenses: number
  calculatedProfit: number
  openOrderBalance: number
  overdueInstalments: number
  byCategory: FinanceCategoryTotals[]
  byClient: FinanceClientTotals[]
}

function isSettled(row: FinanceVisitRow): boolean {
  return row.paymentStatus === "paid"
}

function contributesCash(row: FinanceVisitRow): boolean {
  return isSettled(row) && row.cashAllocation !== "package" && row.cashAllocation !== "none"
}

/** Reconciled page totals (FM3 §6.4). */
export function getFinanceTotals(): FinanceTotals {
  const completedWork = FINANCE_VISIT_ROWS.reduce((sum, row) => sum + row.amount, 0)
  const settledRevenue = FINANCE_VISIT_ROWS.filter(isSettled).reduce(
    (sum, row) => sum + row.amount,
    0,
  )
  const cashRecorded = FINANCE_VISIT_ROWS.filter(contributesCash).reduce(
    (sum, row) => sum + row.amount,
    0,
  )
  const expenses = FINANCE_EXPENSE_ROWS.reduce((sum, row) => sum + row.amount, 0)
  const calculatedProfit = settledRevenue - expenses

  const paidOnOrder = FINANCE_OPEN_ORDER.instalments
    .filter((instalment) => instalment.paid)
    .reduce((sum, instalment) => sum + instalment.amount, 0)
  const openOrderBalance = FINANCE_OPEN_ORDER.total - paidOnOrder
  const overdueInstalments = FINANCE_OPEN_ORDER.instalments
    .filter((instalment) => instalment.overdue)
    .reduce((sum, instalment) => sum + instalment.amount, 0)

  const categoryIds: FinanceCategoryId[] = ["color", "styling"]
  const byCategory = categoryIds.map((categoryId) => {
    const visits = FINANCE_VISIT_ROWS.filter((row) => row.categoryId === categoryId)
    const categoryExpenses = FINANCE_EXPENSE_ROWS.filter(
      (row) => row.categoryId === categoryId,
    ).reduce((sum, row) => sum + row.amount, 0)
    const settled = visits.filter(isSettled).reduce((sum, row) => sum + row.amount, 0)
    return {
      categoryId,
      completedWork: visits.reduce((sum, row) => sum + row.amount, 0),
      settledRevenue: settled,
      cashRecorded: visits.filter(contributesCash).reduce((sum, row) => sum + row.amount, 0),
      expenses: categoryExpenses,
      calculatedProfit: settled - categoryExpenses,
    }
  })

  const clientKeys = [...new Set(FINANCE_VISIT_ROWS.map((row) => row.clientKey))]
  const byClient = clientKeys.map((clientKey) => {
    const visits = FINANCE_VISIT_ROWS.filter((row) => row.clientKey === clientKey)
    return {
      clientKey,
      completed: visits.reduce((sum, row) => sum + row.amount, 0),
      settled: visits.filter(isSettled).reduce((sum, row) => sum + row.amount, 0),
      cash: visits.filter(contributesCash).reduce((sum, row) => sum + row.amount, 0),
    }
  })

  return {
    completedWork,
    settledRevenue,
    cashRecorded,
    expenses,
    calculatedProfit,
    openOrderBalance,
    overdueInstalments,
    byCategory,
    byClient,
  }
}

/** Intra-month cumulative profit checkpoints (FM3 §6.5). */
export const FINANCE_TREND_CHECKPOINT_DAYS = [1, 6, 11, 16, 21, 26, 31] as const

export function getFinanceTrendProfit(day: number): number {
  const settled = FINANCE_VISIT_ROWS.filter(
    (row) => isSettled(row) && row.day <= day,
  ).reduce((sum, row) => sum + row.amount, 0)
  const expenses = FINANCE_EXPENSE_ROWS.filter((row) => row.day <= day).reduce(
    (sum, row) => sum + row.amount,
    0,
  )
  return settled - expenses
}

export type FinanceFeedDirection = "income" | "expense"

export interface FinanceFeedSpec {
  /** Visit or expense row id, or open-order instalment marker. */
  sourceId: string
  nameKey: string
  day: number
  /** Clock fragment for the date label (cosmetic, fixed). */
  time: string
  amount: number
  direction: FinanceFeedDirection
  badge?: "package_redemption"
}

/** Compact Hero / Finance-overview feed (FM3 §6.7 item 5). */
export const FINANCE_OVERVIEW_FEED: readonly FinanceFeedSpec[] = [
  {
    sourceId: "v1",
    nameKey: "templates.independent_colorist.services.ic3",
    day: 2,
    time: "14:30",
    amount: 220,
    direction: "income",
  },
  {
    sourceId: "e1",
    nameKey: "templates.independent_colorist.expenses.ice1",
    day: 3,
    time: "11:05",
    amount: 180,
    direction: "expense",
  },
  {
    sourceId: "v3",
    nameKey: "templates.independent_colorist.services.ic2",
    day: 6,
    time: "17:45",
    amount: 140,
    direction: "income",
  },
] as const

export type ConnectedRecordKind = "visit_payment" | "package_redemption" | "order_instalment" | "no_show_fee"

export interface ConnectedRecordSpec {
  sourceId: string
  clientKey: FinanceVisitRow["clientKey"]
  nameKey: string
  amount: number
  kind: ConnectedRecordKind
  contributesCash: boolean
  day: number
}

/** Connected-records section rows (FM3 §6.6). */
export const FINANCE_CONNECTED_RECORDS: readonly ConnectedRecordSpec[] = [
  {
    sourceId: "v1",
    clientKey: "Mia",
    nameKey: "templates.independent_colorist.services.ic3",
    amount: 220,
    kind: "visit_payment",
    contributesCash: true,
    day: 2,
  },
  {
    sourceId: "v6",
    clientKey: "Noah",
    nameKey: "templates.independent_colorist.services.ic5",
    amount: 90,
    kind: "package_redemption",
    contributesCash: false,
    day: 12,
  },
  {
    sourceId: "order-i1",
    clientKey: "Noah",
    nameKey: "",
    amount: 150,
    kind: "order_instalment",
    contributesCash: true,
    day: 3,
  },
  {
    sourceId: "v8",
    clientKey: "Ana",
    nameKey: "templates.independent_colorist.services.ic2",
    amount: 50,
    kind: "no_show_fee",
    contributesCash: true,
    day: 15,
  },
] as const

/** KPI tile figures — settled revenue / expenses / calculated profit. */
export function getFinanceKpis(): { revenue: number; cost: number; profit: number } {
  const totals = getFinanceTotals()
  return {
    revenue: totals.settledRevenue,
    cost: totals.expenses,
    profit: totals.calculatedProfit,
  }
}
