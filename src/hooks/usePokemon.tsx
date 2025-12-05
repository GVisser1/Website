import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POKEMON_API_URL } from "../constants";
import { PAGE_SIZE, TOTAL_POKEMON } from "../utils/pokemonUtil";

type Pokemon = {
  name: string;
  url: string;
};

export type PaginatedPokemon = { results: Pokemon[]; count: number };

type UsePokemonResult = {
  pokemon?: Pokemon[];
  isLoading: boolean;
  error: Error | null;
  totalPages?: number;
};

const usePokemon = (currentPage: number): UsePokemonResult => {
  const config = {
    params: {
      limit: currentPage === -1 ? 100000 : PAGE_SIZE,
      offset: currentPage === -1 ? 0 : (currentPage - 1) * PAGE_SIZE,
    },
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["paginatedPokemon", currentPage],
    queryFn: async () => {
      const { data } = await axios.get<PaginatedPokemon>(POKEMON_API_URL, config);

      const filteredResults = data.results.filter((pokemon) => {
        const id = parseInt(pokemon.url.split("/").slice(-2, -1)[0], 10); // Extract ID from URL
        return id <= 10000;
      });

      return {
        results: filteredResults,
        count: data.count, // Update count to reflect filtered results
      };
    },
    // staleTime: hours(1),
    retry: 0,
  });

  return {
    pokemon: data?.results,
    isLoading: isPending,
    error,
    totalPages: data?.count ? Math.ceil(TOTAL_POKEMON / PAGE_SIZE) : undefined,
  };
};

export default usePokemon;
