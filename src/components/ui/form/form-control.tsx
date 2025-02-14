
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { FormControlProps } from "./types"
import { useFormField } from "./form-field"

/**
 * @component
 * @description Wrapper component for form input controls
 */
export function FormControl({ ...props }: FormControlProps) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}
