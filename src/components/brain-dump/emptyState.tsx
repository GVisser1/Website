import type { JSX } from "react";
type EmptyStateProps = {
  title: string;
  description: string;
  cta?: {
    label: string;
    onClick: () => void;
  };
};

export const EmptyState = ({ title, description }: EmptyStateProps): JSX.Element => (
  <div
    role="option"
    aria-disabled
    className="flex w-full flex-col items-center justify-center gap-y-1 py-6 text-center"
  >
    <h2 className="w-72 text-lg font-semibold text-primary dark:text-primary-dark">{title}</h2>
    <p className="w-72 text-secondary dark:text-secondary-dark">{description}</p>
  </div>
);
