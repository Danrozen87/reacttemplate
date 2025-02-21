import { useState } from "react";
import { animations } from "@/utils/animations";
import { SignUpHeader } from "./sign-up/sign-up-header";
import { SignUpFields } from "./sign-up/sign-up-fields";
import { SignUpActions } from "./sign-up/sign-up-actions";

interface SignUpFormProps {
  onBack: () => void;
}

export function SignUpForm({ onBack }: SignUpFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Signup logic would go here
    setIsSubmitting(false);
  };

  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      <SignUpHeader />
      <form onSubmit={handleSubmit} className="space-y-4">
        <SignUpFields isSubmitting={isSubmitting} />
        <SignUpActions isSubmitting={isSubmitting} onBack={onBack} />
      </form>
    </div>
  );
}
