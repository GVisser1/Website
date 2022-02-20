import { useTranslation } from "react-i18next";
import { IconType } from "./Icon";
import Text from "./Text";

const PersonalInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center space-x-3 rounded-lg bg-black/40 p-2">
      <Text icon={IconType.CAKE} color="all-white" spaceBetween="sm">
        {"21"}
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
