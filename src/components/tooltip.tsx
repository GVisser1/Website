"use client";

import type { ReactNode, JSX } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  Tooltip as TooltipRoot,
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { uniqueId } from "lodash-es";
import { seconds } from "../utils/timeUtil";
import { isTouchDevice } from "../utils/deviceUtil";

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
      const element = document.getElementById("headlessui-portal-root");
      if (element) {
        setContainer(element);
      } else {
        requestAnimationFrame(checkElement);
      }
    };

    checkElement();
  }, []);

  // Just return the trigger if on non-pointer devices
  if (isTouchDevice) {
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
              "z-50 max-w-56 overflow-hidden rounded-md bg-sunken-secondary-dark px-3 py-1.5 animate-in select-none fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            )}
          >
            <p id={ID} className="text-xs text-inverse">
              {props.title}
            </p>
            {props.description && <p className="text-xs text-secondary-dark">{props.description}</p>}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};

export default Tooltip;
