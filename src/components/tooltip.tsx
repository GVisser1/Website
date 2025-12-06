import {
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  Tooltip as TooltipRoot,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import clsx from "clsx";
import { uniqueId } from "lodash-es";
import type { JSX, ReactNode } from "react";
import { useEffect, useState } from "react";
import { isTouchDevice } from "../utils/deviceUtil";
import { seconds } from "../utils/timeUtil";

const DELAY = seconds(0.3);
const ID = uniqueId("tooltip-");

export type TooltipProps = {
  title: string;
  description?: string;
  trigger: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
};

const Tooltip = (props: TooltipProps): JSX.Element => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const checkElement = (): void => {
      const element = document.getElementById("portal-root");
      if (element) {
        setContainer(element);
      } else {
        requestAnimationFrame(checkElement);
      }
    };

    checkElement();
  }, []);

  if (isTouchDevice) {
    // Just return the trigger if on non-pointer devices
    return <>{props.trigger}</>;
  }

  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={DELAY}>
        <TooltipTrigger asChild>{props.trigger}</TooltipTrigger>
        <TooltipPortal container={container}>
          <TooltipContent
            role="dialog"
            aria-labelledby={ID}
            sideOffset={4}
            side={props.side ?? "right"}
            avoidCollisions
            collisionPadding={8}
            className={clsx(
              "z-50 max-w-56 overflow-hidden rounded-lg bg-elevation-float px-3 py-1.5 text-xs-regular shadow-md animate-in select-none fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 dark:bg-elevation-float-dark",
            )}
          >
            <p id={ID} className="text-elevation-float">
              {props.title}
            </p>
            {props.description && (
              <p className="text-elevation-float-secondary">{props.description}</p>
            )}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};

export default Tooltip;
