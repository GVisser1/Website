import { useTheme } from "next-themes";
import type { JSX } from "react";
import Icon from "../icon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const ThemeSwitcher = (): JSX.Element | null => {
  const { theme, setTheme } = useTheme();

  const handleOnChange = (value: string): void => setTheme(value);

  return (
    <Select
      aria-label="Theme"
      defaultValue="system"
      name="theme"
      value={theme}
      onValueChange={handleOnChange}
    >
      <SelectTrigger aria-label="Select theme">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <Icon name="Sun" className="size-4" />
          Light
        </SelectItem>
        <SelectItem value="dark">
          <Icon name="Moon" className="size-4" />
          Dark
        </SelectItem>
        <SelectItem value="system">
          <Icon name="Computer" className="size-4" />
          System
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;
