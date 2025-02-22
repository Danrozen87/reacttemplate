
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { animations } from "@/utils/animations";
import { SignUpHeader } from "./sign-up-header";
import { SignUpFields } from "./sign-up-fields";
import { SignUpActions } from "./sign-up-actions";

interface SignUpFormProps {
  onBack: () => void;
}

interface SignUpFormData {
  companyName: string;
  companySize: string;
  firstName: string;
  lastName: string;
}

export function SignUpForm({ onBack }: SignUpFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = useForm<SignUpFormData>({
    defaultValues: {
      companyName: "",
      companySize: "",
      firstName: "",
      lastName: "",
    },
    mode: "onBlur"
  });

  const handleSubmit = async (data: SignUpFormData) => {
    if (!data.companySize) {
      methods.setError('companySize', {
        type: 'required',
        message: methods.getValues('companySize') 
          ? methods.getValues('companySize')
          : 'Company size is required'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Signup logic would go here
      console.log("Form data:", data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      <SignUpHeader />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)} className="space-y-4">
          <SignUpFields className="space-y-4" />
          <SignUpActions isSubmitting={isSubmitting} onBack={onBack} />
        </form>
      </FormProvider>
    </div>
  );
}
