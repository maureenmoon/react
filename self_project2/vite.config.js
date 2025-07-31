import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      // "/api/content": {
      //   target: "http://localhost:8080",
      //   changeOrigin: true,
      // },
      // "/api/courses": {
      //   target: "http://localhost:8080",
      //   changeOrigin: true,
      // },
      // "/api/course_comments": {
      //   target: "http://localhost:8080",
      //   changeOrigin: true,
      // },
      // "/api/course_likes": {
      //   target: "http://localhost:8080",
      //   changeOrigin: true,
      // },
      // "/api/members": {
      //   target: "http://localhost:8080",
      //   changeOrigin: true,
      // },
    },
  },
});
