import { Button } from "@app/common/components/button/button.component";
import { Input } from "@app/common/components/input/input.component";
import { RadionGroup } from "@app/common/components/radio-group/radio-group.component";
import { TextArea } from "@app/common/components/textarea/text-area.component";
import { FC, useEffect } from "react";
import { Controller } from "react-hook-form";
import { CheckoutFormProps } from "./checkout-form.types";
import { useCheckoutForm } from "./use-checkout-form";
import { Payment_Types_Enum } from "@app/core/types";

const options = [
  { label: "Готівка", value: Payment_Types_Enum.Cash },
  { label: "Картка", value: Payment_Types_Enum.Card },
  { label: "Онлайн", value: Payment_Types_Enum.Online },
];

export const CheckoutForm: FC<CheckoutFormProps> = ({
  submitCallback,
  initialValues,
}) => {
  const { control, onSubmit, reset } = useCheckoutForm({
    callback: submitCallback,
  });

  useEffect(() => {
    reset({
      name: initialValues?.name ?? "",
      address: initialValues?.address ?? "",
      phoneNumber: initialValues?.phone ?? "",
    });
  }, [initialValues]);

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            lable="Ім'я"
            fullWidth
            placeholder="Введіть ваше ім'я"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            lable="Телефон"
            fullWidth
            placeholder="Введіть ваше телефон"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            lable="Адреса"
            fullWidth
            placeholder="Введіть вашу адресу"
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="comment"
        control={control}
        render={({ field }) => (
          <TextArea
            {...field}
            lable="Коментар"
            fullWidth
            placeholder="Введіть будь-яку корисну інформацію"
          />
        )}
      />
      <Controller
        name="paymentType"
        control={control}
        render={({ field }) => (
          <RadionGroup label="Форма оплати" {...field} options={options} />
        )}
      />
      <Button fullWidth={true}>Підтвердити замовлення</Button>
    </form>
  );
};
