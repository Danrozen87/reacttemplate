import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AuthInput, AuthLabel, CompanySizeSelect } from "@/components/atoms";
import { useTranslation } from 'react-i18next';

interface SignUpFieldsProps {
  className?: string;
}

export const SignUpFields: React.FC<SignUpFieldsProps> = ({ className }) => {
  const { t } = useTranslation('sign-up-form');
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className={className}>
      <AuthLabel htmlFor="companyName" required>
        {t('company-name-label')}
      </AuthLabel>
      <AuthInput
        id="companyName"
        type="text"
        placeholder={t('company-name-placeholder')}
        {...register("companyName", {
          required: t('company-name-required'),
        })}
        error={errors.companyName?.message as string}
      />

      <AuthLabel htmlFor="companySize" required>
        {t('company-size-label')}
      </AuthLabel>
      <CompanySizeSelect
        value={""}
        onChange={() => {}}
      />

      <AuthLabel htmlFor="firstName" required>
        {t('first-name-label')}
      </AuthLabel>
      <AuthInput
        id="firstName"
        type="text"
        placeholder={t('first-name-placeholder')}
        {...register("firstName", {
          required: t('first-name-required'),
        })}
        error={errors.firstName?.message as string}
      />

      <AuthLabel htmlFor="lastName" required>
        {t('last-name-label')}
      </AuthLabel>
      <AuthInput
        id="lastName"
        type="text"
        placeholder={t('last-name-placeholder')}
        {...register("lastName", {
          required: t('last-name-required'),
        })}
        error={errors.lastName?.message as string}
      />
    </div>
  );
};
