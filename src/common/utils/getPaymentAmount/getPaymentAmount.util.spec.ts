import { getPaymentAmount } from './getPaymentAmount.util'

describe('When getPaymentAmount util is called', () => {
  const expected = 1834.16
  const rate = 10
  const hoursWorked = 183
  const minutesWorked = 25

  it('and is succesfully', () => {
    const result = getPaymentAmount({
      rate,
      hours: hoursWorked,
      minutes: minutesWorked
    })
    expect(result).toBe(expected)
  })
})
