import type { LegalIdentity } from "./types"

/**
 * Public operator identity snapshot that the approved documents in
 * `content/legal/versions.json` were hashed against (fact register 01 §1).
 * The production `NEXT_PUBLIC_LEGAL_*` environment must resolve to exactly
 * these values; any difference changes the rendered hash and the canonical
 * /legal/* routes fail closed until a new version is approved.
 */
export const PRODUCTION_LEGAL_IDENTITY_ENV = {
  NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME: "ILLICHOV VALERII (ІЛЛІЧОВ ВАЛЕРІЙ ВАЛЕРІЙОВИЧ)",
  NEXT_PUBLIC_LEGAL_PROVIDER_FORM: "Individual Entrepreneur (FOP)",
  NEXT_PUBLIC_LEGAL_TRADING_NAME: "Perelai",
  NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION: "Ukraine",
  NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER: "2001010010001028235",
  NEXT_PUBLIC_LEGAL_TAX_NUMBER: "3278516853",
  NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS: "Zamarstynivska 170E, apartment 68, Lviv, 79068, Ukraine",
  NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL: "support@perelai.app",
  NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL: "support@perelai.app",
  NEXT_PUBLIC_LEGAL_NOTICES_EMAIL: "support@perelai.app",
  NEXT_PUBLIC_LEGAL_SECURITY_EMAIL: "support@perelai.app",
} as const

export const PRODUCTION_LEGAL_IDENTITY: LegalIdentity = {
  providerFullName: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME,
  providerForm: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_PROVIDER_FORM,
  tradingName: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_TRADING_NAME,
  countryOfRegistration: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION,
  registrationNumber: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER,
  taxNumber: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_TAX_NUMBER,
  businessAddress: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS,
  supportEmail: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL,
  privacyEmail: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL,
  legalNoticesEmail: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_NOTICES_EMAIL,
  securityEmail: PRODUCTION_LEGAL_IDENTITY_ENV.NEXT_PUBLIC_LEGAL_SECURITY_EMAIL,
  euRep: null,
  ukRep: null,
  dpo: null,
}
