import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/header";
import Page from "@/components/page";
import PokemonContent from "@/components/pokemon/pokemonContent";

const PokemonPage = () => {
  const searchParams = Route.useSearch();
  return (
    <Page>
      <Header title="Pokémon" description="Explore the world of Pokémon." />

      <PokemonContent page={searchParams.page} />
    </Page>
  );
};

export const Route = createFileRoute("/projects/pokemon/")({
  component: PokemonPage,
  validateSearch: (search: Record<string, unknown>): { page: number } => ({
    page: search.page ? Number(search.page) : 1,
  }),
});
