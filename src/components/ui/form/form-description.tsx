
import * as React from "react"
import { cn } from "@/lib/utils"
import { FormDescriptionProps } from "./types"
import { useFormField } from "./form-field"

/**
 * @component
 * @description Help text component for form fields
 */
export function FormDescription({ className, ...props }: FormDescriptionProps) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
