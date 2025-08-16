"use client";

import { isNil, startCase } from "lodash-es";
import { use, type JSX } from "react";
import usePokemonDetails from "../../../../hooks/usePokemonDetails";
import Header from "../../../../components/header";
import { PROJECT_PAGES } from "../../../../constants";
import type { PokemonIdentifier } from "../../../../utils/pokemonUtil";
import { PAGE_SIZE } from "../../../../utils/pokemonUtil";
import { usePokemonSpecies } from "../../../../hooks/usePokemonSpecies";
import usePokemonEvolution from "../../../../hooks/usePokemonEvolution";
import PokemonEntrySwitcher from "../../../../components/pokemon/pokemonEntrySwitcher";
import PokemonCover from "../../../../components/pokemon/pokemonCover";
import PokemonTypes from "../../../../components/pokemon/pokemonTypes";
import PokemonStats from "../../../../components/pokemon/pokemonStats";
import PokemonMeta from "../../../../components/pokemon/pokemonMeta";
import PokemonEvolutionTree from "../../../../components/pokemon/pokemonEvolutionTree";
import Page from "../../../../components/page";

type PokemonInfoPageProps = {
  params: Promise<{ identifier: PokemonIdentifier }>;
};

const PokemonInfoPage = (props: PokemonInfoPageProps): JSX.Element => {
  const param = use(props.params);
  const pokemon = usePokemonDetails(param.identifier);
  const pokemonSpecies = usePokemonSpecies(pokemon.data?.id);
  const pokemonEvolution = usePokemonEvolution(pokemon.data?.name, pokemonSpecies.data?.evolutionChain);

  const isLoading = pokemon.isLoading || pokemonSpecies.isLoading || pokemonEvolution.isLoading;

  const pageNumber = pokemon.data?.id ? Math.ceil(pokemon.data.id / PAGE_SIZE) : 1;
  const backLink = { href: `${PROJECT_PAGES[0].href}?page=${pageNumber}`, label: "Back to Pokémon" };

  if (isLoading) {
    return <LoadingState backLink={backLink} />;
  }

  if (pokemon.error) {
    return <h1>Failed to retrieve Pokemon details: {pokemon.error.message}</h1>;
  }

  if (isNil(pokemon.data) || isNil(pokemonSpecies.data) || isNil(pokemonEvolution.data)) {
    return <h1>Pokemon {param.identifier} not found</h1>;
  }

  return (
    <Page>
      <Header
        title={`${startCase(pokemon.data.name)} #${pokemon.data.id}`}
        description={pokemonSpecies.data?.description}
        topLink={backLink}
      />

      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        <PokemonCover
          name={pokemon.data.name}
          primaryType={pokemon.data.types[0]}
          sprite={pokemon.data.sprite}
          isLegendary={pokemonSpecies.data.isLegendary}
          isMythical={pokemonSpecies.data.isMythical}
        />

        <div className="mt-2 flex grow flex-col justify-center sm:mt-0">
          <h2 className="mb-2 truncate text-header-2xl text-primary dark:text-primary-dark">
            {pokemonSpecies.data.genus}
          </h2>

          <PokemonTypes types={pokemon.data.types} size="md" />
          <PokemonMeta {...pokemon.data} />
        </div>
      </div>

      <PokemonStats stats={pokemon.data.stats} className="mt-8 sm:mt-4" />

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
