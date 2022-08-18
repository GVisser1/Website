import classNames from "classnames";
import React, { ReactElement } from "react";
import { Color } from "../types/Color";
import { Colors } from "../utils/colorUtils";
import { Badge } from "./Badge";
import { Title } from "./Title";

export interface CardProps {
  title?: string;
  labels?: string[];
  labelColors?: Color[];
  color?: Color;
  hover?: boolean;
  className?: string;
  image?: ReactElement;
  button?: ReactElement;
  header?: ReactElement;
}

export const Card: React.FC<CardProps> = ({
  title,
  header,
  labels,
  labelColors,
  hover = true,
  image,
  button,
  className,
  ...props
}) => {
  const classes = classNames(
    {
      "w-full transition-300 overflow-hidden rounded-xl border border-slate-400 bg-white dark:border-slate-500 dark:bg-slate-800":
        true,
      "text-center": header,
      "shadow-slate-300 dark:shadow-slate-900 hover:shadow-lg": hover,
    },
    className
  );

  return (
    <div className={classes}>
      {header}
      {image}
      <div
        className={classNames(
          "px-3 py-3 ",
          header && "transition-300 border-t-2 border-slate-100 dark:border-slate-700"
        )}
      >
        <Title as="h4" className="line-clamp-1">
          {title}
        </Title>
        {props.children}
        {labels && (
          <div
            className={classNames(
              "mt-3 flex flex-wrap gap-0.5 text-center",
              header && "justify-center"
            )}
          >
            {labels.map((label, i) => (
              <Badge key={i} color={labelColors ? labelColors[i] : Colors[i]}>
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
