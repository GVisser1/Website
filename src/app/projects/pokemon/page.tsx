import Header from "../../../components/header";
import type { Metadata } from "next";
import PokemonContent from "../../../components/pokemon/pokemonContent";
import type { JSX } from "react";
import Page from "../../../components/page";

export const metadata: Metadata = {
  title: "Pokémon",
  description: "Explore the world of Pokémon.",
};

const PokémonPage = (): JSX.Element => (
  <Page>
    <Header title="Pokémon" description="Explore the world of Pokémon." />

    <PokemonContent />
  </Page>
);

export default PokémonPage;
