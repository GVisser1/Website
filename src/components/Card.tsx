import classNames from "classnames";
import React, { ReactElement } from "react";
import { Badge, LabelColor } from "./Badge";
import Text from "./Text";
import { Title } from "./Title";

export interface CardProps {
  title: string;
  subTitle?: string;
  description?: string;
  labels?: string[];
  href?: string;
  src?: string;
  imgClassName?: string;
  imgIcon?: ReactElement;
  button?: ReactElement;
}

const labelColors: LabelColor[] = ["blue", "green", "red", "yellow", "dark", "pink"];

export const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  description,
  labels,
  href,
  src,
  imgIcon,
  imgClassName,
  button,
}) => {
  const classes = (hover: boolean) =>
    classNames({
      "w-full rounded-xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800":
        true,
      "pointer:hover:scale-105 transition duration-300 ease-in-out": hover,
    });

  return (
    <div className={classes(href ? true : false)}>
      {src && (
        <a className="relative" href={href}>
          {href && (
            <div className="group absolute inset-0 rounded-t-xl transition duration-300 ease-in-out hover:flex hover:bg-black/40">
              {imgIcon}
            </div>
          )}
          <img className={classNames("rounded-t-xl", imgClassName)} src={src} />
        </a>
      )}

      <div className="border-t-2 border-gray-200 px-3 pt-5 pb-3 dark:border-gray-600">
        <Title as="h5" size={description ? "lg" : "md"} className="line-clamp-1">
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
          <div className="mt-3 flex flex-wrap gap-1 text-center">
            {labels.map((label, j) => (
              <Badge key={j} color={labelColors[j] ?? labelColors[0]}>
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
