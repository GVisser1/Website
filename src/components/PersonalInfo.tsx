import { useTranslation } from "react-i18next";
import { IconType } from "./Icon";
import Text from "./Text";

const PersonalInfo: React.FC = () => {
  const { t } = useTranslation();
  const getAge = (dob: Date) =>
    Math.abs(new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970);

  return (
    <div className="flex justify-center space-x-3 rounded-lg bg-black/40 p-2">
      <Text icon={IconType.CAKE} color="all-white" spaceBetween="sm">
        {getAge(new Date(2000, 3, 21))}
      </Text>
      <Text icon={IconType.USER} color="all-white" spaceBetween="sm">
        {t("PRONOUNS")}
      </Text>
      <Text icon={IconType.GLOBE} color="all-white" spaceBetween="sm">
        {t("NETHERLANDS")}
      </Text>
    </div>
  );
};

export default PersonalInfo;
