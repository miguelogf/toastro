import { defineConfig } from "astro/config";
import path from "path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@ui": path.resolve("./src/components/ui"),
        "@sections": path.resolve("./src/components/sections"),
        "@data": path.resolve("./data"),
        "@layouts": path.resolve("./src/layouts"),
        "@utils": path.resolve("./src/utils"),
      },
    },
  },
});
