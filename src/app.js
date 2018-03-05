// Application
const Koa = require('koa')
const app = new Koa()

// Middleware
const { responseTime, logger, ratelimit } = require('./middleware')(app)
ratelimit()
responseTime()
logger()

// Routes
require('./routes')(app)

module.exports = app
