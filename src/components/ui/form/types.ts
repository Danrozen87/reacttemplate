
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import {
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form"

export interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName
}

export interface FormItemContextValue {
  id: string
}

export interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends ControllerProps<TFieldValues, TName> {}

export interface FormItemProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface FormLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

export interface FormControlProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface FormMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
