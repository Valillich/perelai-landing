import type { LegalIdentity } from "./types"

/**
 * Escapes characters that could be interpreted as raw HTML markup.
 * Ensures interpolated values are always treated as plain text.
 */
export function escapeTextForInterpolation(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

const EU_REP_BLOCK_REGEX =
  /`\[Render only if appointed:\s*Our EU representative is\s*\{\{EU_REP_NAME\}\},\s*\{\{EU_REP_ADDRESS\}\},\s*\{\{EU_REP_EMAIL\}\}\.\s*\]`(\r?\n)?/g

const UK_REP_BLOCK_REGEX =
  /`\[Render only if appointed:\s*Our UK representative is\s*\{\{UK_REP_NAME\}\},\s*\{\{UK_REP_ADDRESS\}\},\s*\{\{UK_REP_EMAIL\}\}\.\s*\]`(\r?\n)?/g

const DPO_BLOCK_REGEX =
  /`\[Render only if formally appointed:\s*Our data protection officer is\s*\{\{DPO_NAME\}\},\s*\{\{DPO_EMAIL\}\}\.\s*\]`(\r?\n)?/g

/**
 * Interpolates legal identity tokens and optional blocks into markdown.
 * 
 * Rules:
 * 1. Optional EU/UK/DPO blocks are all-or-nothing:
 *    - If configured, rendered as plain prose without the `[Render only...]` block wrapper.
 *    - If omitted, completely removed.
 * 2. Individual tokens are replaced with escaped text.
 * 3. Never injects raw HTML.
 */
export function interpolateLegalTokens(markdown: string, identity: LegalIdentity): string {
  let result = markdown

  // 1. Process optional blocks first
  if (identity.euRep) {
    const replacement = `Our EU representative is ${escapeTextForInterpolation(identity.euRep.name)}, ${escapeTextForInterpolation(identity.euRep.address)}, ${escapeTextForInterpolation(identity.euRep.email)}.\n`
    result = result.replace(EU_REP_BLOCK_REGEX, replacement)
  } else {
    result = result.replace(EU_REP_BLOCK_REGEX, "")
  }

  if (identity.ukRep) {
    const replacement = `Our UK representative is ${escapeTextForInterpolation(identity.ukRep.name)}, ${escapeTextForInterpolation(identity.ukRep.address)}, ${escapeTextForInterpolation(identity.ukRep.email)}.\n`
    result = result.replace(UK_REP_BLOCK_REGEX, replacement)
  } else {
    result = result.replace(UK_REP_BLOCK_REGEX, "")
  }

  if (identity.dpo) {
    const replacement = `Our data protection officer is ${escapeTextForInterpolation(identity.dpo.name)}, ${escapeTextForInterpolation(identity.dpo.email)}.\n`
    result = result.replace(DPO_BLOCK_REGEX, replacement)
  } else {
    result = result.replace(DPO_BLOCK_REGEX, "")
  }

  // 2. Token mapping per 01_legal_facts_env_contract.md §1
  const tokenMap: Record<string, string> = {
    "{{LEGAL_PROVIDER_FULL_NAME}}": escapeTextForInterpolation(identity.providerFullName),
    "{{LEGAL_PROVIDER_FORM}}": escapeTextForInterpolation(identity.providerForm),
    "{{TRADING_NAME}}": escapeTextForInterpolation(identity.tradingName),
    "{{COUNTRY_OF_REGISTRATION}}": escapeTextForInterpolation(identity.countryOfRegistration),
    "{{REGISTRATION_NUMBER}}": escapeTextForInterpolation(identity.registrationNumber),
    "{{TAX_NUMBER}}": escapeTextForInterpolation(identity.taxNumber),
    "{{BUSINESS_ADDRESS}}": escapeTextForInterpolation(identity.businessAddress),
    "{{SUPPORT_EMAIL}}": escapeTextForInterpolation(identity.supportEmail),
    "{{PRIVACY_EMAIL}}": escapeTextForInterpolation(identity.privacyEmail),
    "{{LEGAL_NOTICES_EMAIL}}": escapeTextForInterpolation(identity.legalNoticesEmail),
    "{{SECURITY_EMAIL}}": escapeTextForInterpolation(identity.securityEmail),
    "{{EU_REP_NAME}}": identity.euRep ? escapeTextForInterpolation(identity.euRep.name) : "",
    "{{EU_REP_ADDRESS}}": identity.euRep ? escapeTextForInterpolation(identity.euRep.address) : "",
    "{{EU_REP_EMAIL}}": identity.euRep ? escapeTextForInterpolation(identity.euRep.email) : "",
    "{{UK_REP_NAME}}": identity.ukRep ? escapeTextForInterpolation(identity.ukRep.name) : "",
    "{{UK_REP_ADDRESS}}": identity.ukRep ? escapeTextForInterpolation(identity.ukRep.address) : "",
    "{{UK_REP_EMAIL}}": identity.ukRep ? escapeTextForInterpolation(identity.ukRep.email) : "",
    "{{DPO_NAME}}": identity.dpo ? escapeTextForInterpolation(identity.dpo.name) : "",
    "{{DPO_EMAIL}}": identity.dpo ? escapeTextForInterpolation(identity.dpo.email) : "",
  }

  for (const [token, value] of Object.entries(tokenMap)) {
    if (result.includes(token)) {
      result = result.replaceAll(token, value)
    }
  }

  return result
}

/**
 * Finds any unresolved tokens like {{TOKEN_NAME}} in text.
 */
export function findUnresolvedTokens(content: string): string[] {
  const matches = content.match(/\{\{[A-Z0-9_]+\}\}/g)
  if (!matches) return []
  return Array.from(new Set(matches))
}

/**
 * Finds any unresolved [TBD...] markers in text.
 */
export function findUnresolvedTbdMarkers(content: string): string[] {
  const matches = content.match(/\[TBD[^\]]*\]/gi)
  if (!matches) return []
  return Array.from(new Set(matches))
}
