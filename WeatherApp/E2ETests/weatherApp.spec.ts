import { test, expect } from '@playwright/test';

//make sure weather app loads correctly and pages load correctly
test('weather app loads correctly', async ({ page }) => {
    await page.goto('https://localhost:7132/');
    const title = await page.title();
    expect(title).toBe('WeatherApp');
});

test('weather page loads correctly', async ({ page }) => {
    await page.goto('https://localhost:7132/weather');
    const title = await page.title();
    expect(title).toBe('WeatherApp');
});

test('forecast page loads correctly', async ({ page }) => {
    await page.goto('https://localhost:7132/forecast');
    const title = await page.title();
    expect(title).toBe('WeatherApp');
});


