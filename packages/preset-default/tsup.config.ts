import { Options } from 'tsup'

const config: Options = {
  splitting: false,
  format: ['esm', 'cjs'],
  entryPoints: [
    'src/index.ts',
  ],
  minify: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  clean: true,
  dts: true,
}

export default config