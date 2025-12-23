import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }: { mode: string; command: unknown }) => {
  const env = loadEnv(mode, process.cwd());

  const appPort = parseInt(env.VITE_PORT, 10) || 3004;
  const appBase = env.VITE_ROUTER_BASE_URL || "/";
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      };
    },
    {} as Record<string, string>,
  );

  const appServer = `http://0.0.0.0:${appPort}`

  return {
    base: appBase,
    plugins: [react(), tsconfigPaths()],
    define: envWithProcessPrefix,
    publicDir: "public",
    server: {
      port: appPort,
      strictPort: true,
      host: true,
  origin: appServer,
      open: appBase,
      watch: {
        usePolling: true,
      },
    },
    build: {
      outDir: "build",
      chunkSizeWarningLimit: 1700,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("commonjsHelpers")) return "commonjsHelpers";
            if (id.includes("router")) return "route";
            if (id.includes("test")) return "jest";
            if (id.includes("icon")) return "image";
            if (id.includes("node_modules")) return "vendor";
          },
        },
      },
    },
  };
});
