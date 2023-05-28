import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPercentage } from '@/common/utils/getPercentage/getPercentage.util'

export const calculatePercentage = createAsyncThunk<
  { percentage: number; finalAmount: number },
  { percentage: number; amount: number }
>('app/calculatePercentage', ({ amount, percentage }) => {
  const totalPercentage: number = getPercentage(amount, percentage)
  const finalAmount: number = Number(amount) + totalPercentage

  return {
    percentage: totalPercentage,
    finalAmount
  }
})
