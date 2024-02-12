export interface LoginFormProps {
  onFirstStepCallback?: (phone: string, password: string) => Promise<void>;
}

export interface LoginFormValues {
  phoneNumber: string;
  password: string;
}

export enum LoginFormStep {
  first = "first",
}

export type LoginFormStepkeys = keyof typeof LoginFormStep;
