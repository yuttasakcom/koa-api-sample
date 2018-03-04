const Router = require('koa-router')
const router = new Router()

require('./api')(router)

const routes = app => {
  app
    .use(router.routes())
    .use(router.allowedMethods())
}

module.exports = routes
