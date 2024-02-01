import { ActionPaperFooter } from "@app/common/components/action-paper-footer/action-paper-footer.component";
import { ActionPaper } from "@app/common/components/action-paper/action-paper.component";
import { Button } from "@app/common/components/button/button.component";
import { Input } from "@app/common/components/input/input.component";
import { FC, useEffect } from "react";
import { Controller } from "react-hook-form";
import { useUpdateInfoForm } from "./use-update-info-form";
import { UpdateInfoProps } from "./upadate-info.types";

export const UpdateInfo: FC<UpdateInfoProps> = ({
  initialValues,
  onSubmitCallback,
  isUpdating,
}) => {
  const { onSubmit, isSubmitting, control, reset } = useUpdateInfoForm(
    initialValues,
    onSubmitCallback
  );

  useEffect(() => {
    if (!isUpdating) {
      reset({
        name: initialValues?.name ?? "",
        address: initialValues?.address ?? "",
        phoneNumber: initialValues?.phone ?? "",
      });
    }
  }, [isUpdating, initialValues]);

  const actionPaperFooter = (
    <ActionPaperFooter>
      <Button type="submit" onClick={onSubmit} disbled={isSubmitting}>
        Зберегти
      </Button>
    </ActionPaperFooter>
  );
  return (
    <ActionPaper title="Персональні дані" footer={actionPaperFooter}>
      <form className="flex gap-9" onSubmit={onSubmit}>
        <div className="w-1/2">
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error?.message}
                lable="Телефон"
                placeholder="Введіть телефон"
                fullWidth={true}
                disabled
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error?.message}
                lable="Адреса"
                placeholder="Введіть Вашу адрусу"
                fullWidth={true}
              />
            )}
          />
        </div>
        <div className="w-1/2">
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error?.message}
                lable="Ім'я"
                placeholder="Введіть Ваше ім'я"
                fullWidth={true}
              />
            )}
          />
        </div>
      </form>
    </ActionPaper>
  );
};
