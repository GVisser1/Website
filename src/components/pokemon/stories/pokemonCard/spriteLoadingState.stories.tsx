import type { Meta, StoryObj } from "@storybook/react";
import PokemonCard from "../../pokemonCard";

const meta: Meta<typeof PokemonCard.SpriteLoadingState> = {
  title: "Components/PokemonCard/Sprite Loading State",
  component: PokemonCard.SpriteLoadingState,
};

export default meta;

type Story = StoryObj<typeof PokemonCard.SpriteLoadingState>;

export const Default: Story = {};
