import type { DialogProps as HeadlessDialogProps } from "@headlessui/react";
import { Dialog as HeadlessDialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import clsx from "clsx";
import type { ReactNode, JSX } from "react";
import { IconButton } from "../button";

const sizes = {
  lg: "sm:max-w-lg",
  "2xl": "sm:max-w-2xl",
};

type DialogProps = {
  title: { value: string; capitalize?: boolean };
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
} & Omit<HeadlessDialogProps, "className" | "title">;

const Dialog = ({ title, size = "lg", open, onClose, children, className, ...props }: DialogProps): JSX.Element => (
  <Transition show={open} appear {...props}>
    <HeadlessDialog onClose={onClose}>
      <TransitionChild
        enter="ease-out duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-elevation-surface-blanket-top p-2 focus:outline-hidden sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-elevation-surface-blanket-top-dark" />
      </TransitionChild>

      <div className="fixed inset-0 w-screen pt-6 sm:pt-0">
        <div className="grid h-dvh grid-rows-[1fr_auto] justify-items-center pb-4 sm:grid-rows-[1fr_auto_3fr] sm:p-4">
          <TransitionChild
            enter="ease-out duration-100"
            enterFrom="opacity-0 translate-y-12 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-12 sm:translate-y-0"
          >
            <DialogPanel
              className={clsx(
                className,
                sizes[size],
                "row-start-2 w-full min-w-0 rounded-t-3xl bg-default shadow-lg sm:mb-auto sm:rounded-2xl dark:bg-default-dark",
              )}
            >
              <div className="flex items-center justify-between px-5 pt-5">
                <h1
                  className={clsx(
                    "truncate text-xl font-semibold text-primary dark:text-primary-dark",
                    title.capitalize && "capitalize",
                  )}
                >
                  {title.value}
                </h1>

                <IconButton
                  variant="ghost"
                  icon="X"
                  onClick={() => onClose(true)}
                  aria-label="Close"
                  tooltip={{ title: "Close" }}
                />
              </div>
              <div className="max-h-[75vh] w-full overflow-y-auto px-5 pt-2 pb-5">{children}</div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </Transition>
);

export default Dialog;
