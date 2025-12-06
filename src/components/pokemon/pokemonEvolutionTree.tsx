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
      <div className="flex tablet-ls:grid tablet-ls:auto-cols-fr tablet-ls:grid-flow-col flex-col items-center gap-6">
        {evolutions.map((stage) => (
          <div key={uniqueId()} className="flex w-full flex-col items-center gap-4">
            {stage.map((evolution) => (
              <div key={evolution.name} className="relative flex w-full phone-ls:flex-row flex-col">
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
