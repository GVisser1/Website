import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POKEMON_API_URL } from "../constants";
import { hours } from "../utils/timeUtil";
import type { PokemonIdentifier, PokemonType } from "../utils/pokemonUtil";

type PokemonDetailsResponse = {
  id: number;
  name: string;
  abilities: { is_hidden: boolean; slot: number; ability: { name: string; url: string } }[];
  base_experience: number;
  height: number;
  sprites: {
    front_default: string;
    other: {
      dream_world: { front_default: string | null };
      showdown: { front_default: string | null };
      home: { front_default: string | null };
      "official-artwork": { front_default: string | null };
    };
  };
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  types: { type: { name: PokemonType } }[];
  weight: number;
};

type PokemonDetails = {
  id: number;
  name: string;
  abilities: { name: string; is_hidden: boolean }[];
  baseExp: number;
  height: number;
  sprite: string;
  stats: { name: string; base_stat: number }[];
  types: PokemonType[];
  weight: number;
};

type UsePokemonDetailsResult = {
  data?: PokemonDetails;
  error: Error | null;
  isLoading: boolean;
};

const usePokemonDetails = (identifier: PokemonIdentifier): UsePokemonDetailsResult => {
  const { data, isPending, error } = useQuery<PokemonDetails, Error>({
    queryKey: ["pokemonDetails", identifier],
    queryFn: async () => {
      const { data } = await axios.get<PokemonDetailsResponse>(`${POKEMON_API_URL}/${identifier}`);

      const abilities = data.abilities.map(({ is_hidden, ability }) => ({
        name: ability.name,
        is_hidden,
      }));
      const sprite =
        data.sprites.other.dream_world.front_default ??
        data.sprites.other["official-artwork"].front_default ??
        data.sprites.front_default;
      const stats = data.stats.map(({ base_stat, stat }) => ({ name: stat.name, base_stat }));
      const types = data.types.map((type) => type.type.name as PokemonType);

      return {
        id: data.id,
        abilities,
        baseExp: data.base_experience,
        height: data.height,
        name: data.name,
        sprite,
        stats,
        types,
        weight: data.weight,
      };
    },
    staleTime: hours(1),
    retry: 3,
  });

  return { data, isLoading: isPending, error: error };
};

export default usePokemonDetails;
