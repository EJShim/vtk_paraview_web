const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./node_modules/paraviewweb/config/webpack.loaders.js');
const plugins = [
  new HtmlWebpackPlugin({
    template:'./src/index.html'
  }),
];

const entry = path.join(__dirname, './src/index.js');
const outputPath = path.join(__dirname, './dist');
const styles = path.resolve('./node_modules/paraviewweb/style');

module.exports = {
  plugins,
  entry,
  output: {
    path: outputPath,
    filename: 'build.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
     { test: entry, loader: "expose-loader?build" },
    ].concat(rules),
  },
  resolve: {
    alias: {
      PVWStyle: styles,
    },
  },
  devServer: {
    contentBase: './dist/',
    port: 8888,
  },
};