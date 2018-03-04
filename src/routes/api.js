const getApi = (ctx) => { ctx.body = 'Get Api' }
const getById = (ctx) => { ctx.body = `Get by id:${ctx.params.id}` }
const postApi = (ctx) => { ctx.body = 'Post Api' }

const adminRouter = router => router
  .get('/api', getApi)
  .get('/api/:id', getById)
  .post('/api', postApi)

module.exports = adminRouter
