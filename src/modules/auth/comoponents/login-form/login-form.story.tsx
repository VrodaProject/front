import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./login-form.component";

const meta: Meta<typeof LoginForm> = {
  title: "Aurh/Login Form",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  render: (args) => <LoginForm {...args} />,
  // args: {
  //   children: "Відправити код ще раз",
  // },
};
