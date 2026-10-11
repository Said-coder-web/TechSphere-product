import react, {reactCompilerPreset} from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import {defineConfig} from "vite";
import tailwindcss from "@tailwindcss/vite";
import dns from 'node:dns'

dns.setDefaultResultOrder('ipv4first')

// https://vite.dev/config/
export default defineConfig(({command}) => ({
  plugins: [react(), tailwindcss(), babel({presets: [reactCompilerPreset()]})],
  base: command === 'build' ? '/TechSphere-product/' : '/',
  server: {
    port: 4000,
  },
}));
