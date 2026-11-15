import { useTheme } from "next-themes";
import { useEffect } from "react";
import { THEME_COLORS } from "@/constants";

// index.html picks the browser bar colour from the system setting; this keeps it in line when the theme is chosen on
// the site instead
export const useThemeColor = (): void => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") {
      return;
    }
    for (const meta of document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')) {
      meta.content = THEME_COLORS[resolvedTheme];
    }
  }, [resolvedTheme]);
};
