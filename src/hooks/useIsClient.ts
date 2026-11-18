import { useSyncExternalStore } from "react";

// Being in the browser never changes, so there's nothing to listen to or clean up
const subscribe = (): (() => void) => () => undefined;

// False while prerendering and during hydration, true once the page runs in the browser. Lets a component match the
// prerendered markup first and then show what only the browser knows
export const useIsClient = (): boolean =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
