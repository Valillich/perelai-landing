import { describe, expect, test } from "vitest"
import homeEn from "@/messages/en/home.json"
import { siteConfig } from "@/lib/site"

describe("English Message Contract & Freeze Verification (POS2)", () => {
  test("matches POS2 English source set (editorial candidates)", () => {
    // POS2 Hero (EN draft, final POS3 review)
    expect(homeEn.hero.eyebrow).toBe("For independent professionals and small teams")
    expect(homeEn.hero.title).toBe("Order in your schedule.")
    expect(homeEn.hero.accent).toBe("Clarity in your payments.")
    expect(homeEn.hero.body).toBe(
      "Schedule appointments, build client history and record payments."
    )
    expect(homeEn.hero.signup).toBe("Start 21-day trial")
    expect(homeEn.hero.how).toBe("See how it works")
    expect(homeEn.hero.trialMicro).toBe(
      "21 days of STUDIO, no card required. Subscribe when your trial ends."
    )
    expect(homeEn.hero.deviceMicro).toBe("Perelai runs in your browser. Installing it is optional.")
    expect(homeEn.hero.imageAlt).toBe(
      "Example Perelai appointment calendar and finance overview."
    )

    // POS2 Sections
    expect(homeEn.finance.title).toBe("Revenue, costs and profit for your chosen period.")
    expect(homeEn.finance.body).toBe("Review revenue, recorded costs and calculated profit. Using a prepaid package does not add new revenue.")
    expect(homeEn.states.title).toBe("Completed work, revenue, payments and open-order balances are tracked separately.")
    expect(homeEn.drivers.title).toBe("See what makes up your results.")
    expect(homeEn.records.title).toBe("See what each payment was for.")
    expect(homeEn.operations.title).toBe("From appointment to completed visit.")

    // POS2 Summary & Fixture (unchanged)
    expect(homeEn.finance.fixture.category.color).toBe("Color services")
    expect(homeEn.finance.fixture.category.styling).toBe("Styling & finishing")

    // POS2 FAQ
    expect(homeEn.faq.q_category.question).toBe("Is this accounting software?")
    expect(homeEn.faq.q_bank.question).toBe("Will the number match my bank?")

    // POS2 Metadata, Closing, Footer, Site Config
    expect(homeEn.meta.title).toBe("Perelai — Appointments, Clients & Payment Tracking")
    expect(homeEn.meta.description).toBe(
      "Appointments, client history, payment records and prepaid service packages for independent professionals and small teams."
    )
    expect(homeEn.closing.title).toBe("Try Perelai in your next working week.")
    expect(homeEn.footer.description).toBe("Appointments, clients and payment tracking for independent professionals and small teams.")
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
      expect(str).not.toMatch(/\boutstanding balances?\b/i)
      expect(str).not.toMatch(/\bwhat is still outstanding\b/i)

      // 7. Commercial bans (pre-commercial compliance)
      expect(str).not.toMatch(/\bguaranteed payment\b|debt collection|chase payments|accounts receivable/i)

      // 8. Explicit denial rule for accounting / bookkeeping / tax / reconcile / advice terms:
      const sensitiveTerms = ["accounting", "bookkeeping", "tax", "reconcile", "financial advice"]
      for (const term of sensitiveTerms) {
        if (new RegExp(`\\b${term}\\b`, "i").test(str)) {
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
