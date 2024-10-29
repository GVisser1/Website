import type { Meta, StoryObj } from "@storybook/react";

import Pill from "@/components/pill";
import type { PillProps } from "@/components/pill";

const meta: Meta<PillProps> = {
  component: Pill,
};

export default meta;
type Story = StoryObj<PillProps>;

export const Playground: Story = {
  args: {
    label: "Pill",
    colour: "blue",
  },
};
