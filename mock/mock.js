const Express = require('express')
const port = 3000
const app = new Express()
const router = require('./routes')

app.use('/', router)

app.listen(port, () => console.log(`mock server is running at port ${port}!`))