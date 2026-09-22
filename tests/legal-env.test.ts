import { describe, expect, it } from "vitest"
import { sanitizeTextValue, validateEmail, validateLegalIdentityEnv } from "@/lib/legal/env"

describe("Legal Identity Env Validation", () => {
  const validProductionEnv = {
    NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME: "FOP Valerii Bondar",
    NEXT_PUBLIC_LEGAL_PROVIDER_FORM: "Individual Entrepreneur (FOP)",
    NEXT_PUBLIC_LEGAL_TRADING_NAME: "Perelai",
    NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION: "Ukraine",
    NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER: "1234567890",
    NEXT_PUBLIC_LEGAL_TAX_NUMBER: "9876543210",
    NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS: "123 Khreshchatyk St, Kyiv, 01001, Ukraine",
    NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL: "support@perelai.app",
    NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL: "privacy@perelai.app",
    NEXT_PUBLIC_LEGAL_NOTICES_EMAIL: "legal@perelai.app",
    NEXT_PUBLIC_LEGAL_SECURITY_EMAIL: "security@perelai.app",
  }

  describe("sanitizeTextValue", () => {
    it("trims whitespace", () => {
      expect(sanitizeTextValue("  Perelai  ", "KEY")).toBe("Perelai")
    })

    it("rejects control characters", () => {
      expect(() => sanitizeTextValue("Perelai\x00Corp", "KEY")).toThrow(
        /prohibited control character/
      )
    })

    it("rejects HTML markup", () => {
      expect(() => sanitizeTextValue("<script>alert(1)</script>", "KEY")).toThrow(
        /prohibited HTML markup/
      )
      expect(() => sanitizeTextValue("Perelai <b>LLC</b>", "KEY")).toThrow(
        /prohibited HTML markup/
      )
    })
  })

  describe("validateEmail", () => {
    it("validates well-formed emails", () => {
      expect(validateEmail("legal@perelai.com", "EMAIL")).toBe("legal@perelai.com")
    })

    it("rejects malformed emails", () => {
      expect(() => validateEmail("not-an-email", "EMAIL")).toThrow(/not a valid email address/)
    })

    it("rejects localhost and example domains in production mode", () => {
      expect(() =>
        validateEmail("admin@example.com", "EMAIL", { isProduction: true })
      ).toThrow(/cannot use local or example email domain/)

      expect(() =>
        validateEmail("user@localhost", "EMAIL", { isProduction: true })
      ).toThrow(/cannot use local or example email domain/)

      expect(() =>
        validateEmail("support@example.org", "EMAIL", { isProduction: true })
      ).toThrow(/cannot use local or example email domain/)

      expect(() =>
        validateEmail("test@service.test", "EMAIL", { isProduction: true })
      ).toThrow(/cannot use local or example email domain/)
    })
  })

  describe("validateLegalIdentityEnv in production mode", () => {
    it("succeeds with a valid complete environment", () => {
      const identity = validateLegalIdentityEnv(validProductionEnv, { isProduction: true })
      expect(identity.providerFullName).toBe("FOP Valerii Bondar")
      expect(identity.providerForm).toBe("Individual Entrepreneur (FOP)")
      expect(identity.tradingName).toBe("Perelai")
      expect(identity.countryOfRegistration).toBe("Ukraine")
      expect(identity.supportEmail).toBe("support@perelai.app")
      expect(identity.euRep).toBeNull()
      expect(identity.ukRep).toBeNull()
      expect(identity.dpo).toBeNull()
    })

    it("rejects missing required variables", () => {
      const incomplete = { ...validProductionEnv }
      delete (incomplete as Record<string, string | undefined>).NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME

      expect(() => validateLegalIdentityEnv(incomplete, { isProduction: true })).toThrow(
        /Production requires valid NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME/
      )
    })

    it("rejects unresolved [TBD] markers in required identity variables", () => {
      const withTbd = {
        ...validProductionEnv,
        NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER: "[TBD: Ukrainian registration number]",
      }

      expect(() => validateLegalIdentityEnv(withTbd, { isProduction: true })).toThrow(
        /Production requires valid NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER/
      )
    })
  })

  describe("Optional blocks: all-or-nothing", () => {
    it("handles EU representative all-or-nothing", () => {
      // Partial: only name provided -> throws
      expect(() =>
        validateLegalIdentityEnv(
          {
            ...validProductionEnv,
            NEXT_PUBLIC_LEGAL_EU_REP_NAME: "EU Rep SRL",
          },
          { isProduction: true }
        )
      ).toThrow(/all-or-nothing/)

      // Partial: name and address provided -> throws
      expect(() =>
        validateLegalIdentityEnv(
          {
            ...validProductionEnv,
            NEXT_PUBLIC_LEGAL_EU_REP_NAME: "EU Rep SRL",
            NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS: "Warsaw, Poland",
          },
          { isProduction: true }
        )
      ).toThrow(/all-or-nothing/)

      // Complete: all 3 provided -> valid
      const complete = validateLegalIdentityEnv(
        {
          ...validProductionEnv,
          NEXT_PUBLIC_LEGAL_EU_REP_NAME: "EU Rep SRL",
          NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS: "Warsaw, Poland",
          NEXT_PUBLIC_LEGAL_EU_REP_EMAIL: "eurep@perelai.eu",
        },
        { isProduction: true }
      )
      expect(complete.euRep).toEqual({
        name: "EU Rep SRL",
        address: "Warsaw, Poland",
        email: "eurep@perelai.eu",
      })
    })

    it("handles UK representative all-or-nothing", () => {
      expect(() =>
        validateLegalIdentityEnv(
          {
            ...validProductionEnv,
            NEXT_PUBLIC_LEGAL_UK_REP_NAME: "UK Rep Ltd",
          },
          { isProduction: true }
        )
      ).toThrow(/all-or-nothing/)

      const complete = validateLegalIdentityEnv(
        {
          ...validProductionEnv,
          NEXT_PUBLIC_LEGAL_UK_REP_NAME: "UK Rep Ltd",
          NEXT_PUBLIC_LEGAL_UK_REP_ADDRESS: "London, UK",
          NEXT_PUBLIC_LEGAL_UK_REP_EMAIL: "ukrep@perelai.co.uk",
        },
        { isProduction: true }
      )
      expect(complete.ukRep).toEqual({
        name: "UK Rep Ltd",
        address: "London, UK",
        email: "ukrep@perelai.co.uk",
      })
    })

    it("handles DPO all-or-nothing", () => {
      expect(() =>
        validateLegalIdentityEnv(
          {
            ...validProductionEnv,
            NEXT_PUBLIC_LEGAL_DPO_NAME: "Jane Doe",
          },
          { isProduction: true }
        )
      ).toThrow(/all-or-nothing/)

      const complete = validateLegalIdentityEnv(
        {
          ...validProductionEnv,
          NEXT_PUBLIC_LEGAL_DPO_NAME: "Jane Doe",
          NEXT_PUBLIC_LEGAL_DPO_EMAIL: "dpo@perelai.app",
        },
        { isProduction: true }
      )
      expect(complete.dpo).toEqual({
        name: "Jane Doe",
        email: "dpo@perelai.app",
      })
    })
  })
})
