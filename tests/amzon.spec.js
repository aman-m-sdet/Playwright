import {test, expect} from '@playwright/test';

test("amazon UI validation", async ({page}) => {

  await page.goto("https://www.amazon.com/");

  const logo = await page.locator('#nav-logo-sprites');
  const cart = await page.locator('#nav-cart-count');

  // Check both are visible
  await expect(logo).toBeVisible();
  await expect(cart).toBeVisible();

  // Validate cart count = 0
  await expect(cart).toHaveText('0');

});
