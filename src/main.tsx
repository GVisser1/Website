import { RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import { createAppRouter } from "./router";

const router = createAppRouter();

// index.html carries a title and description for crawlers that don't run JavaScript. Each route renders its own, so
// drop the static ones to avoid duplicates
for (const element of document.head.querySelectorAll("[data-static-head]")) {
  element.remove();
}

const app = (
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

const rootElement = document.getElementById("app");
if (rootElement) {
  if (rootElement.hasChildNodes()) {
    // Built pages are prerendered: load the route's code first so the first render matches the markup, then hydrate.
    // Marking the router as server-rendered makes it skip the Suspense boundaries the prerender didn't emit, the same
    // flag TanStack's own SSR hydration sets
    await router.load();
    router.ssr = { manifest: undefined };
    ReactDOM.hydrateRoot(rootElement, app);
  } else {
    ReactDOM.createRoot(rootElement).render(app);
  }
}
