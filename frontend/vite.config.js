import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
console.log('Vite config is loading...');
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target: "http://localhost:8000"
      }
    }
  }
})
