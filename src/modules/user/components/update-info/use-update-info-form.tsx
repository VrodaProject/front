import { phoneRegexp } from "@app/common/utils/regex";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UpdateInfoFormValues, min3Symbols } from "./upadate-info.types";
import * as yup from "yup";
import { FrontCustomer } from "../../types/user";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneRegexp, "Введіть коректний телефонний номер")
    .required("Введіть телефонний номер"),
  name: yup.string().matches(min3Symbols, {
    excludeEmptyString: true,
    message: "Введіть мінімум 3 символи",
  }),
  address: yup.string().matches(min3Symbols, {
    excludeEmptyString: true,
    message: "Введіть мінімум 3 символи",
  }),
});

export const useUpdateInfoForm = (
  initialValues?: FrontCustomer,
  onSubmitCallback?: (values: UpdateInfoFormValues) => Promise<void>
) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<UpdateInfoFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      phoneNumber: initialValues?.phone,
      name: initialValues?.name || "",
      address: initialValues?.address || "",
    },
  });

  const submitForm = async (values: UpdateInfoFormValues) => {
    if (onSubmitCallback) {
      try {
        await onSubmitCallback(values);

        toast.success("Дані оновлено");
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { onSubmit, isSubmitting, control, reset };
};
