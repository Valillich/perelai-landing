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
import { PUBLISHED_LOCALES } from "../i18n/locales.ts"

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
/**
 * Mock components that render product strings from an exported key array.
 * Each one is parsed and every key checked against the generated strings for
 * every published locale, so renaming a label in the app fails the build here
 * instead of silently drifting on the marketing site.
 */
const DECLARED_KEY_SOURCES = [
  {
    component: "MockDesktopRail",
    file: path.join(ROOT, "components/mock/MockDesktopRail.tsx"),
    exportName: "DESKTOP_RAIL_UI_KEYS",
    emptyMessage: "the rail would render hand-typed labels",
  },
  {
    component: "MockDesktopPaneEmptyState",
    file: path.join(ROOT, "components/mock/MockDesktopPaneEmptyState.tsx"),
    exportName: "DESKTOP_PANE_EMPTY_STATE_UI_KEYS",
    emptyMessage: "the contextual pane would render hand-typed labels",
  },
  {
    component: "MockCollaborationWorkspace",
    file: path.join(ROOT, "components/mock/MockCollaborationWorkspace.tsx"),
    exportName: "TEAM_COLLABORATION_UI_KEYS",
    emptyMessage: "the collaboration mock would render hand-typed labels",
  },
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

/**
 * Condition 8 (DVC2R) — every product string the desktop rail renders must exist
 * in the generated allowlist for every published locale.
 *
 * Rail labels are real destination names ("Calendar", "Kalender", "Календарь").
 * Hand-typing them is the drift this guard exists to prevent, so the rail
 * declares the keys it reads and this check proves the generator still ships
 * them. It reads only committed local files, so — like conditions 6 and 7 — it
 * always runs; only the live sibling freshness comparison is skipped when the
 * app repo is absent.
 */
function verifyDeclaredMockKeys(strings, spec) {
  const relative = path.relative(ROOT, spec.file)

  if (!existsSync(spec.file)) {
    fail(`missing ${relative} — the ${spec.component} key guard cannot run`)
    return 0
  }

  const source = readFileSync(spec.file, "utf8")
  const declaration = source.match(
    new RegExp(`${spec.exportName}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s*as\\s*const`),
  )
  if (!declaration) {
    fail(`${relative} does not export a ${spec.exportName} [...] as const array`)
    return 0
  }

  const keys = [...declaration[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1])
  if (keys.length === 0) {
    fail(`${spec.exportName} is empty — ${spec.emptyMessage}`)
    return 0
  }

  for (const key of keys) {
    for (const locale of PUBLISHED_LOCALES) {
      if (!strings.locales?.[locale]?.[key]) {
        fail(
          `${spec.component} references key "${key}" missing from app-ui-strings locale=${locale}`,
        )
      }
    }
  }

  return keys.length
}

function main() {
  if (!existsSync(CATALOG_PATH)) fail(`missing ${CATALOG_PATH}`)
  if (!existsSync(STRINGS_PATH)) fail(`missing ${STRINGS_PATH}`)

  const catalog = readJson(CATALOG_PATH)
  const strings = readJson(STRINGS_PATH)

  verifyRegistry(catalog, NICHE_PAGES, PRODUCTION_BOOKING_FLAGS)

  const referencedKeys = collectReferencedKeys(MOCK_SCAN_PATHS)
  verifyUiStringAllowlist(strings, referencedKeys)
  const declaredKeyCount = DECLARED_KEY_SOURCES.reduce(
    (total, spec) => total + verifyDeclaredMockKeys(strings, spec),
    0,
  )

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
    `verify-niches: ok (${NICHE_PAGES.length} pages, ${referencedKeys.size} mock keys, ${declaredKeyCount} declared product labels, ${Object.keys(strings.locales).length} locales)`,
  )
}

main()
