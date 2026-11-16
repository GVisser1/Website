import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";
import type tailwindcss from "@tailwindcss/vite";

// The Vite plugin type the other plugins in vite.config.ts use; vite-plus's own Plugin type is a separate copy that
// TypeScript can't compare against it
type VitePlugin = ReturnType<typeof tailwindcss>[number];
type PreviewServer = Parameters<Extract<VitePlugin["configurePreviewServer"], (...args: never[]) => unknown>>[0];

const NOT_FOUND_PAGE = "404.html";

// `vite preview` serves the home page for every path without a trailing slash, so /about would get the home page's
// prerendered HTML and fail to hydrate. Serve the build the way Netlify does instead: a page's own index.html, and
// 404.html with a 404 status for unknown pages. CI runs the e2e tests against this preview.
export const prerenderedPagesPreview = (): VitePlugin => ({
  name: "prerendered-pages-preview",
  configurePreviewServer: (server: PreviewServer): void => {
    const outDir = path.resolve(server.config.root, server.config.build.outDir);

    server.middlewares.use((request: IncomingMessage, response: ServerResponse, next: () => void): void => {
      const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
      // Files (with an extension) and the home page are already served correctly
      if (path.extname(pathname) !== "" || pathname === "/") {
        next();
        return;
      }

      const page = path.join(outDir, pathname, "index.html");
      if (fs.existsSync(page)) {
        request.url = path.posix.join(pathname, "index.html");
        next();
        return;
      }

      response.statusCode = 404;
      response.setHeader("Content-Type", "text/html");
      response.end(fs.readFileSync(path.join(outDir, NOT_FOUND_PAGE)));
    });
  },
});
