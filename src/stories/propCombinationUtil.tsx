import clsx from "clsx";
import type { ComponentType } from "react";

type ComponentProperty<ComponentProps> = {
  [PropertyKey in keyof ComponentProps]: {
    name: PropertyKey;
    values: ComponentProps[PropertyKey][];
  };
}[keyof ComponentProps];

type CombinationGridProps<ComponentProps> = {
  Component: ComponentType<ComponentProps>;
  properties: ComponentProperty<ComponentProps>[];
  defaultProps?: Partial<ComponentProps>;
  columns?: "1" | "2" | "3" | "4" | "5" | "6";
};

export const CombinationGrid = <ComponentProps extends object>({
  Component,
  properties,
  defaultProps,
  columns = "4",
}: CombinationGridProps<ComponentProps>): JSX.Element => {
  const combinations = generateCombinations(properties);
  const classes = clsx("grid gap-4", columns === "1" ? "grid-cols-1" : "grid-cols-2", {
    "lg:grid-cols-2": columns === "2",
    "lg:grid-cols-3": columns === "3",
    "lg:grid-cols-4": columns === "4",
    "lg:grid-cols-5": columns === "5",
    "lg:grid-cols-6": columns === "6",
  });

  return (
    <div className={classes}>
      {combinations.map((props, index) => (
        <div key={index}>
          <div className="flex flex-wrap gap-x-1 text-xs text-gray-500">
            {Object.keys(props).map((key) =>
              props[key as keyof ComponentProps] ? (
                <p key={key}>
                  {key}: {}
                  <span className="inline-block max-w-[25ch] truncate align-top font-medium text-blue-700">
                    {JSON.stringify(props[key as keyof ComponentProps])}
                  </span>
                </p>
              ) : null
            )}
          </div>
          <Component {...(defaultProps as ComponentProps)} {...(props as ComponentProps)} />
        </div>
      ))}
    </div>
  );
};

/**
 * Generates all possible combinations of properties.
 * @param properties - An array of properties, where each property is an object with a name and an array of possible values.
 * @returns An array of combinations, where each combination is an object with properties and their corresponding values.
 */
export const generateCombinations = <ComponentProps,>(
  properties: ComponentProperty<ComponentProps>[]
): Partial<ComponentProps>[] =>
  properties.reduce<Partial<ComponentProps>[]>(
    (combinations, { name, values }) =>
      combinations.flatMap((combination) => values.map((value) => ({ ...combination, [name]: value }))),
    [{}]
  );