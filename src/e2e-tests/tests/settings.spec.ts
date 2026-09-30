import { MAIN_PAGES } from "@/constants";
import { expect, test } from "../fixtures";

test("renders settings page on desktop", async ({ page, settingsPage }) => {
  await settingsPage.goto();

  await expect(settingsPage.heading).toBeVisible();
  await expect(settingsPage.themeSelect).toBeVisible();
  await expect(settingsPage.fontSelect).toBeVisible();
  await expect(page).toHaveTitle(MAIN_PAGES.settings.meta.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    MAIN_PAGES.settings.meta.description,
  );

  await settingsPage.assertPageMatchesSnapshot("settings-page");
  await settingsPage.assertPageIsAccessible();
});

test("changes the theme", async ({ settingsPage }) => {
  await settingsPage.goto();

  await settingsPage.selectTheme("Dark");
  await expect(settingsPage.htmlElement).toHaveClass(/dark/);

  await settingsPage.selectTheme("Light");
  await expect(settingsPage.htmlElement).toHaveClass(/light/);
});

test("changes the font", async ({ settingsPage }) => {
  await settingsPage.goto();

  await settingsPage.selectFont("Mono");
  await expect(settingsPage.layoutRoot).toHaveClass(/font-mono/);

  await settingsPage.selectFont("Serif");
  await expect(settingsPage.layoutRoot).toHaveClass(/font-serif/);
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("renders settings page in dark mode", async ({ settingsPage }) => {
    await settingsPage.goto();

    await expect(settingsPage.heading).toBeVisible();
    await settingsPage.assertPageMatchesSnapshot("settings-page-dark");
    await settingsPage.assertPageIsAccessible();
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("renders settings page on mobile", async ({ settingsPage }) => {
    await settingsPage.goto();

    await expect(settingsPage.heading).toBeVisible();
    await settingsPage.assertPageMatchesSnapshot("settings-page-mobile");
    await settingsPage.assertPageIsAccessible();
  });
});
