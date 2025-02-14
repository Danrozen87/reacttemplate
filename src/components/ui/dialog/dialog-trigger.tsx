
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { DialogTriggerProps } from "./types"

/**
 * @component
 * @description Button that triggers the dialog to open
 */
export function DialogTrigger({ className, ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />
}

DialogTrigger.displayName = "DialogTrigger"
