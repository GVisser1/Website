"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps): JSX.Element => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);
