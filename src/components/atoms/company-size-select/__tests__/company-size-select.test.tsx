
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

  it("applies error states correctly", () => {
    render(<CompanySizeSelect {...defaultProps} error="Error message" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveAttribute("aria-invalid", "true");
    expect(select).toHaveAttribute("aria-errormessage", "company-size-error");
  });

  it("disables the select when specified", () => {
    render(<CompanySizeSelect {...defaultProps} disabled />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
