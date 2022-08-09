import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { IconType } from "./Icon";
import Text from "./Text";

interface PersonalInfoProps {
  className?: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ className }) => {
  const { t } = useTranslation();
  const getAge = (dob: Date) =>
    Math.abs(new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970);

  return (
    <div
      className={classNames("flex justify-center space-x-3 rounded-lg bg-black/40 p-2", className)}
    >
      <Text icon={IconType.CAKE} color="all-white">
        {getAge(new Date(2000, 3, 21))}
      </Text>
      <Text icon={IconType.USER} color="all-white">
        {t("PRONOUNS")}
      </Text>
      <Text icon={IconType.GLOBE} color="all-white">
        {t("NETHERLANDS")}
      </Text>
    </div>
  );
};

export default PersonalInfo;
