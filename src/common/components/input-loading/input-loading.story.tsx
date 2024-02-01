import type { Meta, StoryObj } from "@storybook/react";
import { InputLoading } from "./input-loading.component";

const meta: Meta<typeof InputLoading> = {
  title: "Common/Input loading",
  component: InputLoading,
};

export default meta;
type Story = StoryObj<typeof InputLoading>;

export const Primary: Story = {
  render: (args) => <InputLoading />,
};
