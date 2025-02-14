
import * as React from "react"
import { cn } from "@/lib/utils"
import { DialogFooterProps } from "./types"

/**
 * @component
 * @description Footer section of the dialog
 */
export function DialogFooter({
  className,
  ...props
}: DialogFooterProps) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  )
}

DialogFooter.displayName = "DialogFooter"
