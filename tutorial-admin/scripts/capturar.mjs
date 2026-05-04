import { chromium } from 'playwright';
import { mkdirSync, existsSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', 'capturas');
const BASE_URL = 'https://admin.terralia.es';
const EMAIL = 'admin@terralia.es';
const PASSWORD = 'AdmTerralia!';

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

const shot = async (name, opts = {}) => {
  await page.waitForTimeout(opts.delay ?? 1200);
  await page.screenshot({
    path: `${OUTPUT_DIR}/${name}.png`,
    fullPage: opts.fullPage ?? true,
  });
  console.log(`✓ ${name}.png  (${page.url()})`);
};

// Click sidebar item by text + wait for URL pattern
const navSidebar = async (text, urlPattern) => {
  await page.click(`nav >> text=${text}, aside >> text=${text}, [class*="sidebar"] >> text=${text}`).catch(async () => {
    // fallback: any element matching the text inside left rail
    await page.locator(`text=${text}`).first().click();
  });
  if (urlPattern) await page.waitForURL(urlPattern, { timeout: 8000 }).catch(() => {});
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.waitForTimeout(800);
};

// ─── 1. LOGIN ───────────────────────────────────────────────
await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
await shot('01-login-vacio', { fullPage: false });
await page.fill('input[type="email"]', EMAIL);
await page.fill('input[type="password"]', PASSWORD);
await shot('02-login-credenciales', { fullPage: false });
await page.click('button[type="submit"]');
await page.waitForURL('**/dashboard', { timeout: 10000 });
await page.waitForTimeout(1500);

// ─── 2. DASHBOARD ───────────────────────────────────────────
await shot('03-dashboard');

// ─── 3. TRABAJOS ────────────────────────────────────────────
await navSidebar('Trabajos', '**/trabajos');
await shot('04-trabajos-lista');

// click en primera fila de la tabla
const jobRow = await page.$('tbody tr');
if (jobRow) {
  await jobRow.click();
  await page.waitForURL('**/trabajos/*', { timeout: 5000 }).catch(() => {});
  await page.waitForLoadState('networkidle').catch(() => {});
  await shot('05-trabajo-detalle');
}

// ─── 4. USUARIOS ────────────────────────────────────────────
await navSidebar('Usuarios', '**/usuarios');
await shot('06-usuarios-lista');

const userRow = await page.$('tbody tr');
if (userRow) {
  await userRow.click();
  await page.waitForURL('**/usuarios/*', { timeout: 5000 }).catch(() => {});
  await page.waitForLoadState('networkidle').catch(() => {});
  await shot('07-usuario-detalle');
}

// ─── 5. MAQUINARIA ──────────────────────────────────────────
await navSidebar('Maquinaria', '**/maquinaria');
await shot('08-maquinaria-lista');

const machRow = await page.$('tbody tr');
if (machRow) {
  await machRow.click();
  await page.waitForURL('**/maquinaria/*', { timeout: 5000 }).catch(() => {});
  await page.waitForLoadState('networkidle').catch(() => {});
  await shot('09-maquinaria-detalle');
}

// ─── 6. RESEÑAS ─────────────────────────────────────────────
await navSidebar('Reseñas', '**/resenas');
await shot('10-resenas-lista');

const reviewRow = await page.$('tbody tr');
if (reviewRow) {
  await reviewRow.click();
  await page.waitForURL('**/resenas/*', { timeout: 5000 }).catch(() => {});
  await page.waitForLoadState('networkidle').catch(() => {});
  await shot('11-resena-detalle');
}

// ─── 7. REPORTES ────────────────────────────────────────────
await navSidebar('Reportes', '**/reportes');
await shot('12-reportes');

await browser.close();
console.log(`\nFin. Capturas en: ${OUTPUT_DIR}`);
