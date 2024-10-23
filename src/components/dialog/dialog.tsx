import type { DialogProps as HeadlessDialogProps } from "@headlessui/react";
import { Dialog as HeadlessDialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import clsx from "clsx";
import type { ReactNode } from "react";

const sizes = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
};

type DialogProps = { size?: keyof typeof sizes; className?: string; children: ReactNode } & Omit<
  HeadlessDialogProps,
  "className"
>;

const Dialog = ({ size = "lg", open, onClose, children, className, ...props }: DialogProps): JSX.Element => (
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
        <div className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25 p-2 focus:outline-none dark:bg-zinc-950/50 sm:px-6 sm:py-8 lg:px-8 lg:py-16" />
      </TransitionChild>

      <div className="fixed inset-0 w-screen pt-6 sm:pt-0">
        <div className="grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4">
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
                "row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-[--gutter] shadow-lg ring-1 ring-zinc-950/10 [--gutter:theme(spacing.8)] dark:bg-zinc-900 dark:ring-white/10 sm:mb-auto sm:rounded-2xl forced-colors:outline"
              )}
            >
              {children}
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </Transition>
);

export default Dialog;
