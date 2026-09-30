import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class PokemonDetailPage extends BasePage {
  public readonly heading: Locator;
  public readonly genusHeading: Locator;
  public readonly backLink: Locator;

  public constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { level: 1 });
    this.genusHeading = page.getByRole("heading", { level: 2 });
    this.backLink = page.getByRole("link", { name: "Back to Pokémon" });
  }

  public goto = async (identifier: string | number): Promise<Response | null> =>
    this.page.goto(`/projects/pokemon/${identifier}`);
}
