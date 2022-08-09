import { useTranslation } from "react-i18next";
import useDate from "../hooks/useDate";

const TimeLineData = () => {
  const { getTimeFrame } = useDate();
  const { t } = useTranslation();

  const getTimeLineItems = [
    {
      timeFrame: getTimeFrame(new Date(2022, 1, 21)),
      title: "Software Engineer",
      subTitle: "MoreApp",
      description: "Part-Time",
      labels: [t("ONGOING")],
      color: "blue",
      href: "https://www.moreapp.dev",
    },
    {
      timeFrame: getTimeFrame(new Date(2021, 8, 13), new Date(2022, 1, 11)),
      title: t("DEVELOPMENT_INTERN"),
      subTitle: "MoreApp",
      description: t("INTERNSHIP"),
      labels: [t("COMPLETED")],
      color: "yellow",
      href: "https://www.moreapp.dev",
    },
    {
      timeFrame: getTimeFrame(new Date(2019, 8, 1)),
      title: t("COMPUTER_SCIENCE"),
      description: `${t("HOGESCHOOL_ROTTERDAM")}, Rotterdam`,
      href: "https://www.hogeschoolrotterdam.nl/",
      labels: [t("ONGOING")],
      color: "red",
    },
    {
      timeFrame: getTimeFrame(new Date(2012, 8, 1), new Date(2019, 6, 1)),
      title: t("VWO"),
      description: "Lentiz Reviuslyceum, Maassluis",
      href: "https://www.lentiz.nl/reviuslyceum/",
      labels: [t("GRADUATED")],
      color: "green",
    },
  ];

  return { getTimeLineItems };
};
export default TimeLineData;
