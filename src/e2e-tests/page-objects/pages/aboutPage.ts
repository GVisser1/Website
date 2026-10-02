import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class AboutPage extends BasePage {
  public readonly heading: Locator;
  public readonly professionalLifeHeading: Locator;
  public readonly fleetFoxesImage: Locator;

  public constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "About me", level: 1 });
    this.professionalLifeHeading = page.getByRole("heading", { name: "Professional Life", level: 2 });
    this.fleetFoxesImage = page.getByAltText("Fleet Foxes concert");
  }

  public goto = async (): Promise<Response | null> => this.page.goto("/about");
}
