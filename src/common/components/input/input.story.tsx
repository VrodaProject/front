import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.component";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: (args) => <Input {...args} />,
  args: {
    onChange: () => console.log("onChange"),
    onBlur: () => console.log("onBlur"),
    lable: "Телефон",
    placeholder: "Телефон",
  },
};

export const WithError: Story = {
  render: (args) => <Input {...args} />,
  args: {
    onChange: () => console.log("onChange"),
    onBlur: () => console.log("onBlur"),
    lable: "Телефон",
    placeholder: "Телефон",
    error: "Введіть коректний номер телефону",
  },
};
