import type { Meta, StoryObj } from "@storybook/react";
import { CheckoutForm } from "./checkout-form.component";

const meta: Meta<typeof CheckoutForm> = {
  title: "Checkout/Form",
  component: CheckoutForm,
};

export default meta;
type Story = StoryObj<typeof CheckoutForm>;

export const Primary: Story = {
  render: (args) => <CheckoutForm {...args} />,
};
