var webpack = require('webpack');
var isProduction = process.env.NODE_ENV == 'production';
var output = {
  path: './public/',
  publicPath: '/',
  filename: 'bundle.js'
};

var entry = !isProduction ? [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './src/entry.js'] : ['./src/entry.js'];

var modules = {
  loaders: [
    {
      test: /\.jsx?$/,
      loaders: isProduction ? ['babel'] : ['react-hot', 'babel'],
      exclude: /node_modules/,
    },
    { test: /\.scss$/, loader: "style!css!sass" }
  ]};



module.exports = {
  devtool:'inline-source-map',
  entry: entry,
  output: output,
  module: modules
};
