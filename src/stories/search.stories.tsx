import type { Meta, StoryObj } from "@storybook/react";
import type { SearchInputProps } from "@/components/search";
import SearchInput from "@/components/search";

const meta: Meta<SearchInputProps> = {
  component: SearchInput,
};

export default meta;
type Story = StoryObj<SearchInputProps>;

export const Playground: Story = {};
