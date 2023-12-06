import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("pn-"),
        },
      },
    }),
    visualizer({ template: "treemap" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      pn: fileURLToPath(
        new URL(
          "./node_modules/@postnord/web-components/components",
          import.meta.url,
        ),
      ),
    },
  },
});
