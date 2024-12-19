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
    <h2 className="w-72 text-lg font-semibold text-zinc-700 dark:text-zinc-200">{title}</h2>
    <p className="w-72 text-zinc-500 dark:text-zinc-400">{description}</p>
  </div>
);
