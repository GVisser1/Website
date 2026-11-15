import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";
import { isEmpty } from "lodash-es";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

// Base UI renders invisible focus guards around open dialogs. In Safari they get role="button" (so VoiceOver can move
// focus past the dialog) but no accessible name, which axe flags as aria-command-name in WebKit only
const FOCUS_GUARD_SELECTOR = "[data-base-ui-focus-guard]";

type Meta = {
  title: string;
  description?: string;
};

export abstract class BasePage {
  protected constructor(protected readonly page: Page) {}

  public assertPageMatchesSnapshot = async (name: string): Promise<void> => {
    await this.waitForImages();
    await expect.soft(this.page).toHaveScreenshot(`${name}.webp`, { fullPage: true, maxDiffPixels: 20 });
  };

  // Full-page screenshots include lazy images below the fold, and WebKit may still be decoding them (or swapping in web
  // fonts) between the two captures Playwright compares, so load and decode everything first
  private waitForImages = async (): Promise<void> =>
    await this.page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(
        Array.from(document.images, async (image) => {
          image.loading = "eager";
          if (!image.complete) {
            await new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            });
          }
          await image.decode().catch(() => undefined);
        }),
      );
    });

  public assertPageIsAccessible = async (): Promise<void> => {
    const results = await new AxeBuilder({ page: this.page })
      .withTags(WCAG_TAGS)
      .exclude(FOCUS_GUARD_SELECTOR)
      .analyze();

    if (!isEmpty(results.violations)) {
      await test
        .info()
        .attach("axe-results.json", { body: JSON.stringify(results, null, 2), contentType: "application/json" });
    }

    expect.soft(results.violations).toEqual([]);
  };

  public assertMeta = async ({ title, description }: Meta): Promise<void> => {
    await expect(this.page).toHaveTitle(title);
    await expect(this.page.locator("html")).toHaveAttribute("lang", "en");

    if (description) {
      await expect(this.page.locator('meta[name="description"]')).toHaveAttribute("content", description);
    }
  };
}
