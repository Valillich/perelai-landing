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

import ruCommon from "@/messages/ru/common.json"
import ruHome from "@/messages/ru/home.json"
import ruLegal from "@/messages/ru/legal.json"
import ruNiche from "@/messages/ru/niche.json"
import ruPricing from "@/messages/ru/pricing.json"

import esCommon from "@/messages/es/common.json"
import esHome from "@/messages/es/home.json"
import esLegal from "@/messages/es/legal.json"
import esNiche from "@/messages/es/niche.json"
import esPricing from "@/messages/es/pricing.json"

import frCommon from "@/messages/fr/common.json"
import frHome from "@/messages/fr/home.json"
import frLegal from "@/messages/fr/legal.json"
import frNiche from "@/messages/fr/niche.json"
import frPricing from "@/messages/fr/pricing.json"

import deCommon from "@/messages/de/common.json"
import deHome from "@/messages/de/home.json"
import deLegal from "@/messages/de/legal.json"
import deNiche from "@/messages/de/niche.json"
import dePricing from "@/messages/de/pricing.json"

import ptCommon from "@/messages/pt/common.json"
import ptHome from "@/messages/pt/home.json"
import ptLegal from "@/messages/pt/legal.json"
import ptNiche from "@/messages/pt/niche.json"
import ptPricing from "@/messages/pt/pricing.json"

import trCommon from "@/messages/tr/common.json"
import trHome from "@/messages/tr/home.json"
import trLegal from "@/messages/tr/legal.json"
import trNiche from "@/messages/tr/niche.json"
import trPricing from "@/messages/tr/pricing.json"

import type { PublishedLocale } from "@/i18n/locales"

export const messagesByLocale = {
  en: { common: enCommon, home: enHome, legal: enLegal, niche: enNiche, pricing: enPricing },
  uk: { common: ukCommon, home: ukHome, legal: ukLegal, niche: ukNiche, pricing: ukPricing },
  pl: { common: plCommon, home: plHome, legal: plLegal, niche: plNiche, pricing: plPricing },
  ru: { common: ruCommon, home: ruHome, legal: ruLegal, niche: ruNiche, pricing: ruPricing },
  es: { common: esCommon, home: esHome, legal: esLegal, niche: esNiche, pricing: esPricing },
  fr: { common: frCommon, home: frHome, legal: frLegal, niche: frNiche, pricing: frPricing },
  de: { common: deCommon, home: deHome, legal: deLegal, niche: deNiche, pricing: dePricing },
  pt: { common: ptCommon, home: ptHome, legal: ptLegal, niche: ptNiche, pricing: ptPricing },
  tr: { common: trCommon, home: trHome, legal: trLegal, niche: trNiche, pricing: trPricing },
} satisfies Record<PublishedLocale, Record<string, unknown>>
