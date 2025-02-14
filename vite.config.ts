
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
  },
  optimizeDeps: {
    exclude: ['ts-node'],
    esbuildOptions: {
      tsconfig: 'tsconfig.json',
      tsconfigRaw: {
        compilerOptions: {
          // This will override any project references that might cause issues
          composite: false,
          incremental: false
        }
      }
    }
  }
}));
