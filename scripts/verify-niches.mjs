#!/usr/bin/env node
/**
 * Verifies niche registry ↔ generated catalog, and LP5b UI-string allowlist integrity.
 * Local checks always run. Live sibling freshness comparison is skipped with a warning
 * when the app repo is absent.
 */
import { spawnSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { NICHE_PAGES, PRODUCTION_BOOKING_FLAGS, RESERVED_SLUGS } from "../config/niche-pages.ts"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const APP_REPO = path.resolve(ROOT, process.env.PERELAI_APP_REPO ?? "../beauty-finance")
const CATALOG_PATH = process.env.VERIFY_CATALOG_PATH
  ? path.resolve(process.env.VERIFY_CATALOG_PATH)
  : path.join(ROOT, "data/niche-catalog.generated.json")
const STRINGS_PATH = process.env.VERIFY_STRINGS_PATH
  ? path.resolve(process.env.VERIFY_STRINGS_PATH)
  : path.join(ROOT, "data/app-ui-strings.generated.json")
const MOCK_SCAN_PATHS = [
  path.join(ROOT, "components/mock"),
  path.join(ROOT, "lib/mock-data.ts"),
]

const errors = []
const warnings = []

function fail(message) {
  errors.push(message)
}

function warn(message) {
  warnings.push(message)
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"))
}

function collectReferencedKeys(scanRoots) {
  const keys = new Set()
  const keyPattern = /(?:uiKey|nameKey|labelKey)\(["'`]([^"'`]+)["'`]\)|["'`]((?:inbox|chart_labels|coworker|templates)\.[^"'`]+)["'`]/g

  function walk(filePath) {
    if (!existsSync(filePath)) return
    const stat = spawnSync("find", [filePath, "-type", "f", "(", "-name", "*.ts", "-o", "-name", "*.tsx", ")"], {
      encoding: "utf8",
    })
    const files =
      stat.status === 0
        ? stat.stdout.trim().split("\n").filter(Boolean)
        : [filePath]

    for (const file of files) {
      if (!existsSync(file) || !/\.(ts|tsx)$/.test(file)) continue
      const source = readFileSync(file, "utf8")
      let match
      const re = new RegExp(keyPattern.source, "g")
      while ((match = re.exec(source))) {
        keys.add(match[1] || match[2])
      }

      // Also pick up MOCK_UI_KEYS array entries
      const arrayMatch = source.match(/MOCK_UI_KEYS\s*=\s*\[([\s\S]*?)\]\s*as\s*const/)
      if (arrayMatch) {
        for (const m of arrayMatch[1].matchAll(/["']([^"']+)["']/g)) {
          keys.add(m[1])
        }
      }
    }
  }

  for (const root of scanRoots) walk(root)
  return keys
}

function verifyRegistry(catalog, nichePages, flags) {
  const templatesById = new Map(catalog.templates.map((t) => [t.id, t]))
  const slugToTemplate = new Map()

  for (const template of catalog.templates) {
    for (const slug of template.nicheSlugs ?? []) {
      slugToTemplate.set(slug, template)
    }
  }

  for (const page of nichePages) {
    const slug = page.path.replace(/^\//, "")
    if (RESERVED_SLUGS.includes(slug)) {
      fail(`niche page ${page.path}: collides with reserved slug "${slug}"`)
    }

    const template = templatesById.get(page.templateId)
    if (!template) {
      fail(`niche page ${page.path}: unknown templateId ${page.templateId}`)
      continue
    }

    if (!(template.nicheSlugs ?? []).includes(page.niche)) {
      fail(
        `niche page ${page.path}: niche "${page.niche}" is not in template ${page.templateId} nicheSlugs`,
      )
    }

    const resolved = slugToTemplate.get(page.niche)
    if (!resolved || resolved.id !== page.templateId) {
      fail(`niche page ${page.path}: niche "${page.niche}" resolves to unexpected template`)
    }

    if (page.enabled) {
      if (!template.bookingConfig?.enabled) {
        fail(
          `enabled page ${page.path}: template ${page.templateId} has bookingConfig.enabled=false without an approved activation path`,
        )
      }
      const mode = template.bookingConfig?.mode
      if (mode && flags[mode] === false) {
        fail(
          `enabled page ${page.path}: booking mode ${mode} is false in PRODUCTION_BOOKING_FLAGS`,
        )
      }
    }

    // Condition 7 — template must have services for mock rendering
    if ((template.services ?? []).length === 0) {
      fail(`template ${page.templateId} (page ${page.path}) has zero services in generated catalog`)
    }
  }
}

function verifyUiStringAllowlist(strings, referencedKeys) {
  const locales = Object.keys(strings.locales ?? {})
  if (locales.length === 0) {
    fail("app-ui-strings.generated.json has no locales")
    return
  }

  for (const key of referencedKeys) {
    for (const locale of locales) {
      if (!strings.locales[locale]?.[key]) {
        fail(`mock references key "${key}" missing from app-ui-strings locale=${locale}`)
      }
    }
  }

  for (const key of strings.allowlist ?? []) {
    for (const locale of locales) {
      if (!strings.locales[locale]?.[key]) {
        fail(`allowlisted key "${key}" missing from locale=${locale}`)
      }
    }
  }
}

function main() {
  if (!existsSync(CATALOG_PATH)) fail(`missing ${CATALOG_PATH}`)
  if (!existsSync(STRINGS_PATH)) fail(`missing ${STRINGS_PATH}`)

  const catalog = readJson(CATALOG_PATH)
  const strings = readJson(STRINGS_PATH)

  verifyRegistry(catalog, NICHE_PAGES, PRODUCTION_BOOKING_FLAGS)

  const referencedKeys = collectReferencedKeys(MOCK_SCAN_PATHS)
  verifyUiStringAllowlist(strings, referencedKeys)

  const beforeCommit = catalog.sourceCommit
  if (existsSync(APP_REPO)) {
    const rev = spawnSync("git", ["-C", APP_REPO, "rev-parse", "HEAD"], {
      encoding: "utf8",
    })
    if (rev.status === 0 && rev.stdout.trim() !== beforeCommit) {
      fail(
        `committed catalog sourceCommit ${beforeCommit.slice(0, 7)} differs from app HEAD ${rev.stdout.trim().slice(0, 7)}; re-run pnpm generate:niches`,
      )
    }
  } else {
    warn(`app repo absent at ${APP_REPO}; skipping live freshness comparison`)
  }

  for (const warning of warnings) {
    console.warn(`verify-niches warning: ${warning}`)
  }

  if (errors.length) {
    for (const error of errors) console.error(`verify-niches error: ${error}`)
    process.exit(1)
  }

  console.log(
    `verify-niches: ok (${NICHE_PAGES.length} pages, ${referencedKeys.size} mock keys, ${Object.keys(strings.locales).length} locales)`,
  )
}

main()
