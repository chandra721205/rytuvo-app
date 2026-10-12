const { chromium } = require('playwright-core');
const B = 'http://127.0.0.1:8099', S = '/workspace/rytuvo-1.2.1-shots/';
const issues = [];
(async () => {
  const br = await chromium.launch({ executablePath: '/opt/google/chrome/chrome', args: ['--no-sandbox'] });
  const ctx = await br.newContext({ viewport: { width: 360, height: 760 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => issues.push(`pageerror ${page.url()}: ${e.message}`));
  page.on('console', (m) => m.type() === 'error' && issues.push(`console ${page.url()}: ${m.text().slice(0, 160)}`));
  const go = async (r, shot) => {
    const t = Date.now();
    await page.goto(B + r, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const ms = Date.now() - t;
    if (ms > 4000) issues.push(`slow ${r} ${ms}ms`);
    const over = await page.evaluate(() => [...document.querySelectorAll('div,span')].filter((e) => e.scrollWidth > e.clientWidth + 2 && getComputedStyle(e).overflowX === 'visible' && e.getBoundingClientRect().right > window.innerWidth + 2).length);
    const wide = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
    if (wide || over) issues.push(`overflow ${r} wide=${wide} els=${over}`);
    if (shot) await page.screenshot({ path: S + shot + '.png', fullPage: true });
  };
  const fill = async (label, v) => {
    const i = page.getByText(label, { exact: false }).first().locator('xpath=following::input[1]');
    await i.fill(v);
  };
  const pick = async (label, opt) => {
    await page.getByText(label, { exact: false }).first().locator('xpath=following::*[normalize-space(text())="Select"][1]').click();
    await page.getByText(opt, { exact: true }).last().click();
    await page.waitForTimeout(200);
  };
  const otp = async (v = '123456') => { const i = page.locator('input').last(); await i.fill(v); };
  const click = async (t) => { await page.getByText(t, { exact: false }).first().click(); await page.waitForTimeout(300); };
  const toast = async () => (await page.locator('body').innerText()).split('\n').slice(-3).join(' | ');
  const step = async (name, fn) => { try { await fn(); } catch (e) { issues.push(`STEP ${name}: ${e.message.split('\n')[0]}`); await page.screenshot({ path: S + 'fail-' + name + '.png' }); } };

  // Producer: 1Tradie flow
  await go('/producer/p-100-journey');
  if (await page.getByText('EN', { exact: true }).count()) await page.getByText('EN', { exact: true }).first().click();
  await go('/producer/1t/dashboard', '01-producer-1t-dashboard');
  await step('profile', async () => { await go('/producer/1t/profile'); await pick('Producer type', 'small'); await fill('Full name', 'Ramesh'); await fill('Mobile number', '9876543210'); await click('Save & continue'); });
  await step('lot', async () => {
    await go('/producer/1t/lot-management');
    await pick('Commodity', 'Chilli'); await pick('Variety', 'Teja'); await pick('Market yard', 'Guntur');
    await fill('Bags *', '63'); await fill('Gross kg per bag', '40'); await fill('Offer price', '22400'); await fill('Hidden stop-loss', '22000');
    await page.screenshot({ path: S + '02-producer-lot-form.png', fullPage: true });
    await click('Save & continue');
    if (!page.url().includes('sampling-quality')) issues.push('lot did not advance: ' + (await toast()));
  });
  await step('engage', async () => { await go('/producer/1t/commission-agent'); await fill('Commission %', '2'); const ins = page.locator('input'); const n = await ins.count(); await ins.nth(n - 2).fill('123456'); await ins.nth(n - 1).fill('123456'); await click('Save & continue'); if (page.url().includes('commission-agent')) issues.push('engage stuck: ' + (await toast())); });
  await step('grading', async () => { await go('/producer/1t/grading'); await pick('Final grade', 'A (Premium)'); await click('Save & continue'); });
  await step('decision-store', async () => { await go('/producer/1t/storage-sell-decision', '03-producer-store-or-sell'); await pick('Choose your path', 'Store'); await click('Save & continue'); if (!page.url().includes('/storage')) issues.push('store branch failed ' + page.url()); });
  await go('/producer/1t/storage', '04-producer-storage-branch');
  await go('/producer/1t/tokenization', '05-producer-token-qr');
  // Agent publishes
  await step('publish', async () => { await go('/agent/a-01-home'); await click('Publish to buyers'); await page.waitForTimeout(300); await page.screenshot({ path: S + '06-agent-home.png', fullPage: true }); });
  // Buyer bids
  await step('bid', async () => {
    await go('/buyer/b-01-market');
    await fill('Your bid', '21000'); await click('Place bid');
    await fill('Your bid', '22500'); await click('Place bid');
    await fill('Auto-bid max', '22600'); await click('Auto-bid up to max');
    await page.screenshot({ path: S + '07-buyer-market-bid.png', fullPage: true });
  });
  await step('producer-bids', async () => { await go('/producer/p-100-journey', '08-producer-journey-live-bids'); });
  await step('close', async () => { await go('/agent/a-04-auction-desk'); await click('Close as sold'); });
  await step('sale-otp', async () => { await go('/producer/1t/market-auction'); await otp(); await click('Save & continue'); if (page.url().includes('market-auction')) issues.push('sale otp stuck: ' + (await toast())); });
  for (const r of ['/agent/a-60-buyer-bill', '/agent/a-62-weighbridge-entry', '/agent/a-66-advance-recovery', '/agent/a-67-lifting-otp', '/producer/p-112-producer-patti', '/buyer/b-60-buyer-bill', '/buyer/b-63-eway', '/buyer/b-15-hire-inspector', '/menu/producer'])
    await step('route' + r, async () => go(r, 'r' + r.replace(/\//g, '_')));
  // Telugu
  await step('telugu', async () => { await go('/producer/p-100-journey'); await click('తె'); await page.waitForTimeout(300); await page.screenshot({ path: S + '09-producer-telugu.png', fullPage: true }); });
  // overflow sweep of all 1Tradie stages
  for (const s of require('/workspace/rytuvo-app/src/oneTradie/stages.json')) await step('sweep' + s.id, () => go('/producer/1t/' + s.id));
  console.log(JSON.stringify([...new Set(issues)], null, 1));
  await br.close();
})();
