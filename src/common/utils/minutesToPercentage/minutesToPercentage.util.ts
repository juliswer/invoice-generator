export const minutesToPercentage = (minutes: number) => {
  const numberWithExtraDecimals = (minutes * 100) / 6000
  const numberWithoutExtraDecimals = String(numberWithExtraDecimals).substring(
    0,
    5
  )

  return Number(numberWithoutExtraDecimals)
}
