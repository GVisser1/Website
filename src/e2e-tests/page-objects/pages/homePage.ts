import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class HomePage extends BasePage {
  public readonly heading: Locator;
  public readonly profileImage: Locator;
  public readonly aboutMeLink: Locator;
  public readonly getInTouchLink: Locator;

  public constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Hi, my name is Glenn Visser", level: 1 });
    this.profileImage = page.getByAltText("Photo of Glenn");
    this.aboutMeLink = page.getByRole("main").getByRole("link", { name: "About me" });
    this.getInTouchLink = page.getByRole("main").getByRole("link", { name: "Get in touch" });
  }

  public goto = async (): Promise<Response | null> => this.page.goto("/");
}
