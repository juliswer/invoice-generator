import { minutesToPercentage } from './minutesToPercentage.util'

describe('When minutesToPercentage util is called', () => {
  const expected = 0.5
  const minutes = 30

  it('and is succesfully', () => {
    const result = minutesToPercentage(minutes)

    expect(result).toBe(expected)
  })
})
