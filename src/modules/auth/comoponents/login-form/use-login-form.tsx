import { phoneRegexp } from "@app/common/utils/regex";
import {
  LoginFormStepkeys,
  LoginFormStep,
  LoginFormValues,
} from "./login-form.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const generateValidationSchema = (step: LoginFormStepkeys) => {
  if (step === LoginFormStep.first) {
    return yup.object({
      phoneNumber: yup
        .string()
        .trim()
        .matches(phoneRegexp, "Введіть коректний телефонний номер")
        .required("Введіть телефонний номер"),
      password: yup.string().required("Введіть вірний пароль"),
    });
  }
};

export const useLoginForm = (
  step: LoginFormStepkeys,
  firstStepCallback?: (phone: string, password: string) => Promise<void>
) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(generateValidationSchema(step)!),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const submitForm = async (values: LoginFormValues) => {
    try {
      if (step === LoginFormStep.first) {
        if (firstStepCallback !== undefined) {
          await firstStepCallback(values.phoneNumber, values.password);
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
