import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
    strictPort: true,
    allowedHosts: ["gen-ai-dashboard1.onrender.com"], // Allow your Render domain
  },
  preview: {
    port: 4173, // Preview mode
    allowedHosts: ["gen-ai-dashboard1.onrender.com"],
  },
});
