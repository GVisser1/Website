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
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
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
const ButtonIcon = (props: ButtonIconProps): JSX.Element => (
  <Icon name={props.icon} className={props.size === "lg" ? "size-6" : "size-5"} />
);

const BaseButton = (props: PropsWithChildren<ButtonProps | LinkProps>): JSX.Element => {
  const classes = clsx(
    "inline-flex shrink-0 items-center rounded-sm select-none focus-visible:focus-ring",
    "data-[active=true]:bg-btn-active data-[active=true]:font-semibold dark:data-[active=true]:bg-btn-active-dark",
    "disabled:cursor-not-allowed disabled:bg-btn-disabled disabled:text-disabled dark:disabled:bg-btn-disabled-dark dark:disabled:text-btn-disabled-dark",
    props.size === "lg" ? "h-12 px-3" : "h-9 px-2",
    props.fullWidth && "w-full",
    !props.disabled && variantClasses[props.variant],
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

  if ("onClick" in props && props.onClick) {
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
  primary:
    "bg-btn-primary text-inverse hover:bg-btn-primary-hover active:bg-btn-primary-pressed dark:bg-btn-primary-dark dark:hover:bg-btn-primary-hover-dark dark:active:bg-btn-primary-pressed-dark",
  secondary:
    "bg-btn-secondary text-primary hover:bg-btn-secondary-hover active:bg-btn-secondary-pressed dark:bg-btn-secondary-dark dark:text-primary-dark dark:hover:bg-btn-secondary-hover-dark dark:active:bg-btn-secondary-pressed-dark",
  light:
    "border box-border border-light text-light dark:text-light-dark hover:bg-btn-light-hover active:bg-btn-light-pressed dark:hover:bg-btn-light-hover-dark dark:active:bg-btn-light-pressed-dark",
  ghost:
    "text-primary dark:text-primary-dark hover:bg-btn-ghost-hover active:bg-btn-ghost-pressed  dark:hover:bg-btn-ghost-hover-dark dark:active:bg-btn-ghost-pressed-dark",
};
