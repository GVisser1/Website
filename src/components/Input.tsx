import classNames from "classnames";
import { ChangeEvent, FocusEvent } from "react";
import Text from "./Text";

export type InputType = "input" | "textarea";

interface InputProps {
  className?: string;
  type?: InputType;
  name?: string;
  label?: string;
  value?: string;
  required?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<any>) => void;
  onBlur?: (e: FocusEvent<any>) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  type = "input",
  name = "",
  label = "",
  value = "",
  required = false,
  errorMessage = "",
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
}) => {
  const Tag = type;
  const inputClasses = classNames({
    "w-full p-3.5 border-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none rounded-md":
      true,
    "h-28 max-h-48": type === "textarea",
    "bg-gray-100": disabled,
  });
  return (
    <div className={className}>
      <div className="flex">
        <Text size="lg">{label}</Text>
        {required && (
          <Text size="lg" color="danger">
            {"*"}
          </Text>
        )}
      </div>
      <div>
        <Tag
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClasses}
          disabled={disabled}
        />
      </div>
      {errorMessage && <Text color="danger">{errorMessage}</Text>}
    </div>
  );
};
export default Input;
