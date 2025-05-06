import type { IconName } from "../components/icon";
import type { EvolutionChain, EvolutionDetails } from "../hooks/usePokemonEvolution";

export const PAGE_SIZE = 16;
export const TOTAL_POKEMON = 1025;

export type PokemonIdentifier = string | number;
export type PokemonStats = { name: string; base_stat: number }[];

export type PokemonType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

type EvolutionStage = {
  id: number;
  name: string;
  trigger?: string;
  conditions?: Omit<EvolutionDetails, "trigger">;
};

export const mapEvolutionsByStage = (stage: EvolutionChain): EvolutionStage[][] => {
  const stages: EvolutionStage[][] = [];

  const traverse = (s: EvolutionChain, depth = 0): void => {
    if (!stages[depth]) {
      stages[depth] = [];
    }

    const details = s.evolution_details?.[0]; // Just the first detail for now
    const { trigger, ...conditions } = details || {};
    stages[depth].push({
      id: parseInt(s.species.url.split("/").slice(-2)[0]),
      name: s.species.name,
      trigger: trigger?.name,
      conditions,
    });

    s.evolves_to.forEach((evo) => traverse(evo, depth + 1));
  };

  traverse(stage);
  return stages;
};

export type PokemonTypeInfo = {
  name: string;
  textColor: string;
  bgColor: string;
  icon: IconName;
};
export const pokemonTypeInfo: Record<string, PokemonTypeInfo> = {
  bug: {
    name: "Bug",
    textColor: "text-pokemon-bug",
    bgColor: "bg-pokemon-bug",
    icon: "TypeBug",
  },
  dark: {
    name: "Dark",
    textColor: "text-pokemon-dark",
    bgColor: "bg-pokemon-dark",
    icon: "TypeDark",
  },
  dragon: {
    name: "Dragon",
    textColor: "text-pokemon-dragon",
    bgColor: "bg-pokemon-dragon",
    icon: "TypeDragon",
  },
  electric: {
    name: "Electric",
    textColor: "text-pokemon-electric",
    bgColor: "bg-pokemon-electric",
    icon: "TypeElectric",
  },
  fairy: {
    name: "Fairy",
    textColor: "text-pokemon-fairy",
    bgColor: "bg-pokemon-fairy",
    icon: "TypeFairy",
  },
  fighting: {
    name: "Fighting",
    textColor: "text-pokemon-fighting",
    bgColor: "bg-pokemon-fighting",
    icon: "TypeFighting",
  },
  fire: {
    name: "Fire",
    textColor: "text-pokemon-fire",
    bgColor: "bg-pokemon-fire",
    icon: "TypeFire",
  },
  flying: {
    name: "Flying",
    textColor: "text-pokemon-flying",
    bgColor: "bg-pokemon-flying",
    icon: "TypeFlying",
  },
  ghost: {
    name: "Ghost",
    textColor: "text-pokemon-ghost",
    bgColor: "bg-pokemon-ghost",
    icon: "TypeGhost",
  },
  grass: {
    name: "Grass",
    textColor: "text-pokemon-grass",
    bgColor: "bg-pokemon-grass",
    icon: "TypeGrass",
  },
  ground: {
    name: "Ground",
    textColor: "text-pokemon-ground",
    bgColor: "bg-pokemon-ground",
    icon: "TypeGround",
  },
  ice: {
    name: "Ice",
    textColor: "text-pokemon-ice",
    bgColor: "bg-pokemon-ice",
    icon: "TypeIce",
  },
  normal: {
    name: "Normal",
    textColor: "text-pokemon-normal",
    bgColor: "bg-pokemon-normal",
    icon: "TypeNormal",
  },
  poison: {
    name: "Poison",
    textColor: "text-pokemon-poison",
    bgColor: "bg-pokemon-poison",
    icon: "TypePoison",
  },
  psychic: {
    name: "Psychic",
    textColor: "text-pokemon-psychic",
    bgColor: "bg-pokemon-psychic",
    icon: "TypePsychic",
  },
  rock: {
    name: "Rock",
    textColor: "text-pokemon-rock",
    bgColor: "bg-pokemon-rock",
    icon: "TypeRock",
  },
  steel: {
    name: "Steel",
    textColor: "text-pokemon-steel",
    bgColor: "bg-pokemon-steel",
    icon: "TypeSteel",
  },
  water: {
    name: "Water",
    textColor: "text-pokemon-water",
    bgColor: "bg-pokemon-water",
    icon: "TypeWater",
  },
};
