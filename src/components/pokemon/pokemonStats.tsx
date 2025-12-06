import clsx from "clsx";
import type { JSX } from "react";
import type { PokemonStats } from "../../utils/pokemonUtil";

type PokemonStatsProps = {
  stats: PokemonStats;
  className?: string;
};

const PokemonStatsTable = (props: PokemonStatsProps): JSX.Element => (
  <div className={props.className}>
    <div className="mb-1 flex items-center justify-between">
      <h3 className="text-header-xl text-primary dark:text-primary-dark">Stats</h3>
      <p className="text-base-regular text-secondary dark:text-secondary-dark">
        Total: {props.stats.reduce((total, stat) => total + stat.base_stat, 0)}
      </p>
    </div>
    <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
      {props.stats.map((stat) => (
        <div
          key={stat.name}
          className="relative isolate grid grid-cols-2 gap-1 rounded-sm sm:rounded-none"
        >
          <dt className="flex h-8 min-w-0 items-center rounded-sm bg-sunken-secondary px-2 py-1 text-base-semibold text-primary capitalize dark:bg-sunken-secondary-dark dark:text-primary-dark">
            <span className="truncate">{stat.name}</span>
          </dt>
          <dd className="relative flex h-8 w-full justify-self-end overflow-hidden rounded-sm bg-sunken dark:bg-sunken-dark">
            <div
              className={clsx("h-full rounded-sm", {
                "bg-pokemon-stat-hp": stat.name === "hp",
                "bg-pokemon-stat-attack": stat.name === "attack",
                "bg-pokemon-stat-defense": stat.name === "defense",
                "bg-pokemon-stat-special-attack": stat.name === "special-attack",
                "bg-pokemon-stat-special-defense": stat.name === "special-defense",
                "bg-pokemon-stat-speed": stat.name === "speed",
              })}
              style={{
                width: `${(Math.min(stat.base_stat, 255) / 255) * 100}%`,
              }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-default-transparent px-1 text-sm-semibold text-primary dark:bg-default-transparent-dark dark:text-primary-dark">
              {stat.base_stat}
            </div>
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export default PokemonStatsTable;
