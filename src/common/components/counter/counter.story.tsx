import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./counter.component";

const meta: Meta<typeof Counter> = {
  title: "Common/Counter",
  component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  render: (args) => <Counter {...args} />,
  args: {
    children: "Відправити код ще раз",
  },
};
