import { test, expect } from '@playwright/test';

test('Mi primer test con Playwright', async ({ page }) => {
  // Paso 1: Navegar a una página
  await page.goto('https://example.com');
  
  // Paso 2: Verificar el título de la página
  const title = await page.title();
  expect(title).toBe('Example Domain');

  // Paso 3: Verificar si un elemento existe en la página
  const element = await page.locator('h1');
  await expect(element).toHaveText('Example Domain');
});
