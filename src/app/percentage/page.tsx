'use client'

import PageTitle from '@/components/page-title/page-title'
import PercentageForm from '@/components/percentage-form/percentage-form'
import PercentageAmount from '@/components/percentageAmount/percentage-amount'
import { calculatePercentage } from '@/redux/features/app/actions/getPercentage/calculatePercentage/calculatePercentage'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useEffect } from 'react'

export default function Page() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(calculatePercentage({ amount: 0, percentage: 0 }))
  }, [])

  return (
    <div className="mt-3">
      <PageTitle title="Calculate a Percentage" />

      <div className="flex items-center justify-center">
        <PercentageForm />
      </div>
      <div className="flex items-center justify-center mt-5">
        <PercentageAmount />
      </div>
    </div>
  )
}
