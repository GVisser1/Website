import { useState, Fragment, PropsWithChildren, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Title } from "./Title";
import { Button, ButtonProps } from "./Button";
import { IconType } from "./Icon";
import classNames from "classnames";
interface ModalProps {
  title: string;
  className?: string;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  title,
  className,
  open,
  onClose,
  children,
}) => {
  const classes = classNames(
    "max-h-3xl mx-auto inline-block h-full w-full max-w-lg pt-12",
    className
  );

  return (
    <Transition show={open} as={Fragment} appear>
      <Dialog className="fixed inset-0 z-40 pb-8" onClose={onClose}>
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
            <Dialog.Overlay className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity" />
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
              <div className="flex h-full w-full transform flex-col rounded-2xl border-2 border-slate-700 bg-white pb-4 dark:bg-slate-600">
                <div className="border-b pb-3 dark:border-slate-700">
                  <div className="flex items-center justify-between text-center">
                    <Dialog.Title as="div" className="pl-6 pt-5 line-clamp-2">
                      <Title as="h2" size="2xl">
                        {title}
                      </Title>
                    </Dialog.Title>
                    <Button
                      className="mr-4 mt-6"
                      aria-label="close modal"
                      icon="XMarkIcon"
                      variant="clear"
                      compact
                      onClick={onClose}
                    />
                  </div>
                </div>
                <div className="h-full max-h-screen overflow-x-hidden overflow-y-scroll px-4 scrollbar-none">
                  {children}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
