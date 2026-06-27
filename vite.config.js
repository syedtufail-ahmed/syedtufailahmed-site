import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const isSSR = process.env.BUILD_TARGET === "server";
  return {
    plugins: [react()],
    build: {
      outDir: isSSR ? "dist/server" : "dist/client",
      ssr: isSSR ? "src/entry-server.jsx" : undefined,
      rollupOptions: isSSR
        ? { input: "src/entry-server.jsx" }
        : { input: "index.html" },
    },
  };
});
