import { uniqueId } from "lodash-es";
import type { JSX } from "react";
import type { EvolutionChain } from "../../hooks/usePokemonEvolution";
import { mapEvolutionsByStage } from "../../utils/pokemonUtil";
import SkeletonLoader from "../skeleton";
import PokemonCard from "./pokemonCard";

type PokemonEvolutionTreeProps = {
  chain: EvolutionChain;
};

const PokemonEvolutionTree = (props: PokemonEvolutionTreeProps): JSX.Element => {
  const evolutions = mapEvolutionsByStage(props.chain);

  return (
    <div className="mt-12">
      <h3 className="text-header-xl text-primary dark:text-primary-dark mb-2">Evolutionary Chain</h3>
      <div className="tablet-ls:grid tablet-ls:auto-cols-fr tablet-ls:grid-flow-col flex flex-col items-center gap-6">
        {evolutions.map((stage) => (
          <div key={uniqueId()} className="flex w-full flex-col items-center gap-4">
            {stage.map((evolution) => (
              <div key={evolution.name} className="phone-ls:flex-row relative flex w-full flex-col">
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

export const PokemonEvolutionTreeSkeleton = (): JSX.Element => (
  <div aria-hidden className="mt-12">
    <div className="bg-sunken-secondary dark:bg-sunken-secondary-dark mb-2 h-8 w-56 animate-pulse" />
    <div className="tablet-ls:grid tablet-ls:auto-cols-fr tablet-ls:grid-flow-col flex flex-col items-center gap-6">
      {[0, 1, 2].map((stage) => (
        <div key={stage} className="flex w-full flex-col items-center gap-4">
          <SkeletonLoader size="sm" />
        </div>
      ))}
    </div>
  </div>
);
