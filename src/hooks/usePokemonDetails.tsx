import { queryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POKEMON_API_URL } from "../constants";
import type { PokemonIdentifier, PokemonType } from "../utils/pokemonUtil";
import { hours } from "../utils/timeUtil";

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

export type PokemonDetails = {
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

const fetchPokemonDetails = async (identifier: PokemonIdentifier) => {
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
};

export const pokemonDetailsQueryOptions = (identifier: PokemonIdentifier) =>
  queryOptions<PokemonDetails>({
    queryKey: ["pokemonDetails", identifier],
    queryFn: () => fetchPokemonDetails(identifier),
    staleTime: hours(1),
  });

export const usePokemonDetails = (identifier: PokemonIdentifier) =>
  useQuery(pokemonDetailsQueryOptions(identifier));

export default usePokemonDetails;
