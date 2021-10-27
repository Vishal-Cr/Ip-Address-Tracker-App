import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  external:{
    'react': 'React',
    'react-dom': 'ReactDOM',
    'material-ui': 'window["material-ui"]'
  }
}
)
