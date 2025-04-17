"use client";

import type { ReactNode } from "react";
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
import { seconds } from "@/utils/timeUtil";

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
  if (window.matchMedia("(pointer: coarse)").matches) {
    return <>{props.trigger}</>;
  }

  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={DELAY} disableHoverableContent>
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
              "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-56 overflow-hidden rounded-md bg-zinc-800 px-3 py-1.5 text-xs text-white select-none",
            )}
          >
            <p id={ID}>{props.title}</p>
            {props.description && <p className="text-xs text-zinc-400">{props.description}</p>}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};

export default Tooltip;
