const mockInsert = require('../mocks/insert-leastic.json')
const elasticClient = require('../src/config/elastic')

describe('I should connect at elastic instance', () => {
  test('Create a mock index', async () => {
    const response = await elasticClient().index({
        index: `mock-insert`,
        type: `mock-insert`,
        body:  mockInsert
    })
    expect(response.result).toEqual('created')    
  })
})