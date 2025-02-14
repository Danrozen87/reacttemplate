
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"
import { FormLabelProps } from "./types"
import { useFormField } from "./form-field"

/**
 * @component
 * @description Accessible label component for form fields
 */
export function FormLabel({ className, ...props }: FormLabelProps) {
  const { error, formItemId } = useFormField()

  return (
    <LabelPrimitive.Root
      className={cn(
        error && "text-destructive",
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      htmlFor={formItemId}
      {...props}
    />
  )
}
