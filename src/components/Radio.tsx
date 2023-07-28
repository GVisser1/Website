import clsx from "clsx";
import { ChangeEvent, FC, Fragment } from "react";
import { Text } from "./Text";

interface RadioOption {
  value: string;
  label: string;
}

export interface RadioProps {
  options: RadioOption[];
  onChange: (e: ChangeEvent<any>) => void;
  value: string;
  label: string;
}

export const Radio: FC<RadioProps> = ({ onChange, options = [], value = "", label }) => {
  const isSelected = (option: RadioOption) => value === option.value;

  const getLabelClasses = (option: RadioOption) =>
    clsx(
      "my-1 flex h-12 justify-between cursor-pointer items-center rounded-lg border-1.5 p-4 text-sm transition",
      isSelected(option)
        ? {
            "border-blue-300 dark:border-gray-200 bg-blue-50 dark:bg-gray-700 pointer:hover:ring-0.5 hover:ring-blue-300 dark:hover:ring-gray-300":
              true,
            "peer-focus-visible:ring-1 peer-focus-visible:ring-blue-300 peer-focus-visible:border-blue-300 dark:peer-focus-visible:border-blue-300":
              true,
          }
        : "border-gray-200 dark:bg-gray-500/20 active:bg-gray-100 dark:active:bg-gray-700/40 pointer:hover:ring-0.5 hover:ring-gray-200",
    );

  const getRadioClasses = (option: RadioOption) =>
    clsx(
      "mr-4 h-4 w-4 shrink-0 rounded-full border-1.5 transition",
      isSelected(option)
        ? "dark:border-white dark:bg-white border-blue-400 bg-blue-400 ring-1.5 ring-inset dark:ring-slate-700 ring-white"
        : "border-gray-300 dark:border-white",
    );

  return (
    <fieldset>
      <legend>
        <Text weight="semibold">{label}</Text>
      </legend>
      <div className="flex flex-col">
        {options.map((option) => (
          <Fragment key={option.value}>
            <input
              aria-label={option.label}
              id={option.value}
              className="peer h-0 w-0 appearance-none"
              type="radio"
              name={label}
              value={option.value}
              onChange={onChange}
              checked={isSelected(option)}
            />
            <label key={option.value} htmlFor={option.value} className={getLabelClasses(option)}>
              <Text>{option.label}</Text>
              <span className={getRadioClasses(option)} />
            </label>
          </Fragment>
        ))}
      </div>
    </fieldset>
  );
};
