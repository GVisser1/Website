import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { Hotkey } from "@tanstack/react-hotkeys";
import { formatForDisplay } from "@tanstack/react-hotkeys";
import clsx from "clsx";
import type { JSX, ReactElement } from "react";
import { cloneElement, useId } from "react";
import { isTouchDevice } from "../utils/deviceUtil";
import { seconds } from "../utils/timeUtil";

const DELAY = seconds(0.3);

const toSpoken = (shortcut: Hotkey): string => formatForDisplay(shortcut, { useSymbols: false, separatorToken: " + " });

export type TooltipProps = {
  title: string;
  shortcut?: Hotkey;
  trigger: ReactElement;
  position?: "top" | "right" | "bottom" | "left";
};

const Tooltip = (props: TooltipProps): JSX.Element => {
  const id = useId();
  const descriptionId = useId();

  // The popup only exists while open and isn't linked to the trigger, so screen readers get the description from a persistent hidden element instead
  const trigger = props.shortcut
    ? cloneElement(props.trigger, { "aria-describedby": descriptionId } as Record<string, string>)
    : props.trigger;

  const screenReaderDescription = props.shortcut && (
    <span id={descriptionId} className="sr-only">
      Shortcuts available: {toSpoken(props.shortcut)}
    </span>
  );

  if (isTouchDevice) {
    // Just return the trigger if on non-pointer devices
    return (
      <>
        {trigger}
        {screenReaderDescription}
      </>
    );
  }

  return (
    <BaseTooltip.Provider delay={DELAY}>
      {screenReaderDescription}
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={trigger} />
        <BaseTooltip.Portal container={document.body}>
          <BaseTooltip.Positioner side={props.position ?? "right"} sideOffset={4} collisionPadding={8} className="z-30">
            <BaseTooltip.Popup
              aria-labelledby={id}
              className={clsx(
                "flex max-w-56 origin-(--transform-origin) items-center gap-x-2.5 overflow-hidden rounded-lg bg-elevation-float px-2.5 py-1.5 shadow-md transition-[opacity,scale] duration-150 select-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
              )}
            >
              <p id={id} className="text-xs-medium text-elevation-float">
                {props.title}
              </p>
              {props.shortcut && (
                <p className="text-xs-regular text-elevation-float-secondary">{formatForDisplay(props.shortcut)}</p>
              )}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
};

export default Tooltip;
