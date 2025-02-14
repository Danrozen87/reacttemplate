
import * as React from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { NavigationProps } from "./types"
import { animations } from "@/utils/animations"

/**
 * @component
 * @description Main navigation component with blur effect and theme support
 */
export function Navigation({ 
  className,
  containerClassName,
  children,
  ...props 
}: NavigationProps) {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        isScrolled && [
          "border-b",
          "bg-background/95",
          animations.blur.DEFAULT,
          "supports-[backdrop-filter]:bg-background/60"
        ],
        className
      )}
      aria-label={t("components.navigation.aria.mainNav")}
      {...props}
    >
      <div className={cn(
        "container mx-auto px-4 h-16 flex items-center justify-between",
        containerClassName
      )}>
        {children}
      </div>
    </nav>
  )
}

Navigation.displayName = "Navigation"
