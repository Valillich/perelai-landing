import { content as en } from "./premium-colorist/en"
import { content as pl } from "./premium-colorist/pl"
import { content as uk } from "./premium-colorist/uk"
import { content as ru } from "./premium-colorist/ru"
import { content as es } from "./premium-colorist/es"
import { content as fr } from "./premium-colorist/fr"
import { content as de } from "./premium-colorist/de"
import { content as pt } from "./premium-colorist/pt"
import { content as tr } from "./premium-colorist/tr"

import { content as lashEn } from "./lash-artist/en"
import { content as lashPl } from "./lash-artist/pl"
import { content as lashUk } from "./lash-artist/uk"
import { content as lashRu } from "./lash-artist/ru"
import { content as lashEs } from "./lash-artist/es"
import { content as lashFr } from "./lash-artist/fr"
import { content as lashDe } from "./lash-artist/de"
import { content as lashPt } from "./lash-artist/pt"
import { content as lashTr } from "./lash-artist/tr"

import { content as salonEn } from "./hair-salon/en"
import { content as salonUk } from "./hair-salon/uk"
import { content as salonPl } from "./hair-salon/pl"
import { content as salonRu } from "./hair-salon/ru"
import { content as salonEs } from "./hair-salon/es"
import { content as salonFr } from "./hair-salon/fr"
import { content as salonDe } from "./hair-salon/de"
import { content as salonPt } from "./hair-salon/pt"
import { content as salonTr } from "./hair-salon/tr"

import { content as massageEn } from "./massage-therapist/en"
import { content as massageUk } from "./massage-therapist/uk"
import { content as massagePl } from "./massage-therapist/pl"
import { content as massageRu } from "./massage-therapist/ru"
import { content as massageEs } from "./massage-therapist/es"
import { content as massageFr } from "./massage-therapist/fr"
import { content as massageDe } from "./massage-therapist/de"
import { content as massagePt } from "./massage-therapist/pt"
import { content as massageTr } from "./massage-therapist/tr"

import { content as personalTrainerEn } from "./personal-trainer/en"
import { content as personalTrainerUk } from "./personal-trainer/uk"
import { content as personalTrainerPl } from "./personal-trainer/pl"
import { content as personalTrainerRu } from "./personal-trainer/ru"
import { content as personalTrainerEs } from "./personal-trainer/es"
import { content as personalTrainerFr } from "./personal-trainer/fr"
import { content as personalTrainerDe } from "./personal-trainer/de"
import { content as personalTrainerPt } from "./personal-trainer/pt"
import { content as personalTrainerTr } from "./personal-trainer/tr"

import { content as musicTeacherEn } from "./music-teacher/en"
import { content as musicTeacherUk } from "./music-teacher/uk"
import { content as musicTeacherPl } from "./music-teacher/pl"
import { content as musicTeacherRu } from "./music-teacher/ru"
import { content as musicTeacherEs } from "./music-teacher/es"
import { content as musicTeacherFr } from "./music-teacher/fr"
import { content as musicTeacherDe } from "./music-teacher/de"
import { content as musicTeacherPt } from "./music-teacher/pt"
import { content as musicTeacherTr } from "./music-teacher/tr"

import type { NichePageContent } from "@/content/niches/types"
import type { NichePage } from "@/config/niche-pages"
import type { PublishedLocale } from "@/i18n/locales"

const premiumColorist = { en, uk, pl, ru, es, fr, de, pt, tr } satisfies Record<PublishedLocale, NichePageContent>
const lashArtist = {
  en: lashEn,
  uk: lashUk,
  pl: lashPl,
  ru: lashRu,
  es: lashEs,
  fr: lashFr,
  de: lashDe,
  pt: lashPt,
  tr: lashTr,
} satisfies Record<PublishedLocale, NichePageContent>
const hairSalon = {
  en: salonEn,
  uk: salonUk,
  pl: salonPl,
  ru: salonRu,
  es: salonEs,
  fr: salonFr,
  de: salonDe,
  pt: salonPt,
  tr: salonTr,
} satisfies Record<PublishedLocale, NichePageContent>
const massageTherapist = {
  en: massageEn,
  uk: massageUk,
  pl: massagePl,
  ru: massageRu,
  es: massageEs,
  fr: massageFr,
  de: massageDe,
  pt: massagePt,
  tr: massageTr,
} satisfies Record<PublishedLocale, NichePageContent>
const personalTrainer = {
  en: personalTrainerEn,
  uk: personalTrainerUk,
  pl: personalTrainerPl,
  ru: personalTrainerRu,
  es: personalTrainerEs,
  fr: personalTrainerFr,
  de: personalTrainerDe,
  pt: personalTrainerPt,
  tr: personalTrainerTr,
} satisfies Record<PublishedLocale, NichePageContent>
const musicTeacher = {
  en: musicTeacherEn,
  uk: musicTeacherUk,
  pl: musicTeacherPl,
  ru: musicTeacherRu,
  es: musicTeacherEs,
  fr: musicTeacherFr,
  de: musicTeacherDe,
  pt: musicTeacherPt,
  tr: musicTeacherTr,
} satisfies Record<PublishedLocale, NichePageContent>

export function getNicheContent(
  page: NichePage,
  locale: PublishedLocale,
): NichePageContent {
  if (page.niche === "premium-colorist") {
    return premiumColorist[locale]
  }

  if (page.niche === "lash-artist") {
    return lashArtist[locale]
  }

  if (page.niche === "hair-salon") {
    return hairSalon[locale]
  }

  if (page.niche === "massage-therapist") {
    return massageTherapist[locale]
  }

  if (page.niche === "personal-trainer") {
    return personalTrainer[locale]
  }

  if (page.niche === "music-teacher") {
    return musicTeacher[locale]
  }

  throw new Error(`No content module for enabled niche "${page.niche}"`)
}
