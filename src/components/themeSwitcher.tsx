"use client";

import Icon from "@/components/icon";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";
import { useTheme } from "next-themes";

const ThemeSwitcher = (): JSX.Element | null => {
  const { theme, setTheme } = useTheme();

  const handleOnChange = (value: string): void => setTheme(value);

  return (
    <Listbox aria-label="Theme" name="theme" defaultValue={theme} onChange={handleOnChange}>
      <ListboxOption value="light">
        <Icon className="size-4" overrideSize name="SunIcon" />
        <ListboxLabel>Light</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="dark">
        <Icon className="size-4" overrideSize name="MoonIcon" />
        <ListboxLabel>Dark</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="system">
        <Icon className="size-4" overrideSize name="ComputerIcon" />
        <ListboxLabel>System</ListboxLabel>
      </ListboxOption>
    </Listbox>
  );
};

export default ThemeSwitcher;
