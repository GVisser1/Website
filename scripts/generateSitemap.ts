import fs from "node:fs";
import path from "node:path";
import { isNil } from "lodash-es";
import { type RootRouteChildren, routeTree } from "../src/routeTree.gen.ts";

const DOMAIN = "https://glennvisser.com";

// Recursively collect all full paths
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

const paths = collectPaths(routeTree.children);
// Build sitemap XML
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  paths
    .map((p) => {
      return `
  <url>
    <loc>${DOMAIN}${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
    })
    .join("\n") +
  `\n</urlset>\n`;

const output = path.join(process.cwd(), "public", "sitemap.xml");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, xml);

console.log("✔ Sitemap generated");
console.log("  →", output);
