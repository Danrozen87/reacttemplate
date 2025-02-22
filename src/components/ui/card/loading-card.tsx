
import * as React from "react"
import { cn } from "@/lib/utils"
import { animations } from "@/utils/animations"
import { Skeleton } from "../skeleton"

interface LoadingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
}

export function LoadingCard({ 
  className,
  lines = 3,
  ...props 
}: LoadingCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-4",
        animations.loadingStates.card.base,
        animations.loadingStates.card.loading,
        className
      )}
      {...props}
    >
      <Skeleton className="h-12 w-12 rounded-full" variant="circular" />
      <div className="space-y-3 mt-4">
        <Skeleton className="h-4 w-[250px]" variant="text" />
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton 
            key={i}
            className="h-4"
            variant="text"
            style={{ width: `${Math.random() * 30 + 70}%` }}
          />
        ))}
      </div>
    </div>
  )
}
