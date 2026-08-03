import { describe, expect, it } from "vitest"
import {
  FINANCE_TREND_CHECKPOINT_DAYS,
  getFinanceKpis,
  getFinanceTotals,
  getFinanceTrendProfit,
} from "@/lib/finance-fixture"

describe("finance fixture reconciliation (FM3 §6.4–§6.5)", () => {
  const totals = getFinanceTotals()
  const kpis = getFinanceKpis()

  it("matches the binding page totals", () => {
    expect(totals.completedWork).toBe(885)
    expect(totals.settledRevenue).toBe(625)
    expect(totals.cashRecorded).toBe(535)
    expect(totals.expenses).toBe(240)
    expect(totals.calculatedProfit).toBe(385)
    expect(totals.openOrderBalance).toBe(300)
    expect(totals.overdueInstalments).toBe(100)
  })

  it("keeps completed = settled + pending", () => {
    const pending = totals.completedWork - totals.settledRevenue
    expect(pending).toBe(260)
    expect(totals.settledRevenue + pending).toBe(totals.completedWork)
  })

  it("keeps settled = cash + non-cash package redemption", () => {
    const nonCash = totals.settledRevenue - totals.cashRecorded
    expect(nonCash).toBe(90)
    expect(totals.cashRecorded + nonCash).toBe(totals.settledRevenue)
  })

  it("sums category totals to page totals", () => {
    expect(
      totals.byCategory.reduce((sum, row) => sum + row.completedWork, 0),
    ).toBe(totals.completedWork)
    expect(
      totals.byCategory.reduce((sum, row) => sum + row.settledRevenue, 0),
    ).toBe(totals.settledRevenue)
    expect(
      totals.byCategory.reduce((sum, row) => sum + row.cashRecorded, 0),
    ).toBe(totals.cashRecorded)
    expect(totals.byCategory.reduce((sum, row) => sum + row.expenses, 0)).toBe(
      totals.expenses,
    )
    expect(
      totals.byCategory.reduce((sum, row) => sum + row.calculatedProfit, 0),
    ).toBe(totals.calculatedProfit)
  })

  it("sums client totals to page totals", () => {
    expect(totals.byClient.reduce((sum, row) => sum + row.completed, 0)).toBe(
      totals.completedWork,
    )
    expect(totals.byClient.reduce((sum, row) => sum + row.settled, 0)).toBe(
      totals.settledRevenue,
    )
    expect(totals.byClient.reduce((sum, row) => sum + row.cash, 0)).toBe(
      totals.cashRecorded,
    )
  })

  it("ends the intra-month trend on the profit KPI", () => {
    const lastDay = FINANCE_TREND_CHECKPOINT_DAYS[FINANCE_TREND_CHECKPOINT_DAYS.length - 1]
    expect(getFinanceTrendProfit(lastDay)).toBe(kpis.profit)
    expect(kpis).toEqual({ revenue: 625, cost: 240, profit: 385 })
  })

  it("matches documented checkpoints", () => {
    expect(getFinanceTrendProfit(1)).toBe(0)
    expect(getFinanceTrendProfit(6)).toBe(240)
    expect(getFinanceTrendProfit(11)).toBe(245)
    expect(getFinanceTrendProfit(16)).toBe(385)
  })
})
