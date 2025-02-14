
import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Navigation, NavigationList, NavigationItem, NavigationMobile } from ".."

describe("Navigation Component", () => {
  it("renders navigation items correctly", () => {
    render(
      <Navigation>
        <NavigationList>
          <NavigationItem href="/">Home</NavigationItem>
          <NavigationItem href="/about">About</NavigationItem>
        </NavigationList>
      </Navigation>
    )

    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
  })

  it("applies blur effect on scroll", () => {
    render(
      <Navigation>
        <NavigationList>
          <NavigationItem href="/">Home</NavigationItem>
        </NavigationList>
      </Navigation>
    )

    fireEvent.scroll(window, { target: { scrollY: 100 } })
    const nav = screen.getByRole("navigation")
    expect(nav).toHaveClass("bg-background/95")
  })

  it("highlights active item", () => {
    render(
      <Navigation>
        <NavigationList>
          <NavigationItem href="/" active>Home</NavigationItem>
        </NavigationList>
      </Navigation>
    )

    const activeLink = screen.getByText("Home").closest("a")
    expect(activeLink).toHaveClass("bg-accent")
  })

  it("opens mobile menu", () => {
    render(
      <NavigationMobile>
        <NavigationItem href="/">Home</NavigationItem>
      </NavigationMobile>
    )

    const menuButton = screen.getByRole("button")
    fireEvent.click(menuButton)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })
})
