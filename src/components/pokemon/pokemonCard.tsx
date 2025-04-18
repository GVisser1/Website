import Icon from "../icon";
import type { ComponentPropsWithoutRef, JSX } from "react";
import { useState } from "react";
import { isNil } from "lodash-es";
import clsx from "clsx";
import Tooltip from "../tooltip";
import type { PokemonDetails } from "../../utils/pokemonUtil";

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
    <Tooltip
      trigger={
        <button
          aria-label={`View details of ${pokemon.name}`}
          onClick={onClick}
          className="relative flex flex-col rounded-lg border border-zinc-200 bg-zinc-100 p-2 text-center hover:bg-zinc-200 focus-visible:outline active:bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
        >
          <div className="flex h-6 w-full items-center justify-between">
            <span className="text-zinc-700 dark:text-zinc-200">#{pokemon.id}</span>
            <Icon name="Info" className="size-5 text-zinc-500 dark:text-zinc-400" />
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
          <p className="mt-2 w-full truncate font-medium text-gray-700 capitalize dark:text-zinc-200">{pokemon.name}</p>
        </button>
      }
      title={`View details of ${pokemon.name}`}
      side="top"
    />
  );
};

export default PokemonCard;

type SpriteProps = {
  name: string;
  sprite: string;
  hidden: boolean;
} & Required<Pick<ComponentPropsWithoutRef<"img">, "onLoad" | "onError">>;

const Sprite = ({ name, sprite, hidden, onLoad, onError }: SpriteProps): JSX.Element => (
  <div className={clsx(`flex h-24 w-full items-center ${hidden ? "hidden" : "block"}`)}>
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
    <Icon name="Spinner" className="size-6" />
  </div>
);
PokemonCard.SpriteLoadingState = SpriteLoadingState;

const SpriteErrorState = (): JSX.Element => (
  <div className="mx-auto flex h-24 flex-col items-center justify-center gap-y-2">
    <Icon name="ExclamationCircle" className="size-7 text-red-700" />
    <p className="text-zinc-500 dark:text-zinc-400">Could not load sprite</p>
  </div>
);
