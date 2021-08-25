import * as connectors from '../src'
describe('connectors', () => {
  it('exposes aws connectors', () => {
    expect(connectors.AWS).toBeInstanceOf(Function)
  })
})
