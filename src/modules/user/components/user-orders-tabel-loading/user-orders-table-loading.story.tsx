import type { Meta, StoryObj } from "@storybook/react";
import { UserOrdersTabelLoading } from "./user-orders-table-loading.component";

const meta: Meta<typeof UserOrdersTabelLoading> = {
  title: "User/Orders table component loading",
  component: UserOrdersTabelLoading,
};

export default meta;
type Story = StoryObj<typeof UserOrdersTabelLoading>;

export const Primary: Story = {
  render: (args) => <UserOrdersTabelLoading {...args} />,
};
