import AxeBuilder from "@axe-core/playwright";
import { expect, type Locator, type Page, test } from "@playwright/test";
import { isEmpty } from "lodash-es";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

type Meta = {
  title: string;
  description?: string;
};

export abstract class BasePage {
  protected constructor(protected readonly page: Page) {}

  public assertPageMatchesSnapshot = async (name: string): Promise<void> =>
    await expect.soft(this.page).toHaveScreenshot(`${name}.webp`, { fullPage: true, maxDiffPixels: 20 });

  public assertPageIsAccessible = async (): Promise<void> => {
    const results = await new AxeBuilder({ page: this.page }).withTags(WCAG_TAGS).analyze();

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

export abstract class BaseComponent {
  protected constructor(public readonly host: Locator) {}
}
