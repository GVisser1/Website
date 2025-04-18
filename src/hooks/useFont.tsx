import { useLocalStorage } from "usehooks-ts";

export type Font = keyof typeof FONTS;
export const FONTS = {
  Inter: { label: "Inter", class: "font-inter" },
  Mono: { label: "Mono", class: "font-mono" },
  Sans: { label: "Sans", class: "font-sans" },
  Serif: { label: "Serif", class: "font-serif" },
  "Comic Sans": { label: "Comic Sans", class: "font-comic-sans" },
} as const;

type UseFontSwitcherResult = {
  font: Font;
  handleFontChange: (newFont: Font) => void;
  getFontClass: () => string;
};

export const useFont = (): UseFontSwitcherResult => {
  const [font, setFont] = useLocalStorage<Font>("font", "Inter");

  const handleFontChange = (newFont: Font): void => {
    setFont(newFont);
  };

  const getFontClass = (): string => FONTS[font]?.class ?? FONTS.Inter.class;

  return { font, handleFontChange, getFontClass };
};
