import { test, expect } from '@playwright/test';

test('City input field is visible and editable', async ({ page }) => {
    await page.goto('https://localhost:7132/forecast');
    const input = await page.locator('input[aria-label="City name"]');
    await expect(input).toBeVisible();
    await input.fill('New York');
    await expect(input).toHaveValue('New York');
});

test('Get Weather button fetches data', async ({ page }) => {
    await page.goto('https://localhost:7132/forecast');
    const input = await page.locator('input[aria-label="City name"]');
    await input.fill('New York');
    const button = await page.locator('button:has-text("Get Weather")');
    await button.click();
    const forecastTitle = await page.locator('h4:has-text("Forecast for New York")');
    await forecastTitle.waitFor({ state: 'visible' });
    await expect(forecastTitle).toHaveText(/^Forecast for New York/);
});



test('Displays error for invalid city', async ({ page }) => {
    await page.goto('https://localhost:7132/forecast');
    const input = await page.locator('input[aria-label="City name"]');
    await input.fill('InvalidCity');
    const button = await page.locator('button:has-text("Get Weather")');
    await button.click();

    const errorMessage = await page.locator('.alert-danger');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Could not retrieve weather data. Please check the city name or try again later.');
});

test('Displays weather forecast for valid city', async ({ page }) => {
    await page.goto('https://localhost:7132/forecast');
    const input = await page.locator('input[aria-label="City name"]');
    await input.fill('New York');
    const button = await page.locator('button:has-text("Get Weather")');
    await button.click();
    const forecastCards = await page.locator('.card-body p:has-text("Max Temp:")');
    await forecastCards.first().waitFor({ state: 'visible' });
    await expect(forecastCards.first()).toHaveText(/Max Temp:/);
});

