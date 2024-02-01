import type { Meta, StoryObj } from "@storybook/react";
import { CartItem } from "./cart-item.component";

const meta: Meta<typeof CartItem> = {
  title: "Cart/Cart item",
  component: CartItem,
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Pizza: Story = {
  render: (args) => <CartItem {...args} />,
  args: {
    image: "menu/menu-1691077891",
    title: "Піца барбекю",
    count: 2,
    price: 148,
  },
};

export const Drink: Story = {
  render: (args) => <CartItem {...args} />,
  args: {
    image: "menu/menu-1691327987",
    title: "Піца барбекю",
    count: 2,
    price: 148,
  },
};
