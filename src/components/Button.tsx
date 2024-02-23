import clsx from "clsx";

type ButtonProps = {
  label?: string;
  block?: boolean;
  type?: "button" | "submit";
};

export const Button = ({ label, block = false, type = "button" }: ButtonProps): JSX.Element => {
  const classes = clsx(
    "flex select-none items-center justify-center gap-x-1.5 rounded-lg p-3 font-semibold",
    "bg-blue-600 text-white outline-none transition hover:bg-blue-700 focus-visible:ring active:bg-blue-800",
    block && "w-full",
  );

  return (
    <button type={type} className={classes}>
      {label}
    </button>
  );
};
