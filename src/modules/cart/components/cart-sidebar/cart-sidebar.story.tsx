import type { Meta, StoryObj } from "@storybook/react";
import { CartSidebar } from "./cart-sidebar.component";

const meta: Meta<typeof CartSidebar> = {
  title: "Cart/Cart sidebar",
  component: CartSidebar,
};

export default meta;
type Story = StoryObj<typeof CartSidebar>;

export const Primary: Story = {
  render: (args) => <CartSidebar {...args} />,
  args: {
    items: [
      // {
      //   image: "menu/menu-1691077891",
      //   title: "Піца барбекю",
      //   count: 1,
      //   price: 148,
      // },
      // {
      //   image: "menu/menu-1691077891",
      //   title: "Піца 12",
      //   count: 3,
      //   price: 442,
      // },
      // {
      //   image: "menu/menu-1691077891",
      //   title: "Піца 44",
      //   count: 2,
      //   price: 233,
      // },
    ],
  },
};
