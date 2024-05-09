import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  type: "text" | "email" | "textarea";
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
const Input = ({ label, type, ...props }: InputProps): JSX.Element => {
  const classes = clsx(
    "w-full rounded-md p-3.5 text-sm",
    "border bg-white text-gray-700 placeholder:text-gray-500 focus-visible:outline dark:border-zinc-800 dark:bg-zinc-950 dark:text-gray-200",
    type === "textarea" && "max-h-[12rem] min-h-[6rem]",
    props.className,
  );

  const Tag = type === "textarea" ? "textarea" : "input";

  return (
    <div>
      <label htmlFor={props.name} className="sr-only">
        {label}
      </label>
      <Tag {...props} className={classes} />
    </div>
  );
};

export default Input;
