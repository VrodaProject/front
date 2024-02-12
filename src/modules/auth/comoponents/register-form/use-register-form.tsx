import { phoneRegexp } from "@app/common/utils/regex";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  RegisterFormStepkeys,
  RegisterFormStep,
  RegisterFormValues,
} from "./register-form.types";

const generateValidationSchema = (step: RegisterFormStepkeys) => {
  if (step === RegisterFormStep.first) {
    return yup.object({
      phoneNumber: yup
        .string()
        .trim()
        .matches(phoneRegexp, "Введіть коректний телефонний номер")
        .required("Введіть телефонний номер"),
      password: yup.string().required("Введіть пароль"),
      name: yup.string().required("Введіть ваше ім'я"),
      address: yup.string().required("Введіть вашу адресу"),
    });
  }
};

export const useRegisterForm = (
  step: RegisterFormStepkeys,
  firstStepCallback?: (
    phone: string,
    password: string,
    address: string,
    name: string
  ) => Promise<void>
) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(generateValidationSchema(step)!),
    defaultValues: {
      phoneNumber: "",
      password: "",
      address: "",
      name: "",
    },
  });

  const submitForm = async (values: RegisterFormValues) => {
    try {
      if (step === RegisterFormStep.first) {
        if (firstStepCallback !== undefined) {
          await firstStepCallback(
            values.phoneNumber,
            values.password,
            values.address,
            values.name
          );
        }

        return;
      }
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { getValues, onSubmit, control, isSubmitting };
};
