import { expect, test } from "../fixtures";

test.beforeEach(async ({ settingsPage }) => {
  await settingsPage.goto();
  await settingsPage.open();
});

test("opens the settings dialog", async ({ settingsPage }) => {
  await expect(settingsPage.dialog).toBeVisible();
  await expect(settingsPage.themeSelect).toBeVisible();
  await expect(settingsPage.fontSelect).toBeVisible();

  await settingsPage.assertPageIsAccessible();
});

test("closes the settings dialog with Escape", async ({ page, settingsPage }) => {
  await page.keyboard.press("Escape");

  await expect(settingsPage.dialog).toBeHidden();
});

test("changes the theme", async ({ settingsPage }) => {
  await settingsPage.selectTheme("Dark");
  await expect(settingsPage.htmlElement).toHaveClass(/dark/);

  await settingsPage.selectTheme("Light");
  await expect(settingsPage.htmlElement).toHaveClass(/light/);
});

test("changes the font", async ({ settingsPage }) => {
  await settingsPage.selectFont("Mono");
  await expect(settingsPage.dialog).toHaveClass(/font-mono/);

  await settingsPage.selectFont("Serif");
  await expect(settingsPage.dialog).toHaveClass(/font-serif/);
});
