import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { isEmpty, isNil, startCase } from "lodash-es";
import { type JSX, Suspense } from "react";
import Header from "@/components/header";
import Page from "@/components/page";
import PokemonCover from "@/components/pokemon/pokemonCover";
import PokemonEntrySwitcher from "@/components/pokemon/pokemonEntrySwitcher";
import PokemonEvolutionTree from "@/components/pokemon/pokemonEvolutionTree";
import PokemonMeta from "@/components/pokemon/pokemonMeta";
import PokemonStatsTable from "@/components/pokemon/pokemonStats";
import PokemonTypes from "@/components/pokemon/pokemonTypes";
import { PROJECT_PAGES } from "@/constants";
import { pokemonDetailsQueryOptions } from "@/hooks/usePokemonDetails";
import { pokemonEvolutionQueryOptions } from "@/hooks/usePokemonEvolution";
import { pokemonSpeciesQueryOptions } from "@/hooks/usePokemonSpecies";
import { PAGE_SIZE, TOTAL_POKEMON } from "@/utils/pokemonUtil";

const PokemonInfoPage = (): JSX.Element => {
  const identifier = Route.useParams().identifier;
  const pokemon = useSuspenseQuery(pokemonDetailsQueryOptions(identifier));
  const species = useSuspenseQuery(pokemonSpeciesQueryOptions(identifier));
  const evolutions = useSuspenseQuery(
    pokemonEvolutionQueryOptions(pokemon.data.name, species.data.evolutionChain),
  );

  const pageNumber = pokemon.data?.id ? Math.ceil(pokemon.data.id / PAGE_SIZE) : 1;

  return (
    <Page>
      <Header
        title={`${startCase(pokemon.data.name)} #${pokemon.data.id}`}
        description={species.data?.description}
        topLink={{
          href: `${PROJECT_PAGES.pokemon.href}?page=${pageNumber}`,
          label: "Back to Pokémon",
        }}
      />

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-4">
        <PokemonCover
          name={pokemon.data.name}
          primaryType={pokemon.data.types[0]}
          sprite={pokemon.data.sprite}
          isLegendary={species.data.isLegendary}
          isMythical={species.data.isMythical}
        />

        <div className="mt-2 tablet:mt-0 flex grow flex-col justify-center">
          <h2 className="mb-2 truncate text-header-2xl text-primary dark:text-primary-dark">
            {species.data.genus}
          </h2>

          <PokemonTypes types={pokemon.data.types} size="md" />
          <PokemonMeta {...pokemon.data} />
        </div>
      </div>

      <PokemonStatsTable stats={pokemon.data.stats} className="mt-8 tablet:mt-4" />

      {!isNil(evolutions.data) && !isEmpty(evolutions.data.evolves_to) && (
        <PokemonEvolutionTree chain={evolutions.data} />
      )}

      <PokemonEntrySwitcher id={pokemon.data.id} className="mt-12" />
    </Page>
  );
};

export default PokemonInfoPage;

type LoadingStateProps = {
  backLink: { href: string; label: string };
  className?: string;
};
const LoadingState = (props: LoadingStateProps): JSX.Element => (
  <Page>
    <Header
      title="Loading Pokémon..."
      description="Please wait while we fetch the Pokémon details."
      topLink={props.backLink}
    />
  </Page>
);

export const Route = createFileRoute("/projects/pokemon/$identifier/")({
  loader: async ({ context: { queryClient }, params: { identifier } }) => {
    if (Number(identifier) < 0 || Number(identifier) > TOTAL_POKEMON) {
      throw new Error("Invalid pokemon id");
    }

    const pokemon = await queryClient.ensureQueryData(pokemonDetailsQueryOptions(identifier));
    const species = await queryClient.ensureQueryData(pokemonSpeciesQueryOptions(identifier));
    const evolutions = await queryClient.ensureQueryData(
      pokemonEvolutionQueryOptions(identifier, species.evolutionChain),
    );

    return { pokemon, species, evolutions };
  },
  head: async ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.pokemon?.name
          ? `${startCase(loaderData?.pokemon?.name)} - Glenn Visser`
          : "Error - Glenn Visser",
      },
    ],
  }),
  component: () => (
    <Suspense
      fallback={
        <LoadingState backLink={{ href: PROJECT_PAGES.pokemon.href, label: "Back to Pokémon" }} />
      }
    >
      <PokemonInfoPage />
    </Suspense>
  ),
  errorComponent: (e) => (
    <Page>
      <Header
        title="Error"
        description={e.error.message}
        topLink={{ href: PROJECT_PAGES.pokemon.href, label: "Back to Pokémon" }}
      />
    </Page>
  ),
});
