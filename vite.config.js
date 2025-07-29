import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Git_Actions/', // ✅ Match your GitHub repo name exactly
  plugins: [react()],
})
