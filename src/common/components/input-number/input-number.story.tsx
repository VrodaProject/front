import type { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from "./input-number.component";

const meta: Meta<typeof InputNumber> = {
  title: "Form/Input number",
  component: InputNumber,
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Primary: Story = {
  render: (args) => <InputNumber {...args} />,
};
