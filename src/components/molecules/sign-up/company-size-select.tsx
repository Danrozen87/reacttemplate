
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthLabel } from "@/components/atoms/auth-label";
import { CompanySizeSelect } from "@/components/atoms/company-size-select/company-size-select";

interface CompanySizeSelectFieldProps {
  onChange: (value: string) => void;
  value: string;
  error?: string;
}

export const CompanySizeSelectField: React.FC<CompanySizeSelectFieldProps> = ({ onChange, value, error }) => {
  const { t } = useTranslation('sign-up-form');

  return (
    <div>
      <AuthLabel htmlFor="companySize" required>
        {t('auth.signup.companySize')}
      </AuthLabel>
      <CompanySizeSelect
        value={value}
        onChange={onChange}
        error={error}
      />
    </div>
  );
};
