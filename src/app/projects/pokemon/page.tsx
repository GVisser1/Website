"use client";

import { isEmpty, isNil } from "lodash-es";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, type JSX } from "react";
import usePokemon from "../../../hooks/usePokemon";
import Header from "../../../components/header";
import SkeletonLoader from "../../../components/skeleton";
import Pagination from "../../../components/pagination";
import PokemonCard from "../../../components/pokemon/pokemonCard";
import SearchInput from "../../../components/search";
import { useDebounceValue } from "usehooks-ts";
import { PAGE_SIZE } from "../../../utils/pokemonUtil";
import Icon from "../../../components/icon";
import { normalizeString } from "../../../utils/textUtil";

const SEARCH_DEBOUNCE = 300;

const PokémonPage = (): JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const { pokemon, error, isLoading, totalPages } = usePokemon(-1);
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounceValue<string>(query, SEARCH_DEBOUNCE);

  const filteredPokemon = pokemon?.filter((p) => normalizeString(p.name).includes(normalizeString(debouncedQuery)));
  const totalFilteredPages = Math.ceil((filteredPokemon?.length || 0) / PAGE_SIZE);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "/") {
        e.preventDefault();
        const searchInput = document.getElementById("search-input") as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return (): void => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isNil(totalPages)) {
      return;
    }

    if (!isNil(totalPages) && (currentPage < 1 || currentPage > totalPages)) {
      router.replace(`?page=1`, { scroll: false });
    }

    if (
      debouncedQuery !== "" &&
      !isEmpty(filteredPokemon) &&
      !isNil(filteredPokemon) &&
      currentPage > totalFilteredPages
    ) {
      router.replace(`?page=1`, { scroll: false });
    }
  }, [currentPage, totalPages, router, debouncedQuery, filteredPokemon, totalFilteredPages]);

  const showLoadingState = (isLoading && !error) || isNil(pokemon) || isEmpty(pokemon);
  const showErrorState = error && !isLoading;
  const showContent = !isLoading && !isNil(filteredPokemon);
  const showPagination = !error && !isNil(totalFilteredPages) && !isEmpty(filteredPokemon);

  return (
    <>
      <Header title="Pokémon" description="Explore the world of Pokémon." />

      <div className="mb-2 grid grid-cols-2 gap-x-4">
        <SearchInput
          hasShortcut
          aria-label="Search for a Pokémon"
          id="search-input"
          type="search"
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          className="col-span-2 w-full sm:col-span-1 sm:col-start-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {showLoadingState && Array.from({ length: PAGE_SIZE }).map((_, i) => <SkeletonLoader size="md" key={i} />)}
        {showErrorState && <p className="col-span-full text-center text-error">{error.message}</p>}
        {showContent &&
          filteredPokemon
            .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
            .map((i) => <PokemonCard key={i.name} identifier={i.name} size="md" />)}
        {!showPagination && (
          <div className="col-span-full mt-12 flex h-full grow flex-col items-center justify-center">
            <Icon name="PokéBall" className="size-24 text-primary" />
            <h2 className="mt-2 text-center text-lg font-medium text-primary dark:text-primary-dark">
              No results found
            </h2>
          </div>
        )}
      </div>

      {showPagination && (
        <Pagination
          className="mt-4 ml-auto"
          currentPage={currentPage}
          totalPages={totalFilteredPages}
          onFirst={() => router.push("?page=1", { scroll: false })}
          onPrevious={() => router.push(`?page=${currentPage - 1}`, { scroll: false })}
          onNext={() => router.push(`?page=${currentPage + 1}`, { scroll: false })}
          onLast={() => router.push(`?page=${totalFilteredPages}`, { scroll: false })}
        />
      )}
    </>
  );
};

export default PokémonPage;
