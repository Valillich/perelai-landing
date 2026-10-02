import catalog from "@/data/niche-catalog.generated.json"
import { getEnabledNichePages } from "@/config/niche-pages"
import { PRICING_CAPABILITY_KEYS, PRICING_PLANS } from "@/content/pricing"
import devicesEn from "@/messages/en/devices.json"
import homeEn from "@/messages/en/home.json"
import pricingEn from "@/messages/en/pricing.json"
import { getPricingContactEmail } from "@/lib/pricing-contact"
import { isPaidSubscriptionsLive } from "@/lib/pricing-release"
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
    `## ${pricingEn.capabilities.title}`,
    bulletList(capabilities),
    "",
    "## Trial and monthly plans",
    bulletList([
      pricingEn.hero.body,
      pricingEn.trial.body,
      pricingEn.cta.micro,
      pricingEn.billing.body,
      ...PRICING_PLANS.map((plan) => {
        const capacity = pricingEn.plans[plan.code].capacity.replace("{limit}", String(plan.performerLimit))
        const adminNote = plan.code === "studio" ? ` ${pricingEn.plans.studio.adminNote}` : ""
        return `${plan.name}: $${plan.monthlyUsd}/month per workspace; ${capacity}${adminNote}`
      }),
      pricingEn.plans.currency,
      ...(!isPaidSubscriptionsLive() ? [pricingEn.plans.availability] : []),
    ]),
    "",
    `## ${pricingEn.largerTeams.title}`,
    pricingEn.largerTeams.body,
    pricingEn.largerTeams.note,
    `${pricingEn.largerTeams.contact}: ${getPricingContactEmail()}`,
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
    "## Trial and monthly plans",
    bulletList([
      pricingEn.hero.body,
      pricingEn.trial.body,
      pricingEn.cta.micro,
      ...PRICING_PLANS.map((plan) => {
        const capacity = pricingEn.plans[plan.code].capacity.replace("{limit}", String(plan.performerLimit))
        const adminNote = plan.code === "studio" ? ` ${pricingEn.plans.studio.adminNote}` : ""
        return `${plan.name}: $${plan.monthlyUsd}/month per workspace; ${capacity}${adminNote} ${pricingEn.plans[plan.code].access}`
      }),
      pricingEn.plans.currency,
      ...(!isPaidSubscriptionsLive() ? [pricingEn.plans.availability] : []),
      pricingEn.billing.body,
      pricingEn.billing.renewal,
    ]),
    "",
    `## ${pricingEn.largerTeams.title}`,
    pricingEn.largerTeams.body,
    pricingEn.largerTeams.note,
    `${pricingEn.largerTeams.contact}: ${getPricingContactEmail()}`,
    "",
    `## ${pricingEn.capabilities.title}`,
    bulletList(capabilities),
    "",
    "## FAQ",
    `- ${pricingEn.faq.q1} ${pricingEn.faq.a1}`,
    `- ${pricingEn.faq.q2} ${pricingEn.faq.a2}`,
    `- ${pricingEn.faq.q3} ${pricingEn.faq.a3}`,
    `- ${pricingEn.faq.q4} ${pricingEn.faq.a4}`,
    `- ${pricingEn.faq.q5} ${pricingEn.faq.a5}`,
    `- ${pricingEn.faq.q6} ${pricingEn.faq.a6}`,
  ].join("\n")
}
