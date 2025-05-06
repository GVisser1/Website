import type { JSX } from "react";
import clsx from "clsx";
import Icon from "../icon";

type PokemonMetaProps = {
  height: number;
  weight: number;
  baseExp: number;
  abilities: { name: string; is_hidden: boolean }[];
  className?: string;
};

const PokemonMeta = (props: PokemonMetaProps): JSX.Element => {
  const classes = clsx("mt-4 flex w-full flex-col gap-y-1", props.className);

  const items = [
    { label: "Height", value: props.height / 10 + " m" },
    { label: "Weight", value: props.weight / 10 + " kg" },
    { label: "Base EXP", value: props.baseExp },
    {
      label: "Abilities",
      value: (
        <ul className="flex flex-wrap gap-2 text-center">
          {props.abilities.map((ability) => (
            <li
              key={ability.name}
              className="flex items-center gap-x-1 rounded-sm bg-sunken-tertiary px-1.5 py-0.5 text-xs font-semibold text-primary capitalize dark:bg-sunken-tertiary-dark dark:text-primary-dark"
            >
              {ability.name}
              {ability.is_hidden && <Icon name="EyeOff" className="size-4" />}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <dl className={classes}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-x-1">
          <dt className="h-full w-24 shrink-0 rounded bg-sunken-secondary px-2 py-1 font-semibold text-primary dark:bg-sunken-secondary-dark dark:text-primary-dark">
            {item.label}
          </dt>
          <dd className="p-1 text-secondary dark:text-secondary-dark">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default PokemonMeta;
