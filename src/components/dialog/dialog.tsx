import { DialogContent, DialogOverlay, DialogPortal, Dialog as DialogRoot, DialogTitle } from "@radix-ui/react-dialog";
import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import IconButton from "../button/iconButton";

type DialogProps = {
  title: { value: string; capitalize?: boolean };
  open: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
  onCloseFocusId: string;
  onOpenFocusId: string;
};

const Dialog = ({ title, open, onClose, children, className, ...props }: DialogProps): JSX.Element => (
  <DialogRoot modal open={open} onOpenChange={() => open && onClose()}>
    <DialogPortal container={document.getElementById("portal-root")}>
      <DialogOverlay className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-elevation-surface-blanket-top p-2 focus:outline-hidden phone-ls:px-6 phone-ls:py-8 tablet-ls:px-8 tablet-ls:py-16 dark:bg-elevation-surface-blanket-top-dark" />
      <div className="fixed inset-0 w-screen pt-6 phone-ls:pt-0">
        <div className="grid h-dvh grid-rows-[1fr_auto] justify-items-center pb-4 phone-ls:grid-rows-[1fr_auto_3fr] phone-ls:p-4">
          <DialogContent
            aria-describedby={undefined}
            onOpenAutoFocus={(e) => {
              e.preventDefault();
              document.getElementById(props.onOpenFocusId)?.focus();
            }}
            onCloseAutoFocus={(e) => {
              e.preventDefault();
              document.getElementById(props.onCloseFocusId)?.focus();
            }}
            className={clsx(
              className,
              "rounded-t-3xl row-start-2 w-full min-w-0 bg-default shadow-lg phone-ls:mb-auto phone-ls:max-w-lg phone-ls:rounded-2xl dark:bg-default-dark",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            )}
          >
            <div className="flex items-center justify-between px-5 pt-5">
              <DialogTitle
                className={clsx(
                  "truncate text-header-xl text-primary dark:text-primary-dark",
                  title.capitalize && "capitalize",
                )}
              >
                {title.value}
              </DialogTitle>

              <IconButton
                type="button"
                variant="ghost"
                icon="X"
                onClick={onClose}
                ariaLabel="Close"
                tooltip={{ title: "Close" }}
              />
            </div>
            <div className="max-h-[75vh] w-full overflow-y-auto px-5 pt-2 pb-5">{children}</div>
          </DialogContent>
        </div>
      </div>
    </DialogPortal>
  </DialogRoot>
);

export default Dialog;
