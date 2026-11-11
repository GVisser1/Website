import { isNil } from "lodash-es";
import type { JSX } from "react";
import { FONTS, useFont } from "../../hooks/useFont";
import Select from "./select";

const ITEMS = Object.values(FONTS).map(({ label, class: fontClass }) => ({
  value: label,
  label: <span className={fontClass}>{label}</span>,
}));

const FontSwitcher = (): JSX.Element => {
  const { font, handleFontChange } = useFont();

  return (
    <Select
      ariaLabel="Select a font"
      value={font}
      onValueChange={(value) => {
        if (!isNil(value)) {
          handleFontChange(value);
        }
      }}
      items={ITEMS}
    />
  );
};

export default FontSwitcher;
