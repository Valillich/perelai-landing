import catalog from "@/data/niche-catalog.generated.json"
import { getEnabledNichePages } from "@/config/niche-pages"
import { PRICING_CAPABILITY_KEYS } from "@/content/pricing"
import devicesEn from "@/messages/en/devices.json"
import homeEn from "@/messages/en/home.json"
import pricingEn from "@/messages/en/pricing.json"
import { toAbsoluteLandingUrl } from "@/lib/seo"

function bulletList(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n")
}

export function buildLlmsTxt(): string {
  const publishedNiches = getEnabledNichePages().map(
    (page) => `${page.path} (niche=${page.niche})`,
  )
  const capabilities = PRICING_CAPABILITY_KEYS.map((key) => pricingEn.capabilities[key])
  const groups = catalog.groups.map((group) => group.label).join(", ")

  return [
    "# Perelai",
    "",
    homeEn.meta.description,
    "",
    "## What Perelai is",
    "Perelai is financial tracking and analytics software for independent service businesses. It tracks revenue, costs, calculated profit, recorded payments and open-order balances for any period, with category and client breakdowns connected to the daily work behind them. Perelai is operational finance software, not accounting or bookkeeping software.",
    "",
    "## Core capabilities",
    bulletList([
      `${homeEn.hero.title} ${homeEn.hero.accent}`,
      homeEn.money.detail,
      homeEn.inbox.detail,
      homeEn.booking.detail,
    ]),
    "",
    "## Platform & app stores",
    devicesEn.faq.a1,
    "",
    "## Who it is for",
    bulletList([
      "Independent service professionals.",
      "Initial GTM niche: independent colorists in APPOINTMENT mode.",
    ]),
    "",
    "## Current capabilities",
    bulletList(capabilities),
    "",
    "## What Perelai is not",
    bulletList([
      `${homeEn.not.item1Title} — ${homeEn.not.item1Body}`,
      `${homeEn.not.item2Title} — ${homeEn.not.item2Body}`,
      `${homeEn.not.item3Title} — ${homeEn.not.item3Body}`,
    ]),
    "",
    "## Supported business types",
    bulletList([
      `${catalog.templates.length} selectable business types across ${catalog.groups.length} groups (${groups}).`,
      `Published niche landing pages: ${publishedNiches.join(", ")}`,
    ]),
    "",
    "## Key URLs",
    bulletList([
      `Homepage: ${toAbsoluteLandingUrl("/")}`,
      `Devices & Install: ${toAbsoluteLandingUrl("/install")}`,
      `Pricing: ${toAbsoluteLandingUrl("/pricing")}`,
      `Terms: ${toAbsoluteLandingUrl("/terms")}`,
      `Privacy: ${toAbsoluteLandingUrl("/privacy")}`,
    ]),
    "",
    "## Source freshness",
    bulletList([
      `Catalog commit: ${catalog.sourceCommit}`,
      `Generated at: ${catalog.generatedAt}`,
    ]),
    "",
    "llms.txt is optional discovery metadata for AI systems. It does not claim Google ranking impact.",
  ].join("\n")
}

export function buildPricingMarkdown(): string {
  const capabilities = PRICING_CAPABILITY_KEYS.map((key) => pricingEn.capabilities[key])

  return [
    "# Perelai Pricing",
    "",
    `Source page: ${toAbsoluteLandingUrl("/pricing")}`,
    "",
    "## Current status",
    bulletList([
      `${pricingEn.beta.title}. ${pricingEn.beta.body}`,
      "Billing system: not live.",
      `${pricingEn.noCharge.commission}: ${pricingEn.noCharge.commissionDetail}`,
      `${pricingEn.noCharge.card}: ${pricingEn.noCharge.cardDetail}`,
      pricingEn.future.body,
    ]),
    "",
    "## Current capabilities",
    bulletList(capabilities),
    "",
    "## FAQ",
    `- ${pricingEn.faq.q1} ${pricingEn.faq.a1}`,
    `- ${pricingEn.faq.q2} ${pricingEn.faq.a2}`,
    `- ${pricingEn.faq.q3} ${pricingEn.faq.a3}`,
    "",
    "## Notes",
    bulletList([
      "Prices are not published because there is no chargeable billing flow yet.",
      "Currency hints may show a visitor market code, but no local price is implied.",
    ]),
  ].join("\n")
}
