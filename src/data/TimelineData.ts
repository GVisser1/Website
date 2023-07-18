import { t } from "i18next";
import useDate from "../hooks/useDate";
import { Color } from "../types/Color";

export interface TimelineItem {
  title: string;
  timeFrame: string;
  subTitle?: string;
  description?: string;
  status?: string;
  logoSrc?: string;
  href?: string;
  theme?: Color;
}

export const TimeLineData = () => {
  const { getTimeFrame } = useDate();

  const timeLineItems: TimelineItem[] = [
    {
      timeFrame: getTimeFrame(new Date(2022, 1, 21)),
      title: "Software Engineer",
      subTitle: "MoreApp",
      description: t("MOREAPP_PART-TIME_DESCRIPTION"),
      status: t("ONGOING"),
      href: "https://moreapp.com",
      theme: "BLUE",
    },
    {
      timeFrame: getTimeFrame(new Date(2021, 8, 13), new Date(2022, 1, 11)),
      title: t("DEVELOPMENT_INTERN"),
      subTitle: "MoreApp",
      description: t("DEVELOPMENT_INTERN_DESCRIPTION"),
      status: t("COMPLETED"),
      href: "https://moreapp.com",
      theme: "YELLOW",
    },
    {
      timeFrame: getTimeFrame(new Date(2019, 8, 1)),
      title: t("COMPUTER_SCIENCE"),
      subTitle: t("HOGESCHOOL_ROTTERDAM"),
      description: t("COMPUTER_SCIENCE_DESCRIPTION"),
      status: t("ONGOING"),
      href: "https://www.hogeschoolrotterdam.nl/",
      theme: "RED",
    },
    {
      timeFrame: getTimeFrame(new Date(2012, 8, 1), new Date(2019, 6, 1)),
      title: t("VWO"),
      subTitle: "Lentiz Reviuslyceum",
      description: t("VWO_DESCRIPTION"),
      status: t("GRADUATED"),
      href: "https://www.lentiz.nl/reviuslyceum/",
      theme: "GREEN",
    },
  ];

  return { timeLineItems };
};
