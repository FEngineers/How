var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var outputFilename = '/[name].js';

module.exports = {
  entry: {
    app: './js/test.js'
  },

  output: {
    path: './dist',
    filename: outputFilename
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
      { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
      {
        test: /\.svg$/,
        loaders: ['svg-sprite-loader?' + JSON.stringify({
          angularBaseWorkaround: true
        })]
      }
    ]
  },

  eslint: {
    failOnWarning: true
  }
};
