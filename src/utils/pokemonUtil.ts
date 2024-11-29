import axios from "axios";
import { isNil } from "lodash-es";

const TOTAL_POKEMON = 1025;
const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";

export type PaginatedPokemon = { results: { name: string; url: string }[]; count: number };

const getPokemonId = (url: string): number => parseInt(url.split("/").slice(-2, -1)[0]);
export const getPaginatedPokemon = async (offset: number, limit: number): Promise<PaginatedPokemon> => {
  const { data } = await axios.get<PaginatedPokemon>(POKEMON_API_URL, { params: { offset, limit } }).catch((error) => {
    console.error("Failed to fetch Pokemon list:", error);
    throw new Error("Failed to fetch Pokemon list");
  });

  return {
    results: data.results.filter(({ url }) => getPokemonId(url) <= TOTAL_POKEMON),
    count: Math.min(data.count, TOTAL_POKEMON),
  };
};

type PokemonDetailsResponse = {
  id: number;
  name: string;
  height: number;
  sprites: {
    other: {
      showdown: { front_default: string | null };
      home: { front_default: string | null };
    };
  };
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  types: { type: { name: string } }[];
  weight: number;
};

export type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  sprite: string | null;
  stats: { name: string; base_stat: number }[];
  types: string[];
  weight: number;
};

export const getPokemonDetails = async (identifier: string): Promise<PokemonDetails> => {
  const { data } = await axios.get<PokemonDetailsResponse>(`${POKEMON_API_URL}/${identifier}`).catch((error) => {
    console.error(`Failed to fetch details for Pokémon "${identifier}":`, error.message || error);
    throw new Error(`Could not retrieve details for Pokémon "${identifier}".`);
  });

  const sprite = data.sprites.other.showdown.front_default || data.sprites.other.home.front_default || null;
  const stats = data.stats.map(({ base_stat, stat }) => ({ name: stat.name, base_stat }));
  const types = data.types.map((type) => type.type.name);

  return { id: data.id, height: data.height, name: data.name, sprite, stats, types, weight: data.weight };
};

type EvolutionChain = {
  species: { name: string; url: string };
  evolves_to: EvolutionChain[];
};

type PokemonSpeciesResponse = {
  name: string;
  evolution_chain: { url: string };
  is_legendary: boolean;
  is_mythical: boolean;
  genera: { genus: string; language: { name: string } }[];
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
};

export type PokemonSpeciesDetails = {
  name: string;
  evolutionChain: PokemonDetails[][];
  isLegendary: boolean;
  isMythical: boolean;
  genus: string;
  description: string;
};

const getEnglishText = <T extends { language: { name: string } }>(entries: T[], key: keyof T): string =>
  (entries.find((entry) => entry.language.name === "en")?.[key] as string) ?? "No description available.";

export const getPokemonSpeciesDetails = async (id: number): Promise<PokemonSpeciesDetails> => {
  const { data } = await axios.get<PokemonSpeciesResponse>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const evolutionChain = await getEvolutionChain(data.evolution_chain.url);
  const genus = getEnglishText(data.genera, "genus");
  const description = formatDescription(getEnglishText(data.flavor_text_entries, "flavor_text"));

  return {
    name: data.name,
    evolutionChain,
    isLegendary: data.is_legendary,
    isMythical: data.is_mythical,
    genus,
    description,
  };
};

type EvolutionChainResponse = {
  chain: EvolutionChain;
};

/**
 * Recursively extracts Pokémon details at each evolution stage.
 * @param chain - The current evolution chain node.
 * @param stages - Accumulated Pokémon details by evolution stage.
 * @param depth - The current depth in the evolution chain.
 */
const getEvolutionsByStage = async (
  chain: EvolutionChain,
  stages: PokemonDetails[][] = [],
  depth = 0
): Promise<PokemonDetails[][]> => {
  if (isNil(chain) || (depth === 0 && chain.evolves_to.length === 0)) {
    return stages;
  }

  if (isNil(stages[depth])) {
    stages[depth] = [];
  }

  const speciesId = chain.species.url.split("/").slice(-2, -1)[0];
  const details = await getPokemonDetails(speciesId);
  stages[depth].push(details);

  await Promise.all(chain.evolves_to.map((evolution) => getEvolutionsByStage(evolution, stages, depth + 1)));

  return stages;
};

export const getEvolutionChain = async (url: string): Promise<PokemonDetails[][]> => {
  // Fetch the evolution chain data
  const { data } = await axios.get<EvolutionChainResponse>(url).catch((error) => {
    console.error("Error fetching evolution chain:", error instanceof Error ? error.message : error);
    throw new Error("Failed to fetch evolution chain");
  });

  return getEvolutionsByStage(data.chain);
};

export const typingColor: Record<string, string> = {
  normal: "bg-stone-300 text-zinc-900",
  fire: "bg-orange-500 text-orange-950",
  water: "bg-blue-200 text-blue-900",
  electric: "bg-yellow-400 text-yellow-950",
  grass: "bg-emerald-700 text-white",
  ice: "bg-cyan-200 text-cyan-900",
  fighting: "bg-amber-800 text-white",
  poison: "bg-fuchsia-600 text-white",
  ground: "bg-yellow-500 text-yellow-950",
  flying: "bg-sky-200 text-sky-900",
  psychic: "bg-pink-600 text-white",
  bug: "bg-lime-700 text-white",
  rock: "bg-yellow-700 text-white",
  ghost: "bg-violet-600 text-white",
  dragon: "bg-indigo-600 text-white",
  dark: "bg-zinc-700 text-white",
  steel: "bg-gray-500 text-white",
  fairy: "bg-pink-200 text-pink-900",
};

const formatDescription = (description: string): string => {
  let formattedDescription = description.replace("POKéMON", "Pokémon");

  formattedDescription = formattedDescription.replace("POKé BALL", "Poké Ball");
  formattedDescription = formattedDescription.replace(/\n/g, " ");
  formattedDescription = formattedDescription.replace("\u000c", " ");

  return formattedDescription;
};
