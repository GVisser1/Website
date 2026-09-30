import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class NotFoundPage extends BasePage {
  public readonly heading: Locator;
  public readonly backToHomeLink: Locator;

  public constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "404", level: 1 });
    this.backToHomeLink = page.getByRole("link", { name: "Back to Home" });
  }

  public goto = async (path: string): Promise<Response | null> => this.page.goto(path);
}
