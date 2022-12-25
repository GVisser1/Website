import axios from "axios";
import { useState } from "react";

interface PokéStats {
  name: string;
  base_stat: string;
}
export interface PokéData {
  id: string;
  name?: string;
  types?: string[];
  src?: string;
  ability?: string;
  height?: string;
  weight?: string;
  stats?: PokéStats[];
  species?: string;
  moves?: string[];
}

const BASE_URL = "https://pokeapi.co/api/v2/";

const usePokémon = () => {
  const [pokéData, setPokéData] = useState<PokéData>();

  const getPokéData = (id: string) => axios.get(`${BASE_URL}pokemon/${id}`);
  const getPokéSpecies = (id: string) => axios.get(`${BASE_URL}pokemon-species/${id}`);

  const getData = (id: string) => {
    Promise.all([getPokéData(id), getPokéSpecies(id)]).then(
      ([{ data: basicData }, { data: speciesData }]) => {
        setPokéData({
          id: formatId(basicData.id),
          name: basicData.name,
          types: basicData.types.map((item: any) => item.type.name),
          species: speciesData.genera[7].genus,
          src: basicData.sprites.front_default,
          ability: basicData.abilities[0].ability.name,
          height: formatUnit(basicData.height),
          weight: formatUnit(basicData.weight),
          stats: basicData.stats.map((stat: any) => ({
            base_stat: stat.base_stat,
            name: stat.stat.name,
          })),
        });
      }
    );
  };

  return { pokéData, getData };
};

const formatId = (id: number) => {
  if (id > 0 && id < 10) {
    return `00${id}`;
  }
  if (id > 9 && id < 100) {
    return `0${id}`;
  }
  return id.toString();
};

const formatUnit = (unit: number) => (unit / 10).toFixed(1);

export default usePokémon;

// BUG: "text-white bg-[#A8B820]",
// DARK: "text-white bg-[#705848]",
// DRAGON: "text-white bg-[#7038F8]",
// ELECTRIC: "text-white bg-[#F8D030]",
// FAIRY: "text-white bg-[#EE99AC]",
// FIGHTING: "text-white bg-[#C03028]",
// FIRE: "text-white bg-[#F08030]",
// FLYING: "text-white bg-[#A890F0]",
// GHOST: "text-white bg-[#705898]",
// GRASS: "text-white bg-[#78C850]",
// GROUND: "text-white bg-[#E0C068]",
// ICE: "text-white bg-[#98D8D8]",
// NORMAL: "text-white bg-[#A8A878]",
// POISON: "text-white bg-[#A040A0]",
// PSYCHIC: "text-white bg-[#F85888]",
// ROCK: "text-white bg-[#B8A038]",
// STEEL: "text-white bg-[#B8B8D0]",
// WATER: "text-white bg-[#6890F0]",

// BUG: "text-white bg-[#A8B820] ring-[#6D7815]",
// DARK: "text-white bg-[#705848] ring-[#49392F]",
// DRAGON: "text-white bg-[#7038F8] ring-[#4924A1]",
// ELECTRIC: "text-white bg-[#F8D030] ring-[#A1871F]",
// FAIRY: "text-white bg-[#EE99AC] ring-[#9B6470]",
// FIGHTING: "text-white bg-[#C03028] ring-[#7D1F1A]",
// FIRE: "text-white bg-[#F08030] ring-[#9C531F]",
// FLYING: "text-white bg-[#A890F0] ring-[#6D5E9C]",
// GHOST: "text-white bg-[#705898] ring-[#493963]",
// GRASS: "text-white bg-[#78C850] ring-[#4E8234]",
// GROUND: "text-white bg-[#E0C068] ring-[#927D44]",
// ICE: "text-white bg-[#98D8D8] ring-[#638D8D]",
// NORMAL: "text-white bg-[#A8A878] ring-[#6D6D4E]",
// POISON: "text-white bg-[#A040A0] ring-[#682A68]",
// PSYCHIC: "text-white bg-[#F85888] ring-[#A13959]",
// ROCK: "text-white bg-[#B8A038] ring-[#786824]",
// STEEL: "text-white bg-[#B8B8D0] ring-[#787887]",
// WATER: "text-white bg-[#6890F0] ring-[#445E9C]",
