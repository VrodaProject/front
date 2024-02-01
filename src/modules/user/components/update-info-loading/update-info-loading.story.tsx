import type { Meta, StoryObj } from "@storybook/react";
import { UpdateInfoLoading } from "./update-info-loading.component";

const meta: Meta<typeof UpdateInfoLoading> = {
  title: "User/Update info loading form",
  component: UpdateInfoLoading,
};

export default meta;
type Story = StoryObj<typeof UpdateInfoLoading>;

export const Primary: Story = {
  render: (args) => <UpdateInfoLoading />,
};
