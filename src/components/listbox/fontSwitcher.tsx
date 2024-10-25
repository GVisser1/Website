"use client";

import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox/listbox";
import { useFont } from "../../hooks/useFont";

const FontSwitcher = (): JSX.Element | null => {
  const { font, handleFontChange } = useFont();

  return (
    <Listbox aria-label="Font" name="font" value={font} onChange={handleFontChange}>
      <ListboxOption value="inter">
        <ListboxLabel className="font-inter">Inter</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="mono">
        <ListboxLabel className="font-mono">Mono</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="sans">
        <ListboxLabel className="font-sans">Sans</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="serif">
        <ListboxLabel className="font-serif">Serif</ListboxLabel>
      </ListboxOption>
    </Listbox>
  );
};

export default FontSwitcher;
