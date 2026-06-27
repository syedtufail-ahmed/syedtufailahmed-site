import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { createRequire } from "module";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  { path: "/", file: "index.html" },
  { path: "/about", file: "about/index.html" },
  { path: "/writing", file: "writing/index.html" },
  { path: "/book", file: "book/index.html" },
  { path: "/speaking", file: "speaking/index.html" },
  { path: "/executive-credentials", file: "executive-credentials/index.html" },
  { path: "/writing/human-in-the-loop-ai-governance", file: "writing/human-in-the-loop-ai-governance/index.html" },
  { path: "/writing/cultural-accountability-ai-governance", file: "writing/cultural-accountability-ai-governance/index.html" },
  { path: "/writing/human-in-the-loop", file: "writing/human-in-the-loop/index.html" },
];

async function prerender() {
  const distDir = path.resolve(__dirname, "dist");
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

  // Use Vite's SSR load which handles CJS/ESM interop correctly
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    ssr: { noExternal: ["react-helmet-async"] },
  });

  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

  for (const route of routes) {
    try {
      const { html, helmet } = render(route.path);

      const titleTag = helmet?.title?.toString() || "";
      const metaTags = helmet?.meta?.toString() || "";
      const linkTags = helmet?.link?.toString() || "";
      const scriptTags = helmet?.script?.toString() || "";
      const helmetHead = `${titleTag}${metaTags}${linkTags}${scriptTags}`;

      let finalHtml = template
        .replace("<!--helmet-meta-->", helmetHead)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      if (titleTag) {
        finalHtml = finalHtml.replace(
          /<title>Syed Tufail Ahmed \| AI Governance Leader.*?<\/title>/s,
          ""
        );
      }

      const outPath = path.resolve(distDir, route.file);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, finalHtml);
      console.log(`✓ Prerendered: ${route.path}`);
    } catch (err) {
      console.error(`✗ Failed: ${route.path}`, err.message);
    }
  }

  await vite.close();
  console.log("Prerender complete.");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
