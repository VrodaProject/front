import type { Meta, StoryObj } from "@storybook/react";
import { UpdateInfo } from "./update-info.component";

const meta: Meta<typeof UpdateInfo> = {
  title: "User/Update info form",
  component: UpdateInfo,
};

export default meta;
type Story = StoryObj<typeof UpdateInfo>;

export const Primary: Story = {
  render: (args) => <UpdateInfo />,
};
