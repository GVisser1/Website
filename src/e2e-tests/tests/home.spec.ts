import { MAIN_PAGES } from "@/constants";
import { expect, test } from "../fixtures";

test("renders home page on desktop", async ({ page, homePage }) => {
  await homePage.goto();

  await expect(homePage.heading).toBeVisible();
  await expect(homePage.profileImage).toBeVisible();
  await expect(page).toHaveTitle(MAIN_PAGES.home.meta.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", MAIN_PAGES.home.meta.description);

  await homePage.assertPageMatchesSnapshot("home-page");
  await homePage.assertPageIsAccessible();
});

test("can navigate to about me", async ({ page, homePage }) => {
  await homePage.goto();

  await homePage.aboutMeLink.click();

  await expect(page).toHaveURL("/about");
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("renders home page in dark mode", async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.heading).toBeVisible();
    await homePage.assertPageMatchesSnapshot("home-page-dark");
    await homePage.assertPageIsAccessible();
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("renders home page on mobile", async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.heading).toBeVisible();
    await homePage.assertPageMatchesSnapshot("home-page-mobile");
    await homePage.assertPageIsAccessible();
  });
});
