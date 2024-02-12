export interface RegisterFormData {
  phoneNumber: string;
  password: string;
  name: string;
  address: string;
}
export interface RegisterFormProps {
  onFirstStepCallback?: (
    phone: string,
    password: string,
    name: string,
    address: string
  ) => Promise<void>;
}

export interface RegisterFormValues {
  phoneNumber: string;
  password: string;
  name: string;
  address: string;
}

export enum RegisterFormStep {
  first = "first",
}

export type RegisterFormStepkeys = keyof typeof RegisterFormStep;
