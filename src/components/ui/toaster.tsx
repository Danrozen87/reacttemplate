
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster 
      position="top-right"
      toastOptions={{
        duration: 3000,
        className: "text-sm font-medium border-border bg-background text-foreground",
      }}
    />
  );
}
