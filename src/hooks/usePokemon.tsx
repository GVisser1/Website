import { queryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POKEMON_API_URL } from "../constants";
import { hours } from "../utils/timeUtil";

type Pokemon = {
  name: string;
  url: string;
};

export type PaginatedPokemon = { results: Pokemon[]; count: number };

const fetchPokemon = async () => {
  const config = {
    params: { limit: 10000 },
  };
  const { data } = await axios.get<{ results: Pokemon[]; count: number }>(POKEMON_API_URL, config);

  const filteredResults = data.results.filter((pokemon) => {
    const id = parseInt(pokemon.url.split("/").slice(-2, -1)[0], 10); // Extract ID from URL
    return id <= 10000;
  });

  return {
    results: filteredResults,
    count: data.count,
  };
};

export const pokemonQueryOptions = (currentPage: number) =>
  queryOptions<PaginatedPokemon>({
    queryKey: ["paginatedPokemon", currentPage],
    queryFn: fetchPokemon,
    staleTime: hours(1),
  });

const usePokemon = (currentPage: number) => useQuery(pokemonQueryOptions(currentPage));

export default usePokemon;
