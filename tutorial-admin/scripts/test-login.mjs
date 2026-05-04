import { chromium } from 'playwright';

const BASE_URL = 'https://admin.terralia.es';
const EMAIL = process.argv[2] || 'admin@terrallia.es';
const PASSWORD = process.argv[3] || 'AdmTerralia!';

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

console.log(`Testing login: ${EMAIL}`);
await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
console.log(`Loaded: ${page.url()}`);

await page.screenshot({ path: '/tmp/admin-login.png', fullPage: true });
console.log('Screenshot of login: /tmp/admin-login.png');

const emailInput = await page.$('input[type="email"], input[name="email"]');
const passwordInput = await page.$('input[type="password"], input[name="password"]');
console.log(`Email input found: ${!!emailInput}, Password input found: ${!!passwordInput}`);

if (emailInput && passwordInput) {
  await emailInput.fill(EMAIL);
  await passwordInput.fill(PASSWORD);
  await page.click('button[type="submit"], button:has-text("Iniciar"), button:has-text("Entrar"), button:has-text("Login")');
  await page.waitForTimeout(3000);
  console.log(`After login URL: ${page.url()}`);
  await page.screenshot({ path: '/tmp/admin-after-login.png', fullPage: true });
}

await browser.close();
