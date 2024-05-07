export const seconds = (sec: number): number => sec * 1000;

export const minutes = (min: number): number => min * seconds(60);

export const hours = (hrs: number): number => hrs * minutes(60);
