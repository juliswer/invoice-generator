export const getPercentage = (amount: number, percentage: number): number => {
  const totalPercentage = ((amount / 100) * percentage).toFixed(2)

  return Number(totalPercentage)
}
