import { renderHook, waitFor } from "@testing-library/react";
import { AxiosError } from "axios";
import { HttpResponse, http } from "msw";
import { describe, expect, it } from "vitest";
import { server, withQueryClient } from "../../__tests__/testUtil";
import { POKEMON_API_URL } from "../../constants";
import usePokemon from "../usePokemon";

describe("usePokemon hook", () => {
  it("returns pokemon data and total pages when query succeeds", async () => {
    const pokemon = [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    ];

    server.use(
      http.get(POKEMON_API_URL, () => {
        return HttpResponse.json({ count: 3, results: pokemon });
      }),
    );

    const { result } = renderHook(() => usePokemon(1), {
      wrapper: withQueryClient(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.error).toBeNull();
    expect(result.current.data?.results).toMatchObject(pokemon);
  });

  it("handles errors correctly", async () => {
    server.use(
      http.get(POKEMON_API_URL, () => {
        return HttpResponse.error();
      }),
    );

    const { result } = renderHook(() => usePokemon(1), { wrapper: withQueryClient() });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.data?.results).toEqual(undefined);
    expect(result.current.error).toBeInstanceOf(AxiosError);
  });
});
