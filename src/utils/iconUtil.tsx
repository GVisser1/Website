import Icon from "@/components/icon";
import clsx from "clsx";

export type IconType = keyof typeof iconMap;
const iconMap = {
  // fields
  text: { name: "Text", bg: "bg-blue-100", text: "text-blue-600" },
  textArea: { name: "Bars3BottomLeft", bg: "bg-blue-100", text: "text-blue-600" },
  subform: { name: "DocumentDuplicate", bg: "bg-indigo-100", text: "text-indigo-600" },
  catalogue: { name: "ShoppingCart", bg: "bg-[#E8F9F9]", text: "text-[#1AB0AF]" },
  number: { name: "NumberedList", bg: "bg-amber-100", text: "text-amber-600" },
  search: { name: "MagnifyingGlassCircle", bg: "bg-[#E8F9F9]", text: "text-[#1AB0AF]" },

  // variables
  group: { name: "UserGroup", bg: "bg-zinc-100 dark:bg-zinc-800", text: "text-zinc-700 dark:text-zinc-200" },
  user: { name: "User", bg: "bg-zinc-100 dark:bg-zinc-800", text: "text-zinc-700 dark:text-zinc-200" },
  coords: { name: "MapPin", bg: "bg-zinc-100 dark:bg-zinc-800", text: "text-zinc-700 dark:text-zinc-200" },
  date: { name: "Calendar", bg: "bg-zinc-100 dark:bg-zinc-800", text: "text-zinc-700 dark:text-zinc-200" },
  formName: { name: "Document", bg: "bg-zinc-100 dark:bg-zinc-800", text: "text-zinc-700 dark:text-zinc-200" },

  // custom
  custom: { name: "Star", bg: "bg-zinc-100 dark:bg-zinc-800", text: "text-zinc-700 dark:text-zinc-200" },
} as const;

type OptionIconProps = {
  type: IconType;
  applyBgColour?: boolean;
  className?: string;
};
export const OptionIcon = ({ type, applyBgColour = true, className }: OptionIconProps): JSX.Element => {
  const icon = iconMap[type];
  const classes = clsx(
    "flex size-5 items-center justify-center rounded-sm p-[3px]",
    applyBgColour && icon.bg,
    icon.text,
    className
  );

  return (
    <div className={classes}>
      <Icon name={icon.name} className="size-3.5 stroke-2" />
    </div>
  );
};
