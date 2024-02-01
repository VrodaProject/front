import type { Meta, StoryObj } from "@storybook/react";
import { UserOrders } from "./user-orders.component";

const meta: Meta<typeof UserOrders> = {
  title: "User/Orders table",
  component: UserOrders,
};

export default meta;
type Story = StoryObj<typeof UserOrders>;

export const Primary: Story = {
  render: (args) => <UserOrders />,
};
