import fs from "node:fs";
import path from "node:path";
import { DOMAIN, ROUTE_PATHS } from "./routePaths.ts";

// The spec requires the http:// namespace
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTE_PATHS.map((p) => `  <url>\n    <loc>${DOMAIN}${p}</loc>\n  </url>\n`).join("") +
  `</urlset>\n`;

const output = path.join(process.cwd(), "public", "sitemap.xml");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, xml);

console.log("✔ Sitemap generated");
console.log("  →", output);
