import { useNavigate } from "@tanstack/react-router";
import { isEmpty, isNil, uniqueId } from "lodash-es";
import { type JSX, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import usePokemon from "../../hooks/usePokemon";
import { PAGE_SIZE } from "../../utils/pokemonUtil";
import { normalizeString } from "../../utils/textUtil";
import Icon from "../icon";
import Pagination from "../pagination";
import SearchInput from "../search";
import SkeletonLoader from "../skeleton";
import PokemonCard from "./pokemonCard";

const SEARCH_DEBOUNCE = 300;

type PokemonContentProps = {
  page: number;
};

const PokemonContent = ({ page }: PokemonContentProps): JSX.Element => {
  const navigate = useNavigate({ from: "/projects/pokemon" });
  const { pokemon, error, isLoading, totalPages } = usePokemon(-1);
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounceValue<string>(query, SEARCH_DEBOUNCE);

  const filteredPokemon = pokemon?.filter((p) =>
    normalizeString(p.name).includes(normalizeString(debouncedQuery)),
  );
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

    if (!isNil(totalPages) && (page < 1 || page > totalPages)) {
      navigate({ search: { page: 1 } });
    }

    if (
      debouncedQuery !== "" &&
      !isEmpty(filteredPokemon) &&
      !isNil(filteredPokemon) &&
      page > totalFilteredPages
    ) {
      navigate({ search: { page: 1 } });
    }
  }, [page, totalPages, debouncedQuery, filteredPokemon, totalFilteredPages, navigate]);

  const showLoadingState = false;
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
        {showLoadingState &&
          Array.from({ length: PAGE_SIZE }).map(() => (
            <SkeletonLoader size="md" key={uniqueId()} />
          ))}
        {showErrorState && <p className="col-span-full text-center text-error">{error.message}</p>}
        {showContent &&
          filteredPokemon
            .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
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
          currentPage={page}
          totalPages={totalFilteredPages}
          onFirst={() => navigate({ search: { page: 1 } })}
          onPrevious={() => navigate({ search: { page: page - 1 } })}
          onNext={() => navigate({ search: { page: page + 1 } })}
          onLast={() => navigate({ search: { page: totalFilteredPages } })}
        />
      )}
    </>
  );
};

export default PokemonContent;
