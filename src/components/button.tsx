import type { ComponentProps, PropsWithChildren } from "react";
import React from "react";
import clsx from "clsx";
import type { IconName } from "./icon";
import Icon from "./icon";
import type { LinkProps as NextLinkProps } from "next/link";
import Link from "next/link";

type ButtonVariant = keyof typeof variantClasses;

type DefaultProps = {
  disabled?: boolean;
  variant: ButtonVariant;
};
type ButtonProps = Pick<ComponentProps<"button">, "onClick" | "className" | "aria-label" | "title"> & DefaultProps;
type LinkProps = Pick<NextLinkProps & ComponentProps<"a">, "href" | "className"> & DefaultProps;

type IconButtonProps = ButtonProps & { icon: IconName };
const IconButton = (props: IconButtonProps): JSX.Element => (
  <BaseButton {...props} className={props.className}>
    <Icon name={props.icon} overrideSize className="size-4" />
  </BaseButton>
);

type IconLinkProps = LinkProps & { icon: IconName };
const IconLink = (props: IconLinkProps): JSX.Element => (
  <BaseButton {...props} className={props.className}>
    <Icon name={props.icon} overrideSize className="size-4" />
  </BaseButton>
);

type TextButtonProps = ButtonProps & { label: string };
const TextButton = (props: TextButtonProps): JSX.Element => (
  <BaseButton {...props} className={clsx("text-button", props.className)}>
    <span>{props.label}</span>
  </BaseButton>
);

type TextLinkProps = LinkProps & { label: string };
const TextLink = (props: TextLinkProps): JSX.Element => (
  <BaseButton {...props} className={clsx("text-button", props.className)}>
    <span>{props.label}</span>
  </BaseButton>
);

type IconAndTextButtonProps = ButtonProps & { label: string; icon: IconName };
const IconAndTextButton = (props: IconAndTextButtonProps): JSX.Element => (
  <BaseButton {...props} className={clsx("gap-x-1.5 text-button", props.className)}>
    <Icon name={props.icon} overrideSize className="size-4" />
    <span>{props.label}</span>
  </BaseButton>
);

type IconAndTextLinkProps = LinkProps & { label: string; icon: IconName };
const IconAndTextLink = (props: IconAndTextLinkProps): JSX.Element => (
  <BaseButton {...props} className={clsx("gap-x-1.5 text-button", props.className)}>
    <Icon name={props.icon} overrideSize className="size-4" />
    <span>{props.label}</span>
  </BaseButton>
);

export { IconButton, IconLink, TextButton, TextLink, IconAndTextButton, IconAndTextLink };

const BaseButton = (props: PropsWithChildren<ButtonProps | LinkProps>): JSX.Element => {
  const classes = clsx(
    props.className,
    "inline-flex select-none items-center justify-center rounded p-2 transition-colors focus-visible:outline",
    props.disabled ? "cursor-not-allowed text-zinc-500 dark:bg-zinc-900" : variantClasses[props.variant]
  );

  if ("href" in props) {
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  }

  if (props.onClick) {
    return (
      <button
        type="button"
        aria-label={props["aria-label"]}
        disabled={props.disabled}
        onClick={props.onClick}
        title={props.title}
        className={classes}
      >
        {props.children}
      </button>
    );
  }

  return <div className={classes}>{props.children}</div>;
};

const variantClasses = {
  default:
    "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600",
  primary:
    "bg-blue-950 text-white hover:bg-blue-900 active:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 dark:active:bg-blue-950",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:active:bg-zinc-700",
};
