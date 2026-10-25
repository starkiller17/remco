import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    // Also prerender the catch-all route as 404.html, which Netlify serves
    // (with a real 404 status) for any unknown URL.
    includedRoutes: (paths) => [...paths, '/404'],
  },
});
