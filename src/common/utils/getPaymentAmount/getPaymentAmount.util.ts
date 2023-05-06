import { RateFormType } from '../../types/RateForm.type'
import { minutesToPercentage } from '../minutesToPercentage/minutesToPercentage.util'

export const getPaymentAmount = (rateFormData: RateFormType) => {
  const { hours, minutes, rate } = rateFormData

  const minutesInPercentage = minutesToPercentage(minutes)
  const percentage: number = +hours + +minutesInPercentage
  const finalAmount = Number((rate * percentage).toFixed(2))

  return finalAmount
}
