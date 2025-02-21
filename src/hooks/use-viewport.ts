
import * as React from "react";
import { BREAKPOINT_VALUES } from "@/constants/breakpoints";

export type Viewport = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * @hook useViewport
 * @description Hook for responsive viewport detection and dimensions
 * @returns Current viewport information and dimensions
 */
export function useViewport() {
  const [viewport, setViewport] = React.useState<Viewport>("xs");
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDimensions({ width, height });
      
      if (width >= BREAKPOINT_VALUES["2xl"]) setViewport("2xl");
      else if (width >= BREAKPOINT_VALUES.xl) setViewport("xl");
      else if (width >= BREAKPOINT_VALUES.lg) setViewport("lg");
      else if (width >= BREAKPOINT_VALUES.md) setViewport("md");
      else if (width >= BREAKPOINT_VALUES.sm) setViewport("sm");
      else setViewport("xs");
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    viewport,
    isMobile: viewport === "xs" || viewport === "sm",
    isTablet: viewport === "md",
    isDesktop: viewport === "lg" || viewport === "xl" || viewport === "2xl",
    dimensions,
  };
}