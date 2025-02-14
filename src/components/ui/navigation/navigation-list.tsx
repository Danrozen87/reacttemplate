
import * as React from "react"
import { cn } from "@/lib/utils"
import { NavigationListProps } from "./types"
import { animations } from "@/utils/animations"

/**
 * @component
 * @description Container for navigation items with responsive layout
 */
export function NavigationList({
  className,
  children,
  ...props
}: NavigationListProps) {
  return (
    <ul
      className={cn(
        "hidden md:flex items-center space-x-4",
        animations.modal.content.enter,
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

NavigationList.displayName = "NavigationList"
