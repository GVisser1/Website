import type { PokemonDetails } from "@/utils/pokemonUtil";
import { getPaginatedPokemon, getPokemonDetails } from "@/utils/pokemonUtil";
import { minutes } from "@/utils/timeUtil";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const PAGE_SIZE = 16;

type UsePokemonResult = {
  pokemon: PokemonDetails[];
  isLoading: boolean;
  error: string | null;
  totalPages: number;
};

const usePokemon = (currentPage: number): UsePokemonResult => {
  const [totalPages, setTotalPages] = useState(0);
  const offset = (currentPage - 1) * PAGE_SIZE;

  const { data, isLoading, error } = useQuery({
    queryKey: ["paginatedPokemon", currentPage],
    queryFn: async () => {
      const paginatedPokemon = await getPaginatedPokemon(offset, PAGE_SIZE);
      const pokemonData = await Promise.all(paginatedPokemon.results.map((pokemon) => getPokemonDetails(pokemon.name)));

      return { pokemonData, totalPages: Math.ceil(paginatedPokemon.count / PAGE_SIZE) };
    },
    staleTime: minutes(5),
  });

  useEffect(() => {
    if (data?.totalPages) {
      setTotalPages(data.totalPages);
    }
  }, [data]);

  return {
    pokemon: data?.pokemonData ?? [],
    isLoading,
    error: error?.message ?? null,
    totalPages,
  };
};

export default usePokemon;
