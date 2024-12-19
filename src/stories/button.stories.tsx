import type { ButtonProps } from "@/components/button";
import Button from "@/components/button";
import type { Meta, StoryObj } from "@storybook/react";
import { CombinationGrid } from "./propCombinationUtil";

const meta: Meta<ButtonProps> = {
  component: Button,
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Playground: Story = {
  args: {
    label: "Button",
    icon: "Home",
    variant: "default",
    size: "md",
  },
};

export const Label: Story = {
  render: () => (
    <CombinationGrid
      columns="3"
      Component={Button}
      properties={[
        { name: "variant", values: ["default", "ghost"] },
        { name: "disabled", values: [false, true] },
        { name: "size", values: ["sm", "md", "lg"] },
      ]}
      defaultProps={{ label: "Label" }}
    />
  ),
};
export const Icon: Story = {
  render: () => (
    <CombinationGrid
      columns="3"
      Component={Button}
      properties={[
        { name: "variant", values: ["default", "ghost"] },
        { name: "disabled", values: [false, true] },
        { name: "size", values: ["sm", "md", "lg"] },
      ]}
      defaultProps={{ icon: "Home" }}
    />
  ),
};

export const LabelAndIcon: Story = {
  render: () => (
    <CombinationGrid
      columns="3"
      Component={Button}
      properties={[
        { name: "variant", values: ["default", "ghost"] },
        { name: "disabled", values: [false, true] },
        { name: "size", values: ["sm", "md", "lg"] },
      ]}
      defaultProps={{ label: "Label", icon: "Home" }}
    />
  ),
};
