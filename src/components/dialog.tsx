import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import { useFont } from "../hooks/useFont";

type DialogProps = {
  title: string;
  handle: BaseDialog.Handle<unknown>;
  onOpenChangeComplete?: (open: boolean) => void;
  children: ReactNode;
  className?: string;
};

const Dialog = (props: DialogProps): JSX.Element => {
  const { getFontClass } = useFont();

  return (
    <BaseDialog.Root handle={props.handle} onOpenChangeComplete={props.onOpenChangeComplete}>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-overlay-default transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <BaseDialog.Popup
          className={clsx(
            "fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-default shadow-lg outline-none",
            "transition-[opacity,scale] duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
            "border border-secondary",
            getFontClass(),
          )}
        >
          <BaseDialog.Title className="flex h-14 items-center border-b border-secondary p-3 text-header-xl text-primary">
            {props.title}
          </BaseDialog.Title>
          <div className={clsx("p-5", props.className)}>{props.children}</div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
};

export default Dialog;
