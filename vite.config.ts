import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://linktowebsite.com",
      dynamicRoutes: ["/", "/about"],
      // add more routes in the dynamic routes array
    }),
  ],
});
