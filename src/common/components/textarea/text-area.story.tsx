import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./text-area.component";

const meta: Meta<typeof TextArea> = {
  title: "Form/Text Area",
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  render: (args) => <TextArea {...args} />,
  args: {
    onChange: () => console.log("onChange"),
    onBlur: () => console.log("onBlur"),
    lable: "Телефон",
    placeholder: "Телефон",
  },
};
