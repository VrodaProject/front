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

export const LoginForm: FC<LoginFormProps> = ({
  onFirstStepCallback,
  onSecondStepCallback,
}) => {
  const [step, setStep] = useState<LoginFormStepkeys>(LoginFormStep.first);
  const { getValues, onSubmit, control, isSubmitting } = useLoginForm(
    step,
    setStep,
    onFirstStepCallback,
    onSecondStepCallback
  );

  const onResend = async () => {
    const phoneNumber = getValues("phoneNumber");

    if (onFirstStepCallback) {
      try {
        await onFirstStepCallback(phoneNumber);
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };

  return (
    <div className="w-112 mx-auto py-8 px-10 bg-white rounded-lg shadow">
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
                disabled={step === LoginFormStep.second}
                {...field}
              />
            )}
          />
          {step === LoginFormStep.second && (
            <Controller
              name="code"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  lable="Код"
                  placeholder="Введіть код з SMS"
                  fullWidth
                  error={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          )}
          <div className="text-center">
            <Button type="submit" disbled={isSubmitting}>
              {step === LoginFormStep.first ? "Отримати код" : "Ввійти"}
            </Button>
          </div>
          <div>
            {step === LoginFormStep.second && (
              <Counter onRestart={onResend}>Відправити код ще раз </Counter>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
