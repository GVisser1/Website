"use client";

import { useFont } from "../../hooks/useFont";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const FontSwitcher = (): JSX.Element | null => {
  const { font, handleFontChange } = useFont();

  return (
    <Select aria-label="Font" name="font" value={font} onValueChange={handleFontChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="inter">
          <div className="font-inter">Inter</div>
        </SelectItem>
        <SelectItem value="mono">
          <div className="font-mono">Mono</div>
        </SelectItem>
        <SelectItem value="sans">
          <div className="font-sans">Sans</div>
        </SelectItem>
        <SelectItem value="serif">
          <div className="font-serif">Serif</div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FontSwitcher;
