/* global describe it */
const request = require('supertest')
const expect = require('expect')

const server = require('../src/server')

describe('routes: /api', () => {
  it('should return Get Api body', async done => {
    const response = await request(server).get('/api')
    expect(response.status).toEqual(200)
    done()
  })
})
