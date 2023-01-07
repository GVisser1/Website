import classNames from "classnames";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import TimeLineData, { TimelineItem } from "../data/TimelineData";
import { Color } from "../types/Color";
import { Themes } from "../types/Themes";
import { isEven } from "../utils/numberUtil";
import { Card } from "./Card";
import { Icon } from "./Icon";
import { Title } from "./Title";

export const Timeline = () => {
  const { t } = useTranslation();
  const { getTimeLineItems } = TimeLineData();

  const timeLineCard = (item: TimelineItem) => (
    <Card
      className="w-full"
      theme={item.theme}
      title={item.title}
      subTitle={item.subTitle}
      description={item.description}
      href={item.href}
      banner={item.timeFrame}
      status={item.status}
    />
  );

  const pointer = (theme: Color = "BLUE") => {
    const Theme = Themes[theme];
    return (
      <div
        className={classNames(
          "z-10 mt-1 h-10 w-10 rounded-full ring-4",
          Theme.bgColor,
          Theme.ringColor,
          Theme.textColor
        )}
      >
        <Icon overrideSize className="mx-auto" name="ChevronUpIcon" />
      </div>
    );
  };

  return (
    <section
      id="timeline"
      className="relative mx-auto max-w-screen-lg space-y-8 px-5 pb-36 pt-4 md:px-8"
    >
      <Title size="5xl" className="text-center underline decoration-blue-400 underline-offset-4">
        {t("TIMELINE")}
      </Title>
      <div className="grid w-full grid-cols-3 gap-y-8 sm:grid-cols-5 sm:gap-y-0">
        {getTimeLineItems.map((item, i) => (
          <Fragment key={item.title}>
            {i !== 0 && (
              <div className="relative col-span-3 my-auto flex items-center justify-center sm:hidden">
                {pointer(item.theme)}
                <div className="absolute z-[-5] h-28 w-0.5 bg-gray-300 transition dark:bg-gray-700" />
              </div>
            )}
            <div
              className={classNames(
                "col-span-3 sm:col-span-2 sm:mb-8",
                isEven(i) ? "flex" : "hidden sm:flex"
              )}
            >
              {isEven(i) && timeLineCard(item)}
            </div>

            <div className="relative col-span-1 mx-auto hidden w-full justify-center pt-3 sm:flex">
              {pointer(item.theme)}
              <div className="absolute flex h-full w-0.5 bg-gray-300 transition dark:bg-gray-700" />
            </div>

            <div
              className={classNames(
                "col-span-3 sm:col-span-2 sm:mb-8",
                !isEven(i) ? "flex" : "hidden sm:flex"
              )}
            >
              {!isEven(i) && timeLineCard(item)}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
