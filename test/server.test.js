/* global describe it */
const request = require('supertest')

const server = require('../src/server')

describe('routes: /api', () => {
  it('should return Hello NODE ES6 response', done => {
    request(server)
      .get('/api')
      .expect('Get Api')
      .end(done)
  })
})
