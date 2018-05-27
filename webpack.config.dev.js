const path = require('path');
const baseConfig = require('./webpack.config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV;

const config = {
  entry: {
    'core.demo': './examples/core/index.ts',
    'react.demo': './examples/ReactUI/src/index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/core/index.html',
      chunks: ['core.demo'],
      filename: 'core.html'
    }),
    new HtmlWebpackPlugin({
      template: './examples/ReactUI/index.html',
      chunks: ['react.demo'],
      filename: 'react.html'
    }),
    ...baseConfig.plugins
  ],
  module: {
    rules: [
      ...baseConfig.module.rules
    ]
  },
  // sourcemap
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    disableHostCheck: true
  },
  externals: {}
};

module.exports = {
    ...baseConfig,
    ...config
};