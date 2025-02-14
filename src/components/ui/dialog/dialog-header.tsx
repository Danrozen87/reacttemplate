
import * as React from "react"
import { cn } from "@/lib/utils"
import { DialogHeaderProps } from "./types"

/**
 * @component
 * @description Header section of the dialog
 */
export function DialogHeader({
  className,
  ...props
}: DialogHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    />
  )
}

DialogHeader.displayName = "DialogHeader"
