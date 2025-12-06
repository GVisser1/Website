import { uniqueId } from "lodash-es";
import type { JSX } from "react";
import type { EvolutionChain } from "../../hooks/usePokemonEvolution";
import { mapEvolutionsByStage } from "../../utils/pokemonUtil";
import PokemonCard from "./pokemonCard";

type PokemonEvolutionTreeProps = {
  chain: EvolutionChain;
};

const PokemonEvolutionTree = (props: PokemonEvolutionTreeProps): JSX.Element => {
  const evolutions = mapEvolutionsByStage(props.chain);

  return (
    <div className="mt-12">
      <h3 className="mb-2 text-header-xl text-primary dark:text-primary-dark">
        Evolutionary Chain
      </h3>
      <div className="flex flex-col items-center gap-6 lg:grid lg:auto-cols-fr lg:grid-flow-col">
        {evolutions.map((stage) => (
          <div key={uniqueId()} className="flex w-full flex-col items-center gap-4">
            {stage.map((evolution) => (
              <div key={evolution.name} className="relative flex w-full flex-col sm:flex-row">
                <PokemonCard identifier={evolution.id} size="sm" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonEvolutionTree;
