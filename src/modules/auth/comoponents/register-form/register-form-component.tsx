import { Button } from "@app/common/components/button/button.component";
import { Input } from "@app/common/components/input/input.component";
import { FC, useState } from "react";
import { Controller } from "react-hook-form";

import { useRegisterForm } from "./use-register-form";
import {
  RegisterFormProps,
  RegisterFormStepkeys,
  RegisterFormStep,
} from "./register-form.types";
import { Link } from "react-router-dom";

export const RegisterForm: FC<RegisterFormProps> = ({
  onFirstStepCallback,
}) => {
  const [step] = useState<RegisterFormStepkeys>(RegisterFormStep.first);
  const { onSubmit, control, isSubmitting } = useRegisterForm(
    step,
    onFirstStepCallback
  );

  return (
    <div className="w-full sm:w-112 mx-auto py-8 px-10 bg-white rounded-lg shadow">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                lable="Ім'я"
                placeholder="Введіть своє ім'я"
                fullWidth
                error={fieldState.error?.message}
                type="text"
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                lable="Пароль"
                placeholder="Введіть паролть"
                fullWidth
                error={fieldState.error?.message}
                type="password"
                {...field}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                lable="Телефон"
                placeholder="+380976597611"
                fullWidth
                error={fieldState.error?.message}
                type="text"
                {...field}
              />
            )}
          />

          <Controller
            name="address"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                lable="Адресса"
                placeholder="Введіть свою адрессу"
                fullWidth
                error={fieldState.error?.message}
                type="text"
                {...field}
              />
            )}
          />

          <div className="flex flex-col items-center gap-4  ">
            <Button type="submit" disbled={isSubmitting}>
              Зареєструвати
            </Button>
            <h1 className="text-l hover:text-darkTea font-normal underline underline-offset-2 hover:no-underline">
              <Link to="/login">Вже є акаунт</Link>
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};
