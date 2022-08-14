import classNames from "classnames";
import { Fragment } from "react";
import { Color } from "../types/Color";
import { getCardTheme, getTimelineIconTheme } from "../utils/colorUtils";
import { isEven } from "../utils/numberUtil";
import { Card } from "./Card";
import { Icon, IconType } from "./Icon";
import Text from "./Text";

export interface TimelineItem {
  title: string;
  timeFrame: string;
  subTitle?: string | HTMLAnchorElement;
  description?: string;
  color?: Color;
  labels?: string[];
}

interface TimelineProps {
  className?: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  const timeLineCard = (item: TimelineItem) => (
    <Card
      title={item.title}
      header={
        <div className={classNames("p-2", getCardTheme(item.color ?? "BLUE"))}>
          <p className="text-xs line-clamp-1">{item.timeFrame}</p>
        </div>
      }
      labels={item.labels}
      labelColors={[item.color ?? "BLUE"]}
      color={item.color}
    >
      {item.subTitle && (
        <Text className="line-clamp-1" color="medium">
          {item.subTitle}
        </Text>
      )}
      {item.description && (
        <Text className="line-clamp-3" color="medium">
          {item.description}
        </Text>
      )}
    </Card>
  );

  return (
    <div className={classNames("grid w-full grid-cols-4 sm:grid-cols-5", className)}>
      {items.map((item, i) => (
        <Fragment key={i}>
          <div className="col-span-2 mb-12">{isEven(i) && timeLineCard(item)}</div>
          <div className="relative col-span-1 mx-auto hidden w-full justify-center pt-3 sm:flex">
            <div
              className={classNames(
                "absolute z-10 mt-1 h-10 w-10 rounded-full ring-4 ring-current",
                getTimelineIconTheme(item.color ?? "BLUE")
              )}
            >
              <Icon overrideSize className="mx-auto" name={IconType.CHEVRON_UP} />
            </div>
            <div className="absolute flex h-full w-0.5 bg-gray-200 transition dark:bg-gray-700" />
          </div>

          <div className="col-span-2 mb-12">{!isEven(i) && timeLineCard(item)}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default Timeline;
