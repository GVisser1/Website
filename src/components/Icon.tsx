import React from "react";
import * as solid from "@heroicons/react/solid";
import * as outline from "@heroicons/react/outline";
import classNames from "classnames";

export enum IconType {
  ARROW_RIGHT = 1,
  AT_SYMBOL,
  CHECK_CIRCLE,
  CHEVRON_UP,
  COG,
  COLLECTION,
  DESKTOP_COMPUTER,
  EXTERNAL_LINK,
  GLOBE,
  HOME,
  MAIL,
  MENU,
  MOON,
  PLAY,
  SPARKLES,
  SUN,
  X,
}

const Icons: Record<IconType, { solid: any; outline: any }> = {
  [IconType.ARROW_RIGHT]: {
    solid: solid.ArrowRightIcon,
    outline: outline.ArrowRightIcon,
  },
  [IconType.AT_SYMBOL]: {
    solid: solid.AtSymbolIcon,
    outline: outline.AtSymbolIcon,
  },
  [IconType.CHECK_CIRCLE]: {
    solid: solid.CheckCircleIcon,
    outline: outline.CheckCircleIcon,
  },
  [IconType.CHEVRON_UP]: {
    solid: solid.ChevronUpIcon,
    outline: outline.ChevronUpIcon,
  },
  [IconType.COG]: { solid: solid.CogIcon, outline: outline.CogIcon },
  [IconType.COLLECTION]: { solid: solid.CollectionIcon, outline: outline.CollectionIcon },
  [IconType.DESKTOP_COMPUTER]: {
    solid: solid.DesktopComputerIcon,
    outline: outline.DesktopComputerIcon,
  },
  [IconType.EXTERNAL_LINK]: {
    solid: solid.ExternalLinkIcon,
    outline: outline.ExternalLinkIcon,
  },
  [IconType.GLOBE]: { solid: solid.GlobeIcon, outline: outline.GlobeIcon },
  [IconType.HOME]: { solid: solid.HomeIcon, outline: outline.HomeIcon },
  [IconType.MAIL]: { solid: solid.MailIcon, outline: outline.MailIcon },
  [IconType.MENU]: { solid: solid.MenuIcon, outline: outline.MenuIcon },
  [IconType.MOON]: { solid: solid.MoonIcon, outline: outline.MoonIcon },
  [IconType.PLAY]: { solid: solid.PlayIcon, outline: outline.PlayIcon },
  [IconType.SPARKLES]: {
    solid: solid.SparklesIcon,
    outline: outline.SparklesIcon,
  },
  [IconType.SUN]: { solid: solid.SunIcon, outline: outline.SunIcon },
  [IconType.X]: { solid: solid.XIcon, outline: outline.XIcon },
};

export interface IconProps {
  name: IconType;
  type?: "solid" | "outline";
  className?: string;
  overrideSize?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  type = "solid",
  className,
  overrideSize = false,
}) => {
  const classes = classNames(!overrideSize && "w-6 h-6", className);
  return Icons[name][type].render({ className: classes });
};
