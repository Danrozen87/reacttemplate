
import * as React from "react"
import { cn } from "@/lib/utils"
import { animations } from "@/utils/animations"
import { Button } from "./button"
import { Loader2 } from "lucide-react"

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function LoadingButton({ 
  isLoading, 
  loadingText,
  children,
  className,
  disabled,
  ...props 
}: LoadingButtonProps) {
  return (
    <Button
      className={cn(
        animations.loadingStates.button.base,
        isLoading && animations.loadingStates.button.loading,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className={cn("mr-2 h-4 w-4", animations.loading.spinner)} />
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </Button>
  )
}
