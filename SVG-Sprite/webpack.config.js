var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var outputFilename = './[name].js';

var plugins = [
  new HtmlWebpackPlugin({
    filename: '../dist/index.html',
    template: './index.html'
  })
];

module.exports = {
  entry: {
    app: './app.js'
  },

  output: {
    path: './dist',
    filename: outputFilename
  },

  resolve: {
    root: [ path.resolve('./app') ],
    extensions: [ '', '.js' ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [ 'transform-runtime' ],
          presets: [ 'es2015', 'stage-0' ]
        }
      },
      {
        test: /\.svg$/,
        loaders: ['svg-sprite-loader?' + JSON.stringify({
          angularBaseWorkaround: true
        })]
      }
    ]
  },

  postcss: function () {
    return [
      require('precss')
    ]
  },

  eslint: {
    failOnWarning: true
  },

  plugins: plugins
};
