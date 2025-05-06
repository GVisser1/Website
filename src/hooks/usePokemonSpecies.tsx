import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { isNil } from "lodash-es";
import { hours } from "../utils/timeUtil";
import { POKEMON_API_URL } from "../constants";
import type { PokemonIdentifier } from "../utils/pokemonUtil";

type PokemonSpeciesResponse = {
  evolution_chain: { url: string };
  is_legendary: boolean;
  is_mythical: boolean;
  genera: { genus: string; language: { name: string } }[];
  generation: { name: string; url: string };
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
};

type UsePokemonSpeciesResult = {
  data?: PokemonSpeciesDetails;
  error: Error | null;
  isLoading: boolean;
};

export type PokemonSpeciesDetails = {
  evolutionChain: string;
  generation: string;
  isLegendary: boolean;
  isMythical: boolean;
  genus: string;
  description: string;
};

export const usePokemonSpecies = (identifier?: PokemonIdentifier): UsePokemonSpeciesResult =>
  useQuery({
    queryKey: ["pokemonSpecies", identifier],
    queryFn: async (): Promise<PokemonSpeciesDetails> => {
      const { data } = await axios.get<PokemonSpeciesResponse>(`${POKEMON_API_URL}-species/${identifier}`);

      const genus = getEnglishText(data.genera, "genus");
      const description = formatDescription(getEnglishText(data.flavor_text_entries, "flavor_text"));

      return {
        evolutionChain: data.evolution_chain.url,
        generation: data.generation.name,
        isLegendary: data.is_legendary,
        isMythical: data.is_mythical,
        genus,
        description,
      };
    },
    enabled: !isNil(identifier),
    staleTime: hours(1),
    retry: 3,
  });

const getEnglishText = <T extends { language: { name: string } }>(entries: T[], key: keyof T): string =>
  (entries.find((entry) => entry.language.name === "en")?.[key] as string) ?? "No description available.";

const formatDescription = (description: string): string => {
  let formattedDescription = description.replace("POKéMON", "Pokémon");

  formattedDescription = formattedDescription.replace("POKé BALL", "Poké Ball");
  formattedDescription = formattedDescription.replace(/\n/g, " ");
  formattedDescription = formattedDescription.replace("\u000c", " ");

  return formattedDescription;
};
