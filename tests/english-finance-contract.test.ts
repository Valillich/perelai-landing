import { describe, expect, test } from "vitest"
import homeEn from "@/messages/en/home.json"
import { siteConfig } from "@/lib/site"

describe("English Finance Message Contract & Freeze Verification (FM4A)", () => {
  test("matches approved English source set verbatim (docs/home-hero-copy-audit.md §II.7)", () => {
    // II.7.1 Hero
    expect(homeEn.hero.eyebrow).toBe("Simple finance software for independent service businesses")
    expect(homeEn.hero.title).toBe("Revenue, costs and profit")
    expect(homeEn.hero.accent).toBe("— connected to the work behind them.")
    expect(homeEn.hero.body).toBe(
      "Track revenue, costs and profit for any period. Break the result down by service category and client, while completed work, settled revenue and recorded payments stay separate."
    )
    expect(homeEn.hero.signup).toBe("Create workspace")
    expect(homeEn.hero.how).toBe("See how it works")
    expect(homeEn.hero.micro).toBe("You'll get a verification email to finish setting up.")
    expect(homeEn.hero.deviceMicro).toBe("Perelai runs in your browser. Installing it is optional.")
    expect(homeEn.hero.imageAlt).toBe(
      "Perelai finance overview showing revenue, costs and calculated profit for a period, a service-category breakdown and an open-order balance — example data."
    )

    // II.7.2 Sections
    expect(homeEn.finance.title).toBe("Revenue, costs and profit for any period")
    expect(homeEn.finance.body).toBe("Review revenue, costs and calculated profit for a day, week, month, quarter or year.")
    expect(homeEn.states.title).toBe("Completed, settled, recorded and owed are different states")
    expect(homeEn.states.body).toBe(
      "A visit can be completed and not yet settled. A visit settled with a prepaid package moves no money. An open order can still be owed months later. Perelai keeps completed work, settled revenue, recorded payments and open-order balances apart, so each number means one thing."
    )
    expect(homeEn.drivers.title).toBe("See where the result comes from")
    expect(homeEn.drivers.body).toBe(
      "Review revenue by service category, costs by category, a client's revenue history and how the result changes over time."
    )
    expect(homeEn.records.title).toBe("Every figure has work behind it")
    expect(homeEn.records.body).toBe(
      "Payments are recorded against the visit, order or instalment they paid for, and stay connected to the relevant client and service category."
    )
    expect(homeEn.operations.title).toBe("Build the financial record as you work")
    expect(homeEn.operations.body).toBe(
      "Complete a visit, record a payment, add a cost or redeem a package. Booking, Calendar and Inbox keep these actions connected to clients and services. Clients can also book through your own link."
    )

    // II.7.3 Summary & Fixture
    expect(homeEn.finance.summary).toBe(
      "Example Perelai finance overview showing monthly revenue, costs and calculated profit, a service-category breakdown and an open-order balance."
    )
    expect(homeEn.finance.fixture.category.color).toBe("Color services")
    expect(homeEn.finance.fixture.category.styling).toBe("Styling & finishing")

    // II.7.4 FAQ
    expect(homeEn.faq.q_category.question).toBe("Is this accounting software?")
    expect(homeEn.faq.q_category.answer).toBe(
      "No. Perelai is operational finance software. It tracks revenue, costs, calculated profit, recorded payments and what is still owed on open orders, with category and client breakdowns. It does not file taxes, reconcile bank accounts, produce statutory reports or give financial advice."
    )
    expect(homeEn.faq.q_bank.question).toBe("Will the number match my bank?")
    expect(homeEn.faq.q_bank.answer).toBe(
      "Not always. Summary revenue represents completed work that has been settled, and a prepaid package can settle a visit without moving money. Recorded payments and payment-account balances show money movement separately."
    )

    // II.7.5 Metadata, Closing, Footer, Site Config
    expect(homeEn.meta.title).toBe("Perelai — Simple Finance Software for Service Businesses")
    expect(homeEn.meta.description).toBe(
      "Track revenue, costs and profit for any period, with category and client breakdowns connected to the work behind them."
    )
    expect(homeEn.closing.title).toBe("Your financial result, connected to the work behind it.")
    expect(homeEn.footer.description).toBe("Simple finance software for independent service businesses.")
    expect(siteConfig.description).toBe(homeEn.meta.description)
  })

  test("enforces public copy forbidden terms per repaired claim contract and terminology table", () => {
    // Flatten all string values in English home messages and siteConfig
    const extractStrings = (obj: unknown): string[] => {
      if (typeof obj === "string") return [obj]
      if (typeof obj === "object" && obj !== null) {
        return Object.values(obj).flatMap(extractStrings)
      }
      return []
    }

    const allPublicStrings = [
      ...extractStrings(homeEn),
      siteConfig.title,
      siteConfig.description,
    ]

    for (const str of allPublicStrings) {
      // 1. FC1/FC5 bans: earned, income, brought in
      expect(str).not.toMatch(/\bearned\b/i)
      expect(str).not.toMatch(/\bincome\b/i)
      expect(str).not.toMatch(/\bbrought in\b/i)

      // 2. FC4 ban: revenue by service (unless followed by "category")
      expect(str).not.toMatch(/revenue by service(?!\s+categor)/i)

      // 3. FC8 ban: export / download your data
      expect(str).not.toMatch(/\bexport\b/i)
      expect(str).not.toMatch(/download your data/i)

      // 4. FC9 ban: accounting profit, net profit, tax profit, P&L, margin analysis
      expect(str).not.toMatch(/net profit|accounting profit|tax profit|\bP&L\b|margin analysis|tax-ready profit/i)

      // 5. FC10 ban: refunds, void and reverse, audit trail as public claims
      expect(str).not.toMatch(/\brefunds?\b|void and reverse|audit trail/i)

      // 6. FC3 ban: unscoped "outstanding" or bare "balance"
      // Exception: "open-order balance(s)" and "payment-account balance(s)" are allowed compounds.
      // Unscoped "outstanding" or bare "balances" without qualification is forbidden.
      expect(str).not.toMatch(/\boutstanding balances?\b/i)
      expect(str).not.toMatch(/\bwhat is still outstanding\b/i)

      // 7. Commercial bans (pre-commercial compliance)
      expect(str).not.toMatch(/\bguaranteed payment\b|debt collection|chase payments|accounts receivable/i)

      // 8. Explicit denial rule for accounting / bookkeeping / tax / reconcile / advice terms:
      // These terms MUST NOT appear as affirmative features; they are allowed only in explicit denial sentences or questions ("Is this accounting software?", "No. Perelai is operational finance software... It does not file taxes...")
      const sensitiveTerms = ["accounting", "bookkeeping", "tax", "reconcile", "financial advice"]
      for (const term of sensitiveTerms) {
        if (new RegExp(`\\b${term}\\b`, "i").test(str)) {
          // Verify it is inside an explicit negative/denial context ("not", "does not", "no", or a question ending with "?")
          const isDenialContext = /not|no|does not|\?/i.test(str)
          expect(
            isDenialContext,
            `Term "${term}" found in affirmative feature context in string: "${str}"`
          ).toBe(true)
        }
      }
    }
  })
})
