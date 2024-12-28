"use client";

import Header from "@/components/header";
import Pagination from "@/components/pagination";
import { PokemonInfoDialog } from "@/components/pokemon/pokemonInfoDialog";
import SkeletonLoader from "@/components/skeleton";
import { getPokemonDetails, type PokemonDetails } from "@/utils/pokemonUtil";
import { isEmpty, isNil } from "lodash-es";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import usePokemon from "../../../hooks/usePokemon";
import PokemonCard from "@/components/pokemon/pokemonCard";

const PAGE_SIZE = 16;

const PokémonPage = (): JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const highlightedName = searchParams.get("highlighted");
  const { pokemon, isLoading, error, totalPages } = usePokemon(currentPage);
  const [highlightedPokemon, setHighlightedPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    if (currentPage < 1 || (totalPages > 0 && currentPage > totalPages)) {
      router.replace(`?page=1`, { scroll: false });
    }
  }, [currentPage, totalPages, router]);

  useEffect(() => {
    if (isNil(highlightedName)) {
      setHighlightedPokemon(null);
      return;
    }

    if (highlightedName !== highlightedPokemon?.name) {
      getPokemonDetails(highlightedName).then((pokemon) => {
        if (!pokemon) {
          return;
        }
        setHighlightedPokemon(pokemon);
      });
      return;
    }
  }, [highlightedName]); // eslint-disable-line react-hooks/exhaustive-deps

  const closeDialog = (): void => {
    router.push(`?page=${currentPage}`, { scroll: false });
    setHighlightedPokemon(null);
  };

  const showLoadingState = (isLoading && !error) || isNil(pokemon) || isEmpty(pokemon);
  const showErrorState = error && !isLoading;
  const showContent = !isLoading && !isNil(pokemon) && !isEmpty(pokemon);

  return (
    <>
      <Header title="Pokémon" description="Explore the world of Pokémon." />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {showLoadingState && Array.from({ length: PAGE_SIZE }).map((_, i) => <SkeletonLoader key={i} />)}
        {showErrorState && <p className="col-span-full text-center text-red-500">{error}</p>}
        {showContent &&
          pokemon.map((i) => (
            <PokemonCard
              key={i.id}
              pokemon={i}
              onClick={() => {
                router.push(`?page=${currentPage}&highlighted=${i.name}`, { scroll: false });
                setHighlightedPokemon(i);
              }}
            />
          ))}
      </div>
      {highlightedPokemon && <PokemonInfoDialog open={true} pokemon={highlightedPokemon} onClose={closeDialog} />}
      {!error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onFirst={() => router.push("?page=1", { scroll: false })}
          onPrevious={() => router.push(`?page=${currentPage - 1}`, { scroll: false })}
          onNext={() => router.push(`?page=${currentPage + 1}`, { scroll: false })}
          onLast={() => router.push(`?page=${totalPages}`, { scroll: false })}
        />
      )}
    </>
  );
};

export default PokémonPage;
