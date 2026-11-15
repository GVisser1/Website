import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { useTheme } from "next-themes";
import type { JSX } from "react";
import type { IconName } from "./icon";
import Icon from "./icon";

type Theme = "light" | "dark" | "system";

const OPTIONS: { value: Theme; label: string; icon: IconName }[] = [
  { value: "light", label: "Light", icon: "Sun" },
  { value: "dark", label: "Dark", icon: "Moon" },
  { value: "system", label: "System", icon: "Computer" },
];

const ThemeSwitcher = (): JSX.Element => {
  const { theme = "system", setTheme } = useTheme();

  return (
    <RadioGroup
      aria-label="Theme"
      value={theme}
      onValueChange={(value) => setTheme(value as Theme)}
      className="grid grid-cols-3 gap-2"
    >
      {OPTIONS.map((option) => (
        <Radio.Root
          key={option.value}
          value={option.value}
          className="flex h-16 flex-col items-center justify-center gap-y-1.5 rounded-sm border border-primary text-sm-semibold text-secondary select-none hover:bg-btn-tertiary-hover hover:text-primary focus-visible:focus-ring data-checked:border-btn-tertiary-active data-checked:bg-btn-tertiary-active data-checked:text-btn-tertiary-active"
        >
          <Icon name={option.icon} className="size-5" />
          {option.label}
        </Radio.Root>
      ))}
    </RadioGroup>
  );
};

export default ThemeSwitcher;
