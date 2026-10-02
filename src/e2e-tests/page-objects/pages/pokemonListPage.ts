import type { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base";

export class PokemonListPage extends BasePage {
  public readonly heading: Locator;
  public readonly searchInput: Locator;
  public readonly noResultsHeading: Locator;

  public constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Pokémon", level: 1 });
    this.searchInput = page.getByRole("searchbox", { name: "Search for a Pokémon" });
    this.noResultsHeading = page.getByRole("heading", { name: "No results found", level: 2 });
  }

  public goto = async (): Promise<Response | null> => this.page.goto("/projects/pokemon");

  public pokemonCard(name: string): Locator {
    return this.page.getByRole("link", { name: `View details of ${name}` });
  }
}
