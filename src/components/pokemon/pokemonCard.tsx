"use client";

import Icon from "../icon";
import type { JSX, Ref } from "react";
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
};

const PokemonCard = ({ identifier, size }: PokemonCardProps): JSX.Element => {
  const { data, error, isLoading } = usePokemonDetails(identifier);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);

  if (error) {
    return <p className="col-span-full text-center text-error">{error.message}</p>;
  }

  if (isLoading || isNil(data)) {
    return <SkeletonLoader size={size} />;
  }

  const showErrorState = isImageError || isNil(data.sprite);

  const classes = clsx(
    "group btn-secondary flex w-full gap-3 rounded-lg focus-visible:focus-ring",
    "data-[size=md]:flex-col data-[size=md]:text-center",
    "data-[size=sm]:flex-row data-[size=sm]:items-center",
    "data-[size=md]:px-2 data-[size=md]:py-3 data-[size=sm]:px-4 data-[size=sm]:py-2",
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
        {showErrorState && <SpriteErrorState />}
      </div>
      <div className="grow">
        <p className="w-full truncate text-base-semibold text-primary capitalize dark:text-primary-dark">
          {data.name} #{data.id}
        </p>
        <PokemonTypes types={data.types} size="sm" className={clsx("mt-1", size === "md" && "justify-center")} />
      </div>
    </Link>
  );
};

export default PokemonCard;

type SpriteProps = {
  ref?: Ref<HTMLImageElement>;
  name: string;
  sprite: string;
  hidden: boolean;
  size?: "sm" | "md";
  onLoad: () => void;
  onError: () => void;
};

const Sprite = ({ name, sprite, hidden, size, onError }: SpriteProps): JSX.Element => {
  const classes = clsx("mx-auto object-contain", size === "md" && "size-22", size === "sm" && "size-16");

  return <Image aria-hidden={hidden} src={sprite} alt={`${name} sprite`} className={classes} onError={onError} />;
};

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
