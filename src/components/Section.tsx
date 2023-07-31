import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { Title } from "./Title";

export interface SectionProps {
  id: string;
  size?: "lg" | "md" | "sm";
  title?: { text: string; center?: boolean };
  altBackground?: boolean;
  className?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  id,
  size = "md",
  title,
  altBackground,
  className,
  children,
}) => {
  const classes = clsx("mx-auto space-y-4", {
    "px-8 max-w-screen-xl": size === "lg",
    "px-6 max-w-screen-lg": size === "md",
    "px-5 max-w-screen-sm": size === "sm",
  });

  return (
    <section
      id={id}
      className={`${
        altBackground ? "bg-gray-100/50 py-20 dark:bg-black/20" : "bg-white dark:bg-zinc-900"
      } transition-colors`}
    >
      <div className={classes}>
        {title && (
          <Title as="h2" className={`${title.center ? "text-center" : ""}`}>
            {title.text}
          </Title>
        )}
        <div className={clsx(`flex flex-col gap-y-4`, className)}>{children}</div>
      </div>
    </section>
  );
};
