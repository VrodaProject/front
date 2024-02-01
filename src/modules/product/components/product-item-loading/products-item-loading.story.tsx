import type { Meta, StoryObj } from "@storybook/react";
import { ProductItemLoading } from "./products-item-loading.component";

const meta: Meta<typeof ProductItemLoading> = {
  title: "Products/Products Item Loading",
  component: ProductItemLoading,
};

export default meta;
type Story = StoryObj<typeof ProductItemLoading>;

export const Primary: Story = {
  render: () => <ProductItemLoading />,
};
