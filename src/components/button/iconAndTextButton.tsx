import clsx from "clsx";
import type { IconName } from "../icon";
import Icon from "../icon";
import type { TooltipProps } from "../tooltip";
import Link from "next/link";
import Tooltip from "../tooltip";
import type { JSX } from "react";

type BaseIconAndTextButtonProps = {
  id?: string;
  icon: IconName;
  label: string;
  tooltip?: Omit<TooltipProps, "trigger">;
  fullWidth?: boolean;
  className?: string;
};
type ButtonTypeProps = { type?: "button"; onClick: () => void } | { type: "link"; href: string };
type VariantProps = { variant: "primary" } | { variant: "light" } | { variant: "ghost"; active?: boolean };
type IconAndTextButtonProps = BaseIconAndTextButtonProps & ButtonTypeProps & VariantProps;

const IconAndTextButton = (props: IconAndTextButtonProps): JSX.Element => {
  const classes = clsx(
    "inline-flex h-9 shrink-0 items-center gap-x-1.5 rounded-sm py-3 pr-2.5 pl-2 focus-visible:focus-ring",
    props.variant === "primary" && "btn-primary",
    props.variant === "light" && "btn-light",
    props.variant === "ghost" && "btn-ghost",
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
        href={props.href}
        {...(props.variant === "ghost" && { "data-active": props.active })}
      >
        {content}
      </Link>
    ) : (
      <button
        id={props.id}
        className={classes}
        onClick={props.onClick}
        {...(props.variant === "ghost" && { "data-active": props.active })}
      >
        {content}
      </button>
    );

  if (props.tooltip) {
    return (
      <Tooltip
        title={props.tooltip.title}
        description={props.tooltip.description}
        side={props.tooltip.side}
        trigger={trigger}
      />
    );
  }

  return trigger;
};

export default IconAndTextButton;
