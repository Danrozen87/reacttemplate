
import * as React from "react"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMobileProps } from "./types"
import { animations } from "@/utils/animations"

/**
 * @component
 * @description Mobile navigation menu with slide-out sheet
 */
export function NavigationMobile({ children }: NavigationMobileProps) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={isOpen 
            ? t("components.navigation.aria.closeMenu")
            : t("components.navigation.aria.openMenu")
          }
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={cn("w-[300px] sm:w-[400px]", animations.blur.sm)}>
        <nav className="flex flex-col space-y-4" aria-label={t("components.navigation.aria.mobileMenu")}>
          {children}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

NavigationMobile.displayName = "NavigationMobile"
