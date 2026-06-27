import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  "/",
  "/about",
  "/writing",
  "/book",
  "/speaking",
  "/executive-credentials",
  "/writing/human-in-the-loop-ai-governance",
  "/writing/cultural-accountability-ai-governance",
  "/writing/human-in-the-loop",
];

async function prerender() {
  // Load the built server module
  const { render } = await import("./dist/server/entry-server.js");

  const template = fs.readFileSync(
    path.resolve(__dirname, "dist/client/index.html"),
    "utf-8"
  );

  for (const route of routes) {
    const { html, helmet } = render(route);

    const titleTag = helmet?.title?.toString() || "";
    const metaTags = helmet?.meta?.toString() || "";
    const linkTags = helmet?.link?.toString() || "";
    const scriptTags = helmet?.script?.toString() || "";

    const finalHtml = template
      .replace(
        /<title>.*?<\/title>/,
        titleTag
      )
      .replace(
        "<!--helmet-meta-->",
        `${metaTags}${linkTags}${scriptTags}`
      )
      .replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

    // Write output file
    const outDir = path.resolve(__dirname, "dist/client");
    const filePath =
      route === "/"
        ? path.resolve(outDir, "index.html")
        : path.resolve(outDir, route.slice(1), "index.html");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, finalHtml);
    console.log(`Prerendered: ${route} → ${filePath}`);
  }
}

prerender().catch(console.error);
