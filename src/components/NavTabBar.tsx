import { FC } from "react";
import { useNavigate, useLocation } from "react-router";
import classNames from "classnames";
import { Icon, IconType } from "./Icon";
import SettingsModal from "./SettingsModal";

interface NavTabBarProps {
  className?: string;
}

const NavTabBar: FC<NavTabBarProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname.split("/")[1];

  return (
    <TabBar
      className={classNames("pb-safe", className)}
      onSelect={(id) => navigate(`/${id}`)}
      selected={selected}
      options={[
        {
          id: "home",
          label: "Home",
          icon: IconType.HOME,
        },
        {
          id: "projects",
          label: "Projects",
          icon: IconType.FOLDER,
        },
        {
          id: "contact",
          label: "Contact",
          icon: IconType.INFORMATION_CIRCLE,
        },
        {
          id: "settings",
          label: "Settings",
          icon: IconType.COG,
        },
      ]}
    />
  );
};

interface TabBarOption {
  id: string;
  icon: IconType;
  label: string;
}

export interface TabBarProps {
  className?: string;
  options: TabBarOption[];
  selected?: string;
  onSelect?: (id: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({
  className,
  options,
  selected = "",
  onSelect,
}) => {
  const classes = classNames(
    "flex justify-between items-start border-t-2 border-gray-100 dark:border-gray-700 dark:bg-slate-800",
    className
  );

  const getOptionClasses = (active: boolean) =>
    classNames({
      "flex flex-col items-center outline-none focus:outline-none appearance-none cursor-pointer border-b-2 border-gray-100 dark:border-gray-700":
        true,
      "p-2.5 flex-1 text-xxs text-center whitespace-nowrap": true,
      "transition-all ease-in-out duration-300 transform": true,
      "text-gray-700 dark:text-white": !active,
      "text-blue-600 font-semibold": active,
    });

  return (
    <nav className={classes}>
      {options.map((option) => (
        <div
          onClick={() =>
            onSelect && option.id !== "settings" && onSelect(option.id)
          }
          className={getOptionClasses(option.id === selected)}
          key={option.id}
        >
          {option.id === "settings" && (
            <SettingsModal
              icon={option.icon}
              className="w-full flex justify-center"
            />
          )}
          {option.id !== "settings" && (
            <Icon name={option.icon} type="outline" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavTabBar;
