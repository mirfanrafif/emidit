import { fileURLToPath } from 'node:url';
import { extname, relative } from 'path';

import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/lib/**/*'],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'date-fns',
        'react-hook-form',
        '@storybook/test',
        '@storybook/react',
      ],
      input: Object.fromEntries(
        glob.sync('src/lib/**/*.{ts,tsx}').map((file) => [
          // The name of the entry point
          // src/lib/nested/foo.ts becomes nested/foo
          relative(
            'src/lib',
            file.slice(0, file.length - extname(file).length),
          ),
          // The absolute path to the entry file
          // src/lib/nested/foo.ts becomes /project/src/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name]-[hash][extname]';
          }

          if (/\.(s?css)$/.test(name ?? '')) {
            return 'styles/[name][extname]';
          }

          return 'raw/[name][extname]';
        },
        entryFileNames: '[name].js',
      },
    },
  },
});
