import Header from "../../../components/header";
import type { Metadata } from "next";
import PokemonContent from "../../../components/pokemon/pokemonContent";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Pokémon",
  description: "Explore the world of Pokémon.",
};

const PokémonPage = (): JSX.Element => (
  <>
    <Header title="Pokémon" description="Explore the world of Pokémon." />

    <PokemonContent />
  </>
);

export default PokémonPage;
