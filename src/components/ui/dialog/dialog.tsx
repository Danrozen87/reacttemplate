
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { useTranslation } from "react-i18next"
import { DialogProps } from "./types"
import { animations } from "@/utils/animations"

/**
 * @component
 * @description Root dialog component that manages state and context
 */
export function Dialog({ children, ...props }: DialogProps) {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
}

Dialog.displayName = "Dialog"
