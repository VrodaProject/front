import { Payment_Types_Enum } from "@app/core/types";
import { FrontCustomer } from "@app/modules/user/types/user";

export interface CheckoutFormProps {
  submitCallback?: (values: CheckoutFormValues) => Promise<void>;
  initialValues?: FrontCustomer;
}

export interface CheckoutFormValues {
  name: string;
  phoneNumber: string;
  address: string;
  paymentType:
    | Payment_Types_Enum.Card
    | Payment_Types_Enum.Cash
    | Payment_Types_Enum.Online;
  comment?: string | undefined;
}

export interface UseCheckoutFormOptions {
  callback?: (values: CheckoutFormValues) => Promise<void>;
}
