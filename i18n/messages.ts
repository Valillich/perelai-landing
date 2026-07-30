import enCommon from "@/messages/en/common.json"
import enHome from "@/messages/en/home.json"
import enLegal from "@/messages/en/legal.json"
import enNiche from "@/messages/en/niche.json"
import enPricing from "@/messages/en/pricing.json"
import plCommon from "@/messages/pl/common.json"
import plHome from "@/messages/pl/home.json"
import plLegal from "@/messages/pl/legal.json"
import plNiche from "@/messages/pl/niche.json"
import plPricing from "@/messages/pl/pricing.json"
import ukCommon from "@/messages/uk/common.json"
import ukHome from "@/messages/uk/home.json"
import ukLegal from "@/messages/uk/legal.json"
import ukNiche from "@/messages/uk/niche.json"
import ukPricing from "@/messages/uk/pricing.json"
import type { PublishedLocale } from "@/i18n/locales"

export const messagesByLocale = {
  en: { common: enCommon, home: enHome, legal: enLegal, niche: enNiche, pricing: enPricing },
  uk: { common: ukCommon, home: ukHome, legal: ukLegal, niche: ukNiche, pricing: ukPricing },
  pl: { common: plCommon, home: plHome, legal: plLegal, niche: plNiche, pricing: plPricing },
} satisfies Record<PublishedLocale, Record<string, unknown>>
