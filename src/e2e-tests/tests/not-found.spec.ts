import { MAIN_PAGES } from "@/constants";
import { expect, test } from "../fixtures";

test("renders 404 page on desktop", async ({ notFoundPage }) => {
  await notFoundPage.goto("/this-page-does-not-exist");

  await expect(notFoundPage.heading).toBeVisible();
  await expect(notFoundPage.backToHomeLink).toBeVisible();
  await notFoundPage.assertMeta(MAIN_PAGES.home.meta);

  await notFoundPage.assertPageMatchesSnapshot("not-found-page");
  await notFoundPage.assertPageIsAccessible();
});

test("navigates back to the home page", async ({ page, notFoundPage }) => {
  await notFoundPage.goto("/this-page-does-not-exist");

  await notFoundPage.backToHomeLink.click();

  await expect(page).toHaveURL("/");
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("renders 404 page in dark mode", async ({ notFoundPage }) => {
    await notFoundPage.goto("/this-page-does-not-exist");

    await expect(notFoundPage.heading).toBeVisible();
    await notFoundPage.assertPageMatchesSnapshot("not-found-page-dark");
    await notFoundPage.assertPageIsAccessible();
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("renders 404 page on mobile", async ({ notFoundPage }) => {
    await notFoundPage.goto("/this-page-does-not-exist");

    await expect(notFoundPage.heading).toBeVisible();
    await notFoundPage.assertPageMatchesSnapshot("not-found-page-mobile");
    await notFoundPage.assertPageIsAccessible();
  });
});
