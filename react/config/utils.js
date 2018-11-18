const project = process.argv[4] || 'demo'
const path = require('path')

module.exports = {
  dist: path.resolve(__dirname, '../../' + project),
  project: project,
  port: 9000,
  publicPath: process.env.NODE_ENV === 'develop' ? '/' : `//partyjo.nextdog.cc/${project}/`
}