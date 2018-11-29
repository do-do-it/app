const webpack = require('webpack')
const path = require('path')
const entry = require('./entry')
const env = require('./env')[process.env.NODE_ENV]

const config = {
  mode: env.mode,
  entry: entry.entries(),
  stats: 'errors-only',
  output: {
    path: env.dist,
    filename: '[name].js',
    publicPath: env.publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader']
      },
      {
        test: /\.(json)$/,
        use: ['json-loader']
      },
      {
        test: /\.(png|jpg|mp4|mp3)$/,
        exclude: /node_modules/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      PIXI: 'pixi.js'
    })
  ].concat(entry.pages()),
  resolve: {
    extensions: ['.js', '.less'],
    alias: {
      'src': path.resolve(__dirname, '../src/'),
      'static': path.resolve(__dirname, '../static/')
    }
  }
}

module.exports = config