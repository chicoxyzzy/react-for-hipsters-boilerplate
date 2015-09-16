'use strict';

var version = require('./package.json').version;
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      },
      APP_VERSION: JSON.stringify(version)
    }),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      favicon: 'src/favicon.ico',
      title: 'App ' + version
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap&modules!postcss',
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules/normalize.css')
        ]
      },
      {
        test: /\.png$/,
        loader: 'url?.[ext]&mimetype=image/png',
        include: path.join(__dirname, 'src/images')
      },
      {
        test: /\.ico$/,
        loader: 'url?mimetype=image/x-icon',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&minetype=application/font-woff",
        include: path.join(__dirname, 'src/fonts')
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file",
        include: path.join(__dirname, 'src/fonts')
      }
    ],
    postcss: function () {
      return [autoprefixer({browsers: ['last 2 versions']})];
    }
  }
};