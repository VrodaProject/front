import type { Meta, StoryObj } from "@storybook/react";
import { RadionGroup } from "./radio-group.component";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const meta: Meta<typeof RadionGroup> = {
  title: "Form/Radio group",
  component: RadionGroup,
};

export default meta;
type Story = StoryObj<typeof RadionGroup>;

export const Primary: Story = {
  render: (args) => <RadionGroup {...args} />,
  args: {
    options: [
      { label: "Готівка", value: "cash" },
      { label: "Картка", value: "card" },
    ],
  },
};

const validation = yup.object({
  paymentType: yup.string().oneOf(["card", "cash"]),
});

export const YupTamplate: Story = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validation),
    defaultValues: {
      paymentType: "cash",
    },
  });

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };

  const radioGroupOptions = YupTamplate.args?.options || [];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="paymentType"
        control={control}
        render={({ field }) => (
          <RadionGroup {...field} options={radioGroupOptions} />
        )}
      />
      <button type="submit">submit</button>
    </form>
  );
};

YupTamplate.args = {
  options: [
    { label: "Готівка", value: "cash" },
    { label: "Картка", value: "card" },
  ],
};
