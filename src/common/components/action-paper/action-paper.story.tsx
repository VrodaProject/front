import type { Meta, StoryObj } from "@storybook/react";
import { ActionPaper } from "./action-paper.component";
import { ActionPaperFooter } from "../action-paper-footer/action-paper-footer.component";

const meta: Meta<typeof ActionPaper> = {
  title: "Common/Action paper",
  component: ActionPaper,
};

export default meta;
type Story = StoryObj<typeof ActionPaper>;

export const Primary: Story = {
  render: (args) => <ActionPaper {...args} />,
  args: {
    title: "Персональні дані",
    children: <button>123</button>,
  },
};

export const WithFooter: Story = {
  render: (args) => <ActionPaper {...args} />,
  args: {
    title: "Персональні дані",
    children: <button>123</button>,
    footer: <ActionPaperFooter children={<button>123</button>} />,
  },
};
