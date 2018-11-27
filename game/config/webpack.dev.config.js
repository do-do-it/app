const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const htmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const merge = require('webpack-merge')
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
    contentBase: env.dist,
    port: env.port,
    open: false
  },
  plugins: [
    new htmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config