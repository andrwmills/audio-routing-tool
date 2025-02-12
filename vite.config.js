import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",  // 👈 Ensure Vite knows where the root folder is
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
});
import react from '@vitejs/plugin-react';
