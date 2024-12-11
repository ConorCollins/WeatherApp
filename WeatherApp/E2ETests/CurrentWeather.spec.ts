import { test, expect } from '@playwright/test';

test('City input field is visible and editable', async ({ page }) => {
    await page.goto('https://localhost:7132/weather');
    const input = await page.locator('input[aria-label="City name"]');
    await expect(input).toBeVisible();
    await input.fill('New York');
    await expect(input).toHaveValue('New York');
});

test('Get Weather button fetches data', async ({ page }) => {
    await page.goto('https://localhost:7132/weather');
    const input = await page.locator('input[aria-label="City name"]');
    await input.fill('New York');
    const button = await page.locator('button:has-text("Get Weather")');
    await button.click();

    const weatherCard = await page.locator('.card-body');
    await expect(weatherCard).toContainText('Weather in New York');
});

test('Displays error for invalid city', async ({ page }) => {
    await page.goto('https://localhost:7132/weather');
    const input = await page.locator('input[aria-label="City name"]');
    await input.fill('InvalidCity');
    const button = await page.locator('button:has-text("Get Weather")');
    await button.click();

    const errorMessage = await page.locator('.alert-danger');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Could not retrieve weather data. Please check the city name or try again later.');
});

test('Displays weather information for valid city', async ({ page }) => {
    await page.goto('https://localhost:7132/weather');
    const input = await page.locator('input[aria-label="City name"]');
    await input.fill('New York');
    const button = await page.locator('button:has-text("Get Weather")');
    await button.click();

    const temperature = await page.locator('.card-body p:has-text("Current Temperature")');
    await expect(temperature).toHaveText(/^Current Temperature: \d+(\.\d+)? °C$/);

});

