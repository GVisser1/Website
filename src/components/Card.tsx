import classNames from "classnames";
import { FC, PropsWithChildren, ReactElement } from "react";
import { Color } from "../types/Color";
import { Colors } from "../utils/colorUtils";
import { Badge } from "./Badge";
import { Title } from "./Title";

export interface CardProps {
  title?: string;
  labels?: string[];
  labelColors?: Color[];
  shadow?: boolean;
  className?: string;
  image?: ReactElement;
  button?: ReactElement;
  header?: ReactElement;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  title,
  header,
  labels,
  labelColors,
  shadow = true,
  image,
  button,
  className,
  children,
}) => {
  const classes = classNames(
    "w-full transition overflow-hidden rounded-xl border border-slate-400 bg-white dark:border-slate-500 dark:bg-slate-800",
    header && "text-center",
    shadow && "shadow-lg shadow-slate-300 dark:shadow-slate-900",
    className
  );

  return (
    <div className={classes}>
      {header}
      {image}
      <div className="px-3 py-3">
        <Title as="h3" className="line-clamp-1">
          {title}
        </Title>
        {children}
        {labels && (
          <div
            className={classNames(
              "mt-3 flex flex-wrap gap-x-1.5 text-center",
              header && "justify-center"
            )}
          >
            {labels.map((label, i) => (
              <Badge key={label} color={labelColors ? labelColors[i] : Colors[i]}>
                {label}
              </Badge>
            ))}
          </div>
        )}
        {button}
      </div>
    </div>
  );
};
