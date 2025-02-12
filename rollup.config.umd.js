export default [
  {
    input: 'src/index.js',
    output: {
      name: 'nonbreaking-spaces',
      file: 'lib/index.umd.js',
      format: 'umd'
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.cjs',
      format: 'cjs'
    }
  }
];
