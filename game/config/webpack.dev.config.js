const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const htmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const merge = require('webpack-merge')
const path = require('path')
const env = require('./env')[process.env.NODE_ENV]

const config = merge(baseConfig, {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../'),
    host: env.ip,
    port: env.port,
    stats: 'errors-only',
    open: false
  },
  plugins: [
    new htmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config