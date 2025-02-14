
import * as React from "react"
import { cn } from "@/lib/utils"
import { NavigationItemProps } from "./types"
import { animations } from "@/utils/animations"

/**
 * @component
 * @description Individual navigation item with active state and hover effects
 */
export function NavigationItem({
  className,
  active,
  children,
  ...props
}: NavigationItemProps) {
  return (
    <li>
      <a
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          active && "bg-accent text-accent-foreground",
          animations.modal.content.enter,
          className
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}

NavigationItem.displayName = "NavigationItem"
