
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AuthInput, AuthLabel, CompanySizeSelect } from "@/components/atoms";
import { useTranslation } from 'react-i18next';

export interface SignUpFieldsProps {
  className?: string;
}

export const SignUpFields: React.FC<SignUpFieldsProps> = ({ className }) => {
  const { t } = useTranslation('sign-up-form');
  const { register, formState: { errors }, watch, setValue } = useFormContext();
  const companySize = watch('companySize', '');

  return (
    <div className={className}>
      <AuthLabel htmlFor="companyName" required>
        {t('auth.signup.companyName')}
      </AuthLabel>
      <AuthInput
        id="companyName"
        type="text"
        placeholder={t('auth.signup.companyNamePlaceholder')}
        {...register("companyName", {
          required: t('auth.signup.errors.companyNameRequired'),
          minLength: {
            value: 2,
            message: t('auth.signup.errors.companyNameTooShort')
          },
          maxLength: {
            value: 100,
            message: t('auth.signup.errors.companyNameTooLong')
          }
        })}
        error={errors.companyName?.message as string}
      />

      <AuthLabel htmlFor="companySize" required>
        {t('auth.signup.companySize')}
      </AuthLabel>
      <CompanySizeSelect
        value={companySize}
        onChange={(value) => {
          setValue('companySize', value, {
            shouldValidate: true,
            shouldDirty: true
          });
        }}
        error={errors.companySize?.message as string}
      />

      <AuthLabel htmlFor="firstName" required>
        {t('auth.signup.firstName')}
      </AuthLabel>
      <AuthInput
        id="firstName"
        type="text"
        placeholder={t('auth.signup.firstNamePlaceholder')}
        {...register("firstName", {
          required: t('auth.signup.errors.firstNameRequired'),
          minLength: {
            value: 2,
            message: t('auth.signup.errors.firstNameTooShort')
          },
          maxLength: {
            value: 50,
            message: t('auth.signup.errors.firstNameTooLong')
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\s-]+$/,
            message: t('auth.signup.errors.firstNameInvalid')
          }
        })}
        error={errors.firstName?.message as string}
      />

      <AuthLabel htmlFor="lastName" required>
        {t('auth.signup.lastName')}
      </AuthLabel>
      <AuthInput
        id="lastName"
        type="text"
        placeholder={t('auth.signup.lastNamePlaceholder')}
        {...register("lastName", {
          required: t('auth.signup.errors.lastNameRequired'),
          minLength: {
            value: 2,
            message: t('auth.signup.errors.lastNameTooShort')
          },
          maxLength: {
            value: 50,
            message: t('auth.signup.errors.lastNameTooLong')
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\s-]+$/,
            message: t('auth.signup.errors.lastNameInvalid')
          }
        })}
        error={errors.lastName?.message as string}
      />
    </div>
  );
};
