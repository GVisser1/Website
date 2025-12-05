"use client";

import type { JSX } from "react";
import { FONTS, useFont } from "../../hooks/useFont";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const FontSwitcher = (): JSX.Element | null => {
  const { font, handleFontChange } = useFont();

  return (
    <Select aria-label="Font" name="font" value={font} onValueChange={handleFontChange}>
      <SelectTrigger aria-label="Select font">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.values(FONTS).map((font) => (
          <SelectItem key={font.label} value={font.label}>
            <div className={font.class}>{font.label}</div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FontSwitcher;
