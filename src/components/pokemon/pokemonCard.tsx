"use client";

import Icon from "../icon";
import type { JSX } from "react";
import { useState } from "react";
import { isNil } from "lodash-es";
import clsx from "clsx";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import SkeletonLoader from "../skeleton";
import Link from "next/link";
import PokemonTypes from "./pokemonTypes";
import Image from "../image";

export type PokemonCardProps = {
  identifier: string | number;
  size: "sm" | "md";
  className?: string;
};

const PokemonCard = ({ identifier, size, className }: PokemonCardProps): JSX.Element => {
  const { data, error, isLoading } = usePokemonDetails(identifier);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);

  if (error) {
    return <p className="col-span-full text-center text-error">{error.message}</p>;
  }

  if (isLoading || isNil(data)) {
    return <SkeletonLoader size={size} />;
  }

  const showLoadingState = isImageLoading && !isImageError && !isNil(data.sprite);
  const showErrorState = isImageError || isNil(data.sprite);

  const classes = clsx(
    "group flex w-full gap-3 rounded-lg bg-btn-secondary select-none hover:bg-btn-secondary-hover focus-visible:focus-ring active:bg-btn-secondary-pressed dark:bg-btn-secondary-dark dark:hover:bg-btn-secondary-hover-dark dark:active:bg-btn-secondary-pressed-dark",
    "data-[size=md]:flex-col data-[size=md]:text-center",
    "data-[size=sm]:flex-row data-[size=sm]:items-center",
    "data-[size=md]:px-2 data-[size=md]:py-3 data-[size=sm]:px-4 data-[size=sm]:py-2",
    className,
  );

  return (
    <Link
      aria-label={`View details of ${data.name}`}
      href={`/projects/pokemon/${data.name}`}
      className={classes}
      data-size={size}
    >
      <div className="relative">
        <Sprite
          name={data.name}
          sprite={data.sprite}
          hidden={isImageLoading}
          size={size}
          onLoad={() => setIsImageLoading(false)}
          onError={() => setIsImageError(true)}
        />
        {showLoadingState && <SpriteLoadingState />}
        {showErrorState && <SpriteErrorState />}
      </div>
      <div className="grow">
        <p className="w-full truncate font-semibold text-primary capitalize dark:text-primary-dark">
          {data.name} #{data.id}
        </p>
        <PokemonTypes types={data.types} size="sm" className={clsx("mt-1", size === "md" && "justify-center")} />
      </div>
    </Link>
  );
};

export default PokemonCard;

type SpriteProps = {
  name: string;
  sprite: string;
  hidden: boolean;
  size?: "sm" | "md";
  onLoad: () => void;
  onError: () => void;
};

const Sprite = ({ name, sprite, hidden, size, onLoad, onError }: SpriteProps): JSX.Element => {
  const classes = clsx("mx-auto object-contain", size === "md" && "size-22", size === "sm" && "size-16");

  return (
    <Image
      aria-hidden={hidden}
      src={sprite}
      alt={`${name} sprite`}
      className={classes}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

const SpriteLoadingState = (): JSX.Element => (
  <div className="absolute top-0 flex w-full items-center justify-center text-primary group-data-[size=md]:h-22 group-data-[size=sm]:h-16 dark:text-primary-dark">
    <span className="sr-only">Loading sprite</span>
    <Icon name="Spinner" className="size-6" />
  </div>
);
PokemonCard.SpriteLoadingState = SpriteLoadingState;

const SpriteErrorState = (): JSX.Element => {
  const classes = clsx(
    "absolute top-0 flex w-full items-center justify-center text-primary dark:text-primary-dark",
    "group-data-[size=md]:h-22 group-data-[size=sm]:h-16",
  );

  return (
    <div className={classes}>
      <p className="sr-only">Failed to load sprite</p>
      <Icon name="ExclamationCircle" className="size-6 text-error" />
    </div>
  );
};
