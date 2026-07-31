#!/usr/bin/env node
/**
 * Generates data/niche-catalog.generated.json and data/app-ui-strings.generated.json
 * from the beauty-finance app repo. Prefer executing TypeScript exports via tsx.
 */
import { spawnSync } from "node:child_process"
import { createHash } from "node:crypto"
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const APP_REPO = path.resolve(ROOT, process.env.PERELAI_APP_REPO ?? "../beauty-finance")
const OUT_CATALOG = path.join(ROOT, "data/niche-catalog.generated.json")
const OUT_STRINGS = path.join(ROOT, "data/app-ui-strings.generated.json")

const LOCALES = ["en", "uk", "pl", "ru", "es", "fr", "de", "pt", "tr"]
const PROFILE_NS = {
  beauty: "beauty",
  aesthetic: "beauty",
  edu: "edu",
  coaching: "edu",
  fitness: "edu",
  freelance: "freelance",
  pro: "pro",
  rental: "rent",
  personal: "personal",
}

const FIXED_UI_KEYS = [
  "inbox.trust_confirming",
  "inbox.trust_next",
  "inbox.trust_visits_count",
  "inbox.trust_will_generate",
  "inbox.trust_amount",
  "inbox.trust_in_reports",
  "inbox.trust_confirm_secure",
  "inbox.title",
  "inbox.ready_to_confirm",
  "chart_labels.revenue",
  "chart_labels.cost",
  "chart_labels.profit",
  "week",
  "month",
  "quarter",
  "year",
  "coworker.busy_block_title",
]

function fail(message) {
  console.error(`generate-niche-catalog: ${message}`)
  process.exit(1)
}

function stableStringify(value) {
  return `${JSON.stringify(value, null, 2)}\n`
}

function writeIfChanged(filePath, contents) {
  mkdirSync(path.dirname(filePath), { recursive: true })
  if (existsSync(filePath) && readFileSync(filePath, "utf8") === contents) {
    return false
  }
  const tmp = `${filePath}.${createHash("sha1").update(contents).digest("hex").slice(0, 8)}.tmp`
  writeFileSync(tmp, contents, "utf8")
  renameSync(tmp, filePath)
  return true
}

function getSourceCommitMeta(appRepo) {
  const rev = spawnSync("git", ["-C", appRepo, "rev-parse", "HEAD"], {
    encoding: "utf8",
  })
  if (rev.status !== 0) fail(`cannot read source commit from ${appRepo}`)
  const sourceCommit = rev.stdout.trim()
  const stamp = spawnSync(
    "git",
    ["-C", appRepo, "show", "-s", "--format=%cI", sourceCommit],
    { encoding: "utf8" },
  )
  if (stamp.status !== 0) fail(`cannot read commit timestamp for ${sourceCommit}`)
  return { sourceCommit, generatedAt: stamp.stdout.trim() }
}

function dumpCatalogViaTsx(appRepo) {
  const tsxBin = path.join(appRepo, "node_modules/.bin/tsx")
  if (!existsSync(tsxBin)) {
    fail(`tsx not found at ${tsxBin}; install deps in the app repo or set PERELAI_APP_REPO`)
  }

  const dumpScript = `
import { BUSINESS_TEMPLATES_CATALOG } from ${JSON.stringify(
    path.join(appRepo, "libs/core/src/templates/business-templates-catalog.ts"),
  )};
import { BUSINESS_GROUPS } from ${JSON.stringify(
    path.join(appRepo, "libs/core/src/templates/business-groups.ts"),
  )};
import { SUPPORTED_MARKETS } from ${JSON.stringify(
    path.join(appRepo, "libs/core/src/templates/supported-markets.ts"),
  )};
import { I18N_SUPPORTED_LANGUAGE_CODES } from ${JSON.stringify(
    path.join(appRepo, "apps/web/src/config/localization.ts"),
  )};

const templates = BUSINESS_TEMPLATES_CATALOG.map((t) => ({
  id: t.id,
  groupId: t.groupId,
  terminologyProfile: t.terminologyProfile,
  marketingPriority: t.marketingPriority,
  visibility: t.visibility,
  nicheSlugs: [...t.nicheSlugs],
  bookingConfig: {
    mode: t.bookingConfig.mode,
    enabled: t.bookingConfig.enabled,
    requiresStaff: t.bookingConfig.requiresStaff,
    allowAddons: t.bookingConfig.allowAddons,
    regulated: Boolean(t.bookingConfig.regulated),
  },
  services: t.services.map((s) => ({ id: s.id, nameKey: s.nameKey })),
  addons: t.addons.map((a) => ({ id: a.id, nameKey: a.nameKey })),
  expenses: t.expenses.map((e) => ({ id: e.id, nameKey: e.nameKey })),
}));

const groups = BUSINESS_GROUPS.map((g) => ({
  id: g.id,
  labelKey: g.labelKey,
  label: g.label,
}));

const markets = SUPPORTED_MARKETS.map((m) => ({
  countryCode: m.countryCode,
  currency: m.currency,
  localeHint: m.localeHint,
  name: m.name,
}));

process.stdout.write(JSON.stringify({
  supportedLocales: [...I18N_SUPPORTED_LANGUAGE_CODES],
  templates,
  groups,
  markets,
}));
`

  const result = spawnSync(tsxBin, ["--eval", dumpScript], {
    encoding: "utf8",
    cwd: appRepo,
    maxBuffer: 20 * 1024 * 1024,
  })

  if (result.status !== 0) {
    fail(`tsx dump failed:\n${result.stderr || result.stdout}`)
  }

  try {
    return JSON.parse(result.stdout)
  } catch (error) {
    fail(`tsx dump returned invalid JSON: ${error.message}`)
  }
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"))
}

function lookupPath(obj, dotted) {
  if (obj == null) return undefined
  if (Object.prototype.hasOwnProperty.call(obj, dotted)) return obj[dotted]
  const parts = dotted.split(".")
  let cur = obj
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined
    cur = cur[part]
  }
  return typeof cur === "string" ? cur : undefined
}

function resolveUiString(localeDir, terminologyProfile, key) {
  const common = readJson(path.join(localeDir, "common.json"))
  if (key === "week" || key === "month" || key === "quarter" || key === "year") {
    return lookupPath(common, key)
  }
  if (key === "coworker.busy_block_title") {
    return lookupPath(common, key)
  }
  if (key.startsWith("templates.")) {
    return lookupPath(common, key)
  }

  const ns = PROFILE_NS[terminologyProfile] ?? "beauty"
  const profile = readJson(path.join(localeDir, `${ns}.json`))
  return lookupPath(profile, key)
}

function buildAllowlistedKeys(templates) {
  const keys = new Set(FIXED_UI_KEYS)
  for (const template of templates) {
    for (const item of [...template.services, ...template.addons, ...template.expenses]) {
      keys.add(item.nameKey)
    }
  }
  return [...keys].sort()
}

function extractUiStrings(appRepo, templates) {
  const allowlist = buildAllowlistedKeys(templates)
  const byLocale = {}

  for (const locale of LOCALES) {
    const localeDir = path.join(appRepo, "apps/web/public/locales", locale)
    if (!existsSync(localeDir)) fail(`missing locale directory ${localeDir}`)

    const localeStrings = {}
    for (const key of allowlist) {
      // Prefer beauty profile for shared inbox/chart keys; fall back across profiles.
      let value = resolveUiString(localeDir, "beauty", key)
      if (value == null && key.startsWith("inbox.")) {
        for (const profile of ["edu", "pro", "freelance", "rental", "personal"]) {
          value = resolveUiString(localeDir, profile, key)
          if (value != null) break
        }
      }
      if (value == null && key.startsWith("chart_labels.")) {
        for (const profile of ["edu", "pro", "freelance", "rental", "personal"]) {
          value = resolveUiString(localeDir, profile, key)
          if (value != null) break
        }
      }
      if (value == null) {
        fail(`allowlisted key missing for locale=${locale}: ${key}`)
      }
      localeStrings[key] = value
    }
    byLocale[locale] = localeStrings
  }

  return {
    allowlist,
    locales: byLocale,
  }
}

function main() {
  if (!existsSync(APP_REPO)) {
    fail(`app repo not found at ${APP_REPO}. Set PERELAI_APP_REPO or place beauty-finance as a sibling.`)
  }

  const { sourceCommit, generatedAt } = getSourceCommitMeta(APP_REPO)
  const dumped = dumpCatalogViaTsx(APP_REPO)

  if (
    !Array.isArray(dumped.supportedLocales) ||
    dumped.supportedLocales.join(",") !== LOCALES.join(",")
  ) {
    fail(
      `supported locales drifted: expected ${LOCALES.join(",")} got ${(dumped.supportedLocales ?? []).join(",")}`,
    )
  }

  const catalog = {
    sourceCommit,
    generatedAt,
    supportedLocales: dumped.supportedLocales,
    markets: dumped.markets,
    groups: dumped.groups,
    templates: dumped.templates,
  }

  const uiStrings = {
    sourceCommit,
    generatedAt,
    ...extractUiStrings(APP_REPO, dumped.templates),
  }

  const catalogWritten = writeIfChanged(OUT_CATALOG, stableStringify(catalog))
  const stringsWritten = writeIfChanged(OUT_STRINGS, stableStringify(uiStrings))

  console.log(
    `generate-niche-catalog: source=${sourceCommit.slice(0, 7)} catalog=${catalogWritten ? "updated" : "unchanged"} ui-strings=${stringsWritten ? "updated" : "unchanged"}`,
  )
}

main()
