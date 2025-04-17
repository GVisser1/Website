import clsx from "clsx";

type DividerProps = {
  soft?: boolean;
  className?: string;
};

export const Divider = ({ className, soft }: DividerProps): JSX.Element => (
  <hr
    role="presentation"
    className={clsx(
      className,
      "w-full border-t",
      soft ? "border-zinc-100 dark:border-zinc-800" : "border-zinc-200 dark:border-zinc-700",
    )}
  />
);
