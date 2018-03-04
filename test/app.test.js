/* global describe it */
const request = require('supertest')
const expect = require('expect')

const server = require('../src/server')

describe('routes: /api', () => {
  it('should respond as expected', async () => {
    const response = await request(server).get('/api')
    expect(response.status).toEqual(200)
  })
})
