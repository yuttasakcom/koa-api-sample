/* global describe it */
const request = require('supertest')

const server = require('../src/server')

describe('routes: /api', () => {
  it('should return Get Api body', done => {
    request(server)
      .get('/api')
      .expect('Get Api')
      .end(done)
  })
})
