import { Fragment, MouseEventHandler } from "react";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Icon, IconType } from "./Icon";
import Text from "./Text";
import { Button, ButtonType } from "./Button";

export interface MenuItem {
  label: string;
  icon?: IconType;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface ButtonProps {
  label?: string;
  type?: ButtonType;
  compact?: boolean;
  icon?: IconType;
  iconType?: "solid" | "outline";
  block?: boolean;
  className?: string;
}

export interface DropdownMenuProps {
  className?: string;
  btnProps?: ButtonProps;
  items: MenuItem[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, btnProps, className }) => {
  const classes = classNames("relative", className);

  const optClasses = (active: boolean, selected = false) =>
    classNames({
      "w-full flex h-10 items-center justify-between px-4 py-2 text-gray-700 dark:text-white": true,
      "bg-black/5 dark:bg-slate-800 ": !active && selected,
      "bg-black/10 dark:bg-slate-600 ": active && selected,
      "bg-gray-200 dark:bg-slate-600": active && !selected,
    });

  return (
    <Menu as="div" className={classes}>
      {({ open }) => (
        <>
          <Menu.Button as={Fragment}>
            <div>
              <Button
                label={btnProps?.label}
                type={btnProps?.type}
                compact={btnProps?.compact}
                block={btnProps?.block}
                icon={btnProps?.icon}
                iconType={btnProps?.iconType}
              />
            </div>
          </Menu.Button>

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
            <Menu.Items className="transition-300 absolute right-0 z-40 my-1 w-56 origin-top-right divide-y divide-slate-200 overflow-hidden rounded-md border border-black/20 bg-white shadow-lg focus:outline-none dark:divide-slate-400 dark:border-slate-500 dark:bg-slate-700">
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button className={optClasses(active, item.selected)} onClick={item.onClick}>
                      {item.label && <Text icon={item.icon}>{item.label}</Text>}
                      {item.selected && <Icon name={IconType.CHECK_CIRCLE} type="outline" />}
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
