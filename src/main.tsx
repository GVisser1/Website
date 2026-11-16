import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// index.html carries a title and description for crawlers that don't run JavaScript. Each route renders its own, so
// drop the static ones to avoid duplicates
for (const element of document.head.querySelectorAll("[data-static-head]")) {
  element.remove();
}

const rootElement = document.getElementById("app");
// Built pages already contain prerendered markup for crawlers and first paint; the app renders over it
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>,
  );
}
