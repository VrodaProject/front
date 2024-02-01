import type { Meta, StoryObj } from "@storybook/react";
import { ActionPaperFooter } from "./action-paper-footer.component";

const meta: Meta<typeof ActionPaperFooter> = {
  title: "Common/Action paper footer",
  component: ActionPaperFooter,
};

export default meta;
type Story = StoryObj<typeof ActionPaperFooter>;

export const Primary: Story = {
  render: (args) => <ActionPaperFooter {...args} />,
  args: {
    children: <button>123</button>,
  },
};
