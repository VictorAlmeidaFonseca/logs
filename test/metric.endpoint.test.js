const supertest = require('supertest')
const mockInsert = require('../mocks/insert-leastic.json')
const app = require('../src/app')

describe("Test app elastic Endpoint", () => {
    let request
    let server

    beforeAll((done) => {
       server = app.listen(done)
       request = supertest.agent(server)
    })

    test("It should POST new data at Elastic", async () => {
      const index = `mock-insert`
      const body = mockInsert
      const response = await request.post(`/v1/insert/${index}`).send(body);
       expect(response.statusCode).toEqual(200)    
    });

    afterAll(done => server.close(done))

  });
  