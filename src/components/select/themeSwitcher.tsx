"use client";

import Icon from "@/components/icon";
import { useTheme } from "next-themes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const ThemeSwitcher = (): JSX.Element | null => {
  const { theme, setTheme } = useTheme();

  const handleOnChange = (value: string): void => setTheme(value);

  return (
    <Select aria-label="Theme" name="theme" value={theme} onValueChange={handleOnChange}>
      <SelectTrigger aria-label="Select theme">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <Icon className="size-4" overrideSize name="Sun" />
          Light
        </SelectItem>
        <SelectItem value="dark">
          <Icon className="size-4" overrideSize name="Moon" />
          Dark
        </SelectItem>
        <SelectItem value="system">
          <Icon className="size-4" overrideSize name="Computer" />
          System
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;
