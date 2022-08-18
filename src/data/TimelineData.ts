import { useTranslation } from "react-i18next";
import { TimelineItem } from "../components/Timeline";
import useDate from "../hooks/useDate";

const TimeLineData = () => {
  const { getTimeFrame } = useDate();
  const { t } = useTranslation();

  const getTimeLineItems: TimelineItem[] = [
    {
      timeFrame: getTimeFrame(new Date(2022, 1, 21)),
      title: "Software Engineer",
      subTitle: "MoreApp",
      description: "Part-Time",
      labels: [t("ONGOING")],
      color: "BLUE",
    },
    {
      timeFrame: getTimeFrame(new Date(2021, 8, 13), new Date(2022, 1, 11)),
      title: t("DEVELOPMENT_INTERN"),
      subTitle: "MoreApp",
      description: t("INTERNSHIP"),
      labels: [t("COMPLETED")],
      color: "YELLOW",
    },
    {
      timeFrame: getTimeFrame(new Date(2019, 8, 1)),
      title: t("COMPUTER_SCIENCE"),
      description: `${t("HOGESCHOOL_ROTTERDAM")}, Rotterdam`,
      labels: [t("ONGOING")],
      color: "RED",
    },
    {
      timeFrame: getTimeFrame(new Date(2012, 8, 1), new Date(2019, 6, 1)),
      title: t("VWO"),
      description: "Lentiz Reviuslyceum, Maassluis",
      labels: [t("GRADUATED")],
      color: "GREEN",
    },
  ];

  return { getTimeLineItems };
};
export default TimeLineData;
