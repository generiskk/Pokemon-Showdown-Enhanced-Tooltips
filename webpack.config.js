const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
  // Firefox build.
  {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist/firefox',
      filename: 'js/showPokemonTooltip.js',
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: 'src/firefox', to: '.' },
          { from: 'src/icons', to: 'icons' },
          { from: 'src/css', to: 'css' },
        ],
      }),
    ],
    watch: false,
  },
  // Chrome build
  {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist/chrome',
      filename: 'js/showPokemonTooltip.js',
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: 'src/chrome', to: '.' },
          { from: 'src/icons', to: 'icons' },
          { from: 'src/css', to: 'css' },
        ],
      }),
    ],
    watch: false,
  },
];
