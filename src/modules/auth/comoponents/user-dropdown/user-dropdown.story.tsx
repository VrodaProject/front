import type { Meta, StoryObj } from "@storybook/react";
import { UserDropdown } from "./user-dropdown.component";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof UserDropdown> = {
  title: "Aurh/User Dropdown",
  component: UserDropdown,
};

export default meta;
type Story = StoryObj<typeof UserDropdown>;

export const Primary: Story = {
  render: (args) => (
    <BrowserRouter>
      <div className="p-4 shadow flex justify-end">
        <UserDropdown />
      </div>
    </BrowserRouter>
  ),
};
