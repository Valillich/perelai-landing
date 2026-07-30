import { existsSync, readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, test } from "vitest"

const projectRoots = ["app", "components", "config", "lib"]
const interpolation = /\$\{[^}]*NEXT_PUBLIC_APP_URL[^}]*\}/

function sourceFiles(directory: string): string[] {
  if (!existsSync(directory)) return []

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return sourceFiles(path)
    return /\.(?:ts|tsx|js|mjs)$/.test(entry.name) ? [path] : []
  })
}

test("only lib/urls.ts may interpolate the app URL", () => {
  const violations = projectRoots
    .flatMap(sourceFiles)
    .filter((file) => file !== join("lib", "urls.ts"))
    .filter((file) => interpolation.test(readFileSync(file, "utf8")))

  expect(violations).toEqual([])
})
