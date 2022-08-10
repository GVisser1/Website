import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumber } from "../utils/numberUtil";

export interface PokéData {
  id: string;
  name?: string;
  types?: string[];
  src?: string;
  ability?: string;
}

const usePokémon = () => {
  const [pokéData, setPokéData] = useState<PokéData>();

  useEffect(() => {
    const id = getRandomNumber(1, 898);
    const retrieveData = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const types = data.types.map((item: any) => item.type.name);
        const formattedId = () => {
          if (data.id > 0 && data.id < 10) {
            return `00${data.id}`;
          } else if (data.id > 9 && data.id < 100) {
            return `0${data.id}`;
          }
          return data.id;
        };
        console.log(data);

        setPokéData({
          id: formattedId(),
          name: data.name,
          types: types,
          src: data.sprites.front_default,
          ability: data.abilities[0].ability.name,
        });
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData();
  }, []);
  return { pokéData };
};

export default usePokémon;
