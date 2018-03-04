// Application
const Koa = require('koa')
const app = new Koa()

// Middleware
const { responseTime, logger } = require('./middleware')(app)
responseTime() // defualt = millisecond, 's' = second
logger()

// Routes
app.use(async ctx => {
  ctx.body = 'Hello World'
})

module.exports = app
