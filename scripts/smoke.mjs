// Runtime smoke test: compile the app with esbuild and render it to static
// HTML with react-dom/server. This verifies the component tree composes and
// renders without throwing, and lets us assert key content is present.
import { build } from "esbuild";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const root = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(root, "..");

const outfile = path.join(projectRoot, "scripts", ".app.bundle.mjs");

await build({
  entryPoints: [path.join(projectRoot, "src/App.tsx")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile,
  jsx: "automatic",
  loader: { ".css": "empty", ".svg": "text" },
  logLevel: "warning",
  external: ["react", "react-dom", "react/jsx-runtime"],
  // Vite injects import.meta.env; stub BASE_URL for this plain-Node render test.
  define: {
    "import.meta.env.BASE_URL": '"/"',
  },
});

const mod = await import(path.join(projectRoot, "scripts", ".app.bundle.mjs"));
const App = mod.default;

const html = renderToStaticMarkup(React.createElement(App));
fs.unlinkSync(outfile);

const checks = [
  ["BUILT TO ADAPT.", html.includes("BUILT TO ADAPT.")],
  ["Samuel Ong", html.includes("Samuel Ong")],
  ["Hero intro", html.includes("I enjoy understanding how systems work")],
  ["Foundation / Sysmac", html.includes("Sysmac Studio")],
  ["Projects note (illustrative)", html.toLowerCase().includes("conceptual")],
  ["Approach framework", html.includes("OBSERVE") && html.includes("IMPROVE")],
  ["Track comeback", html.includes("THE COMEBACK IS PART OF THE STORY.")],
  ["Vice-Captain", html.includes("Vice-Captain")],
  ["Markets framing", html.includes("financial markets")],
  ["Why Innowave split", html.includes("already bring") && html.includes("keen to learn")],
  ["Protocols framed as learning", html.includes("Modbus") && html.includes("keen to learn")],
  ["Omron/Sysmac attributed correctly", html.includes("Omron Sysmac")],
  ["Awards present", html.includes("Half-Colours Award") && html.includes("EAGLES Award")],
  ["Contact email present", html.includes("samfx5620@gmail.com")],
  ["Vice-Captain scoped to secondary school", html.includes("secondary school Track")],
  ["Image placeholders present", html.includes("img-placeholder") || html.includes("hero__img")],
  ["Nav links", html.includes("Section navigation")],
  ["Skip link", html.includes("Skip to content")],
];

let failed = 0;
for (const [name, ok] of checks) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) failed++;
}

console.log(`\nRendered HTML length: ${html.length} chars`);
console.log(failed === 0 ? "\nALL CHECKS PASSED" : `\n${failed} CHECK(S) FAILED`);
process.exit(failed === 0 ? 0 : 1);
