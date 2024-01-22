import wyw from '@wyw-in-js/rollup'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'

export default {
  // input: 'src/CmpA.tsx',
  input: 'src/CmpB.jsx',
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    entryFileNames: '[name].js',
  },
  plugins: [
    // ! If you comment the line below the build will pass
    typescript(),
    wyw({sourceMap: true}),
    css({output: 'style.css'}),
    babel(),
  ]
}
