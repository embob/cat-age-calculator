const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    library: {
      name: 'catCalculator',
      type: 'umd',
    },
    globalObject: 'this',
  },
};