import clsx from "clsx";
import type { JSX } from "react";
import Icon from "../components/icon";

export type IconType = keyof typeof iconMap;
const iconMap = {
  // fields
  text: { name: "Text", bg: "bg-accent-text-fields", text: "text-icons-accent-text-fields" },
  textArea: {
    name: "Bars3BottomLeft",
    bg: "bg-accent-text-fields",
    text: "text-icons-accent-text-fields",
  },
  subform: {
    name: "DocumentDuplicate",
    bg: "bg-accent-subform",
    text: "text-icons-accent-subform",
  },
  catalogue: {
    name: "ShoppingCart",
    bg: "bg-accent-search-items",
    text: "text-icons-accent-search-items",
  },
  number: { name: "NumberedList", bg: "bg-accent-number", text: "text-icons-accent-number" },
  search: {
    name: "MagnifyingGlassCircle",
    bg: "bg-accent-search-items",
    text: "text-icons-accent-search-items",
  },

  // variables
  group: {
    name: "UserGroup",
    bg: "bg-sunken-secondary dark:bg-sunken-secondary-dark",
    text: "text-primary dark:text-primary-dark",
  },
  user: {
    name: "User",
    bg: "bg-sunken-secondary dark:bg-sunken-secondary-dark",
    text: "text-primary dark:text-primary-dark",
  },
  coords: {
    name: "MapPin",
    bg: "bg-sunken-secondary dark:bg-sunken-secondary-dark",
    text: "text-primary dark:text-primary-dark",
  },
  date: {
    name: "Calendar",
    bg: "bg-sunken-secondary dark:bg-sunken-secondary-dark",
    text: "text-primary dark:text-primary-dark",
  },
  formName: {
    name: "Document",
    bg: "bg-sunken-secondary dark:bg-sunken-secondary-dark",
    text: "text-primary dark:text-primary-dark",
  },
  custom: {
    name: "Star",
    bg: "bg-sunken-secondary dark:bg-sunken-secondary-dark",
    text: "text-primary dark:text-primary-dark",
  },
} as const;

type OptionIconProps = {
  type: IconType;
  applyBgColour?: boolean;
  className?: string;
};
export const OptionIcon = ({
  type,
  applyBgColour = true,
  className,
}: OptionIconProps): JSX.Element => {
  const icon = iconMap[type];
  const classes = clsx(
    "flex size-5 items-center justify-center rounded-xs p-[3px]",
    applyBgColour && icon.bg,
    icon.text,
    className,
  );

  return (
    <div className={classes}>
      <Icon name={icon.name} className="size-3.5" />
    </div>
  );
};
