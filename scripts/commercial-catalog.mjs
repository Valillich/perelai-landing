import {existsSync, readFileSync, writeFileSync} from "node:fs"
import {resolve, dirname} from "node:path"
import {fileURLToPath} from "node:url"
import {pathToFileURL} from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const appRoot = resolve(root, process.env.PERELAI_APP_REPO ?? "../beauty-finance")
const target = process.env.VERIFY_COMMERCIAL_CATALOG_PATH ?? resolve(root, "data/commercial-offers.generated.json")
const sourcePath = resolve(appRoot, "libs/core/src/billing/public-offers.ts")
const source = existsSync(sourcePath) ? await import(pathToFileURL(sourcePath).href) : undefined
if (!source && process.argv.includes("--write")) throw new Error("App commercial source is required for generation")
const catalog = source ? source.getPublicOfferCatalog() : JSON.parse(readFileSync(target, "utf8"))
const serialized = `${JSON.stringify(catalog, null, 2)}\n`
const policy = readFileSync(resolve(root, "docs/commercial-policy.md"), "utf8")
if (catalog.schemaVersion !== 1 || catalog.sourceRevision !== "launch-20260906.1") throw new Error("Unsupported commercial revision")
if (Object.keys(catalog).some(key => !["schemaVersion", "sourceRevision", "offers"].includes(key))) throw new Error("Unsupported commercial schema")
if (/paddle|checkout|customer|subscription|https?:|(?:pri|pro|ctm)_[a-z0-9]/i.test(serialized)) throw new Error("Provider data in public catalog")
if (JSON.stringify(catalog.offers.map(offer => offer.offerCode)) !== JSON.stringify(["SOLO_MONTHLY", "STUDIO_MONTHLY"])) throw new Error("Unapproved public offers")
for (const [index, offer] of catalog.offers.entries()) {
  const expectedPlan = ["SOLO", "STUDIO"][index]
  const allowedKeys = ["offerCode", "planCode", "billingInterval", "canonicalAmountMinor", "baseCurrency", "automaticCurrencyConversion", "taxPresentationPolicy", "regionalPricingPolicy", "publicStatus", "audience", "approvedCopyKey", "performerLimit"]
  if (Object.keys(offer).some(key => !allowedKeys.includes(key)) || offer.planCode !== expectedPlan ||
    offer.approvedCopyKey !== `pricing.plans.${expectedPlan.toLowerCase()}`) throw new Error("Unsupported public offer schema")
  if (offer.canonicalAmountMinor !== [1900, 2900][index] || offer.performerLimit !== [1, 5][index] ||
    offer.billingInterval !== "MONTH" || offer.baseCurrency !== "USD" || offer.automaticCurrencyConversion !== true ||
    offer.taxPresentationPolicy !== "LOCATION_BASED" || offer.regionalPricingPolicy !== "NONE" ||
    offer.publicStatus !== "VISIBLE" || offer.audience !== "PUBLIC") throw new Error("Unapproved commercial facts")
  const approvalRow = policy.split("\n").find(line => line.startsWith(`| CF-0${index + 7} |`))
  if (!approvalRow?.includes("| APPROVED POLICY |")) throw new Error("Missing commercial approval")
}
for (const locale of ["en", "uk", "pl", "ru", "es", "fr", "de", "pt", "tr"]) {
  const messages = {pricing: JSON.parse(readFileSync(resolve(root, `messages/${locale}/pricing.json`), "utf8"))}
  for (const offer of catalog.offers) {
    const plan = messages.pricing?.plans?.[offer.planCode.toLowerCase()]
    if (!plan?.description || !plan.capacity?.includes("{limit}")) throw new Error(`Missing approved plan copy: ${locale}/${offer.planCode}`)
  }
  for (const key of ["currency", "availability", "monthly", "perMonth", "perBusiness"]) {
    if (!messages.pricing?.plans?.[key]) throw new Error(`Missing commercial copy: ${locale}/${key}`)
  }
  if (!messages.pricing?.trial?.body || !messages.pricing?.billing?.renewal || !messages.pricing?.faq?.a7) throw new Error(`Missing trial/legal copy: ${locale}`)
}
if (process.argv.includes("--write")) {
  if (!existsSync(target) || readFileSync(target, "utf8") !== serialized) writeFileSync(target, serialized)
}
else if (!existsSync(target) || readFileSync(target, "utf8") !== serialized) throw new Error("Stale commercial catalog; run pnpm generate:commercial")
if (!source) console.warn("App repo absent: approved pinned artifact verified locally; run sibling comparison before release")
console.log(`Commercial catalog ${catalog.sourceRevision}: verified`)
