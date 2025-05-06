import type { JSX } from "react";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import Link from "next/link";
import Icon from "../icon";
import clsx from "clsx";
import { TOTAL_POKEMON } from "../../utils/pokemonUtil";
import Image from "../image";

type PokemonEntrySwitcherProps = {
  id: number;
  className?: string;
};
const PokemonEntrySwitcher = ({ id, className }: PokemonEntrySwitcherProps): JSX.Element => {
  const previousId = id - 1;
  const nextId = id + 1;

  const classes = clsx(
    "flex flex-wrap items-center",
    {
      "justify-end": previousId < 1,
      "justify-start": nextId > TOTAL_POKEMON,
      "justify-between": previousId >= 1 && nextId < TOTAL_POKEMON,
    },
    className,
  );

  return (
    <div className={classes}>
      {previousId >= 1 && <PokemonEntrySwitch id={previousId} iconAlign="left" />}
      {nextId < TOTAL_POKEMON && <PokemonEntrySwitch id={nextId} iconAlign="right" />}
    </div>
  );
};

type PokemonEntrySwitchProps = {
  id: number;
  iconAlign: "left" | "right";
};
const PokemonEntrySwitch = (props: PokemonEntrySwitchProps): JSX.Element | null => {
  const { data } = usePokemonDetails(props.id.toString());

  const iconClasses = clsx("size-5", props.iconAlign === "right" && "order-last rotate-180");

  if (!data) {
    return null;
  }

  return (
    <Link
      href={`/projects/pokemon/${data.name}`}
      scroll={false}
      className="flex items-center gap-x-2 rounded p-2 select-none hover:bg-btn-ghost-hover focus-visible:outline active:bg-btn-ghost-pressed dark:hover:bg-btn-ghost-hover-dark dark:active:bg-btn-ghost-pressed-dark"
    >
      <Icon name="ChevronLeft" className={iconClasses} />
      <Image src={data.sprite} alt={data.name} className="size-6 object-contain" />
      <p className="text-sm text-primary dark:text-primary-dark">
        <span className="mr-1 font-bold capitalize">{data.name}</span>#{data.id}
      </p>
    </Link>
  );
};

export default PokemonEntrySwitcher;
