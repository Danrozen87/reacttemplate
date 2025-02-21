
import React from 'react';
import { useTranslation } from 'react-i18next';

interface AuthLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const AuthLabel: React.FC<AuthLabelProps> = ({ 
  children, 
  required, 
  htmlFor,
  ...props 
}) => {
  const { t } = useTranslation('auth-label');

  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      {...props}
    >
      {children}
      {required && <span className="text-destructive" aria-label={t("required")}>*</span>}
    </label>
  );
};
