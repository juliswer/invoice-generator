import { RateFormType } from '../types/RateForm.type'
import { minutesToPercentage } from './minutesToPercentage.util'

export const getPaymentAmount = (rateFormData: RateFormType) => {
  const { hours, minutes, rate } = rateFormData

  const minutesInPercentage = minutesToPercentage(minutes)
  const percentage: number = +hours + +minutesInPercentage

  return rate * percentage
}
