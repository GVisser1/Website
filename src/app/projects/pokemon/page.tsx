import type { Metadata } from "next";
import type { JSX } from "react";
import Header from "../../../components/header";
import Page from "../../../components/page";
import PokemonContent from "../../../components/pokemon/pokemonContent";

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
