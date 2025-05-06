import clsx from "clsx";
import type { PokemonType } from "../../utils/pokemonUtil";
import { pokemonTypeInfo } from "../../utils/pokemonUtil";
import Icon from "../icon";
import Tooltip from "../tooltip";
import type { JSX } from "react";
import Image from "../image";

type PokemonCoverProps = {
  name: string;
  sprite: string;
  primaryType: PokemonType;
  isLegendary: boolean;
  isMythical: boolean;
};

const PokemonCover = (props: PokemonCoverProps): JSX.Element => {
  const typeInfo = pokemonTypeInfo[props.primaryType];
  const classes = clsx("relative isolate overflow-hidden rounded-lg p-4", typeInfo.bgColor);

  return (
    <div className={classes}>
      <Image src={props.sprite} alt={props.name} className="h-56 w-full object-contain" priority />
      <Icon name="PokéBall" className="absolute right-0 bottom-0 -z-1 size-28 -rotate-45 text-inverse/30" />
      {props.isLegendary && <LegendaryIndicator />}
      {props.isMythical && <MythicalIndicator />}
    </div>
  );
};

export default PokemonCover;

const LegendaryIndicator = (): JSX.Element => (
  <Tooltip
    trigger={
      <div className="absolute top-1 left-1">
        <span className="sr-only">This Pokémon is legendary</span>
        <Icon name="Star" stroke="xs" className="size-12 stroke-primary text-pokemon-legendary" />
      </div>
    }
    title="This Pokémon is legendary"
  />
);

const MythicalIndicator = (): JSX.Element => (
  <Tooltip
    trigger={
      <div className="absolute top-1 left-1">
        <span className="sr-only">This Pokémon is mythical</span>
        <Icon name="Star" stroke="xs" className="size-12 stroke-primary text-pokemon-mythical" />
      </div>
    }
    title="This Pokémon is mythical"
  />
);
