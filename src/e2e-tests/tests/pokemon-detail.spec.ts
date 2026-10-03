import { expect, test } from "../fixtures";

test("renders pokémon detail page on desktop", async ({ pokemonDetailPage }) => {
  await pokemonDetailPage.goto("bulbasaur");

  await expect(pokemonDetailPage.heading).toHaveText("Bulbasaur #1");
  await expect(pokemonDetailPage.genusHeading).toHaveText("Seed Pokémon");
  await pokemonDetailPage.assertMeta({ title: "Bulbasaur - Glenn Visser" });

  await pokemonDetailPage.assertPageMatchesSnapshot("pokemon-detail-page");
  await pokemonDetailPage.assertPageIsAccessible();
});

test("navigates back to the main pokémon page", async ({ page, pokemonDetailPage }) => {
  await pokemonDetailPage.goto("bulbasaur");
  await expect(pokemonDetailPage.heading).toHaveText("Bulbasaur #1");

  await pokemonDetailPage.backLink.click();

  await expect(page).toHaveURL("/projects/pokemon?page=1");
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("renders pokémon detail page in dark mode", async ({ pokemonDetailPage }) => {
    await pokemonDetailPage.goto("bulbasaur");

    await expect(pokemonDetailPage.heading).toHaveText("Bulbasaur #1");
    await pokemonDetailPage.assertPageMatchesSnapshot("pokemon-detail-page-dark");
    await pokemonDetailPage.assertPageIsAccessible();
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("renders pokémon detail page on mobile", async ({ pokemonDetailPage }) => {
    await pokemonDetailPage.goto("bulbasaur");

    await expect(pokemonDetailPage.heading).toHaveText("Bulbasaur #1");
    await pokemonDetailPage.assertPageMatchesSnapshot("pokemon-detail-page-mobile");
    await pokemonDetailPage.assertPageIsAccessible();
  });
});
