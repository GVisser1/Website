import fs from "node:fs";
import path from "node:path";
import { DOMAIN, ROUTE_PATHS } from "./routePaths.ts";

// Build sitemap XML
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTE_PATHS.map((p) => {
    return `
  <url>
    <loc>${DOMAIN}${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
  }).join("\n") +
  `\n</urlset>\n`;

const output = path.join(process.cwd(), "public", "sitemap.xml");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, xml);

console.log("✔ Sitemap generated");
console.log("  →", output);
