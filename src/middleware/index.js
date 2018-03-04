const responseTime = require('./responseTime')
const logger = require('./logger')
const ratelimit = require('./ratelimit')

const middleware = app => ({
  responseTime: responseTime(app),
  logger: logger(app),
  ratelimit: ratelimit(app)
})

module.exports = middleware
