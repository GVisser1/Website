"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useTheme } from "next-themes";

const ThemeSwitcher = (): JSX.Element => {
  const { setTheme } = useTheme();

  const handleOnChange = (value: string): void => setTheme(value);

  return (
    <Select onValueChange={handleOnChange}>
      <SelectTrigger aria-label="Select theme">
        <SelectValue placeholder="System" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;
