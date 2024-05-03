import clsx from "clsx";
import { timeLineData } from "../../../data/timelineData";
import { isEven } from "../../../utils/numberUtil";
import Badge from "../../../components/badge";
import Text from "../../../components/text";
import Title from "../../../components/title";
import Section from "@/components/section";

const Timeline = (): JSX.Element => (
  <Section id="timeline">
    <Title as="h2" className="mb-2 sm:text-center">
      Timeline
    </Title>
    <div className="relative overflow-hidden">
      <div className="absolute left-2 h-full w-0.5 bg-gray-200 shadow-md sm:inset-x-0 sm:mx-auto" />
      {timeLineData.map((item, i) => (
        <div
          key={item.title}
          className={clsx(
            "relative py-5 pl-8 sm:w-1/2 sm:px-5",
            isEven(i) ? "sm:text-end" : "sm:ml-auto sm:text-start",
          )}
        >
          <div>
            <Badge color="green" label={item.timeFrame} />
            <div className="mt-1">
              <Title as="h3">{item.title}</Title>
              <Text size="sm" weight="semibold" color="medium">
                {item.subTitle}
              </Text>
            </div>
            <Text size="sm" color="medium" className="mt-2">
              {item.description}
            </Text>
          </div>
          <div
            className={clsx(
              "absolute top-0 mt-7 size-2.5 -translate-x-7 rounded-full bg-white ring-4 ring-blue-600 sm:translate-x-0",
              isEven(i) ? "sm:right-[-5px]" : "sm:left-[-5px]",
            )}
          />
        </div>
      ))}
    </div>
  </Section>
);

export default Timeline;
