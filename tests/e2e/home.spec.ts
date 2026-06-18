import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('home page', () => {
  test('renders the hero and key landmarks', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Divya Flick/);
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByRole('navigation', { name: /primary/i })).toBeVisible();
  });

  test('has no detectable axe accessibility violations', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('section anchors are reachable via the in-page links', async ({ page }) => {
    await page.goto('/');

    for (const id of ['about', 'experience', 'projects', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test('skip link is keyboard-reachable from the top of the page', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: /skip to content/i });
    await expect(skip).toBeFocused();
  });
});
