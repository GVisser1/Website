import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class NavigationPage extends BasePage {
  public readonly htmlElement: Locator;
  public readonly themeToggle: Locator;
  public readonly menuButton: Locator;
  public readonly menu: Locator;
  public readonly themeOptions: Locator;

  public constructor(page: Page) {
    super(page);

    this.htmlElement = page.locator("html");
    this.themeToggle = page.getByRole("button", { name: /^Theme:/ });
    this.menuButton = page.getByRole("button", { name: "Open menu" });
    this.menu = page.getByRole("dialog", { name: "Menu" });
    this.themeOptions = this.menu.getByRole("radiogroup", { name: "Theme" });
  }

  public goto = async (): Promise<Response | null> => this.page.goto("/");

  public menuLink = (name: string): Locator => this.menu.getByRole("link", { name });

  public selectTheme = async (theme: "Light" | "Dark" | "System"): Promise<void> => {
    await this.themeOptions.getByRole("radio", { name: theme }).click();
  };
}
