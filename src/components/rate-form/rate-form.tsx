'use client'

import { Button } from '../tailwind/Button'
import { useForm } from 'react-hook-form'
import { RateFormType } from '@/common/types/RateForm.type'
import { ErrorMessage } from '@hookform/error-message'
import { getPaymentAmount } from '@/common/utils/getPaymentAmount.util'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { setPaymentAmount } from '@/redux/features/app/store/app.slice'

export function RateForm() {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid }
  } = useForm<RateFormType>({
    defaultValues: {},
    criteriaMode: 'all'
  })

  const onSubmit = async (rateFormData: RateFormType) => {
    const payment = getPaymentAmount(rateFormData)

    dispatch(setPaymentAmount(payment))
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
          required: 'Rate is required'
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
      <Button color="success" type="submit" size="lg" disabled={!isValid}>
        Calculate
      </Button>
    </form>
  )
}
