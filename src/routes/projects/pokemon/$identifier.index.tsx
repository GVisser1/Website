import { createFileRoute } from "@tanstack/react-router";
import { isNil, startCase } from "lodash-es";
import type { JSX } from "react";
import Header from "@/components/header";
import Page from "@/components/page";
import PokemonCover from "@/components/pokemon/pokemonCover";
import PokemonEntrySwitcher from "@/components/pokemon/pokemonEntrySwitcher";
import PokemonEvolutionTree from "@/components/pokemon/pokemonEvolutionTree";
import PokemonMeta from "@/components/pokemon/pokemonMeta";
import PokemonStatsTable from "@/components/pokemon/pokemonStats";
import PokemonTypes from "@/components/pokemon/pokemonTypes";
import { PROJECT_PAGES } from "@/constants";
import usePokemonDetails from "@/hooks/usePokemonDetails";
import usePokemonEvolution from "@/hooks/usePokemonEvolution";
import { usePokemonSpecies } from "@/hooks/usePokemonSpecies";
import { PAGE_SIZE } from "@/utils/pokemonUtil";

const PokemonInfoPage = (): JSX.Element => {
  const identifier = Route.useParams().identifier;
  const pokemon = usePokemonDetails(identifier);
  const pokemonSpecies = usePokemonSpecies(pokemon.data?.id);
  const pokemonEvolution = usePokemonEvolution(
    pokemon.data?.name,
    pokemonSpecies.data?.evolutionChain,
  );

  const isLoading = pokemon.isLoading || pokemonSpecies.isLoading || pokemonEvolution.isLoading;

  const pageNumber = pokemon.data?.id ? Math.ceil(pokemon.data.id / PAGE_SIZE) : 1;
  const backLink = {
    href: `${PROJECT_PAGES[0].href}?page=${pageNumber}`,
    label: "Back to Pokémon",
  };

  if (isLoading) {
    return <LoadingState backLink={backLink} />;
  }

  if (pokemon.error) {
    return <h1>Failed to retrieve Pokemon details: {pokemon.error.message}</h1>;
  }

  if (isNil(pokemon.data) || isNil(pokemonSpecies.data) || isNil(pokemonEvolution.data)) {
    return <h1>Pokemon {identifier} not found</h1>;
  }

  return (
    <Page>
      <Header
        title={`${startCase(pokemon.data.name)} #${pokemon.data.id}`}
        description={pokemonSpecies.data?.description}
        topLink={backLink}
      />

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-4">
        <PokemonCover
          name={pokemon.data.name}
          primaryType={pokemon.data.types[0]}
          sprite={pokemon.data.sprite}
          isLegendary={pokemonSpecies.data.isLegendary}
          isMythical={pokemonSpecies.data.isMythical}
        />

        <div className="mt-2 tablet:mt-0 flex grow flex-col justify-center">
          <h2 className="mb-2 truncate text-header-2xl text-primary dark:text-primary-dark">
            {pokemonSpecies.data.genus}
          </h2>

          <PokemonTypes types={pokemon.data.types} size="md" />
          <PokemonMeta {...pokemon.data} />
        </div>
      </div>

      <PokemonStatsTable stats={pokemon.data.stats} className="mt-8 tablet:mt-4" />

      {!isNil(pokemonEvolution.data) && pokemonEvolution.data.evolves_to.length > 0 && (
        <PokemonEvolutionTree chain={pokemonEvolution.data} />
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
  component: PokemonInfoPage,
});
