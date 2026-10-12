// Run against a running landing: node scripts/verify-mvp-niche-routes.mjs http://localhost:3000
// Uses the real HTTP/proxy path; unit mocks of next-intl cannot catch header drift.
import assert from 'node:assert/strict'
const base = new URL(process.argv[2] ?? 'http://localhost:3000')
const locales = ['en', 'ru', 'uk']
const otherLocales = ['de', 'es', 'fr', 'pl', 'pt', 'tr']
for (const slug of ['for-barbers', 'for-nail-artists', 'for-makeup-artists']) {
  for (const locale of locales) {
    const path = `${locale === 'en' ? '' : `/${locale}`}/${slug}`
    const response = await fetch(new URL(path, base), {redirect: 'manual'})
    assert.equal(response.status, 200, `${path}: should render without redirects`)
    const headerLinks = response.headers.get('link') ?? ''
    for (const missing of otherLocales) assert.ok(!headerLinks.includes(`hreflang="${missing}"`), `${path}: advertises missing ${missing} in HTTP Link`)
    const html = await response.text()
    const alternates = [...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*>/g)].map(m => m[0])
    const languages = alternates.flatMap(tag => [...tag.matchAll(/href[Ll]ang="([^"]+)"/g)].map(m => m[1])).sort()
    assert.deepEqual(languages, [...locales, 'x-default'].sort(), `${path}: HTML hreflang cluster`)
  }
  for (const locale of otherLocales) {
    const response = await fetch(new URL(`/${locale}/${slug}`, base), {redirect: 'manual'})
    assert.equal(response.status, 404, `${locale}/${slug}: missing translation must 404`)
  }
  const duplicate = await fetch(new URL(`/en/${slug}`, base), {redirect: 'manual'})
  assert.equal(duplicate.status, 308)
  assert.ok(new URL(duplicate.headers.get('location'), base).pathname === `/${slug}`, 'English prefix must redirect to canonical URL')
  console.log(`${slug}: 3 pages, 6 missing locales, canonical redirect and hreflang PASS`)
}
