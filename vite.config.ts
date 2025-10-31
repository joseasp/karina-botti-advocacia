import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    try {
      const { componentTagger } = await import("lovable-tagger");
      plugins.push(componentTagger());
    } catch {
      console.warn("lovable-tagger not installed; skipping component tagging.");
    }
  }

  return {
    base: command === "build" ? "/karina-botti-advocacia/" : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
