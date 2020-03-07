import babel from 'rollup-plugin-babel';

export default {
  input: "src/index.js",
  external: ["react", "react-router-dom"],
  output: [{
    format: 'es',
    file: 'es/index.js'
  }, {
    format: 'cjs',
    file: 'cjs/index.js'
  }],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
