import type { Font } from "../types";
import { useLocalStorage } from "usehooks-ts";

type UseFontSwitcherResult = {
  font: Font;
  handleFontChange: (newFont: Font) => void;
  getFontClass: () => string;
};

export const useFont = (): UseFontSwitcherResult => {
  const [font, setFont] = useLocalStorage<Font>("font", "inter");

  const handleFontChange = (newFont: Font): void => {
    setFont(newFont);
  };

  const getFontClass = (): string => {
    switch (font) {
      case "mono":
        return "font-mono";
      case "sans":
        return "font-sans";
      case "serif":
        return "font-serif";
      default:
        return "font-inter";
    }
  };

  return { font, handleFontChange, getFontClass };
};
