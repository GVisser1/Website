import React from "react";
import * as solid from "@heroicons/react/solid";
import * as outline from "@heroicons/react/outline";
import classNames from "classnames";

export enum IconType {
  ACADEMIC_CAP = 1,
  ARROW_RIGHT,
  BRIEFCASE,
  CAKE,
  CHECK_CIRCLE,
  CHEVRON_LEFT,
  CHEVRON_RIGHT,
  CHEVRON_UP,
  COG,
  DESKTOP_COMPUTER,
  EXCLAMATION,
  EXTERNAL_LINK,
  FILM,
  FOLDER,
  GLOBE,
  HOME,
  INFORMATION_CIRCLE,
  LIBRARY,
  MAIL,
  MENU,
  MOON,
  MUSIC_NOTE,
  PENCIL,
  PLAY,
  PUZZLE,
  STAR,
  SPARKLES,
  SUN,
  USER,
  USER_CIRCLE,
  X,
}

const Icons: Record<IconType, { solid: any; outline: any }> = {
  [IconType.ACADEMIC_CAP]: {
    solid: solid.AcademicCapIcon,
    outline: outline.AcademicCapIcon,
  },
  [IconType.ARROW_RIGHT]: {
    solid: solid.ArrowRightIcon,
    outline: outline.ArrowRightIcon,
  },
  [IconType.BRIEFCASE]: {
    solid: solid.BriefcaseIcon,
    outline: outline.BriefcaseIcon,
  },
  [IconType.CAKE]: { solid: solid.CakeIcon, outline: outline.CakeIcon },
  [IconType.CHECK_CIRCLE]: {
    solid: solid.CheckCircleIcon,
    outline: outline.CheckCircleIcon,
  },
  [IconType.CHEVRON_LEFT]: {
    solid: solid.ChevronLeftIcon,
    outline: outline.ChevronLeftIcon,
  },
  [IconType.CHEVRON_RIGHT]: {
    solid: solid.ChevronRightIcon,
    outline: outline.ChevronRightIcon,
  },
  [IconType.CHEVRON_UP]: {
    solid: solid.ChevronUpIcon,
    outline: outline.ChevronUpIcon,
  },
  [IconType.COG]: { solid: solid.CogIcon, outline: outline.CogIcon },
  [IconType.DESKTOP_COMPUTER]: {
    solid: solid.DesktopComputerIcon,
    outline: outline.DesktopComputerIcon,
  },
  [IconType.EXCLAMATION]: {
    solid: solid.ExclamationIcon,
    outline: outline.ExclamationIcon,
  },
  [IconType.EXTERNAL_LINK]: {
    solid: solid.ExternalLinkIcon,
    outline: outline.ExternalLinkIcon,
  },
  [IconType.FILM]: { solid: solid.FilmIcon, outline: outline.FilmIcon },
  [IconType.FOLDER]: { solid: solid.FolderIcon, outline: outline.FolderIcon },
  [IconType.GLOBE]: { solid: solid.GlobeIcon, outline: outline.GlobeIcon },
  [IconType.HOME]: { solid: solid.HomeIcon, outline: outline.HomeIcon },
  [IconType.INFORMATION_CIRCLE]: {
    solid: solid.InformationCircleIcon,
    outline: outline.InformationCircleIcon,
  },
  [IconType.LIBRARY]: {
    solid: solid.LibraryIcon,
    outline: outline.LibraryIcon,
  },
  [IconType.MAIL]: { solid: solid.MailIcon, outline: outline.MailIcon },
  [IconType.MENU]: { solid: solid.MenuIcon, outline: outline.MenuIcon },
  [IconType.MOON]: { solid: solid.MoonIcon, outline: outline.MoonIcon },
  [IconType.MUSIC_NOTE]: {
    solid: solid.MusicNoteIcon,
    outline: outline.MusicNoteIcon,
  },
  [IconType.PENCIL]: { solid: solid.PencilIcon, outline: outline.PencilIcon },
  [IconType.PLAY]: { solid: solid.PlayIcon, outline: outline.PlayIcon },
  [IconType.PUZZLE]: { solid: solid.PuzzleIcon, outline: outline.PuzzleIcon },
  [IconType.SPARKLES]: {
    solid: solid.SparklesIcon,
    outline: outline.SparklesIcon,
  },
  [IconType.STAR]: { solid: solid.StarIcon, outline: outline.StarIcon },
  [IconType.SUN]: { solid: solid.SunIcon, outline: outline.SunIcon },
  [IconType.USER]: { solid: solid.UserIcon, outline: outline.UserIcon },
  [IconType.USER_CIRCLE]: {
    solid: solid.UserCircleIcon,
    outline: outline.UserCircleIcon,
  },
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
