import { test, expect } from '@playwright/test'

test('homepage has site owner name and GEM link', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: /Szymon Frączek/i })
  ).toBeVisible()

  const gemLink = page.getByRole('link', { name: /GEM/i })
  await expect(gemLink).toBeVisible()
  await expect(gemLink).toHaveAttribute('href', '/finance')
})
