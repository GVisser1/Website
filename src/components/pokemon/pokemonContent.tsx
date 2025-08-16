"use client";

import { useRouter, useSearchParams } from "next/navigation";
import usePokemon from "../../hooks/usePokemon";
import { type JSX, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { normalizeString } from "../../utils/textUtil";
import { PAGE_SIZE } from "../../utils/pokemonUtil";
import { isEmpty, isNil } from "lodash-es";
import SearchInput from "../search";
import SkeletonLoader from "../skeleton";
import PokemonCard from "./pokemonCard";
import Icon from "../icon";
import Pagination from "../pagination";

const SEARCH_DEBOUNCE = 300;

const PokemonContent = (): JSX.Element => {
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

  const showLoadingState = isLoading && !error && isNil(pokemon);
  const showErrorState = error && !isLoading;
  const showContent = !isLoading && !isNil(filteredPokemon);
  const showPagination = !error && !isNil(totalFilteredPages) && !isEmpty(filteredPokemon);
  const showEmptyResults = showContent && isEmpty(filteredPokemon);

  return (
    <>
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
        {showEmptyResults && (
          <div className="col-span-full mt-12 flex h-full grow flex-col items-center justify-center text-primary dark:text-primary-dark">
            <Icon name="PokéBall" className="size-24" />
            <h2 className="mt-2 text-center text-base-medium">No results found</h2>
          </div>
        )}
      </div>

      {showPagination && (
        <Pagination
          className="mt-2 ml-auto"
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

export default PokemonContent;
