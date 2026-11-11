import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class SettingsPage extends BasePage {
  public readonly dialog: Locator;
  public readonly themeSelect: Locator;
  public readonly fontSelect: Locator;
  public readonly htmlElement: Locator;

  public constructor(page: Page) {
    super(page);

    this.dialog = page.getByRole("dialog", { name: "Settings" });
    this.themeSelect = this.dialog.getByRole("combobox", { name: "Select theme" });
    this.fontSelect = this.dialog.getByRole("combobox", { name: "Select a font" });
    this.htmlElement = page.locator("html");
  }

  public goto = async (): Promise<Response | null> => this.page.goto("/");

  public open = async (): Promise<void> => {
    await this.page.getByRole("button", { name: "Settings" }).click();
  };

  public selectTheme = async (theme: "Light" | "Dark" | "System"): Promise<void> => {
    await this.themeSelect.click();
    await this.page.getByRole("option", { name: theme }).click();
  };

  public selectFont = async (font: string): Promise<void> => {
    await this.fontSelect.click();
    await this.page.getByRole("option", { name: font }).click();
  };
}
