import type { Meta, StoryObj } from "@storybook/react";
import { AdvantageItem } from "./advantage-item.component";

const meta: Meta<typeof AdvantageItem> = {
  title: "Advantages/Advantage item",
  component: AdvantageItem,
};

export default meta;
type Story = StoryObj<typeof AdvantageItem>;

export const Pizza: Story = {
  render: (args) => <AdvantageItem {...args} />,
  args: {
    title: "Експертна команда професіоналів",
    index: 1,
    label:
      "Наш салон 'Vroda' має висококваліфіковану команду професіоналів, які допоможуть вам створити ідеальний образ, підкреслити вашу природну красу та задовольнити всі ваші бажання.",
  },
};
