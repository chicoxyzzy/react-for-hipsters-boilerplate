'use strict';

var version = require('./package.json').version;
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '/scripts/bundle.[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      APP_VERSION: JSON.stringify(version)
    }),
    new ExtractTextPlugin('/styles/styles.[contenthash].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src/scripts'),
        query: {
          stage: 2,
          optional: ['es7.classProperties'],
          loose: 'all'
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?minimize!postcss'),
        include: [
          path.join(__dirname, 'src/styles'),
          path.join(__dirname, 'node_modules/normalize.css')
        ]
      },
      {
        test: /\.png$/,
        loader: 'url?name=img/[name].[ext]&mimetype=image/png',
        include: path.join(__dirname, 'src/images')
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff',
        include: path.join(__dirname, 'src/fonts')
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=/fonts/[name].[ext]',
        include: path.join(__dirname, 'src/fonts')
      }
    ],
    postcss: function () {
      return [autoprefixer({browsers: ['last 2 versions']})];
    }
  }
};
