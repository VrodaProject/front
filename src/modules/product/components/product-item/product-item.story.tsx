import type { Meta, StoryObj } from "@storybook/react";
import { ProductItem } from "./product-item.component";

const meta: Meta<typeof ProductItem> = {
  title: "Menu/Menu Item",
  component: ProductItem,
};

export default meta;
type Story = StoryObj<typeof ProductItem>;

export const General: Story = {
  render: (args) => <ProductItem {...args} />,
  args: {
    description:
      "Deionized water (Aqua), Glycerin, SD Alcohol 40, Pentylene Glycol, Polysorbate 20,",
    image: "products/products-1699444148",
    price: 795,
    title: "Line Repair Nutrient - Аква Спрей із суперфудами",
    weight: 100,
  },
};
export const Drink: Story = {
  render: (args) => <ProductItem {...args} />,
  args: {
    image: "products/products-1698913165",
    price: 2000,
    title: "test",
    weight: 50,
  },
};
