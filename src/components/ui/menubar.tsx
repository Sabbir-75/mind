"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { cn } from "@/lib/utils"



function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-rose-900 flex h-14 items-center justify-center gap-6 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

interface MenubarTriggerProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> {
  isActive?: boolean; 
}

function MenubarTrigger({
  className,
  isActive,
  ...props
}: MenubarTriggerProps) {

  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      data-active={isActive}
      className={cn(
        "hover:bg-accent text-lg hover:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-white border-2 border-white font-medium outline-hidden select-none",
        className,
        isActive && "bg-accent text-black"
        // "data-[active=true]:bg-accent data-[active=true]:text-black",
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
}
// data-[state=open]:bg-blue-600 data-[state=open]:text-fuchsia-700