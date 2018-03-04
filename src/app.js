// Application
const Koa = require('koa')
const app = new Koa()

// Middleware
const { responseTime, logger } = require('./middleware')(app)
responseTime() // defualt = millisecond, 's' = second
logger()

// Routes
require('./routes')(app)

module.exports = app
