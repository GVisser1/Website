import clsx from "clsx";
import type { StaticImageData } from "next/image";
import type { JSX, ReactNode } from "react";
import Divider from "./divider";
import Image from "./image";

type BlogContentProps = {
  children: ReactNode;
};
export const BlogContent = (props: BlogContentProps): JSX.Element => (
  <div className="flex flex-col gap-y-16">{props.children}</div>
);

type BlogSectionProps = {
  id: string;
  children: ReactNode;
  image?: {
    src: string | StaticImageData;
    alt: string;
    align: "left" | "right";
    priority?: boolean;
  };
};
export const BlogSection = (props: BlogSectionProps): JSX.Element => {
  const classes = clsx(
    "flex flex-col items-center gap-x-10 gap-y-3",
    props.image?.align === "left" ? "lg:flex-row-reverse lg:space-x-reverse" : "lg:flex-row",
  );
  return (
    <section id={props.id} className={classes}>
      <div className="flex w-full flex-col gap-y-1">{props.children}</div>
      {props.image && (
        <figure className="relative flex w-full flex-col gap-y-1">
          <Image
            src={props.image.src}
            alt={props.image.alt}
            priority={props.image.priority}
            className="h-80 w-full rounded-lg object-cover"
          />
          {props.image.alt && (
            <figcaption className="absolute -bottom-7 w-full text-center text-base-regular text-secondary dark:text-secondary-dark">
              {props.image.alt}
            </figcaption>
          )}
        </figure>
      )}
    </section>
  );
};

type BlogHeaderProps = {
  children: ReactNode;
};
export const BlogHeader = (props: BlogHeaderProps): JSX.Element => (
  <h2 className="text-header-xl">{props.children}</h2>
);

type BlogParagraphProps = {
  children: ReactNode;
};
export const BlogParagraph = (props: BlogParagraphProps): JSX.Element => (
  <p className="w-full text-base-regular text-secondary not-last:mb-1 dark:text-secondary-dark">
    {props.children}
  </p>
);

type BlogListProps = {
  children: ReactNode;
};
export const BlogList = (props: BlogListProps): JSX.Element => (
  <ul className="flex list-inside list-disc flex-col gap-y-2 text-base-regular text-primary dark:text-primary-dark">
    {props.children}
  </ul>
);

type BlogFooterProps = {
  id: string;
  children: ReactNode;
};
export const BlogFooter = (props: BlogFooterProps): JSX.Element => (
  <footer id={props.id}>
    <Divider className="my-12" />
    {props.children}
  </footer>
);
