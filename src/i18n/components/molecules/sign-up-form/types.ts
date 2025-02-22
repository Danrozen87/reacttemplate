
export interface SignUpFormTranslations {
  auth: {
    signup: {
      title: string;
      description: string;
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      companyName: string;
      companyNamePlaceholder: string;
      companySize: string;
      companySizePlaceholder: string;
      create: string;
      creating: string;
      backToLogin: string;
      errors: {
        companyNameRequired: string;
        companySizeRequired: string;
        firstNameRequired: string;
        lastNameRequired: string;
      };
      "company-size": {
        "1-10": string;
        "11-50": string;
        "51-200": string;
        "201-500": string;
        "501+": string;
      };
    };
  };
}
