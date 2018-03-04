const responseTime = require('./responseTime')
const logger = require('./logger')

const middleware = app => ({
  responseTime: responseTime(app),
  logger: logger(app)
})

module.exports = middleware
