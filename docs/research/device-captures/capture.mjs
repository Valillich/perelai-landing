/**
 * DVC2 device evidence capture (amended).
 *
 * Records browserMode (headless/headed) and verifies Calendar pane structure in
 * the DOM — not media-query flags alone — before labeling two-/three-pane.
 *
 * Run:
 *   cd /Users/valery/Sites/beauty-finance && \
 *   node --input-type=module < /Users/valery/Sites/perelai-landing/docs/research/device-captures/capture.mjs
 *
 * Requires /tmp/dvc2-token.txt and /tmp/dvc2-app-commit.txt. Does not modify
 * beauty-finance source.
 */
import {createRequire} from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const require = createRequire('/Users/valery/Sites/beauty-finance/package.json');
const {chromium, devices} = require('@playwright/test');

const ROOT = '/Users/valery/Sites/perelai-landing';
const EVIDENCE = path.join(ROOT, 'docs/research/device-captures/evidence');
const ORIGINALS = path.join(ROOT, 'docs/research/device-captures/originals');
const TOKEN = fs.readFileSync('/tmp/dvc2-token.txt', 'utf8').trim();
const APP_COMMIT = fs.readFileSync('/tmp/dvc2-app-commit.txt', 'utf8').trim();
/** Automated capture default. Set PLAYWRIGHT_HEADED=1 for headed Chrome. */
const HEADLESS = process.env.PLAYWRIGHT_HEADED !== '1';
const BROWSER_MODE = HEADLESS ? 'headless-automated' : 'headed';
const EVIDENCE_TYPE = HEADLESS
  ? 'automated-browser-capture (Playwright headless Chrome — NOT a physical/manual desktop check)'
  : 'headed-browser-capture (Playwright headed Chrome — still not a separate manual QA checklist unless documented)';

fs.mkdirSync(EVIDENCE, {recursive: true});
fs.mkdirSync(ORIGINALS, {recursive: true});

async function inspectStructure(page) {
  return page.evaluate(() => {
    const root = document.querySelector('[data-responsive-desktop]');
    const isDesktop = root?.getAttribute('data-responsive-desktop') === 'true';
    const isWide = root?.getAttribute('data-responsive-wide-desktop') === 'true';
    const rail = document.querySelector('[class*="w-[82px]"]');
    const railText = (rail?.textContent || '').replace(/\s+/g, ' ');
    const panePresence = {
      rail:
        Boolean(rail) &&
        /Calendar/i.test(railText) &&
        /Clients/i.test(railText) &&
        /Finance/i.test(railText),
      inbox: /INBOX/.test(document.body.innerText),
      calendarContent: /August 2026|AUG 1, 2026/i.test(document.body.innerText),
      contextualPlanPane: /Plan your next entry/i.test(document.body.innerText),
    };
    let layoutClass = 'one-pane';
    let panesVerified = 1;
    if (!isDesktop) {
      layoutClass = 'one-pane';
      panesVerified = 1;
    } else if (
      isWide &&
      panePresence.rail &&
      panePresence.inbox &&
      panePresence.calendarContent &&
      panePresence.contextualPlanPane
    ) {
      layoutClass = 'three-pane';
      panesVerified = 3;
    } else if (
      panePresence.rail &&
      panePresence.inbox &&
      panePresence.calendarContent
    ) {
      layoutClass = 'two-pane';
      panesVerified = 2;
    } else {
      layoutClass = 'unverified';
      panesVerified = 0;
    }
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      matchDesktop: window.matchMedia('(min-width: 64rem)').matches,
      matchWide: window.matchMedia('(min-width: 85rem)').matches,
      dataResponsiveDesktop: isDesktop,
      dataResponsiveWideDesktop: isWide,
      panePresence,
      panesVerified,
      layoutClass,
    };
  });
}

async function prepare(page) {
  await page.addInitScript((token) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('i18nextLng', 'en');
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }, TOKEN);
  await page.goto('http://localhost:4200/calendar', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  await page.waitForTimeout(800);
  const dismiss = page.getByRole('button', {name: /dismiss|got it|close/i});
  if (await dismiss.count()) {
    await dismiss.first().click({timeout: 1500}).catch(() => undefined);
  }
  if (page.url().includes('/login')) throw new Error(`Auth failed: ${page.url()}`);
}

async function captureViewport(browser, vp) {
  const context = await browser.newContext({
    viewport: {width: vp.width, height: vp.height},
    deviceScaleFactor: vp.deviceScaleFactor ?? 2,
    isMobile: vp.isMobile ?? false,
    hasTouch: vp.hasTouch ?? false,
    userAgent: vp.userAgent,
    colorScheme: 'light',
    locale: 'en-US',
  });
  const page = await context.newPage();
  await prepare(page);
  const measured = await inspectStructure(page);
  if (vp.requireThreePane && measured.layoutClass !== 'three-pane') {
    throw new Error(
      `${vp.id}: expected three-pane (rail+Inbox+calendar+Plan your next entry), got ${measured.layoutClass}`,
    );
  }
  if (vp.requireTwoPane && measured.layoutClass !== 'two-pane') {
    throw new Error(
      `${vp.id}: expected two-pane, got ${measured.layoutClass}`,
    );
  }
  const png = `${vp.id}.png`;
  const originalPath = path.join(ORIGINALS, png);
  await page.screenshot({path: originalPath, fullPage: false, type: 'png'});
  fs.copyFileSync(originalPath, path.join(EVIDENCE, png));
  const meta = {
    id: vp.id,
    label: vp.label,
    route: '/calendar',
    requestedViewport: {width: vp.width, height: vp.height},
    measured,
    appCommit: APP_COMMIT,
    browser: 'Google Chrome (Playwright channel: chrome)',
    browserMode: BROWSER_MODE,
    evidenceType: vp.evidenceType || EVIDENCE_TYPE,
    locale: 'en',
    theme: 'light',
    captureDate: '2026-08-01',
    fileSizeBytes: fs.statSync(originalPath).size,
    threePaneAsserted: measured.layoutClass === 'three-pane',
  };
  fs.writeFileSync(
    path.join(EVIDENCE, `${vp.id}.json`),
    JSON.stringify(meta, null, 2) + '\n',
  );
  await context.close();
  return meta;
}

const browser = await chromium.launch({channel: 'chrome', headless: HEADLESS});
const ipad = devices['iPad Pro 11'];
const phoneUA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

const results = [];
results.push(
  await captureViewport(browser, {
    id: 'phone-390x844',
    label: 'Phone focused Calendar',
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent: phoneUA,
    evidenceType: 'automated-browser-emulation (not physical iPhone Safari)',
  }),
);
results.push(
  await captureViewport(browser, {
    id: 'ipad-portrait',
    label: 'iPad portrait Calendar',
    width: ipad.viewport.width,
    height: ipad.viewport.height,
    deviceScaleFactor: ipad.deviceScaleFactor,
    isMobile: true,
    hasTouch: true,
    userAgent: ipad.userAgent,
    evidenceType: 'automated-browser-emulation (not physical iPad Safari)',
  }),
);
results.push(
  await captureViewport(browser, {
    id: 'ipad-landscape',
    label: 'iPad landscape Calendar',
    width: ipad.viewport.height,
    height: ipad.viewport.width,
    deviceScaleFactor: ipad.deviceScaleFactor,
    isMobile: true,
    hasTouch: true,
    userAgent: ipad.userAgent,
    evidenceType: 'automated-browser-emulation (not physical iPad Safari)',
  }),
);
for (const vp of [
  {id: 'desktop-1024x900', width: 1024, height: 900, requireTwoPane: true},
  {id: 'desktop-1360x900', width: 1360, height: 900, requireThreePane: true},
  {id: 'desktop-1440x900', width: 1440, height: 900, requireThreePane: true},
  {id: 'desktop-1600x900', width: 1600, height: 900, requireThreePane: true},
]) {
  results.push(
    await captureViewport(browser, {
      ...vp,
      label: `Desktop Calendar ${vp.width}x${vp.height}`,
    }),
  );
}

fs.writeFileSync(
  path.join(EVIDENCE, 'capture-summary.json'),
  JSON.stringify(
    {
      appCommit: APP_COMMIT,
      browserMode: BROWSER_MODE,
      evidenceType: EVIDENCE_TYPE,
      results,
    },
    null,
    2,
  ) + '\n',
);
fs.writeFileSync(
  path.join(EVIDENCE, 'desktop-breakpoint-summary.json'),
  JSON.stringify(
    {
      appCommit: APP_COMMIT,
      browserMode: BROWSER_MODE,
      evidenceType: EVIDENCE_TYPE,
      results: results
        .filter((r) => r.id.startsWith('desktop-'))
        .map((r) => ({
          id: r.id,
          viewport: r.requestedViewport,
          layoutClass: r.measured.layoutClass,
          panesVerified: r.measured.panesVerified,
          panePresence: r.measured.panePresence,
          threePaneAsserted: r.threePaneAsserted,
        })),
    },
    null,
    2,
  ) + '\n',
);
await browser.close();
console.log(
  JSON.stringify(
    results.map((r) => ({
      id: r.id,
      browserMode: r.browserMode,
      layoutClass: r.measured.layoutClass,
      panePresence: r.measured.panePresence,
    })),
    null,
    2,
  ),
);
