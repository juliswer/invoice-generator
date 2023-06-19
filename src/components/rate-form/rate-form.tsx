'use client'

import { Button } from '../tailwind/Button'
import { useForm } from 'react-hook-form'
import { RateFormType } from '@/common/types/RateForm.type'
import { ErrorMessage } from '@hookform/error-message'
import { getPaymentAmount } from '@/common/utils/getPaymentAmount/getPaymentAmount.util'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { setPaymentAmount } from '@/redux/features/app/store/app.slice'
import { usdToArs } from '@/redux/features/app/actions/usdConverter/usdToArs/usdToArs'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'

export function RateForm() {
  const { isLoading } = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm<RateFormType>({
    defaultValues: {},
    criteriaMode: 'all'
  })

  const onSubmit = async (rateFormData: RateFormType) => {
    if (rateFormData.minutes === 0 && rateFormData.hours === 0) {
      if (rateFormData.minutes === 0) {
        setError('minutes', {
          message: 'Choose a valid time'
        })
      }
      if (rateFormData.hours === 0) {
        setError('hours', {
          message: 'Choose a valid time'
        })
      }
      return
    }

    const payment = getPaymentAmount(rateFormData)

    dispatch(setPaymentAmount(payment))

    if (payment) dispatch(usdToArs(payment))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full md:p-0 p-4 md:w-1/4 gap-5 mt-10"
    >
      <input
        type="number"
        className="input w-full"
        placeholder="Rate"
        {...register('rate', {
          required: 'Rate is required',
          min: {
            value: 1,
            message: 'You must enter a number higher or equal to 1'
          }
        })}
      />{' '}
      <ErrorMessage
        errors={errors}
        name="rate"
        render={({ message }) => <p className="text-red-600">{message}</p>}
      />
      <input
        type="number"
        placeholder="Hours"
        className="input w-full"
        {...register('hours', {
          required: 'Hours are required'
        })}
      />
      <ErrorMessage
        errors={errors}
        name="hours"
        render={({ message }) => <p className="text-red-600">{message}</p>}
      />
      <input
        type="number"
        placeholder="Minutes"
        className="input w-full"
        {...register('minutes', {
          required: 'Minutes are required',
          max: {
            value: 59,
            message: 'Enter a number lower than 60'
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="minutes"
        render={({ message }) => <p className="text-red-600">{message}</p>}
      />
      <Button
        color="primary"
        type="submit"
        size="lg"
        disabled={!isValid}
        extra={`${isLoading && 'loading'}`}
      >
        {isLoading ? 'Calculating' : 'Calculate'}
      </Button>
    </form>
  )
}
