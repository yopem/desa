"use client"

import * as React from "react"
import { Portal } from "@ark-ui/react/portal"
import { Select as SelectPrimitive } from "@ark-ui/react/select"
import { Icon } from "@yopem-ui/react-icons"
import { cn } from "@yopem-ui/utils"

export const Select = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

const SelectControl = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Control>) => {
  return <SelectPrimitive.Control data-slot="select-control" {...props} />
}

const SelectPositioner = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Positioner>) => {
  return <SelectPrimitive.Positioner data-slot="select-positioner" {...props} />
}

export const SelectValueText = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ValueText>) => {
  return <SelectPrimitive.ValueText data-slot="select-value-text" {...props} />
}

export const SelectItemGroup = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ItemGroup>) => {
  return <SelectPrimitive.ItemGroup data-slot="select-item-group" {...props} />
}

export const SelectItemText = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ItemText>) => {
  return <SelectPrimitive.ItemText data-slot="select-item-value" {...props} />
}

export const SelectItemIndicator = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ItemIndicator>) => {
  return (
    <SelectPrimitive.ItemIndicator
      data-slot="select-item-indicator"
      {...props}
    />
  )
}

export const SelectTrigger = ({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) => {
  return (
    <SelectControl>
      <SelectPrimitive.Trigger
        data-slot="select-trigger"
        data-size={size}
        className={cn(
          "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className,
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Indicator asChild>
          <Icon name="ChevronDown" className="size-4 opacity-50" />
        </SelectPrimitive.Indicator>
      </SelectPrimitive.Trigger>
    </SelectControl>
  )
}

export const SelectContent = ({
  className,
  children,
  mode = "portal",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & {
  mode?: "portal" | "inline"
}) => {
  if (mode === "portal") {
    return (
      <Portal>
        <SelectPositioner>
          <SelectPrimitive.Content
            data-slot="select-content"
            className={cn(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              className,
            )}
            {...props}
          >
            {children}
          </SelectPrimitive.Content>
        </SelectPositioner>
      </Portal>
    )
  } else {
    return (
      <SelectPositioner>
        <SelectPrimitive.Content
          data-slot="select-content"
          className={cn(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            className,
          )}
          {...props}
        >
          {children}
        </SelectPrimitive.Content>
      </SelectPositioner>
    )
  }
}

export const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) => {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

export const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "select-item focus:bg-accent hover:bg-accent hover:text-accent-foreground group focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 hidden size-3.5 items-center justify-center group-data-[state=checked]:block">
        <Icon name="Check" className="size-4" />
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

export { createListCollection } from "@ark-ui/react/collection"
