import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'components': resolve(__dirname, './src/components'),
      'containers': resolve(__dirname, './src/containers'),
      'store': resolve(__dirname, './src/store'),
      'lib': resolve(__dirname, './src/lib'),
      'actions': resolve(__dirname, './src/actions'),
      'reducers': resolve(__dirname, './src/reducers')
    }
  },
  define: {
    'global': {},
  },
  optimizeDeps: {
    include: [
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      '@react-three/rapier',
      '@pmndrs/xr',
      '@react-three/uikit',
      '@react-three/uikit-default'
    ],
    exclude: ['three-to-cannon'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'aframe': ['aframe'],
          'three': ['three'],
          'react-vendor': ['react', 'react-dom']
        }
      }
    }
  }
})