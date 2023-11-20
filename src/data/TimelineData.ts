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
      timeFrame: getTimeFrame(new Date(2023, 7, 1)),
      title: "Quality Assurance Engineer",
      subTitle: "MoreApp",
      description: t("QA_ENGINEER_DESCRIPTION"),
      status: t("COMPLETED"),
      href: "https://moreapp.com",
      theme: "GRAY",
    },
    {
      timeFrame: getTimeFrame(new Date(2023, 1, 6), new Date(2023, 6, 7)),
      title: "Graduation Internship",
      subTitle: "MoreApp",
      description: t("GRADUATION_INTERN_DESCRIPTION"),
      status: t("COMPLETED"),
      href: "https://moreapp.com",
      theme: "PINK",
    },
    {
      timeFrame: getTimeFrame(new Date(2022, 1, 21), new Date(2023, 0, 31)),
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
      timeFrame: getTimeFrame(new Date(2019, 8, 1), new Date(2021, 6, 1)),
      title: t("COMPUTER_SCIENCE"),
      subTitle: t("HOGESCHOOL_ROTTERDAM"),
      description: t("COMPUTER_SCIENCE_DESCRIPTION"),
      status: t("GRADUATED"),
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
