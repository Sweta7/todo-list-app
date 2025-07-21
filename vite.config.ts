import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://0z1jj2nj-3000.aue.devtunnels.ms/",
        changeOrigin: true,
      },
    },
  },
});
