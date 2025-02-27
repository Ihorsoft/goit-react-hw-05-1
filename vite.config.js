import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh({
      excludeExports: ["mapStateToProps", "mapDispatchToProps"],
    }),
  ],
  build: {
    sourcemap: true,
  },
});
