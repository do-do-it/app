const units = require('./units')
const port = '8001'
const path = require('path')
const ip = units.getIPAdress()

module.exports = {
  dev: {
    ip,
    port,
    dist: path.resolve(__dirname, '../dist/'),
    mode: 'development',
    proxy: 'http://192.168.64.68:5555',
    publicPath: `/`
  },
  prod: {
    mode: 'production',
    dist: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  }
}