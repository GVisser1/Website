import clsx from "clsx";
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
    src: string;
    alt: string;
    align: "left" | "right";
    priority?: boolean;
  };
};

export const BlogSection = (props: BlogSectionProps): JSX.Element => {
  const classes = clsx(
    "grid grid-cols-4 items-center gap-x-10 gap-y-5",
    "my-10",
    props.image?.align === "left" ? "tablet:flex-row-reverse tablet:space-x-reverse" : "tablet:flex-row",
  );

  return (
    <section id={props.id} className={classes}>
      <div
        className={clsx(
          "flex w-full flex-col gap-y-1",
          props.image ? "col-span-full tablet:col-span-2" : "col-span-full",
        )}
      >
        {props.children}
      </div>
      {props.image && (
        <Image
          src={props.image.src}
          alt={props.image.alt}
          priority={props.image.priority}
          className="col-span-full h-85 w-full rounded-lg object-cover tablet:col-span-2"
        />
      )}
    </section>
  );
};

type BlogHeaderProps = {
  children: ReactNode;
};
export const BlogHeader = (props: BlogHeaderProps): JSX.Element => (
  <h2 className="text-header-xl text-primary">{props.children}</h2>
);

type BlogParagraphProps = {
  children: ReactNode;
};
export const BlogParagraph = (props: BlogParagraphProps): JSX.Element => (
  <p className="w-full text-base-regular text-secondary not-last:mb-1">{props.children}</p>
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
