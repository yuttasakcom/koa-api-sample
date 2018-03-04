// Application
const Koa = require('koa')
const app = new Koa()

// Middleware
const { responseTime, logger, ratelimit } = require('./middleware')(app)
responseTime() // defualt = millisecond, 's' = second
logger()
ratelimit()

// Routes
require('./routes')(app)

module.exports = app
