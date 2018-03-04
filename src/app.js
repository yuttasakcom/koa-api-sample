// Application
const Koa = require('koa')
const app = new Koa()

// Middleware
const { responseTime, logger, ratelimit } = require('./middleware')(app)
logger()
ratelimit()
responseTime() // defualt = millisecond, 's' = second

// Routes
require('./routes')(app)

module.exports = app
