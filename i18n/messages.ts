import enCommon from "@/messages/en/common.json"
import enHome from "@/messages/en/home.json"
import enLegal from "@/messages/en/legal.json"
import enNiche from "@/messages/en/niche.json"
import enPricing from "@/messages/en/pricing.json"
import enDevices from "@/messages/en/devices.json"

import plCommon from "@/messages/pl/common.json"
import plHome from "@/messages/pl/home.json"
import plLegal from "@/messages/pl/legal.json"
import plNiche from "@/messages/pl/niche.json"
import plPricing from "@/messages/pl/pricing.json"
import plDevices from "@/messages/pl/devices.json"

import ukCommon from "@/messages/uk/common.json"
import ukHome from "@/messages/uk/home.json"
import ukLegal from "@/messages/uk/legal.json"
import ukNiche from "@/messages/uk/niche.json"
import ukPricing from "@/messages/uk/pricing.json"
import ukDevices from "@/messages/uk/devices.json"

import ruCommon from "@/messages/ru/common.json"
import ruHome from "@/messages/ru/home.json"
import ruLegal from "@/messages/ru/legal.json"
import ruNiche from "@/messages/ru/niche.json"
import ruPricing from "@/messages/ru/pricing.json"
import ruDevices from "@/messages/ru/devices.json"

import esCommon from "@/messages/es/common.json"
import esHome from "@/messages/es/home.json"
import esLegal from "@/messages/es/legal.json"
import esNiche from "@/messages/es/niche.json"
import esPricing from "@/messages/es/pricing.json"
import esDevices from "@/messages/es/devices.json"

import frCommon from "@/messages/fr/common.json"
import frHome from "@/messages/fr/home.json"
import frLegal from "@/messages/fr/legal.json"
import frNiche from "@/messages/fr/niche.json"
import frPricing from "@/messages/fr/pricing.json"
import frDevices from "@/messages/fr/devices.json"

import deCommon from "@/messages/de/common.json"
import deHome from "@/messages/de/home.json"
import deLegal from "@/messages/de/legal.json"
import deNiche from "@/messages/de/niche.json"
import dePricing from "@/messages/de/pricing.json"
import deDevices from "@/messages/de/devices.json"

import ptCommon from "@/messages/pt/common.json"
import ptHome from "@/messages/pt/home.json"
import ptLegal from "@/messages/pt/legal.json"
import ptNiche from "@/messages/pt/niche.json"
import ptPricing from "@/messages/pt/pricing.json"
import ptDevices from "@/messages/pt/devices.json"

import trCommon from "@/messages/tr/common.json"
import trHome from "@/messages/tr/home.json"
import trLegal from "@/messages/tr/legal.json"
import trNiche from "@/messages/tr/niche.json"
import trPricing from "@/messages/tr/pricing.json"
import trDevices from "@/messages/tr/devices.json"

import type { PublishedLocale } from "@/i18n/locales"

/**
 * Deep-merge message trees so FM4A English finance keys remain available in
 * non-English locales until FM5 ships translations. Overlay wins on conflict.
 */
function mergeMessages(
  base: Record<string, unknown>,
  overlay: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base }
  for (const [key, value] of Object.entries(overlay)) {
    const existing = result[key]
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      existing &&
      typeof existing === "object" &&
      !Array.isArray(existing)
    ) {
      result[key] = mergeMessages(
        existing as Record<string, unknown>,
        value as Record<string, unknown>,
      )
    } else {
      result[key] = value
    }
  }
  return result
}

function withEnglishHomeFallback(
  localeHome: Record<string, unknown>,
): typeof enHome {
  return mergeMessages(
    enHome as unknown as Record<string, unknown>,
    localeHome,
  ) as typeof enHome
}

export const messagesByLocale = {
  en: {
    common: enCommon,
    home: enHome,
    legal: enLegal,
    niche: enNiche,
    pricing: enPricing,
    devices: enDevices,
  },
  uk: {
    common: ukCommon,
    home: withEnglishHomeFallback(ukHome as unknown as Record<string, unknown>),
    legal: ukLegal,
    niche: ukNiche,
    pricing: ukPricing,
    devices: ukDevices,
  },
  pl: {
    common: plCommon,
    home: withEnglishHomeFallback(plHome as unknown as Record<string, unknown>),
    legal: plLegal,
    niche: plNiche,
    pricing: plPricing,
    devices: plDevices,
  },
  ru: {
    common: ruCommon,
    home: withEnglishHomeFallback(ruHome as unknown as Record<string, unknown>),
    legal: ruLegal,
    niche: ruNiche,
    pricing: ruPricing,
    devices: ruDevices,
  },
  es: {
    common: esCommon,
    home: withEnglishHomeFallback(esHome as unknown as Record<string, unknown>),
    legal: esLegal,
    niche: esNiche,
    pricing: esPricing,
    devices: esDevices,
  },
  fr: {
    common: frCommon,
    home: withEnglishHomeFallback(frHome as unknown as Record<string, unknown>),
    legal: frLegal,
    niche: frNiche,
    pricing: frPricing,
    devices: frDevices,
  },
  de: {
    common: deCommon,
    home: withEnglishHomeFallback(deHome as unknown as Record<string, unknown>),
    legal: deLegal,
    niche: deNiche,
    pricing: dePricing,
    devices: deDevices,
  },
  pt: {
    common: ptCommon,
    home: withEnglishHomeFallback(ptHome as unknown as Record<string, unknown>),
    legal: ptLegal,
    niche: ptNiche,
    pricing: ptPricing,
    devices: ptDevices,
  },
  tr: {
    common: trCommon,
    home: withEnglishHomeFallback(trHome as unknown as Record<string, unknown>),
    legal: trLegal,
    niche: trNiche,
    pricing: trPricing,
    devices: trDevices,
  },
} satisfies Record<PublishedLocale, Record<string, unknown>>
