import type { Meta, StoryObj } from "@storybook/react";
import type { PokemonCardProps } from "../../pokemonCard";
import PokemonCard from "../../pokemonCard";
import type { PokemonDetails } from "@/utils/pokemonUtil";
import { fn } from "@storybook/test";

const pokemon: PokemonDetails = {
  id: 1,
  name: "Bulbasaur",
  sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  height: 0.7,
  weight: 6.9,
  types: ["grass", "poison"],
  stats: [
    { name: "hp", base_stat: 45 },
    { name: "attack", base_stat: 49 },
    { name: "defense", base_stat: 49 },
    { name: "special-attack", base_stat: 65 },
    { name: "special-defense", base_stat: 65 },
    { name: "speed", base_stat: 45 },
  ],
};

const meta: Meta<PokemonCardProps> = {
  title: "Components/PokemonCard",
  component: PokemonCard,
};

export default meta;

type Story = StoryObj<PokemonCardProps>;

export const Default: Story = {
  args: { pokemon, onClick: fn() },
};

export const WithoutSprite: Story = {
  args: {
    pokemon: {
      ...pokemon,
      sprite: null,
    },
    onClick: fn(),
  },
};

export const LongName: Story = {
  args: {
    pokemon: {
      ...pokemon,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in, dolorem commodi odio voluptates nostrum iure dolorum? Delectus, vero. Cum suscipit aliquid officiis vel, porro possimus nihil nemo rerum similique.",
    },
    onClick: fn(),
  },
};
