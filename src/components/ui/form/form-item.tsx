
import * as React from "react"
import { cn } from "@/lib/utils"
import { FormItemProps, FormItemContextValue } from "./types"

export const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

/**
 * @component
 * @description Container component for form elements
 */
export function FormItem({ className, ...props }: FormItemProps) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
}
