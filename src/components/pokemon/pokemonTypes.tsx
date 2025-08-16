import clsx from "clsx";
import type { PokemonType } from "../../utils/pokemonUtil";
import { pokemonTypeInfo } from "../../utils/pokemonUtil";
import type { JSX } from "react";

type PokemonTypePill = {
  types: PokemonType[];
  size: "sm" | "md";
  className?: string;
};

const PokemonTypes = (props: PokemonTypePill): JSX.Element => {
  const classes = clsx("flex gap-x-2 gap-y-1", props.className);

  return (
    <ul className={classes}>
      {props.types.map((type) => (
        <TypePill key={type} type={type} size={props.size} />
      ))}
    </ul>
  );
};

export default PokemonTypes;

type TypePillProps = {
  type: PokemonType;
  size: "sm" | "md";
};

const TypePill = (props: TypePillProps): JSX.Element => {
  const typeInfo = pokemonTypeInfo[props.type];

  return (
    <li
      className={clsx(
        "flex min-w-0 grow items-center justify-center gap-x-1 rounded-sm px-1",
        props.size === "sm" && "h-5 max-w-20 text-xs-semibold",
        props.size === "md" && "h-6 max-w-24 text-sm-semibold",
        typeInfo.bgColor,
        typeInfo.textColor,
      )}
    >
      <span className="truncate">{typeInfo.name}</span>
    </li>
  );
};
