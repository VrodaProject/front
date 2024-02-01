import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton.component";

const meta: Meta<typeof Skeleton> = {
  title: "Common/Skeleton",
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  render: (args) => <Skeleton {...args} />,
  args: {
    width: 34,
    height: 19,
  },
};
