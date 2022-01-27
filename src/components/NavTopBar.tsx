import { FC } from "react";
import { useNavigate, useLocation } from "react-router";
import classNames from "classnames";
import { Icon, IconType } from "./Icon";

interface NavTopBarProps {
  className?: string;
}

const NavTopBar: FC<NavTopBarProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname.split("/")[1];

  return (
    <TopBar
      className={classNames("flex", className)}
      onSelect={(id) => navigate(`/${id}`)}
      selected={selected}
      mainOption={{
        id: "home",
        label: "Glenn Visser",
      }}
      pageOptions={[
        {
          id: "projects",
          label: "PROJECTS",
        },
        {
          id: "skills",
          label: "SKILLS",
        },
        {
          id: "contact",
          label: "CONTACT",
        },
      ]}
      settingsOptions={[
        {
          id: "settings",
          icon: IconType.COG,
        },
      ]}
    />
  );
};

interface TopBarOption {
  id: string;
  icon?: IconType;
  label?: string;
}

export interface TopBarProps {
  className?: string;
  mainOption: TopBarOption;
  pageOptions: TopBarOption[];
  settingsOptions: TopBarOption[];
  selected?: string;
  onSelect?: (id: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  selected = "",
  className,
  onSelect,
  mainOption,
  pageOptions,
  settingsOptions,
}) => {
  const classes = classNames(
    "w-full h-16 mx-auto px-5 py-12 border-b-2 border-gray-100",
    className
  );

  return (
    <nav className={classes}>
      <div className="max-w-7xl w-full flex items-center mx-auto">
        <div className="flex items-center w-full">
          <TopBarItem
            key={mainOption.id}
            active={mainOption.id === selected}
            option={mainOption}
            className="text-2xl font-bold"
            onSelect={() => {
              onSelect && onSelect(mainOption.id);
            }}
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center justify-evenly">
            {pageOptions.map((option) => (
              <TopBarItem
                key={option.id}
                active={option.id === selected}
                option={option}
                onSelect={() => {
                  onSelect && onSelect(option.id);
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-evenly border-l-2 border-gray-700 pl-4">
            {settingsOptions.map((option) => (
              <TopBarItem
                key={option.id}
                active={option.id === selected}
                option={option}
                onSelect={() => {
                  onSelect && onSelect(option.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

interface TopBarItemProps {
  active: boolean;
  option: TopBarOption;
  className?: string;
  onSelect: () => void;
}

const TopBarItem: React.FC<TopBarItemProps> = ({
  active,
  option,
  className,
  onSelect,
}) => {
  const classes = classNames(
    {
      "flex justify-center cursor-pointer": true,
      "transition-all ease-in-out duration-300 transform": true,
      "space-x-3": option.label && option.icon,
      "text-gray-700 hover:text-gray-400": !active,
      "text-blue-600": active,
    },
    className
  );
  const iconClasses = classNames({
    "shrink-0": true,
  });

  return (
    <div className={"px-4 py-3"}>
      <div onClick={onSelect} className={classes}>
        {option.icon && (
          <Icon name={option.icon} type="outline" className={iconClasses} />
        )}
        <p>{option.label}</p>
      </div>
    </div>
  );
};

export default NavTopBar;
