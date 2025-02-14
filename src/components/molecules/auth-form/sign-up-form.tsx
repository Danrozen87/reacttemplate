
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { animations } from "@/utils/animations";

interface SignUpFormProps {
  onBack: () => void;
}

export function SignUpForm({ onBack }: SignUpFormProps) {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Signup logic would go here
    setIsSubmitting(false);
  };

  const companySizes = [
    { value: "0-10", label: "0-10 employees" },
    { value: "10-50", label: "10-50 employees" },
    { value: "50-100", label: "50-100 employees" },
    { value: "100+", label: "100+ employees" },
  ];

  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold tracking-tight font-poppins">Create an Account</h2>
        <p className="text-sm text-muted-foreground font-poppins font-light">
          Enter your information to get started
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="John"
              required
              disabled={isSubmitting}
              className="font-poppins bg-input shadow-sm border-input-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              required
              disabled={isSubmitting}
              className="font-poppins bg-input shadow-sm border-input-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@company.com"
            required
            disabled={isSubmitting}
            className="font-poppins bg-input shadow-sm border-input-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            placeholder="Acme Inc."
            required
            disabled={isSubmitting}
            className="font-poppins bg-input shadow-sm border-input-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companySize">Company Size</Label>
          <Select disabled={isSubmitting}>
            <SelectTrigger className="w-full font-poppins bg-input shadow-sm border-input-border">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              {companySizes.map((size) => (
                <SelectItem 
                  key={size.value} 
                  value={size.value}
                  className="font-poppins"
                >
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full font-poppins"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>

        <Button
          type="button"
          variant="link"
          onClick={onBack}
          className="w-full font-poppins font-light"
          disabled={isSubmitting}
        >
          Back to Login
        </Button>
      </form>
    </div>
  );
}
