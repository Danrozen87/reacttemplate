
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CompanySizeSelect } from "../company-size-select";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("CompanySizeSelect", () => {
  const defaultProps = {
    value: "",
    onChange: vi.fn(),
  };

  it("renders with placeholder", () => {
    render(<CompanySizeSelect {...defaultProps} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("displays all company size options", () => {
    render(<CompanySizeSelect {...defaultProps} />);
    fireEvent.click(screen.getByRole("combobox"));
    
    expect(screen.getByText("company-size.1-10")).toBeInTheDocument();
    expect(screen.getByText("company-size.11-50")).toBeInTheDocument();
    expect(screen.getByText("company-size.51-200")).toBeInTheDocument();
    expect(screen.getByText("company-size.201-500")).toBeInTheDocument();
    expect(screen.getByText("company-size.501+")).toBeInTheDocument();
  });

  it("calls onChange when option is selected", () => {
    render(<CompanySizeSelect {...defaultProps} />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("company-size.1-10"));
    expect(defaultProps.onChange).toHaveBeenCalledWith("1-10");
  });

  it("applies error states correctly", () => {
    render(<CompanySizeSelect {...defaultProps} error="Error message" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveAttribute("aria-invalid", "true");
    expect(select).toHaveAttribute("aria-errormessage", "company-size-error");
  });

  it("disables the select when specified", () => {
    render(<CompanySizeSelect {...defaultProps} disabled />);
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-disabled", "true");
  });

  it("applies focus styles correctly", () => {
    render(<CompanySizeSelect {...defaultProps} />);
    const select = screen.getByRole("combobox");
    fireEvent.focus(select);
    expect(select).toHaveClass("focus:scale-[1.02]", "focus:shadow-sm");
  });

  it("maintains font consistency", () => {
    render(<CompanySizeSelect {...defaultProps} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("font-poppins");
  });

  it("handles null value gracefully", () => {
    render(<CompanySizeSelect {...defaultProps} value={null} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
