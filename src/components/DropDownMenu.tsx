import { FC, Fragment, MouseEventHandler } from "react";
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

export const DropdownMenu: FC<DropdownMenuProps> = ({
  items,
  btnProps,
  className,
}) => {
  const classes = classNames("relative", className);

  const optClasses = (selected = false, active: boolean) =>
    classNames({
      "w-full flex h-10 items-center justify-between rounded-md px-4 py-2 text-gray-700":
        true,
      "bg-green-200": selected,
      "bg-green-300/80": active && selected,
      "bg-gray-200": active && !selected,
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
            <Menu.Items className="absolute right-0 z-20 my-1 w-56 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-20 focus:outline-none">
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={optClasses(item.selected, active)}
                      onClick={item.onClick}
                    >
                      {item.label && (
                        <Text color="all-dark" icon={item.icon}>
                          {item.label}
                        </Text>
                      )}
                      {item.selected && (
                        <Icon name={IconType.CHECK_CIRCLE} type="outline" />
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
