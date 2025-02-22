
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
}

function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-muted/60",
        variant === 'circular' && "rounded-full",
        variant === 'rectangular' && "rounded-md",
        variant === 'text' && "rounded h-4 w-3/4",
        className
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    />
  )
}

export { Skeleton }
