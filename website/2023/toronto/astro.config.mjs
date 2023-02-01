import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // base: "/2023/toronto/",
  base: "",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [],
});
