import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static"; // <-- adaptador estático

export default defineConfig({
  adapter: vercel(),
  site: "https://toastro.vercel.app",
});
