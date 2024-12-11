import { test, expect } from '@playwright/test';

test('City names are displayed correctly in the cards', async ({ page }) => {
    await page.goto('https://localhost:7132/');
    const expectedCities = ['Dublin', 'New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
    for (const city of expectedCities) {
        const cityCardTitle = await page.locator(`.card-body h5:has-text("${city}")`);
        await expect(cityCardTitle).toBeVisible();
    }
});

test('Temperature values are displayed correctly for each city', async ({ page }) => {
    await page.goto('https://localhost:7132/');
    const temperatureTexts = await page.locator('.card-body p.card-text');
    const temperatureCount = await temperatureTexts.count();
    for (let i = 0; i < temperatureCount; i++) {
        const tempText = await temperatureTexts.nth(i);
        await expect(tempText).toHaveText(/°C/);
    }
});



