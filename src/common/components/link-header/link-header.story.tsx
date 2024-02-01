import type { Meta, StoryObj } from "@storybook/react";
import { LinkHeader } from "./link-header.component";

const meta: Meta<typeof LinkHeader> = {
  title: "Common/Link hader",
  component: LinkHeader,
};

export default meta;
type Story = StoryObj<typeof LinkHeader>;

export const Primary: Story = {
  render: (args) => <LinkHeader {...args} />,
  args: {
    url: "/",
    children: "Піца",
  },
};
