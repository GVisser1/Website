import Icon from "../icon";
import type { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import type { PokemonDetails } from "@/utils/pokemonUtil";
import { isNil } from "lodash-es";
import clsx from "clsx";

export type PokemonCardProps = {
  pokemon: PokemonDetails;
  onClick: () => void;
};

const PokemonCard = ({ pokemon, onClick }: PokemonCardProps): JSX.Element => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);

  const showLoadingState = isImageLoading && !isImageError && !isNil(pokemon.sprite);
  const showErrorState = isImageError || isNil(pokemon.sprite);

  return (
    <div className="relative flex flex-col rounded-lg border border-zinc-200 bg-zinc-100 p-2 text-center dark:border-zinc-700 dark:bg-zinc-800">
      <div className="flex h-6 items-center justify-between">
        <span className="text-zinc-700 dark:text-zinc-200">#{pokemon.id}</span>
        <button
          title={`View details of ${pokemon.name}`}
          aria-label={`View details of ${pokemon.name}`}
          className="text-zinc-500 hover:text-zinc-600 active:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 dark:active:text-zinc-200"
          onClick={onClick}
        >
          <Icon name="InfoIcon" />
        </button>
      </div>
      {!isNil(pokemon.sprite) && (
        <Sprite
          name={pokemon.name}
          sprite={pokemon.sprite}
          hidden={isImageLoading}
          onLoad={() => setIsImageLoading(false)}
          onError={() => setIsImageError(true)}
        />
      )}
      {showLoadingState && <SpriteLoadingState />}
      {showErrorState && <SpriteErrorState />}
      <p className="mt-2 truncate font-medium capitalize text-gray-700 dark:text-zinc-200">{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;

type SpriteProps = {
  name: string;
  sprite: string;
  hidden: boolean;
} & Required<Pick<ComponentPropsWithoutRef<"img">, "onLoad" | "onError">>;

const Sprite = ({ name, sprite, hidden, onLoad, onError }: SpriteProps): JSX.Element => (
  <div className={clsx(`flex h-24 items-center ${hidden ? "hidden" : "block"}`)}>
    <img
      aria-hidden={hidden}
      src={sprite}
      alt={`${name} sprite`}
      className="mx-auto max-h-24"
      onLoad={onLoad}
      onError={onError}
    />
  </div>
);

const SpriteLoadingState = (): JSX.Element => (
  <div className="relative mx-auto flex h-24 w-full items-center justify-center">
    <span className="sr-only">Loading sprite</span>
    <Icon name="SpinnerIcon" />
  </div>
);
PokemonCard.SpriteLoadingState = SpriteLoadingState;

const SpriteErrorState = (): JSX.Element => (
  <div className="mx-auto flex h-24 flex-col items-center justify-center gap-y-2">
    <Icon name="ExclamationCircleIcon" className="size-7 text-red-700" />
    <p className="text-zinc-500 dark:text-zinc-400">Could not load sprite</p>
  </div>
);
