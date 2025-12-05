"use client";

import type { SelectContentProps, SelectItemProps } from "@radix-ui/react-select";
import * as Radix from "@radix-ui/react-select";
import clsx from "clsx";
import type { ComponentRef } from "react";
import { forwardRef } from "react";
import { useFont } from "../../hooks/useFont";
import Icon from "../icon";

const Select = Radix.Root;
const SelectValue = Radix.Value;

const SelectTrigger = forwardRef<ComponentRef<typeof Radix.Trigger>, Radix.SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <Radix.Trigger
      ref={ref}
      className={clsx(
        "btn-ghost flex h-10 w-full items-center justify-between gap-x-2 rounded-sm border border-primary px-3 py-2 text-button focus-visible:focus-ring dark:border-primary-dark",
        className,
      )}
      {...props}
    >
      {children}
      <Icon name="ChevronDown" className="size-5 text-secondary dark:text-secondary-dark" />
    </Radix.Trigger>
  ),
);
SelectTrigger.displayName = Radix.Trigger.displayName;

const SelectContent = forwardRef<ComponentRef<typeof Radix.Content>, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { getFontClass } = useFont();
    return (
      <Radix.Portal>
        <Radix.Content
          ref={ref}
          className={clsx(
            "relative z-50 max-h-60 w-(--radix-select-trigger-width) min-w-32 overflow-hidden rounded-md border border-primary shadow-md",
            "bg-default text-primary dark:border-primary-dark dark:bg-default-dark dark:text-primary-dark",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
            getFontClass(),
          )}
          position="popper"
          align="end"
          sideOffset={4}
          {...props}
        >
          <Radix.Viewport className="p-1">{children}</Radix.Viewport>
        </Radix.Content>
      </Radix.Portal>
    );
  },
);
SelectContent.displayName = Radix.Content.displayName;

const SelectItem = forwardRef<ComponentRef<typeof Radix.Item>, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <Radix.Item
      ref={ref}
      className={clsx(
        "btn-ghost relative flex h-10 w-full items-center truncate rounded-sm py-1.5 pr-8 pl-2 text-button outline-hidden select-none",
        "focus:bg-btn-ghost-hover dark:focus:bg-btn-ghost-hover-dark",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex items-center justify-center">
        <Radix.ItemIndicator>
          <Icon name="Check" className="size-4" />
        </Radix.ItemIndicator>
      </span>
      <Radix.ItemText>
        <div className="flex items-center gap-x-1">{children}</div>
      </Radix.ItemText>
    </Radix.Item>
  ),
);
SelectItem.displayName = Radix.Item.displayName;

export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem };
