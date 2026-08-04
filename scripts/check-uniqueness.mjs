import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { content as enColorist } from "../content/niches/premium-colorist/en.ts"
import { content as plColorist } from "../content/niches/premium-colorist/pl.ts"
import { content as ukColorist } from "../content/niches/premium-colorist/uk.ts"
import { content as enHairSalon } from "../content/niches/hair-salon/en.ts"
import { content as ukHairSalon } from "../content/niches/hair-salon/uk.ts"
import { content as plHairSalon } from "../content/niches/hair-salon/pl.ts"
import { content as enMassage } from "../content/niches/massage-therapist/en.ts"
import { content as ukMassage } from "../content/niches/massage-therapist/uk.ts"
import { content as plMassage } from "../content/niches/massage-therapist/pl.ts"
import { content as enPersonalTrainer } from "../content/niches/personal-trainer/en.ts"
import { content as ukPersonalTrainer } from "../content/niches/personal-trainer/uk.ts"
import { content as plPersonalTrainer } from "../content/niches/personal-trainer/pl.ts"
import { content as enMusicTeacher } from "../content/niches/music-teacher/en.ts"
import { content as ukMusicTeacher } from "../content/niches/music-teacher/uk.ts"
import { content as plMusicTeacher } from "../content/niches/music-teacher/pl.ts"
import { content as enLashArtist } from "../content/niches/lash-artist/en.ts"
import { content as plLashArtist } from "../content/niches/lash-artist/pl.ts"
import { content as ukLashArtist } from "../content/niches/lash-artist/uk.ts"
import { buildMockDataset } from "../lib/mock-data.ts"
import { getEnabledNichePages } from "../config/niche-pages.ts"

const root = resolve(fileURLToPath(new URL("..", import.meta.url)))
const MAX_SHARED_TOKEN_RATIO = 0.4

function flattenText(value) {
  if (typeof value === "string") return [value]
  if (Array.isArray(value)) return value.flatMap(flattenText)
  if (value && typeof value === "object") return Object.values(value).flatMap(flattenText)
  return []
}

export function tokenize(value) {
  return new Set(
    flattenText(value)
      .join(" ")
      .normalize("NFKD")
      .toLocaleLowerCase()
      .match(/[\p{L}\p{N}]+/gu) ?? [],
  )
}

function visibleNicheCopy(content, templateId, locale) {
  // LP7.3 explicitly permits the shared “What Perelai is not” and final CTA
  // to repeat. The checker measures the niche-specific rendered body instead.
  const {
    meta: _meta,
    research: _research,
    whatItIsNot: _whatItIsNot,
    cta: _cta,
    ...visibleCopy
  } = content
  let mockData = {}
  try {
    mockData = buildMockDataset(templateId, locale)
  } catch {
    // fallback if template has no mock dataset
  }
  return { visibleCopy, mockData }
}

export function sharedTokenRatio(nicheTokens, baselineTokens) {
  if (nicheTokens.size === 0) {
    throw new Error("Niche page rendered no copy to check")
  }

  const shared = [...nicheTokens].filter((token) => baselineTokens.has(token)).length
  const unionSize = new Set([...nicheTokens, ...baselineTokens]).size
  return { shared, unionSize, ratio: shared / unionSize }
}

export function checkUniquenessForPages(nichePageList, locales = ["en", "uk", "pl"]) {
  let failed = false

  const contentMap = {
    "premium-colorist": { en: enColorist, uk: ukColorist, pl: plColorist },
    "lash-artist": { en: enLashArtist, uk: ukLashArtist, pl: plLashArtist },
    "hair-salon": { en: enHairSalon, uk: ukHairSalon, pl: plHairSalon },
    "massage-therapist": { en: enMassage, uk: ukMassage, pl: plMassage },
    "personal-trainer": { en: enPersonalTrainer, uk: ukPersonalTrainer, pl: plPersonalTrainer },
    "music-teacher": { en: enMusicTeacher, uk: ukMusicTeacher, pl: plMusicTeacher },
  }

  for (const locale of locales) {
    const homepage = JSON.parse(
      readFileSync(resolve(root, "messages", locale, "home.json"), "utf8"),
    )
    const homepageTokens = tokenize(homepage)

    const nicheTokensMap = new Map()

    for (const page of nichePageList) {
      const content = page.content?.[locale] ?? contentMap[page.niche]?.[locale]
      if (!content) continue

      const fullVisibleCopy = visibleNicheCopy(content, page.templateId, locale)
      const pageTokens = tokenize(fullVisibleCopy)
      nicheTokensMap.set(page.niche, pageTokens)

      const result = sharedTokenRatio(pageTokens, homepageTokens)
      const uniquePercent = (100 - result.ratio * 100).toFixed(1)

      console.log(
        `[${locale}] ${page.niche} vs homepage: ${uniquePercent}% unique (${result.shared}/${result.unionSize} shared vocabulary tokens)`,
      )

      if (result.ratio > MAX_SHARED_TOKEN_RATIO) {
        console.error(
          `[${locale}] ${page.niche}: copy overlaps ${(result.ratio * 100).toFixed(1)}% with the homepage; maximum allowed overlap is 40%.`,
        )
        failed = true
      }
    }

    // Pairwise comparison between enabled niche pages
    const pageEntries = [...nicheTokensMap.entries()]
    for (let i = 0; i < pageEntries.length; i++) {
      for (let j = i + 1; j < pageEntries.length; j++) {
        const [nicheA, tokensA] = pageEntries[i]
        const [nicheB, tokensB] = pageEntries[j]

        const pairResult = sharedTokenRatio(tokensA, tokensB)
        const pairUniquePercent = (100 - pairResult.ratio * 100).toFixed(1)

        console.log(
          `[${locale}] ${nicheA} vs ${nicheB}: ${pairUniquePercent}% unique (${pairResult.shared}/${pairResult.unionSize} shared tokens)`,
        )

        if (pairResult.ratio > MAX_SHARED_TOKEN_RATIO) {
          console.error(
            `[${locale}] ${nicheA} vs ${nicheB}: copy overlaps ${(pairResult.ratio * 100).toFixed(1)}%; maximum allowed is 40%.`,
          )
          failed = true
        }
      }
    }
  }

  return !failed
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const enabledPages = getEnabledNichePages()
  const ok = checkUniquenessForPages(enabledPages)
  if (!ok) process.exit(1)
}
