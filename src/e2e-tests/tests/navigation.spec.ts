import { MAIN_PAGES } from "@/constants";
import { expect, test } from "../fixtures";

test.describe("desktop", () => {
  test.use({ colorScheme: "light" });

  test("cycles through light, dark and system theme", async ({ page, navigationPage }) => {
    await navigationPage.goto();
    await expect(navigationPage.themeToggle).toHaveAccessibleName("Theme: System. Switch to light");

    await navigationPage.themeToggle.click();
    await expect(navigationPage.themeToggle).toHaveAccessibleName("Theme: Light. Switch to dark");
    await expect(navigationPage.htmlElement).toHaveClass(/light/);
    await expect(page.locator('meta[name="theme-color"]').last()).toHaveAttribute("content", "#ffffff");

    await navigationPage.themeToggle.click();
    await expect(navigationPage.themeToggle).toHaveAccessibleName("Theme: Dark. Switch to system");
    await expect(navigationPage.htmlElement).toHaveClass(/dark/);
    // The mobile browser bar follows the chosen theme, not just the system one
    await expect(page.locator('meta[name="theme-color"]').first()).toHaveAttribute("content", "#0a0a0a");

    await navigationPage.themeToggle.click();
    await expect(navigationPage.themeToggle).toHaveAccessibleName("Theme: System. Switch to light");
    // Follows the browser's color scheme, which is light here
    await expect(navigationPage.htmlElement).toHaveClass(/light/);
    expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe("system");
  });

  test("hides the mobile menu button", async ({ navigationPage }) => {
    await navigationPage.goto();

    await expect(navigationPage.menuButton).toBeHidden();
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, colorScheme: "light" });

  test.beforeEach(async ({ navigationPage }) => {
    await navigationPage.goto();
    await navigationPage.menuButton.click();
  });

  test("lists all pages in the menu", async ({ navigationPage }) => {
    await expect(navigationPage.menu).toBeVisible();
    for (const page of Object.values(MAIN_PAGES)) {
      await expect(navigationPage.menuLink(page.name)).toBeVisible();
    }
    await expect(navigationPage.menuLink("Contact")).toBeVisible();

    await navigationPage.assertPageIsAccessible();
  });

  test("navigates to a page and closes the menu", async ({ page, navigationPage }) => {
    await navigationPage.menuLink(MAIN_PAGES.timeline.name).click();

    await expect(page).toHaveURL(MAIN_PAGES.timeline.href);
    await expect(navigationPage.menu).toBeHidden();
  });

  test("closes the menu with Escape", async ({ page, navigationPage }) => {
    await page.keyboard.press("Escape");

    await expect(navigationPage.menu).toBeHidden();
  });

  test("changes the theme", async ({ navigationPage }) => {
    await navigationPage.selectTheme("Dark");
    await expect(navigationPage.htmlElement).toHaveClass(/dark/);

    await navigationPage.selectTheme("Light");
    await expect(navigationPage.htmlElement).toHaveClass(/light/);
  });
});
