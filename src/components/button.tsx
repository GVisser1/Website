import type { MouseEvent, PropsWithChildren, JSX } from "react";
import React from "react";
import clsx from "clsx";
import type { IconName } from "./icon";
import Icon from "./icon";
import Link from "next/link";
import type { TooltipProps } from "./tooltip";
import Tooltip from "./tooltip";
import { isNil } from "lodash-es";

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = "md" | "lg";

type DefaultProps = {
  "aria-label"?: string;
  disabled?: boolean;
  active?: boolean;
  variant: ButtonVariant;
  fullWidth?: boolean;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  className?: string;
  tooltip?: Omit<TooltipProps, "trigger">;
  size?: ButtonSize;
};

type ButtonProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
} & DefaultProps;

type LinkProps = {
  href: string;
} & DefaultProps;

type IconButtonProps = ButtonProps & { icon: IconName };
const IconButton = (props: IconButtonProps): JSX.Element => (
  <BaseButton {...props} className={clsx("aspect-square", props.className)}>
    <ButtonIcon icon={props.icon} size={props.size} />
  </BaseButton>
);

type IconLinkProps = LinkProps & { icon: IconName };
const IconLink = (props: IconLinkProps): JSX.Element => (
  <BaseButton {...props} className={clsx("aspect-square", props.className)}>
    <ButtonIcon icon={props.icon} size={props.size} />
  </BaseButton>
);

type TextButtonProps = ButtonProps & { label: string };
const TextButton = (props: TextButtonProps): JSX.Element => (
  <BaseButton {...props} className={props.className}>
    <ButtonLabel label={props.label} size={props.size} />
  </BaseButton>
);

type TextLinkProps = LinkProps & { label: string };
const TextLink = (props: TextLinkProps): JSX.Element => (
  <BaseButton {...props} className={props.className}>
    <ButtonLabel label={props.label} size={props.size} />
  </BaseButton>
);

type IconAndTextButtonProps = ButtonProps & { label: string; icon: IconName };
const IconAndTextButton = (props: IconAndTextButtonProps): JSX.Element => (
  <BaseButton {...props} className={clsx("gap-x-1.5", props.className)}>
    <ButtonIcon icon={props.icon} size={props.size} />
    <ButtonLabel label={props.label} size={props.size} />
  </BaseButton>
);

type IconAndTextLinkProps = LinkProps & { label: string; icon: IconName };
const IconAndTextLink = (props: IconAndTextLinkProps): JSX.Element => (
  <BaseButton {...props} className={clsx("gap-x-1.5", props.className)}>
    <ButtonIcon icon={props.icon} size={props.size} />
    <ButtonLabel label={props.label} size={props.size} />
  </BaseButton>
);

export { IconButton, IconLink, TextButton, TextLink, IconAndTextButton, IconAndTextLink };

type ButtonLabelProps = { label: string; size?: ButtonSize };
const ButtonLabel = (props: ButtonLabelProps): JSX.Element => {
  const classes = clsx("truncate", props.size === "lg" ? "text-button-lg" : "text-button");
  return <span className={classes}>{props.label}</span>;
};

type ButtonIconProps = { icon: IconName; size?: ButtonSize };
const ButtonIcon = (props: ButtonIconProps): JSX.Element => <Icon name={props.icon} size={props.size} />;

const BaseButton = (props: PropsWithChildren<ButtonProps | LinkProps>): JSX.Element => {
  const classes = clsx(
    "inline-flex shrink-0 items-center rounded-sm p-2 select-none focus-visible:outline",
    "data-[active=true]:bg-zinc-100 data-[active=true]:font-semibold dark:data-[active=true]:bg-zinc-800",
    "disabled:cursor-not-allowed disabled:text-zinc-500 dark:disabled:bg-zinc-900",
    props.size === "lg" ? "h-12 px-3 py-2" : "h-9 p-2",
    props.fullWidth && "w-full",
    !props.disabled && !props.active && variantClasses[props.variant],
    // !("icon" in props) ? "px-4 py-2" : "px-2 py-2",
    props.className,
  );

  if ("href" in props && props.href) {
    const link = (
      <Link
        data-active={props.active}
        aria-label={props["aria-label"]}
        href={props.href}
        className={classes}
        onKeyDown={props.onKeyDown}
      >
        {props.children}
      </Link>
    );

    if (isNil(props.tooltip)) {
      return link;
    }

    return <Tooltip trigger={link} {...props.tooltip} />;
  }

  if ("onClick" in props) {
    const button = (
      <button
        type="button"
        aria-label={props["aria-label"]}
        disabled={props.disabled}
        onClick={props.onClick}
        className={classes}
      >
        {props.children}
      </button>
    );

    if (isNil(props.tooltip)) {
      return button;
    }

    return <Tooltip trigger={button} {...props.tooltip} />;
  }

  return <div className={classes}>{props.children}</div>;
};

const variantClasses = {
  default:
    "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600",
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800",
  light:
    "border box-border border-blue-600 text-blue-600 dark:text-blue-500 dark:border-blue-500 hover:bg-blue-50 active:bg-blue-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-700",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:active:bg-zinc-700",
};
