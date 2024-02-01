import type { Meta, StoryObj } from "@storybook/react";
import { RadionInput } from "./radio-input.component";

const meta: Meta<typeof RadionInput> = {
  title: "Form/Radio",
  component: RadionInput,
};

export default meta;
type Story = StoryObj<typeof RadionInput>;

export const Primary: Story = {
  render: (args) => <RadionInput {...args} />,
  args: {
    value: "cash",
    label: "Готівка",
    name: "payment-type",
    defaultChecked: false,
  },
};
