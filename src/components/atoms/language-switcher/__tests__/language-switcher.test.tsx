
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LanguageSwitcher } from "../language-switcher";
import { useToast } from "@/hooks/use-toast";
import type { ToasterToast } from "@/types/toast";

// Mock useTranslation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en'
    },
    t: (key: string) => key,
  }),
}));

// Mock useToast
vi.mock("@/hooks/use-toast", () => ({
  useToast: vi.fn(),
}));

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    vi.mocked(useToast).mockReturnValue({
      toast: vi.fn(),
      toasts: [],
      dismiss: vi.fn(),
    });
  });

  it("renders language switcher button", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens dropdown menu on click", () => {
    render(<LanguageSwitcher />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Svenska")).toBeInTheDocument();
    expect(screen.getByText("Dansk")).toBeInTheDocument();
    expect(screen.getByText("Nederlands")).toBeInTheDocument();
  });

  it("handles language change correctly", async () => {
    const mockToast = vi.fn();
    vi.mocked(useToast).mockReturnValue({
      toast: mockToast,
      dismiss: vi.fn(),
      toasts: []
    });
    
    render(<LanguageSwitcher />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Svenska"));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        description: "common.languageChanged",
        duration: 3000,
        className: "bg-background text-foreground border-accent",
        variant: "default",
        "aria-live": "polite",
      });
    });
  });

  it("applies correct styling for active language", () => {
    render(<LanguageSwitcher />);
    fireEvent.click(screen.getByRole("button"));
    
    const englishOption = screen.getByText("English").closest("div");
    expect(englishOption).toHaveClass("bg-accent");
  });

  it("maintains accessibility attributes", () => {
    render(<LanguageSwitcher />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "common.selectLanguage");
  });
});
