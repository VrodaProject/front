import type { Meta, StoryObj } from "@storybook/react";
import { CartItemLoading } from "./cart-item-loading.component";

const meta: Meta<typeof CartItemLoading> = {
  title: "Cart/Cart item loading",
  component: CartItemLoading,
};

export default meta;
type Story = StoryObj<typeof CartItemLoading>;

export const Primary: Story = {
  render: () => <CartItemLoading />,
};
