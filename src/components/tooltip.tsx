import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { JSX, ReactElement } from "react";
import { useId } from "react";
import { isTouchDevice } from "../utils/deviceUtil";
import { seconds } from "../utils/timeUtil";

const DELAY = seconds(0.3);

export type TooltipProps = {
  title: string;
  trigger: ReactElement;
  position?: "top" | "right" | "bottom" | "left";
};

const Tooltip = (props: TooltipProps): JSX.Element => {
  const id = useId();

  if (isTouchDevice) {
    // Just return the trigger if on non-pointer devices
    return props.trigger;
  }

  return (
    <BaseTooltip.Provider delay={DELAY}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={props.trigger} />
        <BaseTooltip.Portal container={document.body}>
          <BaseTooltip.Positioner side={props.position ?? "right"} sideOffset={4} collisionPadding={8} className="z-30">
            <BaseTooltip.Popup
              aria-labelledby={id}
              className="flex max-w-56 origin-(--transform-origin) items-center overflow-hidden rounded-lg bg-elevation-float px-2.5 py-1.5 shadow-md transition-[opacity,scale] duration-150 select-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0"
            >
              <p id={id} className="text-xs-medium text-elevation-float">
                {props.title}
              </p>
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
};

export default Tooltip;
