import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Title } from "./Title";
import { Button, ButtonType } from "./Button";
import { IconType } from "./Icon";
import { t } from "i18next";
import classNames from "classnames";

interface ButtonProps {
  label?: string;
  type?: ButtonType;
  compact?: boolean;
  block?: boolean;
  icon?: IconType;
  iconType?: "solid" | "outline";
  className?: string;
}
interface ModalProps {
  title: string;
  className?: string;
  btnProps?: ButtonProps;
}

const Modal: React.FC<ModalProps> = ({
  title,
  className,
  btnProps,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const classes = classNames(
    "max-h-3xl mx-auto inline-block h-full w-full max-w-lg pt-12",
    className
  );

  return (
    <>
      <Button
        className={btnProps?.className}
        icon={btnProps?.icon}
        iconType={btnProps?.iconType}
        label={btnProps?.label}
        type={btnProps?.type}
        compact={btnProps?.compact}
        block={btnProps?.block}
        onClick={openModal}
      />
      <Transition show={isOpen} as={Fragment} appear>
        <Dialog className="fixed inset-0 z-10 pb-8" onClose={closeModal}>
          <div className="flex h-full justify-center px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={classes}>
                <div className="flex h-full w-full transform flex-col rounded-2xl border-2 border-gray-700 bg-white dark:bg-gray-600">
                  <div className="border-b pb-3">
                    <div className="flex items-center justify-between text-center">
                      <Dialog.Title as="div" className="line-clamp-2 pl-6 pt-5">
                        <Title as="h2" size="2xl">
                          {title}
                        </Title>
                      </Dialog.Title>
                      <Button
                        className="pr-4 pt-6"
                        icon={IconType.X}
                        type="clear"
                        compact
                        onClick={closeModal}
                      />
                    </div>
                  </div>
                  <div className="scrollbar-hide h-full max-h-screen overflow-x-hidden overflow-y-scroll px-4 pb-24">
                    {props.children}
                  </div>
                  <div className="absolute bottom-0 w-full rounded-b-2xl bg-white bg-opacity-70 p-4 pt-6 dark:bg-gray-600 dark:bg-opacity-70">
                    <Button block onClick={closeModal} label={t("CLOSE")} />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
