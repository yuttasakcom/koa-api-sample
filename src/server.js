const http = require('http')
const app = require('./app')
const server = http.createServer(app.callback())
const port = process.env.PORT || '3000'
server.listen(port)
console.log(`Server is running on port: ${port}`)

module.exports = server
