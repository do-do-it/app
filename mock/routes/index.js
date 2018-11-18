const Express = require('express')
const router = Express.Router()
const fs = require('fs')
const path = require('path')

router.use('/', (req, res) => {
  const fileJsPath = '../api' + req.path + '.js'
  const fileJsonPath = '../api' + req.path + '.json'
  const isExists = fs.existsSync(path.join(__dirname, fileJsPath))
  if (fs.existsSync(path.join(__dirname, fileJsPath))) {
    res.json(require(fileJsPath)(req.query))
  } else if (fs.existsSync(path.join(__dirname, fileJsonPath))) {
    res.json(require(fileJsonPath))
  } else {
    console.log(req.path + ': Non existent access address')
    res.json(require(path.join(__dirname, '../api/default.json')))
  }
})

module.exports = router