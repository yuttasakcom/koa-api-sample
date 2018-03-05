/* global describe it */
const request = require('supertest')
const expect = require('expect')

const server = require('../src/server')

afterEach(() => {
  server.close()
})

describe('routes: /api', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/api')
    expect(response.status).toEqual(200)
  })
})
