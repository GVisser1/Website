import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import type { JSX } from "react";
import type { IconName } from "../icon";
import Icon from "../icon";

type BaseIconAndTextButtonProps = {
  icon: IconName;
  label: string;
  className?: string;
};
type ButtonTypeProps = { type?: "button"; onClick: () => void } | { type: "link"; href: string };
type VariantProps = { variant: "primary" } | { variant: "light" } | { variant: "tertiary"; active?: boolean };
type IconAndTextButtonProps = BaseIconAndTextButtonProps & ButtonTypeProps & VariantProps;

const IconAndTextButton = (props: IconAndTextButtonProps): JSX.Element => {
  const classes = clsx(
    "inline-flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-sm py-3 pr-2.5 pl-2 select-none focus-visible:focus-ring",
    props.variant === "primary" && "btn-primary",
    props.variant === "light" && "btn-light",
    props.variant === "tertiary" && "btn-tertiary",
    props.className,
  );

  const content = (
    <>
      <Icon name={props.icon} className="size-5" />
      <span className="truncate text-small font-medium">{props.label}</span>
    </>
  );

  return props.type === "link" ? (
    <Link className={classes} to={props.href} {...(props.variant === "tertiary" && { "data-active": props.active })}>
      {content}
    </Link>
  ) : (
    <button
      className={classes}
      onClick={props.onClick}
      {...(props.variant === "tertiary" && { "data-active": props.active })}
    >
      {content}
    </button>
  );
};

export default IconAndTextButton;
