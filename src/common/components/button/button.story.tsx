import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.component";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Увійти",
  },
};
