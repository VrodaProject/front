import type { Meta, StoryObj } from "@storybook/react";
import { ProductList } from "./product-list.component";
import productMenu from "@app/mocks/pizza.json";

const meta: Meta<typeof ProductList> = {
  title: "Menu/Menu List",
  component: ProductList,
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const General: Story = {
  render: (args) => <ProductList {...args} />,
  // args: {
  //   items: productMenu,
  // },
};
