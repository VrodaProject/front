import { Button } from "@app/common/components/button/button.component";
import { Input } from "@app/common/components/input/input.component";
import { FC, useState } from "react";
import { Controller } from "react-hook-form";
import { Counter } from "@app/common/components/counter/counter.component";
import { toast } from "react-toastify";
import {
  LoginFormProps,
  LoginFormStep,
  LoginFormStepkeys,
} from "./login-form.types";
import { useLoginForm } from "./use-login-form";
import { Link } from "react-router-dom";

export const LoginForm: FC<LoginFormProps> = ({ onFirstStepCallback }) => {
  const [step] = useState<LoginFormStepkeys>(LoginFormStep.first);
  const { onSubmit, control, isSubmitting } = useLoginForm(
    step,
    onFirstStepCallback
  );

  return (
    <div className="w-full sm:w-112 mx-auto py-8 px-10 bg-white rounded-lg shadow">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
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
          <div className=" flex flex-col items-center gap-4">
            <Button type="submit" disbled={isSubmitting}>
              Ввійти
            </Button>
            <h1 className="text-l hover:text-darkTea font-normal underline underline-offset-2 hover:no-underline">
              <Link to="/register">Зареєструйтуватись</Link>
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};
