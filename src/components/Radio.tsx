import classNames from "classnames";
import { ChangeEvent } from "react";
import Text from "./Text";

interface RadioOption {
  value: string;
  label: string;
}

export interface RadioProps {
  options: RadioOption[];
  onChange: (e: ChangeEvent<any>) => void;
  value: string;
}

export const Radio: React.FC<RadioProps> = ({ onChange, options = [], value = "" }) => {
  const isSelected = (option: RadioOption) => value === option.value;

  const getLabelClasses = (option: RadioOption) =>
    classNames({
      "my-1 flex justify-between cursor-pointer items-center rounded-lg border-1.5 p-4 text-sm transition-300":
        true,
      "pointer:focus-within:ring-1 pointer:focus-within:ring-blue-300 pointer:focus-within:border-blue-300 dark:pointer:focus-within:border-blue-300":
        true,
      "border-gray-200 dark:bg-gray-500/20 active:bg-gray-100 dark:active:bg-gray-700/40 hover:ring-0.5 hover:ring-gray-200":
        !isSelected(option),
      "border-blue-300 dark:border-gray-200 bg-blue-50 dark:bg-gray-700 hover:ring-0.5 hover:ring-blue-300 dark:hover:ring-gray-300":
        isSelected(option),
    });

  const getRadioClasses = (option: RadioOption) =>
    classNames({
      "mr-4 h-4 w-4 shrink-0 rounded-full border-1.5 transition-300": true,
      "dark:border-white dark:bg-white border-blue-400 bg-blue-400 ring-1.5 ring-inset dark:ring-slate-700 ring-white":
        isSelected(option),
      "border-gray-300 dark:border-white": !isSelected(option),
    });

  return (
    <div>
      {options.map((option) => (
        <label key={option.value} className={getLabelClasses(option)}>
          <Text>{option.label}</Text>
          <input
            className="h-0 w-0 appearance-none"
            type="radio"
            value={option.value}
            onChange={onChange}
            checked={isSelected(option)}
          />
          <span className={getRadioClasses(option)} />
        </label>
      ))}
    </div>
  );
};
