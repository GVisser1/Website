"use client";

import * as React from "react";
import * as Radix from "@radix-ui/react-select";
import type { SelectContentProps, SelectItemProps } from "@radix-ui/react-select";
import clsx from "clsx";
import Icon from "../icon";
import type { ElementRef } from "react";
import { forwardRef } from "react";
import { useFont } from "../../hooks/useFont";

const Select = Radix.Root;
const SelectValue = Radix.Value;

const SelectTrigger = forwardRef<ElementRef<typeof Radix.Trigger>, Radix.SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <Radix.Trigger
      ref={ref}
      className={clsx(
        "flex h-10 w-full items-center justify-between rounded border px-3 py-2 text-sm text-zinc-700 shadow-sm focus-visible:outline dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
        className
      )}
      {...props}
    >
      {children}
      <Icon name="ChevronDown" className="text-zinc-500 dark:text-zinc-400" />
    </Radix.Trigger>
  )
);
SelectTrigger.displayName = Radix.Trigger.displayName;

const SelectContent = forwardRef<ElementRef<typeof Radix.Content>, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { getFontClass } = useFont();
    return (
      <Radix.Portal>
        <Radix.Content
          ref={ref}
          className={clsx(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md",
            "bg-white text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
            getFontClass()
          )}
          position="item-aligned"
          {...props}
        >
          <Radix.Viewport className="p-1">{children}</Radix.Viewport>
        </Radix.Content>
      </Radix.Portal>
    );
  }
);
SelectContent.displayName = Radix.Content.displayName;

const SelectItem = forwardRef<ElementRef<typeof Radix.Item>, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <Radix.Item
      ref={ref}
      className={clsx(
        "relative flex w-full select-none items-center truncate rounded py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-50 dark:focus:bg-zinc-800",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <Radix.ItemIndicator>
          <Icon name="Check" overrideSize className="size-4" />
        </Radix.ItemIndicator>
      </span>
      <Radix.ItemText>
        <div className="flex items-center gap-x-1">{children}</div>
      </Radix.ItemText>
    </Radix.Item>
  )
);
SelectItem.displayName = Radix.Item.displayName;

export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem };
