import { test, expect } from "@playwright/test";
import { analyzeA11yOfPage } from "../utils/a11y";

test.describe("Home page", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Portfolio Glenn");
  });

  test("is visible", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Hi, my name is Glenn Visser", level: 1 })).toBeVisible();
    await expect(page.getByAltText("Glenn Visser")).toBeVisible();
  });

  test("is accessible", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Hi, my name is Glenn Visser", level: 1 })).toBeVisible();
    await analyzeA11yOfPage(page);
  });
});

test.describe("About me page", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About me" }).click();

    await expect(page).toHaveTitle("About me - Portfolio Glenn");
  });

  test("is visible", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About me" }).click();

    await expect(page.getByRole("heading", { name: "About me", level: 1 })).toBeVisible();
    await expect(page.getByAltText("Fleet Foxes")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Professional Life", level: 2 })).toBeVisible();
  });

  test("is accessible", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About me" }).click();

    await analyzeA11yOfPage(page);
  });
});

test.describe("Timeline page", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Timeline" }).click();

    await expect(page).toHaveTitle("Timeline - Portfolio Glenn");
  });

  test("is visible", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Timeline" }).click();

    await expect(page.getByRole("heading", { name: "Timeline", level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Quality Assurance Engineer", level: 2 })).toBeVisible();
  });

  test("is accessible", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Timeline" }).click();

    await analyzeA11yOfPage(page);
  });
});

test.describe("Settings page", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Settings" }).click();

    await expect(page).toHaveTitle("Settings - Portfolio Glenn");
  });

  test("is visible", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Settings" }).click();

    await expect(page.getByRole("heading", { name: "Settings", level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Theme", level: 2 })).toBeVisible();
    await expect(page.getByRole("combobox", { name: "Select theme" })).toBeVisible();
  });

  test("is accessible", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Settings" }).click();

    await analyzeA11yOfPage(page);
  });
});
