import { useTheme } from "next-themes";
import type { JSX } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import IconButton from "./button/iconButton";
import type { IconName } from "./icon";

type Theme = "light" | "dark" | "system";

const THEMES: Record<Theme, { label: string; icon: IconName; next: Theme }> = {
  light: { label: "Light", icon: "Sun", next: "dark" },
  dark: { label: "Dark", icon: "Moon", next: "system" },
  system: { label: "System", icon: "Computer", next: "light" },
};

const isTheme = (value: string | undefined): value is Theme => value !== undefined && value in THEMES;

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  // The saved theme is only known in the browser; match the prerendered "System" until then so hydration lines up
  const isClient = useIsClient();
  const current = isClient && isTheme(theme) ? THEMES[theme] : THEMES.system;
  const next = THEMES[current.next];
  const label = `Theme: ${current.label}. Switch to ${next.label.toLowerCase()}`;

  return (
    <IconButton
      type="button"
      variant="tertiary"
      ariaLabel={label}
      icon={current.icon}
      tooltip={{ title: label, position: "bottom" }}
      onClick={() => setTheme(current.next)}
    />
  );
};

export default ThemeToggle;
