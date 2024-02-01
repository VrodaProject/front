import { phoneRegexp } from "@app/common/utils/regex";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  CheckoutFormValues,
  UseCheckoutFormOptions,
} from "./checkout-form.types";

import { toast } from "react-toastify";
import { Payment_Types_Enum } from "@app/core/types";

const validation = yup.object({
  name: yup.string().required("Поле обов'язкове!"),
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneRegexp, "Введіть коректний телефонний номер")
    .required("Введіть телефонний номер"),
  address: yup.string().required("Поле обов'язкове!"),
  paymentType: yup
    .string()
    .oneOf([
      Payment_Types_Enum.Card,
      Payment_Types_Enum.Cash,
      Payment_Types_Enum.Online,
    ])
    .required("Оберіть спосіб оплати"),
  comment: yup.string().notRequired().nonNullable(),
});

export const useCheckoutForm = (options?: UseCheckoutFormOptions) => {
  const { handleSubmit, control, reset } = useForm<CheckoutFormValues>({
    resolver: yupResolver(validation),
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      paymentType: Payment_Types_Enum.Cash,
      comment: "",
    },
  });

  const submitForm = async (values: CheckoutFormValues) => {
    if (options?.callback) {
      try {
        await options?.callback(values);
        toast.success("Замовлення створене!");
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };
  const onSubmit = handleSubmit(submitForm);

  return { control, onSubmit, reset };
};
