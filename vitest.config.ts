// import { defineConfig } from 'vitest/config';

// export default defineConfig({
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: '@testing-library/jest-dom',
//     mockReset: true,
//   },
// });

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    mockReset: true,
  },
});