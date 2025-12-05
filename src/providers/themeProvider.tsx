"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type JSX, useEffect, useState } from "react";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
