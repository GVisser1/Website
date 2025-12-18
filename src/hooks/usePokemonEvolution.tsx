import { queryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { isNil } from "lodash-es";
import type { PokemonIdentifier } from "../utils/pokemonUtil";
import { hours } from "../utils/timeUtil";

export type EvolutionDetails = {
  gender: string | null;
  held_item: { name: string; url: string } | null;
  item: { name: string; url: string } | null;
  known_move: { name: string; url: string } | null;
  known_move_type: { name: string; url: string } | null;
  location: { name: string; url: string } | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean;
  party_species: { name: string; url: string } | null;
  party_type: { name: string; url: string } | null;
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: { name: string; url: string } | null;
  trigger: { name: string; url: string };
  turn_upside_down: boolean;
};

export type EvolutionChain = {
  evolution_details: EvolutionDetails[];
  evolves_to: EvolutionChain[];
  is_baby: boolean;
  species: { id: number; name: string; url: string };
};

type EvolutionStageResponse = {
  baby_trigger_item: { name: string; url: string } | null;
  chain: EvolutionChain;
};

const fetchPokemonEvolutions = async (evolutionStage: string): Promise<EvolutionChain> => {
  const { data } = await axios.get<EvolutionStageResponse>(evolutionStage);
  return data.chain;
};

export const pokemonEvolutionQueryOptions = (
  identifier: PokemonIdentifier,
  evolutionStage: string,
) =>
  queryOptions<EvolutionChain>({
    queryKey: ["pokemonEvolution", identifier],
    queryFn: () => fetchPokemonEvolutions(evolutionStage),
    enabled: !isNil(identifier) && !isNil(evolutionStage),
    staleTime: hours(1),
  });

const usePokemonEvolution = (
  identifier?: PokemonIdentifier,
  evolutionStage?: string,
): UsePokemonEvolutionResult => useQuery(pokemonEvolutionQueryOptions(identifier, evolutionStage));

export default usePokemonEvolution;
