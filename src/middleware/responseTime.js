const responseTimeHandler = (app, t = 'ms', d = 1) => (
  app.use(async (ctx, next) => {
    const start = Date.now() / d
    await next()
    let ms = ((Date.now() / d) - start)
    if (ms.toString().length > 1) {
      ctx.set('X-Response-Time', `${ms.toFixed(3)}${t}`)
    } else {
      ctx.set('X-Response-Time', `${ms}${t}`)
    }
  })
)

const responseTime = app => timmer => {
  switch (timmer) {
    case 's':
      return responseTimeHandler(app, 's', 1000)

    default:
      return responseTimeHandler(app)
  }
}

module.exports = responseTime
