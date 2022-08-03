import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "./Icon";
import Text from "./Text";
import { Title } from "./Title";

export interface TimelineItem {
  title: string;
  titleIcon?: IconType;
  timeFrame: string;
  subTitle?: string;
  description?: string;
  img?: React.ReactElement;
  href?: string;
}

interface TimelineProps {
  className?: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  const { t } = useTranslation();

  return (
    <ol
      className={classNames(
        "relative space-y-6 border-l border-gray-200 py-2 dark:border-gray-700",
        className
      )}
    >
      {items.map((item) => (
        <li key={item.title} className="ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-300" />
          {item.img}
          <Text color="light">{item.timeFrame}</Text>
          <Title as="h3" size="lg" icon={item.titleIcon} iconPosition={"right"}>
            {item.title}
          </Title>
          {item.subTitle && <Text color="light">{item.subTitle}</Text>}
          {item.description && <Text color="light">{item.description}</Text>}
          {item.href && <Text href={item.href}>{t("VISIT_WEBSITE")}</Text>}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
