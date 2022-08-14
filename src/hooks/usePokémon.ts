import axios from "axios";
import { useState } from "react";
import { getRandomNumber } from "../utils/numberUtil";

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
  isLegendary?: boolean;
  isMythical?: boolean;
}

const usePokémon = () => {
  const [pokéData, setPokéData] = useState<PokéData>();

  const getRandomPokémon = (id = getRandomNumber(1, 898)) => {
    // const id = ;
    const retrieveData = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const types = data.types.map((item: any) => item.type.name);

        console.log(species);

        setPokéData({
          id: formatId(data.id),
          name: data.name,
          types: types,
          species: species.data.genera[7].genus,
          src: data.sprites.front_default,
          ability: data.abilities[0].ability.name,
          height: formatUnit(data.height),
          weight: formatUnit(data.weight),
          stats: data.stats.map(
            (stat: any) => new Object({ base_stat: stat.base_stat, name: stat.stat.name })
          ),
          isLegendary: species.data.is_legendary,
          isMythical: species.data.is_mythical,
        });
      } catch (error) {
        console.error("Failed to get Pokémon");
      }
    };
    retrieveData();
  };
  return { pokéData, getRandomPokémon };
};

const formatId = (id: number) => {
  if (id > 0 && id < 10) {
    return `00${id}`;
  } else if (id > 9 && id < 100) {
    return `0${id}`;
  }
  return id.toString();
};

const formatUnit = (unit: number) => (unit / 10).toFixed(1);

export default usePokémon;
