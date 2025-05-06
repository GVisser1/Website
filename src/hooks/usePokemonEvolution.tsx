import { useQuery } from "@tanstack/react-query";
import { hours } from "../utils/timeUtil";
import { isNil } from "lodash-es";
import axios from "axios";
import type { PokemonIdentifier } from "../utils/pokemonUtil";

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

type UsePokemonEvolutionResult = {
  data?: EvolutionChain;
  isLoading: boolean;
  error: Error | null;
};

type EvolutionStageResponse = {
  baby_trigger_item: { name: string; url: string } | null;
  chain: EvolutionChain;
};

const usePokemonEvolution = (identifier?: PokemonIdentifier, evolutionStage?: string): UsePokemonEvolutionResult => {
  const result = useQuery({
    queryKey: ["pokemonEvolution", identifier],
    queryFn: async (): Promise<EvolutionChain> => {
      const { data } = await axios.get<EvolutionStageResponse>(evolutionStage ?? "");

      return data.chain;
    },
    enabled: !isNil(identifier) && !isNil(evolutionStage),
    staleTime: hours(1),
    retry: 3,
  });

  // const evolutions = result.data?.evolves_to.map((evolution) => {
  //   const evolutionDetails = evolution.evolution_details.reduce(
  //     (acc, detail) => {
  //       Object.entries(detail).forEach(([key, value]) => {
  //         if (!isNil(value) && value !== false && value !== "") {
  //           acc[key] = value;
  //         }
  //       });
  //       return acc;
  //     },
  //     {} as Record<string, EvolutionDetails>,
  //   );

  //   // const trigger = Object.entries(evolutionDetails)
  //   //   .filter(([, value]) => !isNil(value) && value !== false && value !== "") // Keep only non-nil values
  //   //   .reduce(
  //   //     (acc, [key, value]) => {
  //   //       acc[key] = value;
  //   //       return acc;
  //   //     },
  //   //     {} as Record<string, EvolutionDetails>,
  //   //   );

  //   return {
  //     name: evolution.species.name,
  //     ...evolutionDetails,
  //   };
  // });

  return result;
};

export default usePokemonEvolution;
