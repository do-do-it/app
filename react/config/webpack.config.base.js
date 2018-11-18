const path = require('path')
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')
const utils = require('./utils')

const webpackConfig = {
	entry: {
		app: [
			path.resolve(__dirname, `../${utils.project}/index.js`)
		]
	},
	plugins: [

	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(less|css)$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							minimize: true
						}
					},
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10240
				}
			},
		]
	},
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {
			'libs': path.join(__dirname, '../libs/'),
			'http': path.join(__dirname, `../${utils.project}/http/`),
			'components': path.join(__dirname, `../${utils.project}/components/`),
			'styles': path.join(__dirname, `../${utils.project}/components/styles/`),
			'containers': path.join(__dirname, `../${utils.project}/containers/`)
		}
	}
}

module.exports = webpackConfig
