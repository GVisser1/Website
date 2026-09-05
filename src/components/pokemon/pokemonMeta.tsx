import clsx from "clsx";
import type { JSX } from "react";
import Pill from "../pill";

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
    { label: "Height", value: `${props.height / 10} m` },
    { label: "Weight", value: `${props.weight / 10} kg` },
    { label: "Base EXP", value: props.baseExp },
    {
      label: "Abilities",
      value: (
        <ul className="flex flex-wrap gap-2 text-center">
          {props.abilities.map((ability) => (
            <li key={ability.name}>
              <Pill
                type="neutral"
                label={ability.name}
                icon={ability.is_hidden ? "EyeOff" : undefined}
                className="capitalize"
              />
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
          <dt className="bg-sunken-secondary text-base-semibold text-primary dark:bg-sunken-secondary-dark dark:text-primary-dark h-full w-24 shrink-0 rounded-sm px-2 py-1">
            {item.label}
          </dt>
          <dd className="text-secondary dark:text-secondary-dark p-1">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default PokemonMeta;
