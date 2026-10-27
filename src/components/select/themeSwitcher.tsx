import { isNil } from "lodash-es";
import { useTheme } from "next-themes";
import type { JSX } from "react";
import type { IconName } from "../icon";
import Icon from "../icon";
import Select from "./select";

const themeItem = (value: string, label: string, icon: IconName): { value: string; label: JSX.Element } => ({
  value,
  label: (
    <>
      <Icon name={icon} className="size-4" />
      {label}
    </>
  ),
});

const ITEMS = [
  themeItem("light", "Light", "Sun"),
  themeItem("dark", "Dark", "Moon"),
  themeItem("system", "System", "Computer"),
];

const ThemeSwitcher = (): JSX.Element => {
  const { theme = "system", setTheme } = useTheme();

  return (
    <Select
      ariaLabel="Select theme"
      value={theme}
      onValueChange={(value) => {
        if (!isNil(value)) {
          setTheme(value);
        }
      }}
      items={ITEMS}
    />
  );
};

export default ThemeSwitcher;
