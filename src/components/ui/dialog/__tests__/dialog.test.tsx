
import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from ".."

describe("Dialog Component", () => {
  it("opens when trigger is clicked", () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByText("Open")
    fireEvent.click(trigger)
    
    expect(screen.getByText("Test Dialog")).toBeInTheDocument()
  })

  it("closes when escape key is pressed", () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByText("Open")
    fireEvent.click(trigger)
    fireEvent.keyDown(document.body, { key: "Escape" })
    
    expect(screen.queryByText("Test Dialog")).not.toBeInTheDocument()
  })

  it("has proper accessibility attributes", () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByText("Open")
    fireEvent.click(trigger)
    
    const dialog = screen.getByRole("dialog")
    expect(dialog).toHaveAttribute("aria-modal", "true")
  })
})
