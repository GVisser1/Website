import { createRouter, type RouterHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Shared by the browser and the build-time prerender, so both produce the same markup for hydration
export const createAppRouter = (
  history?: RouterHistory,
): ReturnType<typeof createRouter<typeof routeTree, "never", true>> =>
  createRouter({
    routeTree,
    history,
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
  });
