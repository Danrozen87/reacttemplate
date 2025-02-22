
import { Button } from "@/components/ui/button"

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg bg-background p-8 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
        <pre className="mb-4 max-w-[500px] overflow-auto rounded bg-muted p-4 text-sm">
          {error.message}
        </pre>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </div>
    </div>
  )
}
