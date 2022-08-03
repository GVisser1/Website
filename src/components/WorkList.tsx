import React from "react";
import { useTranslation } from "react-i18next";
import useDate from "../hooks/useDate";
import Text from "./Text";
import Timeline, { TimelineItem } from "./Timeline";
import { Title } from "./Title";

interface WorkListProps {
  className?: string;
  company: CompanyProps;
}

export const WorkList: React.FC<WorkListProps> = ({ company, className }) => {
  const { getTotalMonths, getTimeFrame } = useDate();
  const { t } = useTranslation();

  return (
    <div className={className}>
      <img src={company.logo} className="w-22 h-12 px-2 dark:brightness-150" />
      <div className="gap-y-1 py-2">
        <Text size="lg" weight="semibold">
          {company.name}
        </Text>
        <Text weight="semibold">
          {getTotalMonths(company.startDate, company.endDate ?? new Date())}
        </Text>
        <Text color="light">{company.address}</Text>
        <Text href={company.website}>{t("VISIT_WEBSITE")}</Text>
      </div>
      <Timeline items={company.positions} />
    </div>
  );
};

interface CompanyProps {
  address: string;
  name: string;
  positions: TimelineItem[];
  startDate: Date;
  website: string;
  endDate?: Date;
  logo?: string;
}
