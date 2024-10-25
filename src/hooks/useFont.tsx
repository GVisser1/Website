import type { Font } from "../types";
import { useLocalStorage } from "usehooks-ts";

type UseFontSwitcherResult = {
  font: Font;
  handleFontChange: (newFont: Font) => void;
};

export const useFont = (): UseFontSwitcherResult => {
  const [font, setFont] = useLocalStorage<Font>("font", "inter");

  const handleFontChange = (newFont: Font): void => {
    setFont(newFont);
  };

  return { font, handleFontChange };
};
