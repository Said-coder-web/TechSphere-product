import react, {reactCompilerPreset} from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import {defineConfig} from "vite";
import tailwindcss from "@tailwindcss/vite";
import dns from 'node:dns'

dns.setDefaultResultOrder('ipv4first')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), babel({presets: [reactCompilerPreset()]})],
  server: {
    port: 4000,
    // proxy: {
    //   '/api': {
    //     target: 'https://api.mobileapi.dev',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
});
