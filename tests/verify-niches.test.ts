import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"
import { afterEach, describe, expect, it } from "vitest"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dirs: string[] = []

afterEach(() => {
  for (const dir of dirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

describe("verify:niches", () => {
  it("exits 0 against the committed generated files", () => {
    const result = spawnSync("pnpm", ["verify:niches"], {
      cwd: ROOT,
      encoding: "utf8",
    })
    expect(result.status).toBe(0)
  }, 15000)

  it("exits non-zero when an allowlisted key is removed from a fixture", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "perelai-verify-"))
    dirs.push(dir)

    const stringsPath = path.join(dir, "app-ui-strings.generated.json")
    cpSync(path.join(ROOT, "data/app-ui-strings.generated.json"), stringsPath)

    const strings = JSON.parse(readFileSync(stringsPath, "utf8"))
    delete strings.locales.en["inbox.title"]
    writeFileSync(stringsPath, `${JSON.stringify(strings, null, 2)}\n`)

    const result = spawnSync("pnpm", ["verify:niches"], {
      cwd: ROOT,
      encoding: "utf8",
      env: {
        ...process.env,
        VERIFY_STRINGS_PATH: stringsPath,
      },
    })

    expect(result.status).not.toBe(0)
    expect(`${result.stdout}\n${result.stderr}`).toMatch(/inbox\.title/)
  }, 15000)

  it("exits non-zero when a catalog fixture has a stale sourceCommit", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "perelai-verify-stale-"))
    dirs.push(dir)

    const catalogPath = path.join(dir, "niche-catalog.generated.json")
    cpSync(path.join(ROOT, "data/niche-catalog.generated.json"), catalogPath)

    const catalog = JSON.parse(readFileSync(catalogPath, "utf8"))
    catalog.sourceCommit = "0000000000000000000000000000000000000000"
    writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`)

    const result = spawnSync("pnpm", ["verify:niches"], {
      cwd: ROOT,
      encoding: "utf8",
      env: {
        ...process.env,
        VERIFY_CATALOG_PATH: catalogPath,
      },
    })

    expect(result.status).not.toBe(0)
    expect(`${result.stdout}\n${result.stderr}`).toMatch(/differs from app HEAD/)
  }, 15000)
})
