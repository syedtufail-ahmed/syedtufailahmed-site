import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

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

  // Read the built client index.html as template
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

  // Import the server bundle
  const { render } = await import("./dist/server/entry-server.js");

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

      // Remove the fallback title if helmet injected one
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

  console.log("Prerender complete.");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
