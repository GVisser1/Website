import { Drawer } from "@base-ui/react/drawer";
import { formatForDisplay } from "@tanstack/react-hotkeys";
import clsx from "clsx";
import { type ComponentProps, type JSX, type ReactNode, useRef } from "react";
import { useFont } from "@/hooks/useFont";

type SidePanelProps = {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ComponentProps<typeof Drawer.Trigger>["render"];
  children: ReactNode;
  className?: string;
};

const SidePanel = (props: SidePanelProps): JSX.Element => {
  const { getFontClass } = useFont();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Drawer.Root modal open={props.open} onOpenChange={props.onOpenChange} swipeDirection="right">
      <Drawer.Trigger render={props.trigger} />
      <Drawer.Portal>
        <Drawer.Backdrop
          className={clsx(
            "fixed inset-0 z-40 min-h-dvh bg-overlay-default transition-opacity duration-350 ease-out",
            // Follows the live swipe-to-dismiss drag progress
            "opacity-[calc(1-var(--drawer-swipe-progress))] data-swiping:duration-0",
            // Fully transparent while opening/closing
            "data-ending-style:opacity-0 data-ending-style:duration-250 data-ending-style:ease-in data-starting-style:opacity-0",
            // Swiped-to-dismiss instead: match the release's own physics-based duration
            "data-ending-style:data-swipe-dismiss:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
            // iOS Safari fallback: `fixed` can misbehave here
            "supports-[-webkit-touch-callout:none]:absolute",
          )}
        />
        <Drawer.Viewport className="fixed inset-0 z-40 flex items-stretch justify-end supports-[-webkit-touch-callout:none]:absolute">
          <Drawer.Popup
            initialFocus={closeButtonRef}
            className={clsx(
              "flex h-full w-72 max-w-[85vw] touch-auto flex-col overflow-hidden border-l border-secondary bg-default shadow-lg outline-none",
              // Rubber-band behaviour when dragging
              "-mr-12 pr-12",
              // Slide transition, plus the live swipe-drag transform
              "transform-[translateX(var(--drawer-swipe-movement-x))] transition-transform duration-350 ease-out data-swiping:select-none",
              // Fully off-screen to the right while opening/closing
              "data-ending-style:transform-[translateX(calc(100%+2px))] data-ending-style:duration-250 data-ending-style:ease-in data-starting-style:transform-[translateX(calc(100%+2px))]",
              // Swiped-to-dismiss instead: match the release's own physics-based duration
              "data-ending-style:data-swipe-dismiss:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
              getFontClass(),
            )}
          >
            <Drawer.Content className={clsx("flex grow flex-col", props.className)}>
              <Drawer.Title className="flex h-14 items-center border-b border-secondary p-3 text-header-xl text-primary">
                {props.title}
              </Drawer.Title>
              <div className="flex grow flex-col justify-between">
                <div className="p-2">{props.children}</div>
                <div className="flex border-t border-secondary p-2">
                  <Drawer.Close
                    ref={closeButtonRef}
                    render={(triggerProps) => (
                      <button
                        className="flex h-11 w-full items-center justify-between rounded-sm btn-tertiary px-3 focus-visible:focus-ring"
                        {...triggerProps}
                      >
                        <span className="text-base-semibold">Close</span>
                        <span className="rounded-sm bg-sunken-secondary px-1.5 py-0.5 text-sm-regular">
                          {formatForDisplay("Escape")}
                        </span>
                      </button>
                    )}
                  />
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default SidePanel;
