import clsx from "clsx";
import Link from "next/link";
import type { JSX } from "react";

type BaseTextButtonProps = {
  label: string;
  size: "large" | "medium";
  className?: string;
};
type ButtonTypeProps = { type?: "button"; onClick: () => void } | { type: "link"; href: string };
type VariantProps =
  | { variant: "primary" }
  | { variant: "light" }
  | { variant: "ghost"; active: boolean };
type TextButtonProps = BaseTextButtonProps & ButtonTypeProps & VariantProps;

const TextButton = (props: TextButtonProps): JSX.Element => {
  const classes = clsx(
    "inline-flex shrink-0 items-center justify-center rounded-sm select-none focus-visible:focus-ring",
    props.size === "large" && "h-12 px-4 py-3",
    props.size === "medium" && "h-9 px-2.5 py-3",
    props.variant === "primary" && "btn-primary",
    props.variant === "light" && "btn-light",
    props.variant === "ghost" && "btn-ghost",
    props.className,
  );

  const label = (
    <span
      className={clsx(
        "truncate",
        props.size === "large" && "text-button-lg",
        props.size === "medium" && "text-button",
      )}
    >
      {props.label}
    </span>
  );

  return props.type === "link" ? (
    <Link
      className={classes}
      href={props.href}
      {...(props.variant === "ghost" && { "data-active": props.active })}
    >
      {label}
    </Link>
  ) : (
    <button
      className={classes}
      onClick={props.onClick}
      {...(props.variant === "ghost" && { "data-active": props.active })}
    >
      {label}
    </button>
  );
};

export default TextButton;
