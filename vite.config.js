import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  base: '/erp-mctr-final/', //comentar para desarrollo
  plugins: [reactRefresh()]
})