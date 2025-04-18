import { renderHook } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import { vi, describe, it, expect, beforeEach } from "vitest";
import usePokemon from "../usePokemon";
import type { PaginatedPokemon, PokemonDetails } from "../../utils/pokemonUtil";
import { getPaginatedPokemon, getPokemonDetails } from "../../utils/pokemonUtil";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

vi.mock("../../utils/pokemonUtil", () => ({
  getPaginatedPokemon: vi.fn(),
  getPokemonDetails: vi.fn(),
}));

const useQueryMock = vi.mocked(useQuery);
const getPaginatedPokemonMock = vi.mocked(getPaginatedPokemon);
const getPokemonDetailsMock = vi.mocked(getPokemonDetails);

describe("usePokemon hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns loading state initially", () => {
    useQueryMock.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as never);

    const { result } = renderHook(() => usePokemon(1));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.pokemon).toEqual([]);
    expect(result.current.error).toBeNull();
    expect(result.current.totalPages).toBe(0);
  });

  it("returns pokemon data and total pages when query succeeds", async () => {
    const mockPokemonData: PokemonDetails[] = [
      { name: "bulbasaur", id: 1, height: 0, sprite: null, stats: [], types: [], weight: 0 },
      { name: "charmander", id: 4, height: 0, sprite: null, stats: [], types: [], weight: 0 },
    ];
    const mockPaginatedPokemon: PaginatedPokemon = {
      results: [
        { name: "bulbasaur", url: "#" },
        { name: "charmander", url: "#" },
      ],
      count: 32,
    };

    getPaginatedPokemonMock.mockResolvedValue(mockPaginatedPokemon);
    getPokemonDetailsMock.mockResolvedValueOnce(mockPokemonData[0]);
    getPokemonDetailsMock.mockResolvedValueOnce(mockPokemonData[1]);

    useQueryMock.mockReturnValue({
      data: {
        pokemonData: mockPokemonData,
        totalPages: 2,
      },
      isLoading: false,
      error: null,
    } as never);

    const { result } = renderHook(() => usePokemon(1));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.pokemon).toEqual(mockPokemonData);
    expect(result.current.error).toBeNull();
    expect(result.current.totalPages).toBe(2);
  });

  it("handles errors correctly", () => {
    const mockError = new Error("Failed to fetch data");

    useQueryMock.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: mockError,
    } as never);

    const { result } = renderHook(() => usePokemon(1));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.pokemon).toEqual([]);
    expect(result.current.error).toBe("Failed to fetch data");
    expect(result.current.totalPages).toBe(0);
  });
});
