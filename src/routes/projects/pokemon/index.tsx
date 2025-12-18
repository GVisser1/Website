import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { isEmpty, isNil, uniqueId } from "lodash-es";
import { type JSX, Suspense, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import Header from "@/components/header";
import Icon from "@/components/icon";
import Page from "@/components/page";
import Pagination from "@/components/pagination";
import PokemonCard from "@/components/pokemon/pokemonCard";
import SearchInput from "@/components/search";
import SkeletonLoader from "@/components/skeleton";
import { PROJECT_PAGES } from "@/constants";
import { pokemonQueryOptions } from "@/hooks/usePokemon";
import { PAGE_SIZE } from "@/utils/pokemonUtil";
import { normalizeString } from "@/utils/textUtil";

const PAGE = PROJECT_PAGES.pokemon;
const SEARCH_DEBOUNCE = 300;

const PokemonPage = () => {
  const page = Route.useSearch().page;
  const navigate = useNavigate({ from: "/projects/pokemon" });
  const {
    data: { results },
  } = useSuspenseQuery(pokemonQueryOptions(page));
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounceValue<string>(query, SEARCH_DEBOUNCE);

  const filteredPokemon = query
    ? results.filter((p) => normalizeString(p.name).includes(normalizeString(debouncedQuery)))
    : results;
  const totalFilteredPages = Math.ceil((filteredPokemon?.length ?? 0) / PAGE_SIZE);

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
    if (isNil(results)) {
      return;
    }

    if (page < 1 || page > totalFilteredPages) {
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
  }, [debouncedQuery, filteredPokemon, totalFilteredPages, navigate, page, results]);

  return (
    <Page>
      <Header title={PAGE.name} description={PAGE.description} />

      <div className="mb-2 grid grid-cols-2 gap-x-4">
        <SearchInput
          hasShortcut
          aria-label="Search for a Pokémon"
          id="search-input"
          type="search"
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          className="col-span-2 tablet:col-span-1 tablet:col-start-2 w-full"
        />
      </div>

      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
        {filteredPokemon.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((i) => (
          <PokemonCard key={i.name} identifier={i.name} size="md" />
        ))}
        {isEmpty(filteredPokemon) && (
          <div className="col-span-full mt-12 flex grow flex-col items-center justify-center text-primary dark:text-primary-dark">
            <Icon name="PokéBall" className="size-24" />
            <h2 className="mt-2 text-center text-base-medium">No results found</h2>
          </div>
        )}
      </div>

      {!isEmpty(filteredPokemon) && (
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
    </Page>
  );
};

const LoadingState = (): JSX.Element => (
  <Page>
    <Header title={PAGE.name} description={PAGE.description} />
    <div className="mb-2 grid grid-cols-2 gap-x-4">
      <SearchInput
        hasShortcut
        aria-label="Search for a Pokémon"
        id="search-input"
        type="search"
        placeholder="Search"
        className="col-span-2 tablet:col-span-1 tablet:col-start-2 w-full"
      />
    </div>

    <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
      {Array.from({ length: PAGE_SIZE }).map(() => (
        <SkeletonLoader size="md" key={uniqueId()} />
      ))}
    </div>
  </Page>
);

export const Route = createFileRoute("/projects/pokemon/")({
  validateSearch: (search: Record<string, unknown>): { page: number } => ({
    page: search.page ? Number(search.page) : 1,
  }),
  loaderDeps: ({ search: { page } }) => ({ page }),
  loader: async ({ context: { queryClient }, deps: { page } }) => {
    const pokemon = await queryClient.ensureQueryData(pokemonQueryOptions(page));
    return pokemon;
  },
  head: () => ({
    meta: [{ title: PAGE.meta.title }, { name: "description", content: PAGE.meta.description }],
  }),
  component: () => (
    <Suspense fallback={<LoadingState />}>
      <PokemonPage />
    </Suspense>
  ),
});
