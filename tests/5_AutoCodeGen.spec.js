import { test, expect } from '@playwright/test';

test('Google homepage basic navigation', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Verify Google logo
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();

  // Top links
  await page.getByRole('link', { name: 'About' }).click();
  await page.goBack();

  await page.getByRole('link', { name: 'Store' }).click();
  await page.goBack();

  await page.getByRole('link', { name: 'Gmail' }).click();
  await page.goBack();

  await page.getByRole('link', { name: 'Images' }).click();
  await page.goBack();

  // Google apps
  await page.getByRole('button', { name: 'Google apps' }).click();
  await page.keyboard.press('Escape');

  // Sign in
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page).toHaveURL(/accounts\.google\.com/);
});
