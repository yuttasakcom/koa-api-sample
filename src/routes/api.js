const getApi = (ctx, next) => { ctx.body = 'Get Api' }
const getById = (ctx, next) => { ctx.body = `Get by id:${ctx.params.id}` }
const postApi = (ctx, next) => { ctx.body = 'Post Api' }

const adminRouter = router => router
  .get('/api', getApi)
  .get('/api/:id', getById)
  .post('/api', postApi)

module.exports = adminRouter
