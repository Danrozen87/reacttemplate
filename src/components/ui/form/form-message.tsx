
import * as React from "react"
import { cn } from "@/lib/utils"
import { FormMessageProps } from "./types"
import { useFormField } from "./form-field"

/**
 * @component
 * @description Error message component for form fields
 */
export function FormMessage({ className, children, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
}
