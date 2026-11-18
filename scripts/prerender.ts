import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { isNil } from "lodash-es";
import type { HeadTag, RenderResult } from "../src/entryServer.tsx";
import { DOMAIN, ROUTE_PATHS } from "./routePaths.ts";

const DIST = path.join(process.cwd(), "dist");
const SERVER_ENTRY = path.join(process.cwd(), "node_modules", ".prerender", "entryServer.js");
const APP_ROOT = '<div id="app" class="flex min-h-dvh flex-col"></div>';
// Any URL no route matches, to render the not-found page
const NOT_FOUND_PATH = "/404";

const { render } = (await import(pathToFileURL(SERVER_ENTRY).href)) as {
  render: (url: string) => Promise<RenderResult>;
};

const escapeAttribute = (value: string): string =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

// Child routes come after the root, so the last title and description are the page's own
const findLastValue = <T>(tags: HeadTag[], pick: (tag: HeadTag) => T | undefined): T => {
  const value = tags
    .map(pick)
    .filter((candidate): candidate is T => !isNil(candidate))
    .at(-1);
  if (isNil(value)) {
    throw new Error("A rendered page is missing its title or description");
  }
  return value;
};

const replaceOnce = (html: string, pattern: RegExp, replacement: string): string => {
  if (!pattern.test(html)) {
    throw new Error(`index.html no longer contains ${pattern}`);
  }
  return html.replace(pattern, () => replacement);
};

// Swaps the content of the one <meta> tag with this attribute, however the formatter wrapped it
const setMetaContent = (html: string, attribute: string, content: string): string => {
  let matches = 0;
  const updated = html.replace(/<meta\b[^>]*>/g, (tag) => {
    if (!tag.includes(attribute)) {
      return tag;
    }
    matches++;
    return tag.replace(/content="[^"]*"/, () => `content="${content}"`);
  });
  if (matches !== 1) {
    throw new Error(`index.html should have exactly one <meta ${attribute}>, found ${matches}`);
  }
  return updated;
};

// The stylesheet blocks the first paint, and on a slow connection it downloads alongside the JavaScript. Inline it so a
// page can paint as soon as its HTML arrives. Its font URLs are absolute (/assets/...), so they still resolve on nested
// pages
const inlineStylesheet = (html: string): string => {
  const links = html.match(/<link rel="stylesheet"[^>]*>/g) ?? [];
  if (links.length !== 1) {
    throw new Error(`index.html should link exactly one stylesheet, found ${links.length}`);
  }
  const href = /href="\/([^"]+)"/.exec(links[0])?.[1];
  if (isNil(href)) {
    throw new Error(`Can't find the stylesheet's path in ${links[0]}`);
  }
  const css = fs.readFileSync(path.join(DIST, href), "utf8");
  if (css.includes("</style")) {
    throw new Error("The stylesheet contains </style and can't be inlined");
  }
  return html.replace(links[0], () => `<style>${css}</style>`);
};

const template = inlineStylesheet(fs.readFileSync(path.join(DIST, "index.html"), "utf8"));

// React emits <title>, <meta> and image preload <link>s at the start of the markup; they belong in <head>
const splitHoistedTags = (html: string): { preloads: string[]; body: string } => {
  const hoisted = /^(?:<link[^>]*\/>|<title>[^<]*<\/title>|<meta[^>]*\/>)+/.exec(html)?.[0] ?? "";
  return {
    preloads: hoisted.match(/<link rel="preload"[^>]*\/>/g) ?? [],
    body: html.slice(hoisted.length),
  };
};

const buildPage = (result: RenderResult, url: string): string => {
  const title = escapeAttribute(findLastValue(result.head, (tag) => ("title" in tag ? tag.title : undefined)));
  const description = escapeAttribute(
    findLastValue(result.head, (tag) => ("name" in tag && tag.name === "description" ? tag.content : undefined)),
  );
  const { preloads, body } = splitHoistedTags(result.html);

  let page = template;
  page = replaceOnce(page, /<title data-static-head>[^<]*<\/title>/, `<title data-static-head>${title}</title>`);
  page = setMetaContent(page, 'name="description"', description);
  page = setMetaContent(page, 'property="og:title"', title);
  page = setMetaContent(page, 'property="og:description"', description);

  const extraHead = result.isNotFound
    ? ['<meta name="robots" content="noindex" />']
    : [`<link rel="canonical" href="${DOMAIN}${url}" />`];
  if (!result.isNotFound) {
    page = setMetaContent(page, 'property="og:url"', `${DOMAIN}${url}`);
  }
  page = replaceOnce(page, /<\/head>/, `${[...extraHead, ...preloads].map((tag) => `  ${tag}\n`).join("")}  </head>`);

  if (!page.includes(APP_ROOT)) {
    throw new Error("index.html no longer contains the empty app root");
  }
  return page.replace(APP_ROOT, () => APP_ROOT.replace("></div>", `>${body}</div>`));
};

const writePage = (file: string, html: string): void => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log("  →", path.relative(process.cwd(), file));
};

const pages = await Promise.all(ROUTE_PATHS.map(async (url) => ({ url, result: await render(url) })));
const notFound = await render(NOT_FOUND_PATH);

for (const { url, result } of pages) {
  if (result.isNotFound) {
    throw new Error(`${url} rendered as not found`);
  }
}
if (!notFound.isNotFound) {
  throw new Error(`${NOT_FOUND_PATH} should render the not-found page`);
}

// Build every page from the untouched template before overwriting index.html with the home page
const output = [
  ...pages.map(({ url, result }) => ({
    file: url === "/" ? path.join(DIST, "index.html") : path.join(DIST, url, "index.html"),
    html: buildPage(result, url),
  })),
  { file: path.join(DIST, "404.html"), html: buildPage(notFound, NOT_FOUND_PATH) },
];

console.log("✔ Prerendered pages");
for (const { file, html } of output) {
  writePage(file, html);
}
