import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'http://https://real-time-chat-app-13d6.onrender.com:4004',
        secure:false
      }
    }
  }
})
