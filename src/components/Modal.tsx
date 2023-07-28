import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment, PropsWithChildren } from "react";
import { Button } from "./Button";
import { Title } from "./Title";

interface ModalProps {
  title: string;
  className?: string;
  open: boolean;
  onClose: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  title,
  className,
  open,
  onClose,
  children,
}) => {
  const classes = clsx(
    "max-h-[54rem] mx-auto inline-block h-full w-full max-w-lg pt-12",
    className,
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
                    <Dialog.Title as="div" className="line-clamp-2 pl-6 pt-5">
                      <Title>{title}</Title>
                    </Dialog.Title>
                    <Button
                      className="mr-4 mt-6"
                      aria-label="close modal"
                      icon="XMarkIcon"
                      variant="clear"
                      size="md"
                      onClick={onClose}
                    />
                  </div>
                </div>
                <div className="h-full max-h-screen overflow-x-hidden overflow-y-scroll p-4 scrollbar-none">
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
