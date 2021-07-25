import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  base: '/erp-mctr-final/',
  // base: '/',
  // plugins: [reactRefresh(), pluginRewriteAll()]
  plugins: [pluginRewriteAll()]
})