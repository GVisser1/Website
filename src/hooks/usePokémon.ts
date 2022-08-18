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
          stats: basicData.stats.map(
            (stat: any) => new Object({ base_stat: stat.base_stat, name: stat.stat.name })
          ),
        });
      }
    );
  };

  return { pokéData, getData };
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
