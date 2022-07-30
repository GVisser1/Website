import React from "react";
import { useTranslation } from "react-i18next";
import useDate from "../hooks/useDate";
import { Icon, IconType } from "./Icon";
import Text from "./Text";
import { Title } from "./Title";

interface WorkListProps {
  company: CompanyProps;
}

export const WorkList: React.FC<WorkListProps> = ({ company }) => {
  const { getTotalMonths, getTimeFrame } = useDate();
  const { t } = useTranslation();

  return (
    <div>
      <img src={company.logo} className="w-22 h-12 px-2 dark:brightness-150" />
      <div className="gap-y-1 py-2">
        <Text size="lg" weight="semibold">
          {company.name}
        </Text>
        <Text weight="semibold">
          {getTotalMonths(company.startDate, company.endDate ?? new Date())}
        </Text>
        <Text color="light">{company.address}</Text>
      </div>
      <ol className="relative space-y-6 border-l border-gray-200 py-2 dark:border-gray-700">
        {company.positions.map((pos) => (
          <li key={pos.title} className="ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-300 dark:bg-blue-700" />
            <Text color="light">{`${getTimeFrame(
              pos.startDate,
              pos.endDate
            )}`}</Text>
            <Title as="h3" size="lg">
              {pos.title}
            </Title>
            <Text color="light">{pos.type}</Text>
            <Text color="light">
              {`${getTotalMonths(pos.startDate, pos.endDate ?? new Date())}`}
            </Text>
          </li>
        ))}
      </ol>
      <Text href={company.website}>{t("VISIT_WEBSITE")}</Text>
    </div>
  );
};

interface CompanyProps {
  address: string;
  name: string;
  positions: PositionProps[];
  startDate: Date;
  website: string;
  endDate?: Date;
  logo?: string;
}

interface PositionProps {
  startDate: Date;
  title: string;
  type: string;
  endDate?: Date;
}
