import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import type { JSX } from "react";
import type { IconName } from "../icon";
import Icon from "../icon";
import type { TooltipProps } from "../tooltip";
import Tooltip from "../tooltip";

type BaseIconAndTextButtonProps = {
  id?: string;
  icon: IconName;
  label: string;
  tooltip?: Omit<TooltipProps, "trigger">;
  fullWidth?: boolean;
  className?: string;
};
type ButtonTypeProps = { type?: "button"; onClick: () => void } | { type: "link"; href: string };
type VariantProps = { variant: "primary" } | { variant: "light" } | { variant: "tertiary"; active?: boolean };
type IconAndTextButtonProps = BaseIconAndTextButtonProps & ButtonTypeProps & VariantProps;

const IconAndTextButton = (props: IconAndTextButtonProps): JSX.Element => {
  const classes = clsx(
    "inline-flex h-9 shrink-0 items-center gap-x-1.5 rounded-sm py-3 pr-2.5 pl-2 select-none focus-visible:focus-ring",
    props.variant === "primary" && "btn-primary",
    props.variant === "light" && "btn-light",
    props.variant === "tertiary" && "btn-tertiary",
    props.fullWidth ? "w-full" : "justify-center",
    props.className,
  );

  const content = (
    <>
      <Icon name={props.icon} className="size-5" />
      <span className="truncate text-button">{props.label}</span>
    </>
  );

  const trigger =
    props.type === "link" ? (
      <Link
        id={props.id}
        className={classes}
        to={props.href}
        {...(props.variant === "tertiary" && { "data-active": props.active })}
      >
        {content}
      </Link>
    ) : (
      <button
        id={props.id}
        className={classes}
        onClick={props.onClick}
        {...(props.variant === "tertiary" && { "data-active": props.active })}
      >
        {content}
      </button>
    );

  if (props.tooltip) {
    return (
      <Tooltip
        title={props.tooltip.title}
        shortcut={props.tooltip.shortcut}
        position={props.tooltip.position}
        trigger={trigger}
      />
    );
  }

  return trigger;
};

export default IconAndTextButton;
