import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isServer = process.env.BUILD_TARGET === "server";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: isServer ? "dist/server" : "dist",
    ssr: isServer ? "src/entry-server.jsx" : undefined,
    rollupOptions: isServer
      ? { input: "src/entry-server.jsx" }
      : undefined,
  },
});
