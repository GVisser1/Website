import { PROJECT_PAGES } from "@/constants";
import { expect, test } from "../fixtures";

test("renders main pokémon page on desktop", async ({ page, pokemonListPage }) => {
  await pokemonListPage.goto();

  await expect(pokemonListPage.heading).toBeVisible();
  await expect(pokemonListPage.searchInput).toBeVisible();
  await expect(pokemonListPage.pokemonCard("bulbasaur")).toBeVisible();
  await expect(page).toHaveTitle(PROJECT_PAGES.pokemon.meta.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    PROJECT_PAGES.pokemon.meta.description,
  );

  await pokemonListPage.assertPageMatchesSnapshot("pokemon-list-page");
  await pokemonListPage.assertPageIsAccessible();
});

test("searches for a pokémon", async ({ pokemonListPage }) => {
  await pokemonListPage.goto();
  await expect(pokemonListPage.pokemonCard("bulbasaur")).toBeVisible();

  await pokemonListPage.searchInput.fill("bulbasaur");

  await expect(pokemonListPage.pokemonCard("ivysaur")).toBeHidden();

  await pokemonListPage.searchInput.fill("does not exist");

  await expect(pokemonListPage.noResultsHeading).toBeVisible();
});

test("views the details of a pokémon", async ({ page, pokemonListPage }) => {
  await pokemonListPage.goto();

  await pokemonListPage.pokemonCard("bulbasaur").click();

  await expect(page).toHaveURL("/projects/pokemon/bulbasaur");
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("renders main pokémon page in dark mode", async ({ pokemonListPage }) => {
    await pokemonListPage.goto();

    await expect(pokemonListPage.pokemonCard("bulbasaur")).toBeVisible();
    await pokemonListPage.assertPageMatchesSnapshot("pokemon-list-page-dark");
    await pokemonListPage.assertPageIsAccessible();
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("renders main pokémon page on mobile", async ({ pokemonListPage }) => {
    await pokemonListPage.goto();

    await expect(pokemonListPage.pokemonCard("bulbasaur")).toBeVisible();
    await pokemonListPage.assertPageMatchesSnapshot("pokemon-list-page-mobile");
    await pokemonListPage.assertPageIsAccessible();
  });
});
