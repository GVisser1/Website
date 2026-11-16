import { isNil } from "lodash-es";
import { type RootRouteChildren, routeTree } from "../src/routeTree.gen.ts";

export const DOMAIN = "https://glennvisser.com";

const collectPaths = (routes: RootRouteChildren | undefined): string[] => {
  if (isNil(routes)) {
    return [];
  }

  return Object.values(routes)
    .map((route: { options: { path?: string } }) => {
      if (isNil(route.options) || isNil(route.options.path)) {
        return null;
      }
      return route.options.path === "/" ? "/" : route.options.path.replace(/\/$/, "");
    })
    .filter((path): path is string => typeof path === "string")
    .filter((p) => !p.includes(":") && !p.includes("$"));
};

// Every static page of the site, used for both the sitemap and prerendering
export const ROUTE_PATHS = collectPaths(routeTree.children);
