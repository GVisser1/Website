import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class SettingsPage extends BasePage {
  public readonly heading: Locator;
  public readonly themeSelect: Locator;
  public readonly fontSelect: Locator;
  public readonly htmlElement: Locator;
  public readonly layoutRoot: Locator;

  public constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Settings", level: 1 });
    this.themeSelect = page.getByRole("combobox", { name: "Select theme" });
    this.fontSelect = page.getByRole("combobox", { name: "Select font" });
    this.htmlElement = page.locator("html");
    this.layoutRoot = page.locator("#portal-root");
  }

  public goto = async (): Promise<Response | null> => this.page.goto("/settings");

  public selectTheme = async (theme: "Light" | "Dark" | "System"): Promise<void> => {
    await this.themeSelect.click();
    await this.page.getByRole("option", { name: theme }).click();
  };

  public selectFont = async (font: string): Promise<void> => {
    await this.fontSelect.click();
    await this.page.getByRole("option", { name: font }).click();
  };
}
