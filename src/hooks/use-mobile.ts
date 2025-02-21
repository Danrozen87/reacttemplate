
/**
 * @hook useIsMobile
 * @description Custom hook to detect mobile viewport
 * @returns {boolean} True if viewport is mobile size
 * @example
 * ```tsx
 * const isMobile = useIsMobile();
 * return isMobile ? <MobileNav /> : <DesktopNav />;
 * ```
 */
import * as React from "react"
import { BREAKPOINT_VALUES } from "@/constants/breakpoints"

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINT_VALUES.md - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINT_VALUES.md)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < BREAKPOINT_VALUES.md)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}