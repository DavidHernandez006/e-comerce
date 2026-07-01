const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');
  const title = await page.title();
  expect(title).toBe('LUMINA K-Beauty');
});
