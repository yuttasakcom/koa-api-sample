/* global describe it */
const request = require('supertest')
// const expect = require('expect')

const server = require('../src/server')

describe('routes: /api', () => {
  it('should return Get Api body', async done => {
    await request(server)
      .get('/api')
      .expect('Get Api')
    done()
  })
})
