import { MAIN_PAGES } from "@/constants";
import { expect, test } from "../fixtures";

test("renders about page on desktop", async ({ page, aboutPage }) => {
  await aboutPage.goto();

  await expect(aboutPage.heading).toBeVisible();
  await expect(aboutPage.fleetFoxesImage).toBeVisible();
  await expect(aboutPage.professionalLifeHeading).toBeVisible();
  await expect(page).toHaveTitle(MAIN_PAGES.about.meta.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", MAIN_PAGES.about.meta.description);

  await aboutPage.assertPageMatchesSnapshot("about-page");
  await aboutPage.assertPageIsAccessible();
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("renders about page in dark mode", async ({ aboutPage }) => {
    await aboutPage.goto();

    await expect(aboutPage.heading).toBeVisible();
    await aboutPage.assertPageMatchesSnapshot("about-page-dark");
    await aboutPage.assertPageIsAccessible();
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("renders about page on mobile", async ({ aboutPage }) => {
    await aboutPage.goto();

    await expect(aboutPage.heading).toBeVisible();
    await aboutPage.assertPageMatchesSnapshot("about-page-mobile");
    await aboutPage.assertPageIsAccessible();
  });
});
