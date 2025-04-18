"use client";;
import Icon from "@/components/icon";
import { useTheme } from "next-themes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

import type { JSX } from "react";

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
          <Icon name="Sun" size="sm" />
          Light
        </SelectItem>
        <SelectItem value="dark">
          <Icon name="Moon" size="sm" />
          Dark
        </SelectItem>
        <SelectItem value="system">
          <Icon name="Computer" size="sm" />
          System
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;
