import classNames from "classnames";
import React, { ReactElement } from "react";
import { Badge } from "./Badge";
import Text from "./Text";
import { Title } from "./Title";

export interface CardProps {
  title: string;
  subTitle?: string;
  description?: string;
  headerText?: string;
  labels?: string[];
  color?: string;
  href?: string;
  src?: string;
  imgClassName?: string;
  hover?: boolean;
  imgIcon?: ReactElement;
  button?: ReactElement;
  className?: string;
}

const labelColors: string[] = ["blue", "green", "red", "yellow", "gray", "pink"];

export const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  description,
  headerText,
  labels,
  color,
  href,
  src,
  hover = true,
  imgIcon,
  imgClassName,
  button,
  className,
}) => {
  const classes = classNames(
    {
      "w-full rounded-xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800":
        true,
      "transition duration-300 ease-in-out": true,
      "text-center": headerText,
      "pointer:hover:scale-105": hover,
    },
    className
  );

  const classes2 = classNames({
    "bg-blue-100 text-blue-800 dark:bg-blue-200 bg-clip-padding z-20": color === "blue",
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-200 dark:text-emerald-900": color === "green",
    "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900": color === "red",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900": color === "yellow",
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300": color === "gray",
    "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900": color === "pink",
  });

  return (
    <div className={classes}>
      {src && (
        <a className="relative" href={href}>
          <div
            className={classNames(
              "group absolute inset-0 rounded-t-xl transition duration-300 ease-in-out hover:flex",
              imgIcon && "hover:bg-black/40"
            )}
          >
            {imgIcon}
          </div>

          <img className={classNames("rounded-t-xl", imgClassName)} src={src} />
        </a>
      )}

      {headerText && (
        <div className={classNames("rounded-t-xl p-1", classes2)}>
          <p className="text-xs line-clamp-1">{headerText}</p>
        </div>
      )}
      <div className="px-3 py-3">
        <Title as="h4" className="line-clamp-1">
          {title}
        </Title>
        {subTitle && (
          <Text className="line-clamp-1" color="light">
            {subTitle}
          </Text>
        )}
        {description && (
          <Text className="line-clamp-3" color="light">
            {description}
          </Text>
        )}
        {labels && (
          <div
            className={classNames(
              "mt-3 flex flex-wrap gap-1 text-center",
              headerText && "justify-center"
            )}
          >
            {labels.map((label, i) => (
              <Badge key={i} color={color ?? labelColors[i]}>
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
