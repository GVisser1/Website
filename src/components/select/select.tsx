import { Select as BaseSelect } from "@base-ui/react/select";
import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import { useFont } from "../../hooks/useFont";
import Icon from "../icon";

export type SelectOption<T> = { value: T; label: ReactNode };

type SelectProps<T extends string> = {
  ariaLabel: string;
  value: T;
  onValueChange: (value: T | null) => void;
  items: SelectOption<T>[];
};

const Select = <T extends string>({ ariaLabel, value, onValueChange, items }: SelectProps<T>): JSX.Element => {
  const { getFontClass } = useFont();

  return (
    <BaseSelect.Root modal={false} value={value} items={items} onValueChange={onValueChange}>
      <BaseSelect.Trigger
        aria-label={ariaLabel}
        className="flex h-10 w-full items-center justify-between gap-x-2 rounded-sm border btn-tertiary px-3 py-2 text-button select-none focus-visible:focus-ring"
      >
        <BaseSelect.Value className="flex items-center gap-x-1" />
        <Icon name="ChevronDown" className="size-5 text-secondary" />
      </BaseSelect.Trigger>

      <BaseSelect.Portal>
        <BaseSelect.Positioner className="z-50 outline-hidden" align="end" sideOffset={4} alignItemWithTrigger={false}>
          <BaseSelect.Popup
            className={clsx(
              "max-h-60 w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-y-auto rounded-md border border-primary bg-default p-1 text-primary shadow-md transition-opacity duration-150",
              "data-ending-style:opacity-0 data-starting-style:opacity-0",
              getFontClass(),
            )}
          >
            {items.map((item) => (
              <BaseSelect.Item
                key={item.value}
                value={item.value}
                className="relative flex h-10 w-full items-center gap-x-1 rounded-sm btn-tertiary py-1.5 pr-8 pl-2 text-button outline-hidden select-none data-highlighted:bg-btn-tertiary-hover"
              >
                <BaseSelect.ItemText className="flex items-center gap-x-2">{item.label}</BaseSelect.ItemText>
                <BaseSelect.ItemIndicator className="absolute right-2">
                  <Icon name="Check" className="size-4" />
                </BaseSelect.ItemIndicator>
              </BaseSelect.Item>
            ))}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
};

export default Select;
