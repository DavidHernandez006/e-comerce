import { test, expect } from '@playwright/test';

test('product categories and prices are correct', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');

  // Wait for products to render
  await page.waitForSelector('.tarjeta-producto');

  // Check first product category
  const firstCategory = page.locator('.categoria-producto').first();
  await expect(firstCategory).not.toHaveText('');

  // Check price format
  const firstPrice = page.locator('.precio-producto').first();
  await expect(firstPrice).toContainText('$');
  await expect(firstPrice).not.toContainText('NaN');

  // Go to detail page
  const firstProductTitle = page.locator('.nombre-producto').first();
  const productName = await firstProductTitle.textContent();
  await firstProductTitle.click();

  await expect(page).toHaveURL(/publicacion.html/);
  await expect(page.locator('#titulo-detalle')).toHaveText(productName);

  const detailPrice = page.locator('.precio-detalle');
  await expect(detailPrice).toContainText('$');
  await expect(detailPrice).not.toContainText('NaN');
});

test('cart summary calculates correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');

  // Add product to cart
  await page.click('.boton-agregar-carrito >> nth=0');

  // Go to cart
  await page.goto('http://localhost:3000/pages/carrito.html');

  const subtotal = await page.locator('#subtotal-carrito').textContent();
  const total = await page.locator('#total-carrito').textContent();

  expect(subtotal).toContain('$');
  expect(total).toContain('$');

  // Apply coupon via console to test logic
  await page.evaluate(() => {
    localStorage.setItem('lumina-coupon', 'LUMINA20');
    window.location.reload();
  });

  const newTotal = await page.locator('#total-carrito').textContent();
  expect(newTotal).not.toBe(subtotal);
});
