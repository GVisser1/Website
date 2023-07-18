import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Title } from "./Title";

export interface SectionProps {
  id: string;
  size?: "lg" | "md" | "sm";
  title?: string;
  className?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  id,
  size,
  title,
  className,
  children,
}) => {
  const classes = classNames(
    "gap-y-12 flex-1 flex flex-col mx-auto",
    {
      "px-8 max-w-screen-xl": size === "lg",
      "px-6 max-w-screen-lg": size === "md",
      "px-5 max-w-screen-sm": size === "sm",
    },
    className,
  );

  return (
    <section id={id} className={classes}>
      {title && (
        <Title as="h2" className="text-center underline decoration-blue-400 underline-offset-4">
          {title}
        </Title>
      )}
      {children}
    </section>
  );
};
