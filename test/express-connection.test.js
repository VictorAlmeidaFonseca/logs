const supertest = require('supertest')
const app = require('../src/app')

describe("Test the root connection", () => {
    let request
    let server

    beforeAll((done) => {
       server = app.listen(done)
       request = supertest.agent(server)
    })

    test("It should response the GET method", async () => {
      const response = await request.get("/v1/test");
      expect(response.statusCode).toBe(200);
    });

    afterAll(done => server.close(done))

  });
  
