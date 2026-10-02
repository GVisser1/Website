import { MAIN_PAGES } from "@/constants";
import { timeLineData } from "@/routes/timeline";
import { expect, test } from "../fixtures";

test("renders timeline page on desktop", async ({ page, timelinePage }) => {
  await timelinePage.goto();

  await expect(timelinePage.heading).toBeVisible();
  await expect(timelinePage.item(timeLineData[0].title)).toBeVisible();
  await expect(page).toHaveTitle(MAIN_PAGES.timeline.meta.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    MAIN_PAGES.timeline.meta.description,
  );

  await timelinePage.assertPageMatchesSnapshot("timeline-page");
  await timelinePage.assertPageIsAccessible();
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("renders timeline page in dark mode", async ({ timelinePage }) => {
    await timelinePage.goto();

    await expect(timelinePage.item(timeLineData[0].title)).toBeVisible();
    await timelinePage.assertPageMatchesSnapshot("timeline-page-dark");
    await timelinePage.assertPageIsAccessible();
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("renders timeline page on mobile", async ({ timelinePage }) => {
    await timelinePage.goto();

    await expect(timelinePage.item(timeLineData[0].title)).toBeVisible();
    await timelinePage.assertPageMatchesSnapshot("timeline-page-mobile");
    await timelinePage.assertPageIsAccessible();
  });
});
