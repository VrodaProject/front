import type { Meta, StoryObj } from "@storybook/react";
import { ProductListLoading } from "./product-item-list-loading.component";

const meta: Meta<typeof ProductListLoading> = {
  title: "Product/Product List Loading",
  component: ProductListLoading,
  args: {
    items: 3,
  },
};

export default meta;
type Story = StoryObj<typeof ProductListLoading>;

export const Primary: Story = {
  render: (args) => <ProductListLoading {...args} />,
};
