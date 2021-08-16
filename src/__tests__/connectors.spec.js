import * as connectors from '..'
describe('connectors', () => {
  it('exposes aws connectors', () => {
    expect(connectors.AWS).toBeInstanceOf(Function)
  })
})
