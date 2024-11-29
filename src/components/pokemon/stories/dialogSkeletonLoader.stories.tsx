import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonLoader } from "../pokemonInfoDialog";

const meta: Meta = {
  component: SkeletonLoader,
  title: "Pokemon/Info Dialog/Skeleton Loader",
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
  decorators: (Story) => (
    <div className="bg-white p-4">
      <Story />
    </div>
  ),
};

export const Dark: Story = {
  decorators: (Story) => (
    <div className="dark bg-zinc-900 p-4">
      <Story />
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
