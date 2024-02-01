import type { Meta, StoryObj } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import { UserDropdownLink } from "./user-dropdown-link.component";

const meta: Meta<typeof UserDropdownLink> = {
  title: "Aurh/User Dropdown Link",
  component: UserDropdownLink,
};

export default meta;
type Story = StoryObj<typeof UserDropdownLink>;

export const Primary: Story = {
  render: (args) => (
    <BrowserRouter>
      <div>
        <UserDropdownLink {...args} />
      </div>
    </BrowserRouter>
  ),
  args: {
    children: "Ваш профіль",
  },
};
