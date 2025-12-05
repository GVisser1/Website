import clsx from "clsx";
import type { IconName } from "../icon";
import Icon from "../icon";
import type { TooltipProps } from "../tooltip";
import Link from "next/link";
import Tooltip from "../tooltip";
import type { JSX, MouseEvent } from "react";

type BaseIconButtonProps = {
  icon: IconName;
  ariaLabel: string;
  tooltip: Omit<TooltipProps, "trigger">;
  className?: string;
};
type ButtonTypeProps =
  | { type: "button"; onClick: (e: MouseEvent<HTMLButtonElement>) => void }
  | { type: "link"; href: string };
type VariantProps = { variant: "secondary"; disabled?: boolean } | { variant: "ghost"; active?: boolean };
type IconButtonProps = BaseIconButtonProps & ButtonTypeProps & VariantProps;

const IconButton = (props: IconButtonProps): JSX.Element => {
  const classes = clsx(
    "inline-flex size-9 shrink-0 items-center justify-center rounded-sm p-2 select-none focus-visible:focus-ring",
    "disabled" in props && props.disabled
      ? "btn-disabled"
      : {
          "btn-secondary": props.variant === "secondary",
          "btn-ghost": props.variant === "ghost",
        },

    props.className,
  );
  const icon = <Icon name={props.icon} className="size-5" />;

  return (
    <Tooltip
      title={props.tooltip.title}
      description={props.tooltip.description}
      side={props.tooltip.side}
      trigger={
        props.type === "link" ? (
          <Link
            className={classes}
            href={props.href}
            aria-label={props.ariaLabel}
            {...(props.variant === "ghost" && { "data-active": props.active })}
          >
            {icon}
          </Link>
        ) : (
          <button
            className={classes}
            onClick={props.onClick}
            aria-label={props.ariaLabel}
            {...(props.variant === "secondary" && { disabled: props.disabled })}
            {...(props.variant === "ghost" && { "data-active": props.active })}
          >
            {icon}
          </button>
        )
      }
    />
  );
};

export default IconButton;
