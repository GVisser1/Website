import type { ReactNode, JSX } from "react";

type OptionGroupProps = {
  title: string;
  showTitle?: boolean;
  children: ReactNode;
};

const OptionGroup = ({ title, showTitle = true, children }: OptionGroupProps): JSX.Element => (
  <div role="group" aria-label={title}>
    {showTitle && (
      <div className="mt-1 w-[392px] pl-3">
        <p className="sticky top-0 text-sm-semibold text-secondary dark:text-secondary-dark">{title}</p>
      </div>
    )}
    {children}
  </div>
);

export default OptionGroup;
