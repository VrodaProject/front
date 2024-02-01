import type { Meta, StoryObj } from "@storybook/react";
import { ShowInfo } from "./show-info.component";

const meta: Meta<typeof ShowInfo> = {
  title: "Common/Show info",
  component: ShowInfo,
};

export default meta;
type Story = StoryObj<typeof ShowInfo>;

export const Error: Story = {
  render: (args) => <ShowInfo {...args} />,
  args: {
    type: "error",
    children: (
      <>
        <p>Упс, спалася помилка</p>
        <p>Спробуйте трохи пізніше</p>
      </>
    ),
  },
};

export const Info: Story = {
  render: (args) => <ShowInfo {...args} />,
  args: {
    type: "info",
    children: (
      <>
        <p>Нажаль меню пусте</p>
      </>
    ),
  },
};
