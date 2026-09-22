import type {
  DpoIdentity,
  EuRepresentativeIdentity,
  LegalIdentity,
  UkRepresentativeIdentity,
} from "./types"

export type EnvironmentSource = Record<string, string | undefined>

export interface ValidateLegalIdentityOptions {
  isProduction?: boolean
}

const DISALLOWED_PRODUCTION_EMAIL_DOMAINS = [
  "example.com",
  "example.org",
  "example.net",
  "localhost",
  "local",
  "test",
  "invalid",
]

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

export function sanitizeTextValue(value: string | undefined, key: string): string {
  if (value === undefined || value === null) return ""
  const trimmed = value.trim()

  // Reject control characters (ASCII 0-31 except tab and newline) and DEL (127)
  for (let i = 0; i < trimmed.length; i++) {
    const code = trimmed.charCodeAt(i)
    if ((code < 32 && code !== 9 && code !== 10 && code !== 13) || code === 127) {
      throw new Error(`Environment variable ${key} contains prohibited control character at index ${i}`)
    }
  }

  // Reject HTML tags / elements to prevent injection
  if (trimmed.includes("<") || trimmed.includes(">")) {
    throw new Error(`Environment variable ${key} contains prohibited HTML markup`)
  }

  return trimmed
}

export function validateEmail(
  email: string,
  key: string,
  options: ValidateLegalIdentityOptions = {}
): string {
  const sanitized = sanitizeTextValue(email, key)
  if (!sanitized) {
    throw new Error(`Email environment variable ${key} cannot be empty`)
  }

  const atIndex = sanitized.indexOf("@")
  if (atIndex === -1 || atIndex === 0 || atIndex === sanitized.length - 1) {
    throw new Error(`Environment variable ${key} is not a valid email address: "${sanitized}"`)
  }

  const domain = sanitized.slice(atIndex + 1).toLowerCase()

  if (options.isProduction) {
    if (
      domain === "localhost" ||
      domain.endsWith(".localhost") ||
      DISALLOWED_PRODUCTION_EMAIL_DOMAINS.some(
        (disallowed) => domain === disallowed || domain.endsWith(`.${disallowed}`)
      )
    ) {
      throw new Error(
        `Production environment variable ${key} cannot use local or example email domain: "${sanitized}"`
      )
    }
  }

  if (!EMAIL_REGEX.test(sanitized)) {
    throw new Error(`Environment variable ${key} is not a valid email address: "${sanitized}"`)
  }

  return sanitized
}

function parseOptionalEuRep(
  source: EnvironmentSource,
  options: ValidateLegalIdentityOptions
): EuRepresentativeIdentity | null {
  const name = sanitizeTextValue(source.NEXT_PUBLIC_LEGAL_EU_REP_NAME, "NEXT_PUBLIC_LEGAL_EU_REP_NAME")
  const address = sanitizeTextValue(source.NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS, "NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS")
  const email = sanitizeTextValue(source.NEXT_PUBLIC_LEGAL_EU_REP_EMAIL, "NEXT_PUBLIC_LEGAL_EU_REP_EMAIL")

  const presentCount = [name, address, email].filter((v) => v.length > 0).length

  if (presentCount === 0) {
    return null
  }

  if (presentCount !== 3) {
    throw new Error(
      "Optional EU representative block is all-or-nothing: NEXT_PUBLIC_LEGAL_EU_REP_NAME, NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS, and NEXT_PUBLIC_LEGAL_EU_REP_EMAIL must all be defined or all omitted"
    )
  }

  return {
    name,
    address,
    email: validateEmail(email, "NEXT_PUBLIC_LEGAL_EU_REP_EMAIL", options),
  }
}

function parseOptionalUkRep(
  source: EnvironmentSource,
  options: ValidateLegalIdentityOptions
): UkRepresentativeIdentity | null {
  const name = sanitizeTextValue(source.NEXT_PUBLIC_LEGAL_UK_REP_NAME, "NEXT_PUBLIC_LEGAL_UK_REP_NAME")
  const address = sanitizeTextValue(source.NEXT_PUBLIC_LEGAL_UK_REP_ADDRESS, "NEXT_PUBLIC_LEGAL_UK_REP_ADDRESS")
  const email = sanitizeTextValue(source.NEXT_PUBLIC_LEGAL_UK_REP_EMAIL, "NEXT_PUBLIC_LEGAL_UK_REP_EMAIL")

  const presentCount = [name, address, email].filter((v) => v.length > 0).length

  if (presentCount === 0) {
    return null
  }

  if (presentCount !== 3) {
    throw new Error(
      "Optional UK representative block is all-or-nothing: NEXT_PUBLIC_LEGAL_UK_REP_NAME, NEXT_PUBLIC_LEGAL_UK_REP_ADDRESS, and NEXT_PUBLIC_LEGAL_UK_REP_EMAIL must all be defined or all omitted"
    )
  }

  return {
    name,
    address,
    email: validateEmail(email, "NEXT_PUBLIC_LEGAL_UK_REP_EMAIL", options),
  }
}

function parseOptionalDpo(
  source: EnvironmentSource,
  options: ValidateLegalIdentityOptions
): DpoIdentity | null {
  const name = sanitizeTextValue(source.NEXT_PUBLIC_LEGAL_DPO_NAME, "NEXT_PUBLIC_LEGAL_DPO_NAME")
  const email = sanitizeTextValue(source.NEXT_PUBLIC_LEGAL_DPO_EMAIL, "NEXT_PUBLIC_LEGAL_DPO_EMAIL")

  const presentCount = [name, email].filter((v) => v.length > 0).length

  if (presentCount === 0) {
    return null
  }

  if (presentCount !== 2) {
    throw new Error(
      "Optional DPO block is all-or-nothing: NEXT_PUBLIC_LEGAL_DPO_NAME and NEXT_PUBLIC_LEGAL_DPO_EMAIL must both be defined or both omitted"
    )
  }

  return {
    name,
    email: validateEmail(email, "NEXT_PUBLIC_LEGAL_DPO_EMAIL", options),
  }
}

/**
 * Validates legal identity environment variables per 01_legal_facts_env_contract.md §1.
 * Never provides production fallbacks for name, address, registration or jurisdiction.
 */
export function validateLegalIdentityEnv(
  source: EnvironmentSource,
  options: ValidateLegalIdentityOptions = {}
): LegalIdentity {
  const isProduction = options.isProduction ?? (process.env.NODE_ENV === "production")
  const subOpts = { isProduction }

  const providerFullName = sanitizeTextValue(
    source.NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME,
    "NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME"
  )
  const providerForm = sanitizeTextValue(
    source.NEXT_PUBLIC_LEGAL_PROVIDER_FORM,
    "NEXT_PUBLIC_LEGAL_PROVIDER_FORM"
  )
  const tradingName = sanitizeTextValue(
    source.NEXT_PUBLIC_LEGAL_TRADING_NAME,
    "NEXT_PUBLIC_LEGAL_TRADING_NAME"
  )
  const countryOfRegistration = sanitizeTextValue(
    source.NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION,
    "NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION"
  )
  const registrationNumber = sanitizeTextValue(
    source.NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER,
    "NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER"
  )
  const taxNumber = sanitizeTextValue(
    source.NEXT_PUBLIC_LEGAL_TAX_NUMBER,
    "NEXT_PUBLIC_LEGAL_TAX_NUMBER"
  )
  const businessAddress = sanitizeTextValue(
    source.NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS,
    "NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS"
  )

  const supportEmailRaw = source.NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL
  const privacyEmailRaw = source.NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL
  const legalNoticesEmailRaw = source.NEXT_PUBLIC_LEGAL_NOTICES_EMAIL
  const securityEmailRaw = source.NEXT_PUBLIC_LEGAL_SECURITY_EMAIL

  if (isProduction) {
    const requiredChecks: Array<[string, string]> = [
      ["NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME", providerFullName],
      ["NEXT_PUBLIC_LEGAL_PROVIDER_FORM", providerForm],
      ["NEXT_PUBLIC_LEGAL_TRADING_NAME", tradingName],
      ["NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION", countryOfRegistration],
      ["NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER", registrationNumber],
      ["NEXT_PUBLIC_LEGAL_TAX_NUMBER", taxNumber],
      ["NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS", businessAddress],
    ]

    for (const [key, val] of requiredChecks) {
      if (!val || val.includes("[TBD")) {
        throw new Error(`Production requires valid ${key}; unresolved placeholder or empty string not allowed`)
      }
    }

    if (!supportEmailRaw || supportEmailRaw.includes("[TBD")) {
      throw new Error("Production requires valid NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL")
    }
    if (!privacyEmailRaw || privacyEmailRaw.includes("[TBD")) {
      throw new Error("Production requires valid NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL")
    }
    if (!legalNoticesEmailRaw || legalNoticesEmailRaw.includes("[TBD")) {
      throw new Error("Production requires valid NEXT_PUBLIC_LEGAL_NOTICES_EMAIL")
    }
    if (!securityEmailRaw || securityEmailRaw.includes("[TBD")) {
      throw new Error("Production requires valid NEXT_PUBLIC_LEGAL_SECURITY_EMAIL")
    }
  }

  // Parse and validate emails
  const supportEmail = supportEmailRaw
    ? validateEmail(supportEmailRaw, "NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL", subOpts)
    : ""
  const privacyEmail = privacyEmailRaw
    ? validateEmail(privacyEmailRaw, "NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL", subOpts)
    : ""
  const legalNoticesEmail = legalNoticesEmailRaw
    ? validateEmail(legalNoticesEmailRaw, "NEXT_PUBLIC_LEGAL_NOTICES_EMAIL", subOpts)
    : ""
  const securityEmail = securityEmailRaw
    ? validateEmail(securityEmailRaw, "NEXT_PUBLIC_LEGAL_SECURITY_EMAIL", subOpts)
    : ""

  const euRep = parseOptionalEuRep(source, subOpts)
  const ukRep = parseOptionalUkRep(source, subOpts)
  const dpo = parseOptionalDpo(source, subOpts)

  return {
    providerFullName,
    providerForm,
    tradingName,
    countryOfRegistration,
    registrationNumber,
    taxNumber,
    businessAddress,
    supportEmail,
    privacyEmail,
    legalNoticesEmail,
    securityEmail,
    euRep,
    ukRep,
    dpo,
  }
}
