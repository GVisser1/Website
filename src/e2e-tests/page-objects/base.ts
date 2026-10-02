import AxeBuilder from "@axe-core/playwright";
import { expect, type Locator, type Page } from "@playwright/test";

export abstract class BasePage {
  protected constructor(protected readonly page: Page) {}

  public assertPageMatchesSnapshot = async (name: string): Promise<void> =>
    await expect.soft(this.page).toHaveScreenshot(`${name}.webp`, { fullPage: true, maxDiffPixels: 20 });

  public assertPageIsAccessible = async (): Promise<void> => {
    const analyzePage = new AxeBuilder({ page: this.page }).analyze();
    const { violations } = await analyzePage;

    expect.soft(violations).toEqual([]);
  };
}

export abstract class BaseComponent {
  protected constructor(public readonly host: Locator) {}
}
