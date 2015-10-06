'use strict';

var version = require('./package.json').version;
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      APP_VERSION: JSON.stringify(version)
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
          loose: 'all',
          plugins: ['react-transform'],
          extra: {
            'react-transform': {
              'transforms': [
                {
                  'transform': 'react-transform-hmr',
                  'imports': ['react'],
                  'locals': ['module']
                }, {
                  'transform': 'react-transform-catch-errors',
                  'imports': ['react', 'redbox-react']
                }
              ]
            }
          }
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: [
          path.join(__dirname, 'src/styles'),
          path.join(__dirname, 'node_modules/normalize.css')
        ]
      },
      {
        test: /\.png$/,
        loader: 'url?.[ext]&mimetype=image/png',
        include: path.join(__dirname, 'src/images')
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
        include: path.join(__dirname, 'src/fonts')
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
        include: path.join(__dirname, 'src/fonts')
      }
    ],
    postcss: function () {
      return [autoprefixer({browsers: ['last 2 versions']})];
    }
  }
};