import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.js",
      name: "CurrencyBreakdown",
      fileName: "currency-breakdown-ui",
    },
  },
});
