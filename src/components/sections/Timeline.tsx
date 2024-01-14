import clsx from "clsx";
import { timeLineData } from "../../data/TimelineData";
import { isEven } from "../../utils/numberUtil";
import { Badge } from "../Badge";
import { Section } from "../Section";
import { Text } from "../Text";
import { Title } from "../Title";

export const Timeline = () => (
  <Section id="timeline" title={{ text: "Timeline", center: true }}>
    <div className="relative overflow-hidden">
      <div className="absolute left-2 h-full w-0.5 bg-gray-200 shadow-md sm:inset-x-0 sm:mx-auto" />
      {timeLineData.map((item, i) => (
        <div
          key={item.title}
          className={clsx(
            "relative py-5 pl-8 text-justify sm:w-1/2 sm:px-5",
            isEven(i) && "sm:text-end",
            !isEven(i) && "sm:ml-auto sm:text-start",
          )}
        >
          <div className="space-y-5">
            <div>
              <Title as="h3">{item.title}</Title>
              <Text size="sm" weight="semibold" color="medium">
                {item.subTitle}
              </Text>
            </div>
            <Badge color="green">{item.timeFrame}</Badge>
            <Text size="sm" color="medium">
              {item.description}
            </Text>
          </div>
          <div
            className={clsx(
              "absolute top-0 mt-7 h-2.5 w-2.5 -translate-x-7 rounded-full bg-white ring-4 ring-blue-500 sm:translate-x-0",
              isEven(i) ? "sm:right-[-5px]" : "sm:left-[-5px]",
            )}
          />
        </div>
      ))}
    </div>
  </Section>
);
