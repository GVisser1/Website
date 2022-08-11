import { Color } from "../types/Color";

export const Colors: Color[] = ["BLUE", "GREEN", "RED", "YELLOW", "GRAY", "PINK"];

export const getCardTheme = (type: Color) =>
  ({
    BLUE: "bg-blue-100 dark:bg-blue-200 text-blue-800",
    GREEN: "bg-emerald-100 dark:bg-emerald-200 text-emerald-800",
    RED: "bg-red-100 dark:bg-red-200 text-red-800",
    YELLOW: "bg-yellow-100 dark:bg-yellow-200 text-yellow-800",
    GRAY: "bg-gray-100 dark:bg-gray-200 text-gray-800",
    PINK: "bg-pink-100 dark:bg-pink-200 text-pink-800",
    BUG: "text-white bg-[#A8B820]",
    DARK: "text-white bg-[#705848]",
    DRAGON: "text-white bg-[#7038F8]",
    ELECTRIC: "text-white bg-[#F8D030]",
    FAIRY: "text-white bg-[#EE99AC]",
    FIGHTING: "text-white bg-[#C03028]",
    FIRE: "text-white bg-[#F08030]",
    FLYING: "text-white bg-[#A890F0]",
    GHOST: "text-white bg-[#705898]",
    GRASS: "text-white bg-[#78C850]",
    GROUND: "text-white bg-[#E0C068]",
    ICE: "text-white bg-[#98D8D8]",
    NORMAL: "text-white bg-[#A8A878]",
    POISON: "text-white bg-[#A040A0]",
    PSYCHIC: "text-white bg-[#F85888]",
    ROCK: "text-white bg-[#B8A038]",
    STEEL: "text-white bg-[#B8B8D0]",
    WATER: "text-white bg-[#6890F0]",
  }[type]);

export const getTimelineIconTheme = (type: Color) =>
  ({
    BLUE: "bg-blue-100 ring-blue-400 text-blue-400",
    GREEN: "bg-emerald-100 ring-emerald-400 text-emerald-400",
    RED: "bg-red-100 ring-red-400 text-red-400",
    YELLOW: "bg-yellow-100 ring-yellow-500 text-yellow-500",
    GRAY: "bg-gray-100 ring-gray-400 text-gray-400",
    PINK: "bg-pink-100 ring-pink-400 text-pink-400",
    BUG: "text-white bg-[#A8B820] ring-[#6D7815]",
    DARK: "text-white bg-[#705848] ring-[#49392F]",
    DRAGON: "text-white bg-[#7038F8] ring-[#4924A1]",
    ELECTRIC: "text-white bg-[#F8D030] ring-[#A1871F]",
    FAIRY: "text-white bg-[#EE99AC] ring-[#9B6470]",
    FIGHTING: "text-white bg-[#C03028] ring-[#7D1F1A]",
    FIRE: "text-white bg-[#F08030] ring-[#9C531F]",
    FLYING: "text-white bg-[#A890F0] ring-[#6D5E9C]",
    GHOST: "text-white bg-[#705898] ring-[#493963]",
    GRASS: "text-white bg-[#78C850] ring-[#4E8234]",
    GROUND: "text-white bg-[#E0C068] ring-[#927D44]",
    ICE: "text-white bg-[#98D8D8] ring-[#638D8D]",
    NORMAL: "text-white bg-[#A8A878] ring-[#6D6D4E]",
    POISON: "text-white bg-[#A040A0] ring-[#682A68]",
    PSYCHIC: "text-white bg-[#F85888] ring-[#A13959]",
    ROCK: "text-white bg-[#B8A038] ring-[#786824]",
    STEEL: "text-white bg-[#B8B8D0] ring-[#787887]",
    WATER: "text-white bg-[#6890F0] ring-[#445E9C]",
  }[type]);
