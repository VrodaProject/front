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
  const baseValidation = {
    phoneNumber: yup
      .string()
      .trim()
      .matches(phoneRegexp, "Введіть коректний телефонний номер")
      .required("Введіть телефонний номер"),
  };

  if (step === LoginFormStep.first) {
    return yup.object(baseValidation);
  } else {
    return yup.object({
      ...baseValidation,
      code: yup.string().required("Введіть код"),
    });
  }
};

export const useLoginForm = (
  step: LoginFormStepkeys,
  setStep: (step: LoginFormStepkeys) => void,
  firstStepCallback?: (phoneNumber: string) => Promise<void>,
  secondStepCallback?: (phoneNumber: string, code: string) => Promise<void>
) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(generateValidationSchema(step)),

    defaultValues: {
      phoneNumber: "",
      code: "",
    },
  });
  const submitForm = async (values: LoginFormValues) => {
    try {
      if (step === LoginFormStep.first) {
        if (firstStepCallback !== undefined) {
          await firstStepCallback(values.phoneNumber);
        }
        setStep(LoginFormStep.second);
        return;
      }
      if (secondStepCallback !== undefined) {
        await secondStepCallback(values.phoneNumber, values.code!);
      }
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { getValues, onSubmit, control, isSubmitting };
};
