import type { Meta, StoryObj } from "@storybook/react";
import { CategpryLinkItem } from "./link-item.component";

const meta: Meta<typeof CategpryLinkItem> = {
  title: "Common/Link",
  component: CategpryLinkItem,
};

export default meta;
type Story = StoryObj<typeof CategpryLinkItem>;

export const Primary: Story = {
  render: (args) => <CategpryLinkItem {...args} />,
  args: {
    url: "/",
    children: "Піца",
  },
};
