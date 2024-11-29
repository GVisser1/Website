import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash-es";
import type { PokemonDetails } from "@/utils/pokemonUtil";
import { getPaginatedPokemon, getPokemonDetails } from "@/utils/pokemonUtil";

const PAGE_SIZE = 16;
const LOADING_DELAY = 300; // Delay in ms for debounced loading state

type usePokemonResult = {
  pokemon: PokemonDetails[];
  isLoading: boolean;
  error: string | null;
  totalPages: number;
};

const usePokemon = (currentPage: number): usePokemonResult => {
  const [pokemon, setPokemon] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  const debouncedSetIsLoading = useMemo(
    () =>
      debounce((value: boolean) => {
        setIsLoading(value);
      }, LOADING_DELAY),
    [setIsLoading]
  );

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const offset = (currentPage - 1) * PAGE_SIZE;
        const paginatedPokemon = await getPaginatedPokemon(offset, PAGE_SIZE);
        const pokemonData = await Promise.all(
          paginatedPokemon.results.map((pokemon) => getPokemonDetails(pokemon.name))
        );

        setPokemon(pokemonData);
        setTotalPages(Math.ceil(paginatedPokemon.count / PAGE_SIZE));
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        debouncedSetIsLoading(false);
      }
    };

    fetchData();

    return (): void => {
      debouncedSetIsLoading.cancel();
    };
  }, [currentPage, debouncedSetIsLoading]);

  return { pokemon, isLoading, error, totalPages };
};

export default usePokemon;
