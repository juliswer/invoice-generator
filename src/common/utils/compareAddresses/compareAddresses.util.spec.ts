import { compareAddresses } from './compareAddresses.util'

describe('When compareAddresses util is called', () => {
  const addr1 = 'abc'
  const addr2 = 'abc'
  const addr3 = 'def'

  it('and is both of the addresses are the same', () => {
    const result = compareAddresses(addr1, addr2)

    expect(result).toBeTruthy()
  })

  it('and they are different addresses', () => {
    const result = compareAddresses(addr1, addr3)

    expect(result).toBeFalsy()
  })
})
