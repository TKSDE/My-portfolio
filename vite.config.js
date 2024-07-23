// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//     build: {
//         chunkSizeWarningLimit: 100000000
//     },
//     base: "/3d-react-portfolio",
// })
// import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';

// // export default defineConfig({
// //   plugins: [react()],
// // });
// export default defineConfig({
//   build: {
//     outDir: 'build',
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    __DEFINES__: {}, // Yahan par apne build-specific constants define karein agar zarurat ho
  },
  build: {
    outDir: 'build',
  },
});
