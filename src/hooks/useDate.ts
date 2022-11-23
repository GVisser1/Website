import DateDiff from "date-diff";
import { useTranslation } from "react-i18next";

const useDate = () => {
  const { t } = useTranslation();
  const getTotalMonths = (start: Date, end?: Date) => {
    const diff = Math.round(new DateDiff(end ?? new Date(), start).months());
    return `${diff} ${diff === 1 ? t("MONTH") : t("MONTHS")}`;
  };

  const getMonthName = (monthIndex: number, compact: boolean = true) => {
    const ext = compact ? "_COMPACT" : "";
    switch (monthIndex) {
      case 0:
        return t(`JANUARY${ext}`);
      case 1:
        return t(`FEBRUARY${ext}`);
      case 2:
        return t(`MARCH${ext}`);
      case 3:
        return t(`APRIL${ext}`);
      case 4:
        return t(`MAY${ext}`);
      case 5:
        return t(`JUNE${ext}`);
      case 6:
        return t(`JULY${ext}`);
      case 7:
        return t(`AUGUST${ext}`);
      case 8:
        return t(`SEPTEMBER${ext}`);
      case 9:
        return t(`OCTOBER${ext}`);
      case 10:
        return t(`NOVEMBER${ext}`);
      case 11:
        return t(`DECEMBER${ext}`);
      default:
        return t(`JANUARY${ext}`);
    }
  };

  const getTimeFrame = (startDate: Date, endDate?: Date) => {
    const start = `${getMonthName(startDate.getMonth())} ${startDate.getFullYear()}`;
    const end = endDate
      ? `${getMonthName(endDate.getMonth())} ${endDate.getFullYear()}`
      : t("PRESENT");
    return `${start} - ${end}`;
  };

  return { getTotalMonths, getMonthName, getTimeFrame };
};

export default useDate;
