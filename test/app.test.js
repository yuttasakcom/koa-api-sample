/* global describe it */
const request = require('supertest')

const server = require('../src/server')

describe('routes: /api', () => {
  it('should respond as expected', (done) => {
    request(server)
      .get('/api')
      .expect('Get Api')
      .end(done)
  })
})
