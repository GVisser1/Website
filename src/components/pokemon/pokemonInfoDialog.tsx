import { useEffect, useRef, useState, type JSX } from "react";
import Dialog from "../dialog/dialog";
import clsx from "clsx";
import type { PokemonDetails, PokemonSpeciesDetails } from "@/utils/pokemonUtil";
import { getPokemonSpeciesDetails, typingColor } from "@/utils/pokemonUtil";
import { Divider } from "../divider";
import Icon from "../icon";
import { useRouter, useSearchParams } from "next/navigation";
import { isNil } from "lodash-es";
import Tooltip from "../tooltip";

type PokemonInfoDialogProps = {
  open: boolean;
  pokemon: PokemonDetails;
  onClose: () => void;
};

export const PokemonInfoDialog = ({ open, pokemon, onClose }: PokemonInfoDialogProps): JSX.Element => {
  const [additionalInfo, setAdditionalInfo] = useState<PokemonSpeciesDetails>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isNil(pokemon)) {
      getPokemonSpeciesDetails(pokemon.id).then((data) => {
        setAdditionalInfo(data);
        setIsLoading(false);
      });
    }
  }, [pokemon]);

  const showContent = !isLoading && !isNil(additionalInfo);

  return (
    <Dialog
      size="2xl"
      aria-label={pokemon.name}
      open={open}
      title={{ value: `#${pokemon.id} ${pokemon.name}`, capitalize: true }}
      onClose={onClose}
      className="relative whitespace-pre-line"
    >
      {!showContent && <SkeletonLoader />}
      {showContent && (
        <DialogContent
          evolutionChain={additionalInfo.evolutionChain}
          isLegendary={additionalInfo.isLegendary}
          isMythical={additionalInfo.isMythical}
          genus={additionalInfo.genus}
          sprite={{ src: pokemon.sprite, alt: `${pokemon.name} sprite` }}
          stats={pokemon.stats}
          types={pokemon.types}
          description={additionalInfo.description}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      )}
    </Dialog>
  );
};

type DialogContentProps = {
  evolutionChain: PokemonDetails[][];
  isLegendary: boolean;
  isMythical: boolean;
  description: string;
  genus: string;
  stats: { name: string; base_stat: number }[];
  sprite: { src: string | null; alt: string };
  types: string[];
  height: number;
  weight: number;
};

const DialogContent = ({
  evolutionChain,
  isLegendary,
  isMythical,
  genus,
  sprite,
  types,
  stats,
  description,
  height,
  weight,
}: DialogContentProps): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const topOfDialogRef = useRef<HTMLDivElement | null>(null);
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handleScrollToTop = (pokemonToHighlight: string): void => {
    router.push(`?page=${currentPage}&highlighted=${pokemonToHighlight}`, { scroll: false });
    if (topOfDialogRef.current) {
      topOfDialogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={topOfDialogRef} className="flex flex-col gap-y-4">
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 xs:grid-cols-2">
        <div className="relative box-content flex h-32 w-full justify-center rounded-lg border border-zinc-200 dark:border-zinc-200/10">
          {sprite.src && <img src={sprite.src} alt={sprite.alt} className="h-32 p-2" />}
          {isLegendary && (
            <Tooltip
              trigger={
                <div className="absolute top-0 left-0 p-2">
                  <span className="sr-only">This Pokémon is legendary</span>
                  <Icon name="Star" className="text-yellow-500" />
                </div>
              }
              title="This Pokémon is legendary"
            />
          )}
          {isMythical && (
            <Tooltip
              trigger={
                <div className={clsx("absolute left-0 p-2", !isLegendary ? "top-0" : "top-6")}>
                  <span className="sr-only">This Pokémon is mythical</span>
                  <Icon name="Star" className="text-pink-500" />
                </div>
              }
              title="This Pokémon is mythical"
            />
          )}
        </div>
        <div>
          <h2 className="mb-1 truncate text-lg font-semibold text-zinc-700 dark:text-zinc-200">{genus}</h2>
          <ul className="flex gap-x-2 text-center">
            {types.map((type) => (
              <li key={type}>
                <span className={clsx("block rounded-sm px-1.5 py-0.5 text-xs font-semibold", typingColor[type])}>
                  {type}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 flex flex-col gap-y-1">
            <div className="flex gap-x-1">
              <dt className="font-semibold text-zinc-700 dark:text-zinc-200">Height:</dt>
              <dd className="text-zinc-500 dark:text-zinc-400">{height / 10} kg</dd>
            </div>
            <div className="flex gap-x-1">
              <dt className="font-semibold text-zinc-700 dark:text-zinc-200">Weight:</dt>
              <dd className="text-zinc-500 dark:text-zinc-400">{weight / 10} kg</dd>
            </div>
          </dl>
        </div>
      </div>
      <span className="text-zinc-500 dark:text-zinc-400">{description}</span>
      <Divider />
      <dl className="grid grid-cols-1 gap-2 capitalize xs:grid-cols-2">
        {stats.map((stat) => (
          <div key={stat.name} className="flex justify-between rounded-lg p-1">
            <dt className="font-semibold text-zinc-700 dark:text-zinc-200">{stat.name}</dt>
            <dd className="text-zinc-500 dark:text-zinc-400">{stat.base_stat}</dd>
          </div>
        ))}
      </dl>
      {!isNil(evolutionChain) && evolutionChain.length > 0 && (
        <>
          <Divider />
          <div>
            <h3 className="mb-2 text-xl font-semibold text-zinc-700 dark:text-zinc-200">Evolutionary Chain</h3>
            <div className="flex flex-col xs:grid xs:auto-cols-fr xs:grid-flow-col">
              {evolutionChain.map((stage, i) => (
                <div key={i} className="group flex flex-col items-center xs:flex-row">
                  <div className="flex w-full flex-col items-center gap-4">
                    {stage.map((pokemon) => (
                      <Tooltip
                        key={pokemon.name}
                        trigger={
                          <button
                            key={pokemon.id}
                            onClick={() => handleScrollToTop(pokemon.name)}
                            className="flex size-full grow flex-col items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-3 hover:bg-zinc-100 focus-visible:outline active:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
                          >
                            {pokemon.sprite && (
                              <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} className="h-16" />
                            )}
                            <span className="mt-2 text-sm font-medium text-zinc-700 capitalize dark:text-zinc-200">
                              {pokemon.name}
                            </span>
                          </button>
                        }
                        title={`View details of ${pokemon.name}`}
                        side="top"
                      />
                    ))}
                  </div>
                  <Icon
                    name="ArrowRight"
                    size="2xl"
                    className="mx-2 hidden text-zinc-500 group-last-of-type:hidden xs:block dark:text-zinc-400"
                  />
                  <Icon
                    name="ArrowDown"
                    size="2xl"
                    className="my-5 block text-zinc-500 group-last-of-type:hidden xs:hidden dark:text-zinc-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const SkeletonLoader = (): JSX.Element => (
  <div className="relative">
    <span className="sr-only">Loading content</span>
    <div aria-hidden className="relative flex animate-pulse flex-col gap-y-4">
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 xs:grid-cols-2">
        <div className="box-content flex h-32 w-full justify-center rounded-lg border border-zinc-200 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-700" />
        <div>
          <span className="mb-1 block h-6 rounded-sm bg-zinc-200 dark:bg-zinc-700" />
          <ul className="flex gap-x-2 text-center">
            {Array.from({ length: 2 }).map((_, i) => (
              <li key={i} className="h-6 w-20 rounded-sm bg-zinc-200 dark:bg-zinc-700" />
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-y-1">
            <span className="h-6 w-42 rounded-sm bg-zinc-200 dark:bg-zinc-700" />
            <span className="h-6 w-42 rounded-sm bg-zinc-200 dark:bg-zinc-700" />
          </div>
        </div>
      </div>
      <span className="h-12 w-full rounded-sm bg-zinc-200 dark:bg-zinc-700" />
      <Divider />
      <dl className="grid grid-cols-1 gap-2 capitalize xs:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex justify-between rounded-lg p-1">
            <dt className="h-6 w-1/2 rounded-sm bg-zinc-200 dark:bg-zinc-700" />
            <dd className="h-6 w-1/4 rounded-sm bg-zinc-200 dark:bg-zinc-700" />
          </div>
        ))}
      </dl>
      <Divider />
      <div>
        <div className="mb-2 h-7 w-48 rounded-sm bg-zinc-200 dark:bg-zinc-700" />
        <div className="flex flex-col xs:grid xs:auto-cols-fr xs:grid-flow-col">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="group flex flex-col items-center text-zinc-500 xs:flex-row dark:text-zinc-400">
              <div className="h-28 w-full rounded-lg bg-zinc-200 dark:bg-zinc-700" />
              <Icon name="ArrowRight" size="2xl" className="mx-2 hidden group-last-of-type:hidden xs:block" />
              <Icon name="ArrowDown" size="2xl" className="my-5 block group-last-of-type:hidden xs:hidden" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
