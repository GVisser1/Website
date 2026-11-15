import clsx from "clsx";
import type { JSX, ReactElement } from "react";
import { isTouchDevice } from "../utils/deviceUtil";

export type TooltipProps = {
  title: string;
  trigger: ReactElement;
  position?: "top" | "right" | "bottom" | "left";
};

const positionClasses = {
  top: "right-0 bottom-full mb-1",
  right: "top-1/2 left-full ml-1 -translate-y-1/2",
  bottom: "top-full right-0 mt-1",
  left: "top-1/2 right-full mr-1 -translate-y-1/2",
} as const;

// CSS-only so the tooltip doesn't pull a positioning library into the bundle. The trigger must carry its own
// accessible name, so the visual tooltip is hidden from assistive technology
const Tooltip = (props: TooltipProps): JSX.Element => {
  if (isTouchDevice) {
    return props.trigger;
  }

  return (
    <span className="group relative inline-flex">
      {props.trigger}
      <span
        aria-hidden="true"
        className={clsx(
          "pointer-events-none absolute z-30 w-max max-w-56 rounded-lg bg-elevation-float px-2.5 py-1.5 text-caption font-medium text-elevation-float opacity-0 shadow-md transition-opacity duration-150 select-none",
          "group-hover:opacity-100 group-hover:delay-300 group-has-focus-visible:opacity-100 group-has-focus-visible:delay-300",
          positionClasses[props.position ?? "right"],
        )}
      >
        {props.title}
      </span>
    </span>
  );
};

export default Tooltip;
