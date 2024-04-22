import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/WhatsAppButtonWithPopup.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'WhatsAppButtonWithPopup', // Nome global que seu pacote irá expor
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser() // Minifica o bundle para produção
  ],
  // Certifique-se de que React e ReactDOM são tratados como externos e não incluídos no bundle
  external: ['react', 'react-dom']
};
