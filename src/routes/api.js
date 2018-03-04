// Auth middleware
const auth = require('../middleware/authentication')

const getApi = (ctx) => { ctx.body = 'Get Api' }
const getById = (ctx) => { ctx.body = `Get by id:${ctx.params.id}` }
const postApi = (ctx) => { ctx.body = 'Post Api' }

const adminRouter = router => router
  .get('/api', auth('token'), getApi)
  .get('/api/:id', auth('token'), getById)
  .post('/api', postApi)

module.exports = adminRouter
