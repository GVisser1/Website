import { FC, Fragment, MouseEventHandler, ReactElement } from "react";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Icon, IconType } from "./Icon";
import { Text } from "./Text";
import { ButtonProps } from "./Button";

export interface MenuItem {
  label: string;
  icon?: IconType;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface DropdownMenuProps {
  className?: string;
  menuBtn?: ReactElement<ButtonProps>;
  items: MenuItem[];
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ items, menuBtn, className }) => {
  const classes = classNames("relative", className);

  const optClasses = (active: boolean) =>
    classNames(
      "w-full flex transition h-10 items-center justify-between px-4 py-2 text-gray-700 dark:text-white",
      active && "bg-black/5 dark:bg-slate-800/50"
    );

  return (
    <Menu as="div" className={classes}>
      {({ open }) => (
        <>
          <Menu.Button as="div">{menuBtn}</Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-40 my-1 w-56 origin-top-right divide-y divide-slate-200 overflow-hidden rounded-md border border-black/20 bg-white shadow-lg outline-none transition dark:divide-slate-600 dark:border-slate-500 dark:bg-slate-700">
              {items.map((item) => (
                <Menu.Item key={item.label}>
                  {({ active }) => (
                    <button className={optClasses(active)} onClick={item.onClick}>
                      {item.label && <Text icon={item.icon}>{item.label}</Text>}
                      {item.selected && (
                        <Icon
                          name="CheckCircleIcon"
                          type="outline"
                          className="text-emerald-500 dark:text-emerald-300"
                        />
                      )}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
