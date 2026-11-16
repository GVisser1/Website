import { createMemoryHistory, createRouter, rootRouteId, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { routeTree } from "./routeTree.gen";

export type HeadTag = { title: string } | { name: string; content: string };

export type RenderResult = {
  html: string;
  head: HeadTag[];
  isNotFound: boolean;
};

const streamToString = async (stream: ReadableStream<Uint8Array>): Promise<string> => {
  const decoder = new TextDecoder();
  let result = "";
  for await (const chunk of stream) {
    result += decoder.decode(chunk, { stream: true });
  }
  return result + decoder.decode();
};

// Renders one URL to static HTML at build time, used by scripts/prerender.ts
export const render = async (url: string): Promise<RenderResult> => {
  const router = createRouter({ routeTree, history: createMemoryHistory({ initialEntries: [url] }) });
  await router.load();

  const { prelude } = await prerender(
    <StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>,
  );

  const head = router.state.matches.flatMap((match) => (match.meta ?? []) as HeadTag[]);

  // Only the root route matches when no page does, which is when the not-found page renders
  const isNotFound = router.state.matches.at(-1)?.routeId === rootRouteId;

  return { html: await streamToString(prelude), head, isNotFound };
};
