import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use the `mode` provided by Vite instead of process.env
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: isProd
            ? "https://keepify-ioft.vercel.app" // production (Vercel)
            : "http://localhost:5001", // development (local backend)
          changeOrigin: true,
          secure: isProd, // true only in prod
        },
      },
    },
  };
});
