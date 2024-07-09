import clsx from "clsx";

const colours = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100",
  green: "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100",
  red: "bg-rose-100 text-rose-700 dark:bg-rose-700 dark:text-rose-100",
  yellow: "bg-amber-100 text-amber-700 dark:bg-amber-700 dark:text-amber-100",
  gray: "bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100",
  purple: "bg-violet-100 text-violet-700 dark:bg-violet-700 dark:text-violet-100",
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-700 dark:text-pink-100",
};

export type PillProps = { label: string; colour: keyof typeof colours; className?: string };
const Pill = ({ label, colour, className }: PillProps): JSX.Element => {
  const classes = clsx("rounded px-1 py-0.5 text-xs font-semibold", colours[colour], className);

  return <span className={classes}>{label}</span>;
};

export default Pill;
