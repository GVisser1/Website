import DateDiff from "date-diff";
import { useTranslation } from "react-i18next";

const useDate = () => {
  const { t } = useTranslation();
  const getTotalMonths = (startingDate: Date, endDate: Date) => {
    const diff = Math.round(new DateDiff(endDate, startingDate).months());
    return `${diff} ${diff === 1 ? t("MONTH") : t("MONTHS")}`;
  };
  return { getTotalMonths };
};
export default useDate;
