// Run against a running landing: node scripts/verify-mvp-niche-routes.mjs http://localhost:3000
// Uses the real HTTP/proxy path; unit mocks of next-intl cannot catch header drift.
import assert from 'node:assert/strict'
const base = new URL(process.argv[2] ?? 'http://localhost:3000')
const locales = ['en', 'uk', 'pl', 'ru', 'es', 'fr', 'de', 'pt', 'tr']
const ogLocales = {en: 'en_US', uk: 'uk_UA', pl: 'pl_PL', ru: 'ru_RU', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', pt: 'pt_PT', tr: 'tr_TR'}
for (const slug of ['for-barbers', 'for-nail-artists', 'for-makeup-artists', 'for-photographers', 'for-career-coaches']) {
  for (const locale of locales) {
    const path = `${locale === 'en' ? '' : `/${locale}`}/${slug}`
    const response = await fetch(new URL(path, base), {redirect: 'manual'})
    assert.equal(response.status, 200, `${path}: should render without redirects`)
    const html = await response.text()
    const alternates = [...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*>/g)].map(m => m[0])
    const languages = alternates.flatMap(tag => [...tag.matchAll(/href[Ll]ang="([^"]+)"/g)].map(m => m[1])).sort()
    assert.deepEqual(languages, [...locales, 'x-default'].sort(), `${path}: HTML hreflang cluster`)
    const ogAlternates = [...html.matchAll(/<meta\b[^>]*property="og:locale:alternate"[^>]*content="([^"]+)"[^>]*>/g)].map(match => match[1]).sort()
    assert.deepEqual(ogAlternates, locales.filter(value => value !== locale).map(value => ogLocales[value]).sort(), `${path}: Open Graph locales`)
    assert.ok(html.includes(`lng=${locale}`), `${path}: signup must retain language`)
  }
  const duplicate = await fetch(new URL(`/en/${slug}`, base), {redirect: 'manual'})
  assert.equal(duplicate.status, 308)
  assert.ok(new URL(duplicate.headers.get('location'), base).pathname === `/${slug}`, 'English prefix must redirect to canonical URL')
  console.log(`${slug}: 9 translated pages, canonical redirect, hreflang and Open Graph PASS`)
}
