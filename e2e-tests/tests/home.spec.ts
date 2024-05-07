import { test, expect } from "@playwright/test";
import { analyzeA11yOfPage } from "../utils/a11y";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Portfolio Glenn");
});

test("hero section is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Hi, my name is Glenn Visser", level: 1 })).toBeVisible();
  await expect(page.getByAltText("Glenn Visser")).toBeVisible();
});

test("timeline is visible and can be expanded", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Quality Assurance Engineer", level: 3 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Computer Science", level: 3 })).not.toBeInViewport();
  await page.getByRole("button", { name: "Show more" }).click();
  await expect(page.getByRole("heading", { name: "Computer Science", level: 3 })).toBeVisible();
  await page.getByRole("button", { name: "Show less" }).click();
  await expect(page.getByRole("heading", { name: "Computer Science", level: 3 })).not.toBeInViewport();
});

test("is accessible", async ({ page }) => {
  await page.goto("/");

  await analyzeA11yOfPage(page);
});
