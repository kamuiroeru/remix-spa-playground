import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${__dirname}/` },
      { find: '@/', replacement: `${__dirname}/app/` },
    ]
  },
  plugins: [
    tsconfigPaths(),
  ],
});
