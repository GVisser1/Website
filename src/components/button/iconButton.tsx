import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import type { ComponentProps, JSX, MouseEventHandler } from "react";
import type { IconName } from "../icon";
import Icon from "../icon";
import type { TooltipProps } from "../tooltip";
import Tooltip from "../tooltip";

type BaseIconButtonProps = {
  icon: IconName;
  ariaLabel: string;
  tooltip: Omit<TooltipProps, "trigger">;
  className?: string;
};
type ButtonTypeProps =
  | { type: "button"; onClick?: MouseEventHandler<HTMLButtonElement>; htmlProps?: ComponentProps<"button"> }
  | { type: "link"; href: string };
type VariantProps = { variant: "secondary"; disabled?: boolean } | { variant: "tertiary"; active?: boolean };
type IconButtonProps = BaseIconButtonProps & ButtonTypeProps & VariantProps;

const IconButton = (props: IconButtonProps): JSX.Element => {
  const classes = clsx(
    "inline-flex size-9 shrink-0 items-center justify-center rounded-sm p-2 select-none focus-visible:focus-ring",
    "disabled" in props && props.disabled
      ? "btn-disabled"
      : {
          "btn-secondary": props.variant === "secondary",
          "btn-tertiary": props.variant === "tertiary",
        },

    props.className,
  );
  const icon = <Icon name={props.icon} className="size-5" />;

  return (
    <Tooltip
      title={props.tooltip.title}
      shortcut={props.tooltip.shortcut}
      position={props.tooltip.position}
      trigger={
        props.type === "link" ? (
          <Link
            className={classes}
            to={props.href}
            aria-label={props.ariaLabel}
            {...(props.variant === "tertiary" && { "data-active": props.active })}
          >
            {icon}
          </Link>
        ) : (
          <button
            {...props.htmlProps}
            className={classes}
            onClick={(event) => {
              props.htmlProps?.onClick?.(event);
              props.onClick?.(event);
            }}
            aria-label={props.ariaLabel}
            {...(props.variant === "secondary" && { disabled: props.disabled })}
            {...(props.variant === "tertiary" && { "data-active": props.active })}
          >
            {icon}
          </button>
        )
      }
    />
  );
};

export default IconButton;
