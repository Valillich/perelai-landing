import { describe, expect, it } from "vitest"
import {
  FINANCE_CONNECTED_RECORDS,
  FINANCE_OPEN_ORDER,
  FINANCE_TREND_CHECKPOINT_DAYS,
  FINANCE_VISIT_ROWS,
  getFinanceKpis,
  getFinanceTotals,
  getFinanceTrendProfit,
} from "@/lib/finance-fixture"

describe("finance fixture reconciliation (FM3 §6.4–§6.5)", () => {
  const totals = getFinanceTotals()
  const kpis = getFinanceKpis()

  it("matches the binding page totals", () => {
    expect(totals.completedWork).toBe(795)
    expect(totals.settledRevenue).toBe(535)
    expect(totals.cashRecorded).toBe(685)
    expect(totals.expenses).toBe(240)
    expect(totals.calculatedProfit).toBe(295)
    expect(totals.openOrderBalance).toBe(300)
    expect(totals.overdueInstalments).toBe(100)
  })

  it("does not create cash or revenue when a package credit is redeemed", () => {
    const redemption = FINANCE_VISIT_ROWS.find((row) => row.id === "v6")
    const connectedRedemption = FINANCE_CONNECTED_RECORDS.find(
      (row) => row.kind === "package_redemption",
    )

    expect(redemption).toMatchObject({
      paymentStatus: "paid",
      cashAllocation: "package",
      amount: 0,
    })
    expect(connectedRedemption).toMatchObject({
      sourceId: "v6",
      contributesCash: false,
      amount: 0,
    })
  })

  it("counts a paid order instalment as recorded cash without treating it as new revenue", () => {
    const visitCash = FINANCE_VISIT_ROWS.filter(
      (row) => row.paymentStatus === "paid" && row.cashAllocation !== "package",
    ).reduce((sum, row) => sum + row.amount, 0)
    const paidOrderCash = FINANCE_OPEN_ORDER.instalments
      .filter((instalment) => instalment.paid)
      .reduce((sum, instalment) => sum + instalment.amount, 0)

    expect(visitCash).toBe(totals.settledRevenue)
    expect(paidOrderCash).toBe(150)
    expect(totals.cashRecorded).toBe(visitCash + paidOrderCash)
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
    expect(kpis).toEqual({
      revenue: totals.settledRevenue,
      cost: totals.expenses,
      profit: totals.calculatedProfit,
    })
    expect(getFinanceTotals()).toEqual(totals)
  })

  it("matches documented checkpoints", () => {
    expect(getFinanceTrendProfit(1)).toBe(0)
    expect(getFinanceTrendProfit(6)).toBe(240)
    expect(getFinanceTrendProfit(11)).toBe(245)
    expect(getFinanceTrendProfit(16)).toBe(295)
  })
})
