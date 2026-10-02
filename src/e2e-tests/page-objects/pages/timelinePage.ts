import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class TimelinePage extends BasePage {
  public readonly heading: Locator;
  public readonly item: (title: string) => Locator;

  public constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Timeline", level: 1 });
    this.item = (title): Locator => page.getByRole("listitem").filter({ hasText: title });
  }

  public goto = async (): Promise<Response | null> => this.page.goto("/timeline");
}
