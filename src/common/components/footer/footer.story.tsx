import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer.component";

const meta: Meta<typeof Footer> = {
  title: "Common/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const General: Story = {
  render: (args) => <Footer />,
};
