'use client'

import { percentageForm } from '@/common/types/percentageForm.type'
import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
import { Button } from '../tailwind/Button'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { calculatePercentage } from '@/redux/features/app/actions/getPercentage/calculatePercentage/calculatePercentage'

export default function PercentageForm() {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.app)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm<percentageForm>({
    defaultValues: {},
    criteriaMode: 'all'
  })

  const onSubmit = ({ amount, percentage }: percentageForm) => {
    dispatch(calculatePercentage({ amount, percentage }))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full md:p-0 p-4 md:w-1/4 gap-5 mt-10"
    >
      <div className="flex w-full gap-4 items-center">
        <div>
          <input
            type="number"
            className="input w-full"
            step={0.01}
            placeholder="Percentage"
            {...register('percentage', {
              required: 'Percentage is required',
              min: {
                value: 1,
                message: 'You must enter a number higher or equal to 1'
              }
            })}
          />{' '}
          <ErrorMessage
            errors={errors}
            name="percentage"
            render={({ message }) => <p className="text-red-600">{message}</p>}
          />
        </div>
        <span className="text-lg font-extrabold">OF</span>
        <div>
          <input
            type="number"
            className="input w-full"
            placeholder="Amount"
            {...register('amount', {
              required: 'Amount is required',
              min: {
                value: 1,
                message: 'You must enter a number higher or equal to 1'
              }
            })}
          />{' '}
          <ErrorMessage
            errors={errors}
            name="percentage"
            render={({ message }) => <p className="text-red-600">{message}</p>}
          />
        </div>
      </div>
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
