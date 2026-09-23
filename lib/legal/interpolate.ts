import type { LegalIdentity } from "./types"

/**
 * Sanitizes an operator-provided identity value for markdown interpolation.
 *
 * The legal renderer emits React text nodes only — it never produces raw
 * HTML — so plain text must NOT be HTML-entity escaped here (React escapes
 * exactly once at render; pre-escaping shows literal `&amp;`/`&#39;` to
 * visitors). What must be neutralised is the markdown syntax the renderer
 * actually interprets: code spans, emphasis, link syntax, table pipes,
 * and block markers that a newline could introduce.
 *
 * Apostrophes, ampersands, quotes and angle brackets pass through unchanged —
 * env validation already rejects `<`/`>` for identity values.
 */
export function sanitizeTextForMarkdown(str: string): string {
  return str
    .replace(/[\r\n]+/g, " ")
    .replace(/\*/g, "∗")
    .replace(/\[/g, "［")
    .replace(/\]/g, "］")
    .replace(/\|/g, "｜")
    .replace(/`/g, "'")
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
    const replacement = `Our EU representative is ${sanitizeTextForMarkdown(identity.euRep.name)}, ${sanitizeTextForMarkdown(identity.euRep.address)}, ${sanitizeTextForMarkdown(identity.euRep.email)}.\n`
    result = result.replace(EU_REP_BLOCK_REGEX, replacement)
  } else {
    result = result.replace(EU_REP_BLOCK_REGEX, "")
  }

  if (identity.ukRep) {
    const replacement = `Our UK representative is ${sanitizeTextForMarkdown(identity.ukRep.name)}, ${sanitizeTextForMarkdown(identity.ukRep.address)}, ${sanitizeTextForMarkdown(identity.ukRep.email)}.\n`
    result = result.replace(UK_REP_BLOCK_REGEX, replacement)
  } else {
    result = result.replace(UK_REP_BLOCK_REGEX, "")
  }

  if (identity.dpo) {
    const replacement = `Our data protection officer is ${sanitizeTextForMarkdown(identity.dpo.name)}, ${sanitizeTextForMarkdown(identity.dpo.email)}.\n`
    result = result.replace(DPO_BLOCK_REGEX, replacement)
  } else {
    result = result.replace(DPO_BLOCK_REGEX, "")
  }

  // 2. Token mapping per 01_legal_facts_env_contract.md §1
  const tokenMap: Record<string, string> = {
    "{{LEGAL_PROVIDER_FULL_NAME}}": sanitizeTextForMarkdown(identity.providerFullName),
    "{{LEGAL_PROVIDER_FORM}}": sanitizeTextForMarkdown(identity.providerForm),
    "{{TRADING_NAME}}": sanitizeTextForMarkdown(identity.tradingName),
    "{{COUNTRY_OF_REGISTRATION}}": sanitizeTextForMarkdown(identity.countryOfRegistration),
    "{{REGISTRATION_NUMBER}}": sanitizeTextForMarkdown(identity.registrationNumber),
    "{{TAX_NUMBER}}": sanitizeTextForMarkdown(identity.taxNumber),
    "{{BUSINESS_ADDRESS}}": sanitizeTextForMarkdown(identity.businessAddress),
    "{{SUPPORT_EMAIL}}": sanitizeTextForMarkdown(identity.supportEmail),
    "{{PRIVACY_EMAIL}}": sanitizeTextForMarkdown(identity.privacyEmail),
    "{{LEGAL_NOTICES_EMAIL}}": sanitizeTextForMarkdown(identity.legalNoticesEmail),
    "{{SECURITY_EMAIL}}": sanitizeTextForMarkdown(identity.securityEmail),
    "{{EU_REP_NAME}}": identity.euRep ? sanitizeTextForMarkdown(identity.euRep.name) : "",
    "{{EU_REP_ADDRESS}}": identity.euRep ? sanitizeTextForMarkdown(identity.euRep.address) : "",
    "{{EU_REP_EMAIL}}": identity.euRep ? sanitizeTextForMarkdown(identity.euRep.email) : "",
    "{{UK_REP_NAME}}": identity.ukRep ? sanitizeTextForMarkdown(identity.ukRep.name) : "",
    "{{UK_REP_ADDRESS}}": identity.ukRep ? sanitizeTextForMarkdown(identity.ukRep.address) : "",
    "{{UK_REP_EMAIL}}": identity.ukRep ? sanitizeTextForMarkdown(identity.ukRep.email) : "",
    "{{DPO_NAME}}": identity.dpo ? sanitizeTextForMarkdown(identity.dpo.name) : "",
    "{{DPO_EMAIL}}": identity.dpo ? sanitizeTextForMarkdown(identity.dpo.email) : "",
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
