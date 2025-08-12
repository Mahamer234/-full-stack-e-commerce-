import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/Pages/"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react(), svgr()],
});
