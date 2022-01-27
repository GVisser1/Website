import { IconType } from "./Icon";
import Text from "./Text";

const PersonalInfo: React.FC = () => {
  return (
    <div className="flex justify-center space-x-3 bg-black/30 p-2 rounded-lg">
      <Text icon={IconType.CAKE} spaceBetween="sm">
        21
      </Text>
      <Text icon={IconType.USER} spaceBetween="sm">
        PRONOUNS
      </Text>
      <Text icon={IconType.GLOBE} spaceBetween="sm">
        NETHERLANDS
      </Text>
    </div>
  );
};

export default PersonalInfo;
