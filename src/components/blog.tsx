import type { JSX, ReactNode } from "react";

type BlogContentProps = {
  children: ReactNode;
};
export const BlogContent = ({ children }: BlogContentProps): JSX.Element => (
  <div className="flex flex-col gap-y-10">{children}</div>
);

type BlogSectionProps = {
  id: string;
  children: ReactNode;
};
export const BlogSection = ({ id, children }: BlogSectionProps): JSX.Element => (
  <section id={id} className="flex flex-col gap-y-3">
    {children}
  </section>
);

type BlogHeaderProps = {
  children: ReactNode;
};
export const BlogHeader = ({ children }: BlogHeaderProps): JSX.Element => (
  <h2 className="text-header-xl">{children}</h2>
);

type BlogParagraphProps = {
  children: ReactNode;
};
export const BlogParagraph = ({ children }: BlogParagraphProps): JSX.Element => (
  <p className="text-base-regular text-primary dark:text-primary-dark">{children}</p>
);

type BlogListProps = {
  items: ReactNode[];
};
export const BlogList = ({ items }: BlogListProps): JSX.Element => (
  <ul className="flex list-inside list-disc flex-col gap-y-2 text-base-regular text-primary dark:text-primary-dark">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
